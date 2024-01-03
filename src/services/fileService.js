import axios from 'axios';
import JSZip from 'jszip';

export default {
    async getFiles(path) {
        path = path || '/';
        return await axios.get(`/files/${path}?show_dirs=True&recursive=False`);
    },
    async createFolder(path) {
        return await axios.post(`/files/${path}/`);
    },
    async uploadFile(path, formData) {
        // TODO: do stuff via presigned url
        // let resp = await axios.post(`/files/${path}url`)
        // if ('data' in resp) {
        //     for (let key in resp['data']) {
        //         formData.append(key, resp['data'][key]);
        //     }
        // }
        // return await axios.post(resp.url, formData, {headers: resp['headers']});
        // This requires CORS rule on S3 bucket
        // [
        //     {
        //         "AllowedHeaders": ["*"],
        //         "AllowedMethods": ["GET", "PUT", "POST", "DELETE", "HEAD"],
        //         "AllowedOrigins": ["url"],
        //         "ExposeHeaders": []
        //     }
        // ]
        return await axios.post(`/files/${path}upload`, formData);
    },
    async deleteItem(path) {
        return await axios.delete(`/files/${path}`);
    },
    async renameItem(path, newPath) {
        return await axios.put(`/files/${path}`, {"path": newPath});
    },
    async downloadFile(item) {
        // TODO: do stuff via presigned url (see uploadFile)
        const path = item.path;
        if (item.type === 'directory') {
            let zip = new JSZip();
            let files = await axios.get(`/files/${path}`, {params: {show_dirs: false, recursive: true}});
            for (let file of files.data) {
                let fileData = await axios.get(`/files/${file.path}/download`, { responseType: 'arraybuffer' });
                zip.file(file.path.replace(item.path, ''), fileData.data);
            }
            let content = await zip.generateAsync({type:"blob"});
            const url = window.URL.createObjectURL(content);
            const link = document.createElement('a');
            link.href = url;
            let path_parts = path.split('/');
            link.setAttribute('download', path_parts[path_parts.length - 2] + '.zip');
            document.body.appendChild(link);
            link.click();
        }
        else {
            let resp = await axios.get(`/files/${path}/download`);
            const url = window.URL.createObjectURL(new Blob([resp.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', path.split('/').pop());
            document.body.appendChild(link);
            link.click();
        }
    },
};
