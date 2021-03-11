<template>
  <div class="hero is-fullheight bg login ">
    <section class="section is-medium">
      <div class="login">
        <strong>E-CGA</strong>
        <h3>Electronic Comprehensive Geriatric Assessment</h3>
      </div>
      <form class="box boxlogin has-background-grey-light column is-8">
        <div class="field">
          <h1 class="label labellog">Email</h1>
          <div class="control">
            <input
              class="input"
              type="email"
              placeholder="e.g. Rat_banyang@example.com"
            />
          </div>
        </div>

        <div class="field">
          <h1 class="label labellog">Password</h1>
          <div class="control">
            <input class="input" type="password" placeholder="********" />
          </div>
        </div>
        <button class="button bt_log">
          LOGIN
        </button>
        <div class="deline">
          <svg height="10" width="500">
            <line
              x1="0"
              y1="0"
              x2="500"
              y2="0"
              style="stroke:rgb(360,360,360);stroke-width:4"
            />
          </svg>
        </div>
        <button class="button bt_yellow">
          CREATE NEW ACCOUNT
        </button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: "login",
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
strong {
  color: white;
  font-size: 3rem;
}
.bg {
  background-color: #1e3a8a;
}
.has-background-gray {
  background-color: #c4c4c4;
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
.bt_log {
  color: white;
  border: none;
  background-color: #047857;
  padding: 0px 150px 0px 150px;
}
.deline {
  padding-top: 8px;
  margin: auto;
  justify-content: center;
  text-align: center;
}
.bt_yellow {
  border: none;
  padding: 0px 85px 0px 85px;
  background-color: #fcd34d;
  margin-bottom: 20px;
}
</style>
