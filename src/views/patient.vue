<template>
  <div class="patient">
    <div style="background-color: #1e3a8a; text-align: left">
      <div style="padding: 10px 10px 0px">
        <div class="columns is-mobile">
          <!-- <img src="../assets/menu1.png" @click="side()"> -->
          <div class="column is-1">
            <a @click="side()">
              <b-icon pack="fas" icon="bars" type="is-white" size="is-large" />
            </a>
          </div>

          <div class="column is-8" style="padding: 10px 100px 0px">
            <label class="is-size-1" style="color: white;">Create</label>
            <label class="is-size-1 ml-2" style="color: yellow;">Patient</label>
            <label class="is-size-1 ml-2" style="color: white;">Account</label>
          </div>
          <div
            class="column is-2"
            style="padding: 30px 10px 0px; text-align: right"
          >
            <a class="is-active" href="/login"
              ><img src="../assets/cancel3.png"
            /></a>
          </div>
        </div>
      </div>
    </div>
    <section style="padding-top: 30px; padding-bottom: 30px; text-align: left">
      <div class="container" style="padding-left: 100px; padding-right: 100px">
        <div class="columns is-mobile">
          <div class="column is-4">
            <b-field custom-class="is-large" label="ชื่อ">
              <b-input size="is-large" type="text" v-model="name"></b-input>
            </b-field>
          </div>
          <div class="column is-4">
            <b-field custom-class="is-large" label="นามสกุล">
              <b-input size="is-large" type="text" v-model="lname"></b-input>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">
            <b-field custom-class="is-large" label="เพศ">
              <div class="column is-2">
                <b-radio
                  v-model="radio"
                  name="name"
                  size="is-large"
                  native-value="ชาย"
                >
                  ชาย
                </b-radio>
              </div>
              <div class="column">
                <b-radio
                  v-model="radio"
                  name="name"
                  size="is-large"
                  native-value="หญิง"
                >
                  หญิง
                </b-radio>
              </div>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">
            <b-field custom-class="is-large" label="วัน เดือน ปีเกิด">
              <div class="column is-3">
                <b-select placeholder="เลือกวัน" size="is-large" expanded>
                  <option v-for="day in days" :value="day" :key="day">
                    {{ day }}
                  </option>
                </b-select>
              </div>
              <div class="column is-3">
                <b-select placeholder="เลือกเดือน" size="is-large" expanded>
                  <option v-for="month in months" :value="month" :key="month">
                    {{ month }}
                  </option>
                </b-select>
              </div>
              <div class="column is-3">
                <b-select placeholder="เลือกปี" size="is-large" expanded>
                  <option v-for="year in years" :value="year" :key="year">
                    {{ year }}
                  </option>
                </b-select>
              </div>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column is-2">
            <b-field custom-class="is-large" label="อายุ">
              <b-input size="is-large" v-model="password"></b-input>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column is-4">
            <b-field custom-class="is-large" label="วันเข้ารับการประเมิน">
              <b-datepicker
                placeholder="Type or select a date..."
                icon="calendar-today"
                size="is-large"
                editable
              >
              </b-datepicker>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile is-variable is-8">
          <div class="column is-4">
            <b-field custom-class="is-large" label="น้ำหนัก">
              <b-input size="is-large" v-model="weight"></b-input>
            </b-field>
          </div>
          <div class="column is-4">
            <b-field custom-class="is-large" label="ส่วนสูง">
              <b-input size="is-large" v-model="height"></b-input>
            </b-field>
          </div>
          <div class="column is-3">
            <b-field custom-class="is-large" label="ค่า BMI">
              <b-input size="is-large" v-model="cal" disabled></b-input>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column is-3">
            <b-field custom-class="is-large" label="รอบเอว">
              <b-input size="is-large" v-model="password"></b-input>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column is-3">
            <b-field custom-class="is-large" label="ประวัติการล้มใน 1 ปี">
              <b-input size="is-large" v-model="password"></b-input>
            </b-field>
          </div>
        </div>
        <div style="text-align: center;">
          <b-button type="is-success" size="is-medium" label="Register" />
        </div>
      </div>
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
  </div>
</template>

<script>
// import NavBar from "../components/navbar";
// import store from '../store'
export default {
  // components: {
  // NavBar
  // },
  name: "Patient",
  data() {
    return {
      open: false,
      user: "Taweewat  Srimek",
      name: "",
      lname: "",
      overlay: true,
      fullheight: true,
      height: 0,
      weight: 0,
      bmi: 0,
      days: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31
      ],
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      years: [
        2480,
        2481,
        2482,
        2483,
        2484,
        2485,
        2486,
        2487,
        2488,
        2489,
        2490,
        2491,
        2492,
        2493,
        2494,
        2495,
        2496,
        2497,
        2498,
        2499,
        2500
      ]
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
    // user(){
    //   return this.name+" "+this.lname
    // }
  }
};
</script>
