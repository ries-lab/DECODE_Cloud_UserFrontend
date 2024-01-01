<template>
  <section>
    <div v-if="isLoggedIn" id="logout">
      <p id="logout">Click <router-link to="/files">here</router-link> to view your files.</p>
      <p id="logout">Click <router-link to="/jobs">here</router-link> to view your jobs.</p>
    </div>
    <p v-else>
      <span><router-link to="/register">Register</router-link></span>
      <span> or </span>
      <span><router-link to="/login">Log In</router-link></span>
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
