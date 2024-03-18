<template>
  <section>
    <form @submit.prevent="submit">
      <div class="mb-3">
        <label for="username" class="form-label">Email address:</label>
        <input type="text" name="username" v-model="form.username" class="form-control" />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password:</label>
        <input type="password" name="password" v-model="form.password" class="form-control" />
      </div>
      <div class="mb-3">
        <label for="repeat_password" class="form-label">Repeat password:</label>
        <input type="password" name="repeat_password" v-model="form.repeat_password" class="form-control" />
      </div>
      <div class="mb-3">
        <label for="request_details" class="form-label">Request details:</label>
        <textarea name="request_details" v-model="form.request_details" class="form-control" maxlength="2000"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Send verification code</button>
      <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    </form>
  </section>
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
  name: 'Register',
  data() {
    return {
      form: {
        username: '',
        password:'',
        repeat_password: '',
        request_details: '',
      },
      errorMessage: '',
    };
  },
  methods: {
    ...mapActions(['register']),
    async submit() {
      if (this.form.password !== this.form.repeat_password) {
        this.errorMessage = 'Passwords do not match';
        return;
      }
      try {
        await this.register({
          'username': this.form.username,
          'password': this.form.password,
          'request_details': this.form.request_details ? this.form.request_details : 'none'
        });
        this.$router.push('/confirm-email/' + this.form.username);
      } catch (error) {
        if (error.code === 'UserNotConfirmedException') {
          this.$router.push('/confirm-email/' + this.form.username);
        }
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
