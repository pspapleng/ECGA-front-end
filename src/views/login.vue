<template>
  <div class="hero is-fullheight is-light">
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="title">เข้าสู่ระบบ <mark type="is-warning">E-CGA</mark></p>
        <div class="column is-4 is-offset-4">
          <b-field>
            <b-input v-model="name" placeholder="ชื่อบัญชีผู้ใช้"></b-input>
          </b-field>
          <b-field>
            <b-input
              v-model="pass"
              type="password"
              placeholder="รหัสผ่าน"
              password-reveal
            />
          </b-field>
        </div>
        <b-button class="login">
          เข้าสู่ระบบ
        </b-button>
        <p class="newacc pt-1">
          สมัครบัญชีพยาบาลใหม่
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      msg: "Login"
    };
  }
};
</script>
<style>
.title {
  font-size: 1.5rem;
  font-weight: 500;
  color: black;
}
mark {
  background-color: #fcd34d;
  color: #494949;
  padding-left: 0.5%;
  padding-right: 0.5%;
}
.login {
  color: #ffffff;
  background-color: #1e3a8a;
  width: 31%;
}
.newacc {
  color: #047857;
  font-size: 0.75rem;
  font-style: italic;
  text-decoration: underline;
  cursor: pointer;
}
</style>
