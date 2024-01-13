<template>
  <div id="app">
    <NavBar />
    <div class="main container">
      <router-view/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import { onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch('viewMe');
      this.$router.push('/profile');
    });
  },
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.main {
  padding-top: 5em;
}

table {
    border-collapse: collapse;
    width: 100%;
}

thead th {
    text-align: left;
}

</style>
