<template>
  <div class="patient">
    <div style="background-color: #1e3a8a; text-align: left">
      <div style="padding: 10px 10px 0px">
        <div class="columns is-mobile">
          <img src="../assets/menu1.png" @click="side()">
          <div class="column is-8" style="padding: 10px 100px 0px">
            <label class="is-size-1" style="color: white;">Create</label>
            <label class="is-size-1 ml-2" style="color: yellow;">Patient</label>
            <label class="is-size-1 ml-2" style="color: white;">Account</label>
          </div>
          <div class="column is-2" style="padding: 30px 10px 0px; text-align: right" >
            <a  class="is-active" href="/login"><img src="../assets/cancel3.png"></a>
          </div>
        </div>
      </div>
    </div>
  <section style="padding-top: 30px; padding-bottom: 30px; text-align: left">
    <div class="container"  style="padding-left: 100px; padding-right: 100px">
      <div class="columns is-mobile">
        <div class="column is-4">
          <b-field custom-class="is-medium" label="ชื่อ"
            :type="{ 'is-danger': fname_err }"
            :message="{ 'โปรดกรอกชื่อ': fname_err }">
            <b-input size="is-medium" type="text" v-model="name"></b-input>
          </b-field>
        </div>
        <div class="column is-4">
          <b-field custom-class="is-medium" label="นามสกุล"
            :type="{ 'is-danger': lname_err }"
            :message="{ 'โปรดกรอกนามสกุล': lname_err }">
            <b-input size="is-medium" type="text" v-model='lname'></b-input>
          </b-field>
        </div>

      </div>
      <div class="columns is-mobile">
        <div class="column">
            <b-field custom-class="is-medium" label="เพศ"
              :type="{ 'is-danger': sex_err }"
              :message="{ 'โปรดเลือกเพศ': sex_err }">
              <div class="column is-2">
                <b-radio v-model="sex"
                    name="name"
                    size="is-medium"
                    native-value="ชาย">
                    ชาย
                </b-radio>
              </div>
              <div class="column">
                <b-radio v-model="sex"
                    name="name"
                    size="is-medium"
                    native-value="หญิง">
                    หญิง
                </b-radio>
              </div>  
            </b-field>
        </div>

      </div>
      <div class="columns is-mobile">
        <div class="column is-4">
          <b-field custom-class="is-medium" label="วัน เดือน ปีเกิด"
            :type="{ 'is-danger': date_err }"
            :message="{ 'โปรดเลือกวัน เดือน ปีเกิด': date_err }">
            <b-datepicker
                placeholder="Type or select a date..."
                icon="calendar-today"
                size="is-medium"
                editable>
            </b-datepicker>
          </b-field>
        </div>
      </div>
      <div class="columns is-mobile">
        <div class="column is-4">
          <b-field custom-class="is-medium" label="วันเข้ารับการประเมิน"
            :type="{ 'is-danger': from_err }"
            :message="{ 'โปรดเลือกวันที่เข้ารับการประเมิน': from_err }">
            <b-datepicker
                placeholder="Type or select a date..."
                icon="calendar-today"
                size="is-medium"
                editable>
            </b-datepicker>
          </b-field>
        </div>
      </div>
      <div class="columns is-mobile is-variable is-8">
        <div class="column is-4">
          <b-field custom-class="is-medium" label="น้ำหนัก"
            :type="{ 'is-danger': hei_err }"
            :message="{ 'โปรดกรอกน้ำหนัก': hei_err }">
              <b-input size="is-medium" v-model='weight'></b-input>
          </b-field>
        </div>
        <div class="column is-4">
          <b-field custom-class="is-medium" label="ส่วนสูง"
            :type="{ 'is-danger': wei_err }"
            :message="{ 'โปรดกรอกส่วนสูง': wei_err }">
              <b-input size="is-medium" v-model='height'></b-input>
          </b-field>
        </div>
        <div class="column is-3">
          <b-field custom-class="is-medium" label="ค่า BMI">
              <b-input size="is-medium" v-model='cal' disabled></b-input>
          </b-field>
        </div>
      </div>
      <div class="columns is-mobile">
        <div class="column is-3">
          <b-field custom-class="is-medium" label="รอบเอว"
            :type="{ 'is-danger': waist_err }"
            :message="{ 'โปรดกรอกขนาดรอบเอว': waist_err }">
            <b-input size="is-medium" v-model='waistline'></b-input>
          </b-field>
        </div>
      </div>
      <div class="columns is-mobile">
        <div class="column is-3">
          <b-field custom-class="is-medium" label="ประวัติการล้มใน 1 ปี"
            :type="{ 'is-danger': down_err }"
            :message="{ 'โปรดกรอกจำนวนครั้งการล้ม': down_err }">
            <b-input size="is-medium" v-model='down1Y'></b-input>
          </b-field>
        </div>
      </div>
      <div class="columns is-mobile">
        <div class="column is-4" >
        </div>
        <div class="column is-2" >
          <b-button tag="router-link"
                to="/register"
                type="is-success" 
                size="is-medium" 
                label="Register"/>
        </div>
        <div class="column is-2" >
          <b-button tag="router-link"
                to="/register" 
                type="is-warning" 
                size="is-medium" 
                label="Cancel"/>
        </div>
        <div class="column is-4" >
        </div>
      </div>
      </div>
      

      <b-sidebar
      type="is-light"
      :fullheight="fullheight"
      :overlay="overlay"
      can-cancel ="outside"
      v-model="open">
      <div style="background-color: #1e3a8a; text-align: center; padding: 10px 0px 10px;" >
        <div class="container" >
          <div class="columns is-mobile">
            <div class="column">
              <label class="is-size-4" style="color: white;">ข้อมูลผู้ใช้งาน</label>
            </div>
          </div>
        </div>
      </div>
      <div class="p-1">
        <b-menu>
          <b-menu-list label="User">
            <b-menu-item  style="text-align: center; padding: 10px 0px 10px;">
              <template #label="">
                {{user}}
              </template>
            </b-menu-item>
          </b-menu-list>
          <b-menu-list >
            <b-menu-item class="is-active" href="/login" label="Logout" style="text-align: center; padding: 10px 0px 10px;"></b-menu-item>
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
      sex: "",
      overlay: true,
      fullheight: true,
      height: 0,
      weight: 0,
      waistline: 0,
      down1Y: 0,
      fname_err: true,
      lname_err: true,
      sex_err: true,
      date_err: true,
      from_err: true,
      hei_err: true,
      wei_err: true,
      waist_err: true,
      down_err: true,
      }
  },
  methods: {
    side() {
      this.open = !this.open;
    },
    regis() {
      if(this.fname == ""){
        this.fname_err = !this.fname_err
      }if(this.lname == ""){
        this.lname_err = !this.lname_err
      }if(this.sex == ""){
        this.sex_err = !this.sex_err
      }if(this.date == ""){
        this.date_err = !this.date_err
      }if(this.from == ""){
        this.from_err = !this.from_err
      }if(this.hei == ""){
        this.hei_err = !this.hei_err
      }if(this.wei == ""){
        this.wei_err = !this.wei_err
      }
    }
  },
  computed: {
    cal() {
      if(this.height <= 100 || this.weight == 0) {
        return 0
      }else{
        return this.weight/((this.height/100)*(this.height/100))
      }
    },
  }
}
</script>