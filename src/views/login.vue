<template>
  <div class="hero is-fullheight is-light">
    <section class="section is-medium">
      <div class="login">
        <h1 id="head">เข้าสู่ระบบ <mark>E-CGA</mark></h1>
      </div>
      <form class="boxlogin column is-4">
        <div class="field">
          <div class="control">
            <input class="input" type="email" placeholder="รหัสบัญชีผู้ใช้" />
          </div>
        </div>

        <div class="field">
          <div class="control">
            <input class="input" type="password" placeholder="รหัสผ่าน" />
          </div>
        </div>
        <div class="forget level-right">
          <p>ลืมรหัสผ่าน?</p>
        </div>
        <b-button class="button bt-blue">
          เข้าสู่ระบบ
        </b-button>
      </form>
      <p class="newacc">
        สมัครบัญชีพยาบาลใหม่
      </p>
    </section>
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
.login {
  font-size: 1.5rem;
  color: white;
  margin-bottom: 50px;
}
.boxlogin {
  margin: auto;
}
.field {
  padding: 10px 20px 10px 20px;
}
.labellog {
  justify-content: left;
  text-align: left;
}
#head {
  color: black;
}
.bt-blue {
  margin-top: 20px;
  padding: 0px 7vw 0px 7vw;
  color: #fff;
  background-color: #1e3a8a;
}
.forget {
  padding-right: 20px;
  font-size: 0.75rem;
  cursor: pointer;
}
.newacc {
  color: #047857;
  text-decoration: underline;
  cursor: pointer;
}
mark {
  background-color: yellow;
  color: black;
}
</style>
