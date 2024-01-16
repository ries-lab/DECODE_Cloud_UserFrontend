<template>
  <section>
    <form @submit.prevent="submit">
      <div class="mb-3" v-if="!isVerificationCodeSent">
        <label for="username" class="form-label">Email address:</label>
        <input type="text" name="username" v-model="form.username" class="form-control" />
        <button type="button" @click="sendVerificationCode" class="btn btn-primary" :disabled="isVerificationCodeSent">Send verification code</button>
      </div>
      <div class="mb-3" v-if="isVerificationCodeSent">
        <label for="code" class="form-label">Verification code:</label>
        <input type="text" name="code" v-model="form.code" class="form-control" />
      </div>
      <div class="mb-3" v-if="isVerificationCodeSent">
        <label for="password" class="form-label">New password:</label>
        <input type="password" name="password" v-model="form.password" class="form-control" />
      </div>
      <div class="mb-3" v-if="isVerificationCodeSent">
        <label for="repeat_password" class="form-label">Repeat new password:</label>
        <input type="password" name="repeat_password" v-model="form.repeat_password" class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary" v-if="isVerificationCodeSent">Save</button>
      <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    </form>
  </section>
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
  name: 'ForgotPassword',
  data() {
    return {
      form: {
        username: '',
        code: '',
        password:'',
        repeat_password: '',
      },
      errorMessage: '',
      isVerificationCodeSent: false,
    };
  },
  methods: {
    ...mapActions(['forgotPassword', 'resetPassword', 'logIn']),
    async submit() {
      if (this.form.password !== this.form.repeat_password) {
        this.errorMessage = 'Passwords do not match';
        return;
      }
      try {
        console.log("view", this.form.username, this.form.code, this.form.password)
        await this.resetPassword({'username': this.form.username, 'code': this.form.code, 'password': this.form.password});
        await this.logIn({'username': this.form.username, 'password': this.form.password});
        this.$router.push('/');
      } catch (error) {
        console.log(error);
        this.errorMessage = error;
      }
    },
    async sendVerificationCode() {
      try {
        await this.forgotPassword(this.form.username);
        this.isVerificationCodeSent = true;
      } catch (error) {
        console.log(error);
        this.errorMessage = error;
      }
    }
  },
});
</script>

<style>
.error {
  color: red;
}
</style>
