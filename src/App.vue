<template>
  <div id="app">
    <router-view
      :key="$route.fullPath"
      @auth-change="onAuthChange"
      :user="user"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      user: null
    };
  },
  mounted() {
    this.onAuthChange();
  },
  methods: {
    ...mapActions(["getWhoLogin"]),
    onAuthChange() {
      const token = localStorage.getItem("token");
      if (token) {
        this.getUser();
      }
    },
    getUser() {
      this.getWhoLogin();
    }
  }
};
</script>

<style>
#app {
  font-family: "Kanit", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
