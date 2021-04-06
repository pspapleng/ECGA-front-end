<template>
  <!-- <b-sidebar
    fullheight="true"
    reduce="true"
    style="background-color: #1e3a8a"
    open
  > -->
    <div class="sidebar">
      <!-- <b-menu> -->
        <!-- ปุ่มรายชื่อ -->
        <div
          style="padding: 20px 25px 10px"
          v-if="checklist == false"
          @click="checklist = !checklist, checkfrom = !checkfrom"
        >
          <b-button
            style="
              background-color: #1e3a8a;
              color: white;
              border-color: #1e3a8a;
            "
            size="is-large"
          >
            <b-icon icon="menu" size="is-medium"> </b-icon>
          </b-button>
        </div>
        <div
          style="padding: 20px 25px 10px"
          v-if="checklist == true"
        >
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
          v-if="checkfrom == false"
          @click="checklist = !checklist, checkfrom = !checkfrom"
        >
          <b-button
            style="
              background-color: #1e3a8a;
              color: white;
              border-color: #1e3a8a;
            "
            size="is-large"
          >
            <b-icon icon="text-box-outline" size="is-medium"> </b-icon>
          </b-button>
        </div>
        <div
          style="padding: 0px 25px 0px"
          v-if="checkfrom == true"
        >
          <b-button
            style="background-color: white; color: #1e3a8a; border-color: white"
            size="is-large"
          >
            <b-icon icon="text-box-outline" size="is-medium"> </b-icon>
          </b-button>
        </div>
          <div
            style="position: absolute; bottom: 20px; left: 10px;"
          >
            <b-button
              style="
                background-color: #1e3a8a;
                color: white;
                border-color: #1e3a8a;
              "
              size="is-large"
            >
              <b-icon icon="account-circle" size="is-large"> </b-icon>
            </b-button>
          </div>
      <!-- </b-menu> -->
    </div>
  <!-- </b-sidebar> -->
</template>

<script>
export default {
  data() {
    return {
      checklist: true,
      checkfrom: false,
    }
  },
  name: "Sidebar"
}
</script>

<style>
.sidebar{
  height: 100%;
  width: 80px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #1e3a8a;
  overflow-x: hidden;
}
/* .b-sidebar .sidebar-content {
  background-color: #1e3a8a;
  -webkit-box-shadow: 0px 0px 0px 0px rgb(10 10 10 / 10%);
} */
</style>