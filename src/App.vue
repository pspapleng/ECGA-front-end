<template>
  <div id="app">
    <router-view :key="$route.fullPath" @auth-change="onAuthChange" />
  </div>
</template>
<script>
// import axios from "axios";
import Vue from "vue";

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
    onAuthChange() {
      const token = localStorage.getItem("token");
      if (token) {
        this.getUser();
      }
    },
    getUser() {
      const token = localStorage.getItem("token");
      Vue.axios
        .get("http://localhost:3000/api/login/me", {
          headers: { Authorization: "Bearer " + token }
        })
        .then(res => {
          this.user = res.data;
        });
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
