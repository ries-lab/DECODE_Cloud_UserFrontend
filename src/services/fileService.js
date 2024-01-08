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
        let resp = await axios.post(`/files/${path}url`)
        let data = new FormData();
        if ('key' in resp.data['data']) {
            data.append('key', resp.data['data']['key']);
        }
        for (let key in resp.data['data']) {
            if (key !== 'key') {
                data.append(key, resp.data['data'][key]);
            }
        }
        for (let pair of formData.entries()) {
            data.append(pair[0], pair[1]);
        }
        return await axios.post(resp.data.url, data, {headers: resp.data.headers || {}});
    },
    async deleteItem(path) {
        return await axios.delete(`/files/${path}`);
    },
    async renameItem(path, newPath) {
        return await axios.put(`/files/${path}`, {"path": newPath});
    },
    async downloadFile(path) {
        let resp = await axios.get(`/files/${path}/url`);
        return await axios.get(resp.data.url, {headers: resp.data.headers || {}});
    },
    async downloadItem(item) {
        const path = item.path;
        if (item.type === 'directory') {
            let zip = new JSZip();
            let files = await axios.get(`/files/${path}`, {params: {show_dirs: false, recursive: true}});
            for (let file of files.data) {
                let fileData = await this.downloadFile(file.path);
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
            let resp = await this.downloadFile(path);
            const url = window.URL.createObjectURL(new Blob([resp.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', path.split('/').pop());
            document.body.appendChild(link);
            link.click();
        }
    },
};
