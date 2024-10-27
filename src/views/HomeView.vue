<template>
  <section>
    <header>
      <h1>Welcome to DECODE Cloud</h1>
    </header>

    <div v-if="isLoggedIn" id="logout">
      
      <section id="how-to-use">
        <h2>How to Use</h2>
        
        <!-- General Subsection -->
        <section id="general">
          <h3>General</h3>
          <p>
            Under <router-link to="/files">Files</router-link> you can up- and download files.
            Navigate around the filesystem by double-clicking on folders and using the "Back" button.
            Alternatively, you can use the "Path" input field to jump to a specific location.
            <br>
            You can create folders and upload files/folders using the corresponding buttons.
            You can rename them by clicking on the file/folder name.
            Please note that folder names must end with a "/".
            To download or delete a file/folder, click on the corresponding buttons next to the file name.
            <br>
            The highest-level folder structure is fixed as follows:
            <ul>
              <li>"artifact/" contains job artifacts (e.g. trained ML models)</li>
              <li>"config/" contains configuration files (e.g. hyperparameters). A job will get all the configuration from a single folder.</li>
              <li>"data/" contains data files (e.g. training data). Take care to put files in folders, as you will need to specify folders to put the data from for each job.</li>
              <li>"log/" contains job logging data. This will be periodically cleaned up.</li>
              <li>"output/" contains job output data that are not artifacts or logs.</li>
            </ul>
          </p>
          <p>
            Under the <router-link to="/jobs">Jobs</router-link> tab, you can view your jobs and send new ones.
            You can expand on a job's details and delete them.
            Please note that deleting a job will also delete all its outputs.
            Deleting a running job will stop it first.
          </p>
          <p>
            Under the <router-link to="/profile">Profile</router-link> tab, you can view your profile.
          </p>
        </section>
        
        <section id="decode">
          <h3>Decode</h3>
          
          <section id="train">
            <h4>Train</h4>
            <p>TODO</p>
          </section>
          
          <section id="fit">
            <h4>Fit</h4>
            <p>TODO</p>
          </section>
        </section>
      <p id="files">Click <router-link to="/files">here</router-link> to view your files.</p>
      <p id="jobs">Click <router-link to="/jobs">here</router-link> to view your jobs.</p>
      <p id="profile">Click <router-link to="/profile">here</router-link> to view your profile.</p>
      </section>
    </div>

    <p v-else>
      <span><router-link to="/register">Register</router-link></span>
      <span> or </span>
      <span><router-link to="/login">Log In</router-link></span>
      Please note that registration requires confirmation by an administrator, so you will not be able to use DECODE Cloud immediately.
      We apologize for this delay that is necessary to avoid abuse of the system and thank you for your understanding.
    </p>

  </section>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  computed : {
    isLoggedIn: function() {
      return this.$store.getters.isAuthenticated;
    }
  },
});
</script>
