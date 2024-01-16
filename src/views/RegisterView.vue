<template>
  <section>
    <form @submit.prevent="submit">
      <div class="mb-3" v-if="!isEmailVerified">
        <label for="username" class="form-label">Email address:</label>
        <input type="text" name="username" v-model="form.username" class="form-control" />
      </div>
      <div class="mb-3" v-if="!isEmailVerified">
        <label for="password" class="form-label">Password:</label>
        <input type="password" name="password" v-model="form.password" class="form-control" />
      </div>
      <div class="mb-3" v-if="!isEmailVerified">
        <label for="repeat_password" class="form-label">Repeat password:</label>
        <input type="password" name="repeat_password" v-model="form.repeat_password" class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary" v-if="!isEmailVerified">Send verification code</button>
      <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    </form>
    <div v-if="isEmailVerified">
      <label for="verificationCode" class="form-label">Verification code:</label>
      <input type="text" name="verificationCode" v-model="form.verificationCode" class="form-control" />
      <button @click="verifyEmail" class="btn btn-primary">Verify email</button>
    </div>
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
        verificationCode: '',
      },
      errorMessage: '',
      isEmailVerified: false,
    };
  },
  props: {
    user: {
      type: String,
      default: '',
    },
    emailVerification: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ...mapActions(['register', 'verify']),
    async submit() {
      if (this.form.password !== this.form.repeat_password) {
        this.errorMessage = 'Passwords do not match';
        return;
      }
      try {
        await this.register({'username': this.form.username, 'password': this.form.password});
        this.isEmailVerified = true;
      } catch (error) {
        console.log(error);
        this.errorMessage = error;
      }
    },
    async verifyEmail() {
      try {
        await this.verify({'username': this.form.username, 'code': this.form.verificationCode});
        this.$router.push('/');
      } catch (error) {
        console.log(error);
        this.errorMessage = error;
      }
    }
  },
  created() {
    console.log('Route Params:', JSON.stringify(this.$route.params));
    if (this.$route.params.emailVerification) {
      this.isEmailVerified = true;
      this.form.username = this.$route.params.user;
    }
  }
});
</script>

<style>
.error {
  color: red;
}
</style>
