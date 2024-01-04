<template>
  <h1>Files</h1>
  <div>
    <header>
      <button @click="goUp" :disabled="path === ''">Back</button>
      <input type="text" v-model="path" placeholder="Path">
      <button class="btn-flat" @click="createFolder">Create Folder</button>
      <!-- File upload input -->
      <button @click="uploadSingleFile">Upload File</button>
      <button @click="uploadDirectory">Upload Directory</button>
      <p v-if="uploadingFile">Uploading: {{ uploadingFile }}</p>
      <input type="file" id="fileInput" @change="handleUpload" style="display: none">
      <input type="file" id="directoryInput" webkitdirectory @change="handleUpload" style="display: none">
    </header>
    <main>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Name</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, key) in files" :key="key" @dblclick="openAction(key, item)">
            <td>{{ item.type }}</td>
            <td>
              <input type="text" :value="item.path.replace(this.path, '')" @change="ev => renameItem(item.path, ev.target.value)">
            </td>
            <td>{{ item.type === 'directory' ? '-' : item.size}}</td>
            <td><button @click="deleteItem(item.path)">Delete</button></td>
            <td><button @click="downloadItem(item)">Download</button></td>
          </tr>
        </tbody>
      </table>
    </main>
  </div>
</template>


<script>
import { defineComponent } from 'vue';
import fileService from '@/services/fileService';

export default defineComponent({
  name: 'FilesView',
  data() {
    return {
      path: '',
      files: [],
      uploadingFile: null,
    };
  },
  methods: {
    openAction: function (name, item) {
      if (item.type === 'directory') {
          this.path = item.path;
          this.fetchFiles();
      }
    },
    fetchFiles() {
      fileService.getFiles(this.path)
        .then(response => {
          this.files = response.data;
        })
        .catch(error => {
          console.error("Error fetching files:", error);
        });
    },
    goUp() {
      let pathParts = this.path.trimEnd('/').split('/').filter(Boolean);
      pathParts.pop();
      this.path = pathParts.join('/');
      if (this.path != '') {
        this.path = this.path + '/';
      }
      this.fetchFiles();
    },
    createFolder() {
      fileService.createFolder(this.path + 'new')
        .then(() => {
          this.fetchFiles();
        });
    },
    uploadSingleFile() {
      document.getElementById('fileInput').click();
    },
    uploadDirectory() {
      document.getElementById('directoryInput').click();
    },
    handleUpload(event) {
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        this.uploadFile(file, this.path);
      }
    },
    uploadFile(file, path) {
      this.uploadingFile = file.name;
      let formData = new FormData();
      formData.append('file', file);
      return fileService.uploadFile(path, formData)
      .then(() => {
        this.fetchFiles();
        this.uploadingFile = null;
      })
      .catch(error => {
        console.error("Error uploading file:", error);
        this.uploadingFile = null;
      });
    },
    downloadItem(item) {
      fileService.downloadItem(item);
    },
    deleteItem(path) {
      fileService.deleteItem(path)
        .then(() => {
          this.fetchFiles();
        });
    },
    renameItem(path, newName) {
      let newPath = this.path.trimEnd("/") + '/' + newName;
      fileService.renameItem(path, newPath)
        .then(() => {
          this.fetchFiles();
        });
    },
  },
  mounted() {
    this.fetchFiles();
  }
})
</script>