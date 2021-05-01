<template>
  <!-- <b-sidebar
    fullheight="true"
    reduce="true"
    style="background-color: #1e3a8a"
    open
  > -->
  <div class="sidebar">
    <!-- <b-menu> -->
    <div class="top">
      <!-- ปุ่มรายชื่อ -->
      <div
        style="padding: 20px 25px 10px"
        v-if="store.state.checklist == false"
        @click="(store.state.checklist = !store.state.checklist), (store.state.checkfrom = !store.state.checkfrom)"
      >
      <router-link to="/patientlist">
        <b-button
          style="background-color: #1e3a8a; color: white; border-color: #1e3a8a"
          size="is-large"
        >
          <b-icon icon="menu" size="is-medium"> </b-icon>
        </b-button>
      </router-link>
      </div>
      <div style="padding: 20px 25px 10px" v-if="store.state.checklist == true">
        <b-button
          style="background-color: white; color: #1e3a8a; border-color: white"
          size="is-large"
        >
          <b-icon icon="menu-open" size="is-medium"> </b-icon>
        </b-button>
      </div>
      <!-- ปุ่มแบบประเมิน -->
      <div
        style="padding: 0px 25px 0px"
        v-if="store.state.checkfrom == false"
        @click="(store.state.checklist = !store.state.checklist), (store.state.checkfrom = !store.state.checkfrom)"
      >
      <router-link to="/startpage">
        <b-button
          style="background-color: #1e3a8a; color: white; border-color: #1e3a8a"
          size="is-large"
        >
          <b-icon icon="text-box-outline" size="is-medium"> </b-icon>
        </b-button>
      </router-link>
      </div>
      <div style="padding: 0px 25px 0px" v-if="store.state.checkfrom == true">
        <b-button
          style="background-color: white; color: #1e3a8a; border-color: white"
          size="is-large"
        >
          <b-icon icon="text-box-outline" size="is-medium"> </b-icon>
        </b-button>
      </div>
    </div>
    <!-- ปุ่มแอคเคาท์ -->
    <div style="position: absolute; bottom: 20px; left: 10px">
      <b-tooltip
        type="is-light"
        position="is-right"
        :triggers="['click']"
        :auto-close="['outside', 'escape']"
      >
        <template v-slot:content>
          <p>{{store.state.n_fname}} {{store.state.n_lname}}</p>
          <router-link to="/login">
            <b-button
              type="is-danger"
              icon-left="sign-out-alt"
              icon-pack="fas"
              size="is-small"
              @click="getData()"
              expanded
              >Log out
            </b-button>
          </router-link>
        </template>
        <b-button
          style="background-color: #1e3a8a; color: white; border-color: #1e3a8a"
          size="is-large"
        >
          <b-icon icon="account-circle" size="is-large"> </b-icon>
        </b-button>
      </b-tooltip>
    </div>
    <!-- </b-menu> -->
  </div>
  <!-- </b-sidebar> -->
</template>

<script>
import store from "@/store/index.js";
export default {
  data() {
    return {
      store,
    };
  },
  name: "Sidebar",
};
</script>

<style>
.sidebar {
  height: 100%;
  width: 80px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #1e3a8a;
  /* overflow-x: hidden; */
}
.top {
  overflow: hidden;
}
.b-tooltip .tooltip-content {
  font-size: 1.05rem;
  font-weight: 500;
}
/* .b-sidebar .sidebar-content {
  background-color: #1e3a8a;
  -webkit-box-shadow: 0px 0px 0px 0px rgb(10 10 10 / 10%);
} */
</style>
