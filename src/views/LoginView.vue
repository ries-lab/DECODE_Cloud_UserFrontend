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
      <div>
        <router-link to="/forgot-password" class="btn btn-link">Forgot password?</router-link>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    </form>
  </section>
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
  name: 'Login',
  data() {
    return {
      form: {
        username: '',
        password:'',
      },
      errorMessage: '',
    };
  },
  methods: {
    ...mapActions(['logIn']),
    async submit() {
      try {
        await this.logIn({'username': this.form.username, 'password': this.form.password});
        this.$router.push('/');
      } catch (error) {
        if (error.code === 'UserNotConfirmedException') {
          this.$router.push({name: 'Register', params: {username: this.form.username, password: this.form.password, isEmailVerified: true}});
        } else {
          console.log(error);
          this.errorMessage = error;
        }
      }
    }
  }
});
</script>

<style>
.error {
  color: red;
}
</style>
