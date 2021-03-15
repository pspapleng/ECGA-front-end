
<template>

<div class="register">
  <div style="background-color: #1e3a8a; text-align: left" >
    <div class="container" style="padding: 25px 50px 15px">
      <div class="columns is-mobile">
        <div class="column">
          <label class="is-size-1" style="color: white;">Create Account</label>
          <label class="is-size-4 ml-2" style="color: white;">(Nurse only)</label>
        </div>
      </div>
    </div>
  </div>
  <section style="padding-top: 30px; padding-bottom: 30px; text-align: left">
    <div class="container"  style="padding-left: 100px; padding-right: 100px">
      <div class="columns">
        <div class="column">
          <b-field label="รหัสประจำตัวพยาบาล">
            <b-input value=""></b-input>
          </b-field>
        </div>
      </div>
      <div class="columns is-mobile">
        <div class="column">
          <b-field label="ชื่อ">
            <b-input type="text" v-model="name"></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field label="นามสกุล">
            <b-input type="text" v-model='lname'></b-input>
          </b-field>
        </div>
        <div class="column is-one-quarter"></div>
      </div>
        <b-field label="Username">
            <b-input v-model='username'></b-input>
        </b-field>

        <b-field label="Password">
            <b-input v-model='password'></b-input>
        </b-field>

        <b-field label="Confirm Password">
            <b-input v-model='cf_password' type="password" ></b-input>
            <span v-if="(password != cf_password) && (password.length != cf_password.length)">ไม่ถูกจ้า</span>
        </b-field>
        <div style="text-align: center;" >
          <b-button type="is-success" size="is-medium" label="Register"/>
        </div>
        <div style="text-align: center;" >
          <a class="has-text-black">already have an account? </a>
          <a href="/login" class="is-active has-text-success" style="text-decoration: underline;"> Login </a>
        </div>
      </div>
    </section>
  
</div>
</template>


<script>

    export default {
        data() {
          return {
            name: '',
            lname: '',
            username: '',
            password: '',
            cf_password: '',
            check_pass: false
          }
        },
        methods: {
          kod() {
            return alert('ไม่ทำละ ล้อเล่น')
          }
        },
    }
</script>