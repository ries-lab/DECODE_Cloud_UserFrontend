<template>
    <section>
      <form @submit.prevent="submit">
        <div class="mb-3">
          <label for="verificationCode" class="form-label">Verification code:</label>
          <input type="text" name="verificationCode" v-model="form.verificationCode" class="form-control" />
          <a href="#" @click.prevent="resendVerificationCode" class="btn btn-link">Re-send verification code</a>
        </div>
        <button type="submit" class="btn btn-primary">Verify email</button>
        <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
      </form>
    </section>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import { mapActions } from 'vuex';
  
  export default defineComponent({
    name: 'ConfirmEmail',
    data() {
      return {
        form: {
          verificationCode: '',
        },
        username: '',
        errorMessage: '',
      };
    },
    created() {
      this.username = this.$route.params.username;
    },
    methods: {
      ...mapActions(['verify', 'sendConfirmationCode']),
      async submit() {
        try {
          await this.verify({'username': this.username, 'code': this.form.verificationCode});
          this.$router.push('/user-not-confirmed');
        } catch (error) {
          console.log(error);
          this.errorMessage = error;
        }
      },
      async resendVerificationCode() {
        try {
          await this.sendConfirmationCode(this.username);
        } catch (error) {
          console.log(error);
          this.errorMessage = error;
        }
      },
    },
  });
  </script>
  
  <style>
  .error {
    color: red;
  }
  </style>
  