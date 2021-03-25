<template>
  <div class="patientname">
    <div style="background-color: #1e3a8a; text-align: left">
      <div style="padding: 10px 10px 0px">
        <div class="columns is-mobile">
          <!-- <img src="../assets/menu1.png" @click="side()"> -->
          <div class="column is-1">
            <a @click="side()">
              <b-icon pack="fas" icon="bars" type="is-white" size="is-large" />
            </a>
          </div>
          <div class="column cen">
            <label class="head" style="color: white;"
              >รายชื่อผู้เข้ารับบริการ</label
            >
          </div>
        </div>
      </div>
    </div>
    <section class="find">
      <b-field grouped message="">
        <b-input
          type="text"
          v-model="search"
          placeholder="Search..."
          expanded
        ></b-input>
        <p class="control ">
          <b-button class="butt" label="ค้นหา" style="color: white;" />
        </p>
      </b-field>
    </section>

    <section class="list">
      <b-field grouped>
        <div class="column is-1">
          <b-image
            class="img"
            src="https://www.tvpoolonline.com/wp-content/uploads/2020/04/2020-04-19_8-40-29.png"
            ratio="1by1"
          ></b-image>
        </div>
        <div class="column is-2 nameinfo">{{ name }} {{ lname }}</div>
        <div id="red" class="column is-3 nameinfo">
          มีข้อมูลแบบประเมินเมื่อวันที่ {{ ldate }}
        </div>
        <div class="column is-3 nameinfo"></div>
      </b-field>
    </section>
    <section class="list">
      <b-field grouped>
        <div class="column is-1">
          <b-image
            class="img"
            src="https://www.tvpoolonline.com/wp-content/uploads/2020/04/2020-04-19_8-40-29.png"
            ratio="1by1"
          ></b-image>
        </div>
        <div class="column is-2 nameinfo">{{ name }} {{ lname }}</div>
        <div id="red" class="column is-3 nameinfo">
          ไม่มีผลการประเมิน
        </div>
        <div class="column is-3 nameinfo">
          <b-button class="button bt_log">
            ทำแบบประเมิน
          </b-button>
        </div>
      </b-field>
    </section>

    <section style="padding-top: 30px; padding-bottom: 30px; text-align: left">
      <div
        class="container"
        style="padding-left: 100px; padding-right: 100px"
      ></div>
      <b-sidebar
        type="is-light"
        :fullheight="fullheight"
        :overlay="overlay"
        can-cancel="outside"
        v-model="open"
      >
        <div
          style="background-color: #1e3a8a; text-align: center; padding: 10px 0px 10px;"
        >
          <div class="container">
            <div class="columns is-mobile">
              <div class="column">
                <label class="is-size-4" style="color: white;"
                  >ข้อมูลผู้ใช้งาน</label
                >
              </div>
            </div>
          </div>
        </div>
        <div class="p-1">
          <b-menu>
            <b-menu-list label="User">
              <b-menu-item style="text-align: center; padding: 10px 0px 10px;">
                <template #label="">
                  {{ user }}
                </template>
              </b-menu-item>
            </b-menu-list>
            <b-menu-list>
              <b-menu-item
                class="is-active"
                href="/login"
                label="Logout"
                style="text-align: center; padding: 10px 0px 10px;"
              ></b-menu-item>
            </b-menu-list>
          </b-menu>
        </div>
      </b-sidebar>
    </section>
    <section class="cna">
      <b-button class="button bt_yellow">
        CREATE NEW ACCOUNT
      </b-button>
    </section>
  </div>
</template>

<script>
export default {
  name: "Namelist",
  data() {
    return {
      open: false,
      user: "Taweewat  Srimek",
      name: "ธิดาพร",
      lname: "ชาวคูเวียง",
      ldate: "22/03/64",
      overlay: true,
      fullheight: true
    };
  },
  methods: {
    side() {
      this.open = !this.open;
    }
  },
  computed: {
    cal() {
      if (this.height <= 100 || this.weight == 0) {
        return 0;
      } else {
        return this.weight / ((this.height / 100) * (this.height / 100));
      }
    }
  }
};
</script>

<style scoped>
.head {
  font-size: 1.5rem;
}
.cen {
  margin: auto;
  justify-content: center;
  text-align: center;
}
.find {
  margin-top: 12px;
}
.img {
  width: 100;
  height: 600;
}
.list {
  justify-content: center;
  text-align: center;
  border-bottom: solid gray;
}
.bt_log {
  color: white;
  border: none;
  background-color: #1e3a8a;
  padding: 0px 100px 0px 100px;
}
.nameinfo {
  margin: auto;
}
#red {
  color: red;
}
.butt {
  background-color: #047857;
}
.bt_yellow {
  border: none;
  background-color: #fcd34d;
  width: 100%;
  padding: 30px 0px 30px 0px;
}
.cna {
  position: fixed; /* Set the navbar to fixed position */
  bottom: 0; /* Position the navbar at the bottom of the page */
  width: 100%; /* Full width */
}
</style>
