<template>
  <div id="app">
    <NavBar />
    <div class="main container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import NavBar from '@/components/NavBar.vue';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    onMounted(() => {
      store.dispatch('viewMe')
        .then(() => {
          if (store.state.user) {
            router.push('/home');
          }
        });
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
