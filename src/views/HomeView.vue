<template>
  <section>
    <header>
      <h1>Welcome to DECODE-OpenCloud</h1>
    </header>

    <div>
      <section id="how-to-use">
        <h2>How to Use</h2>
        <section id="register_login">
          <h3>Registration and Login</h3>
          <p>
            Before using DECODE-OpenCloud, registration is required.
            In addition, registration requires confirmation by an administrator, which might induce a small delay.
            We apologize for this delay that is necessary to avoid abuse of our system.
          </p>
        </section>

        <!-- General Subsection -->
        <section id="general">
          <h3>General</h3>
          <p>
            At <router-link to="/files">Files</router-link> you can up- and download files.
            Navigate around the filesystem by double-clicking on folders and using the "Back" button.
            Alternatively, you can use the "Path" input field to jump to a specific location.
          </p>
          <p>
            You can create folders and upload files/folders using the corresponding buttons.
            You can rename them by clicking on the file/folder name.
            Please note that folder names must end with a "/".
            To download or delete a file/folder, click on the corresponding buttons next to the file name.
          </p>
          <p>
            The top-level folder structure is fixed as follows:
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
          <h3>DECODE</h3>

          DECODE is a deep learning tool for single molecule localization microscopy.
          You can read more about it <a href="https://decode.readthedocs.io/en/release-0.10/index.html" target="_blank">here</a>.

          <section id="train">
            <h4>Train</h4>
            <p>
              To train a DECODE model, you need to provide a configuration file and a bead calibration file.
              You can download example data <a href="https://oc.embl.de/index.php/s/Abn8nSMlOqvKeHC/download" target="_blank">here</a>.
              Then:
              <ol>
                <li>Upload the input files (go to the <router-link to="/files">Files</router-link> tab)</li>
                <ul>
                  <li>The bead calibration file in a subfolder (e.g. "test_decode/") of "data/"</li>
                  <li>The configuration file in a subfolder (e.g. "test_decode/") of "config/"</li>
                </ul>
                <li>Submit a new job (go to the <router-link to="/jobs">Jobs</router-link> tab)</li>
                <ul>
                  <li>Under "Job Name", enter a name for your job (e.g. "test_decode")</li>
                  <li>Under "Application", select "decode" > "v0.10.1" > "train"</li>
                  <li>Under "Input", select the folder containing the configuration file for "Configuration" and the folder containing the bead calibration file for "Data"</li>
                </ul>
              </ol>
              You should now see a new job in the list.
              You can check its progress and details.
              Once it finishes running, you will see the trained model under "artifact/job_name/", as well as the logs under "log/job_name/".
              You can download them if you wish.
            </p>
          </section>

          <section id="fit">
            <h4>Fit</h4>
            <p>
              Once you have a trained model, you can use it to fit your data.
              You can download example data <a href="https://oc.embl.de/index.php/s/Xhsin2EfyoCREVM/download" target="_blank">here</a>.
              Then:
              <ol>
                <li>Upload the input files (go to the <router-link to="/files">Files</router-link> tab)</li>
                <ul>
                  <li>The frame stack in a subfolder (e.g. "test_decode_fit") of "data/"</li>
                  <li>The `meta.yaml` configuration in a subfolder (e.g. "test_decode_fit") of "config/"</li>
                </ul>
                <li>Submit a new job (go to the <router-link to="/jobs">Jobs</router-link> tab)</li>
                <ul>
                  <li>Under "Job Name", enter a name for your job (e.g. "test_decode_fit")</li>
                  <li>Under "Application", select "decode" > "v0.10.1" > "fit"</li>
                  <li>Under "Input", select the folder containing the `meta.yaml` for "Configuration", the folder containing the frame stack for "Data", and the folder containing the previously trained model (should be "test_decode/") for "Artifacts"</li>
                </ul>
              </ol>
              When the job finishes, you will see the output predictions under "output/job_name/".
            </p>
          </section>
        </section>
        <section id="decode">
          <h3>COMET</h3>
          <p>
            COMET is a software for drift correction single molecule localization microscopy.
            You can read more about it <a href="https://github.com/gpufit/Comet" target="_blank">here</a>.
            Comet already provides a website to run the software on the developers' servers (see <a href="https://www.smlm.tools/" target="_blank">here</a>);
            We added it to DECODE-OpenCloud as a proof of concept to show how to integrate other software.
          </p>
          <p>
            To run COMET, you need to specify some input parameters and provide a ".csv" dataset.
            You can download example data provided by COMET's developers <a href="https://github.com/gpufit/Comet/blob/master/test_dataset/test_dataset_3D.csv" target="_blank">here</a>.
            For DECODE-OpenCloud, you will need to specify the input parameters in a configuration file.
            For the example data linked above, such a configuration file (e.g. "test_dataset.yaml") will look something like:
            <pre>
              {
                "dataset_dimension": 3,
                "segmentation_method": "time",
                "segmentation_parameter": 200,
                "max_drift_nm": 300,
                "initial_gaussian_scale_nm": 30,
              }
            </pre>
            To run COMET:
            <ol>
              <li>Upload the input files (go to the <router-link to="/files">Files</router-link> tab)</li>
              <ul>
                <li>The ".csv" dataset file in a subfolder (e.g. "test_comet/") of "data/"</li>
                <li>The ".yaml" configuration file in a subfolder (e.g. "test_comet/") of "config/"</li>
              </ul>
              <li>Submit a new job (go to the <router-link to="/jobs">Jobs</router-link> tab)</li>
              <ul>
                <li>Under "Job Name", enter a name for your job (e.g. "test_comet")</li>
                <li>Under "Application", select "comet" > "latest" > "run"</li>
                <li>Under "Input", select the folder containing the ".yaml" file for "Configuration" and the folder containing the ".csv" file for "Data"</li>
              </ul>
            </ol>
            Once it finishes running, you will see the drift estimates under "output/job_name/".
            You can download them if you wish.
          </p>
        </section>
      </section>
      <section id="how-to-use">
        <h2>Technical documentation</h2>
        <p>
          If you are interested in how this all works behind the scenes, take a look at the <a href="https://github.com/ries-lab/DECODE_Cloud_Documentation" target="_blank">DECODE Cloud API documentation</a>.
        </p>
      </section>
    </div>
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

<style scoped>
h2, h3, h4 {
  margin-top: 20px;
}
</style>
