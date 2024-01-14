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
      <input type="file" id="directoryInput" webkitdirectory multiple @change="handleUpload" style="display: none">
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
  <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
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
      errorMessage: '',
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
          this.errorMessage = "Error fetching files: " + error.message;
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
        })
        .catch(error => {
          this.errorMessage = "Error creating folder: " + error.message;
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
        let relativePath = file.webkitRelativePath || file.name;
        let pathArray = relativePath.split('/');
        pathArray.pop(); // Remove the file name
        let folderPath = pathArray.join('/') + '/';
        this.uploadFile(file, this.path + folderPath);
      }
    },
    uploadFile(file, path) {
      this.uploadingFile = file.name;
      let formData = new FormData();
      formData.append('file', file);
      fileService.uploadFile(path, formData)
      .then(() => {
        this.fetchFiles();
        this.uploadingFile = null;
      })
      .catch(error => {
        this.uploadingFile = null;
        this.errorMessage = "Error uploading: " + error.message;
      });
    },
    downloadItem(item) {
      fileService.downloadItem(item)
        .catch(error => {
          this.errorMessage = "Error downloading: " + error.message;
        });
    },
    deleteItem(path) {
      fileService.deleteItem(path)
        .then(() => {
          this.fetchFiles();
        })
        .catch(error => {
          this.errorMessage = "Error deleting: " + error.message;
        });
    },
    renameItem(path, newName) {
      let newPath = this.path.trimEnd("/") + '/' + newName;
      fileService.renameItem(path, newPath)
        .then(() => {
          this.fetchFiles();
        })
        .catch(error => {
          this.errorMessage = "Error renaming: " + error.message;
        });
    },
  },
  mounted() {
    this.fetchFiles();
  }
})
</script>

<style>
.error-message {
  color: red;
}
</style>
