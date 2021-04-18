<template>
  <div class="hero is-fullheight is-light">
    <div class="hero-body py-3">
      <div class="container mt-0">
        <div class="columns">
          <div class="column is-7">
            <h1 class="title pl-6 py-6">
              <nobr id="underline">สร้าง</nobr>บัญชีพยาบาล
            </h1>
            <forNurse />
          </div>
          <div class="column is-5">
            <div class="column is-10 is-offset-1">
              <b-field class="mb-2" label="รหัสประจำตัวพยาบาล">
                <p class="control">
                  <span class="button is-static"> ว. </span>
                </p>
                <b-input v-model="id" expanded></b-input>
              </b-field>
              <b-field class="mb-2" label="ชื่อ">
                <b-input v-model="f_name" expanded></b-input>
              </b-field>
              <b-field class="mb-2" label="นามสกุล">
                <b-input v-model="l_name" expanded></b-input>
              </b-field>
              <b-field class="mb-2" label="ชื่อผู้ใช้">
                <b-input v-model="username" expanded></b-input>
              </b-field>
              <b-field class="mb-2" label="รหัสผ่าน">
                <b-input
                  v-model="password"
                  type="password"
                  password-reveal
                  expanded
                ></b-input>
              </b-field>
              <b-field class="mb-4" label="ยืนยันรหัสผ่าน">
                <b-input
                  v-model="confirm_pass"
                  type="password"
                  password-reveal
                  expanded
                ></b-input>
              </b-field>
              <b-button class="login" expanded>
                เข้าสู่ระบบ
              </b-button>
              <p class="haveacc pt-1">
                มีบัญชีแล้ว?
                <nobr
                  style="font-style: italic;text-decoration: underline;color: #047857;"
                  >เข้าสู่ระบบ</nobr
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import forNurse from "@/components/forNurse.vue";
export default {
  components: {
    forNurse
  },
  name: "CreateAccNurse",
  data() {
    return {
      id: "",
      f_name: "",
      l_name: "",
      username: "",
      password: "",
      confirm_pass: ""
    };
  }
};
</script>

<style>
.title {
  color: black;
  text-align: left;
  font-weight: 500;
  font-size: 2rem;
}
#underline {
  border-bottom: solid 10px #1e3a8a;
}
input {
  margin-top: 0px;
}
.label {
  text-align: left;
  margin-left: 4px;
  margin-top: 0px;
  margin-bottom: 0px;
  font-weight: 400;
}
.login {
  color: #ffffff;
  background-color: #1e3a8a;
}
.haveacc {
  color: #494949;
  font-size: 0.75rem;
  cursor: pointer;
}
</style>
