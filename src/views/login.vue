<template>
  <div class="hero is-fullheight is-light">
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="title has-text-centered">
          เข้าสู่ระบบ <mark type="is-warning">E-CGA</mark>
        </p>
        <div class="column is-4 is-offset-4">
          <p
            v-if="error"
            class="px-3 py-2 mb-4 has-text-danger-dark has-background-danger-light"
          >
            {{ error }}
          </p>
          <b-field
            class="mb-2"
            :type="{ 'is-danger': $v.login_form.username.$error }"
          >
            <b-input
              v-model="$v.login_form.username.$model"
              placeholder="ชื่อบัญชีผู้ใช้"
            ></b-input>
          </b-field>
          <template v-if="$v.login_form.username.$error">
            <p
              class="help is-danger has-text-left mb-2"
              v-if="!$v.login_form.username.required"
            >
              * กรุณากรอกชื่อบัญชีผู้ใช้
            </p>
          </template>
          <b-field
            class="mb-2"
            :type="{ 'is-danger': $v.login_form.password.$error }"
          >
            <b-input
              v-model="$v.login_form.password.$model"
              type="password"
              placeholder="รหัสผ่าน"
              password-reveal
            />
          </b-field>
          <template v-if="$v.login_form.password.$error">
            <p
              class="help is-danger has-text-left mb-2"
              v-if="!$v.login_form.password.required"
            >
              * กรุณากรอกรหัสผ่าน
            </p>
          </template>
        </div>
        <b-button
          class="login"
          style="font-family: 'Kanit', sans-serif; font-weight: 400;"
          @click="login"
        >
          เข้าสู่ระบบ
        </b-button>
        <router-link to="/CreateAccNurse">
          <p class="newacc pt-1">
            สมัครบัญชีพยาบาลใหม่
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { debounce } from "debounce";
import { required } from "vuelidate/lib/validators";
import { mapMutations, mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      login_form: {
        username: "",
        password: ""
      },
      error: ""
    };
  },
  validations: {
    login_form: {
      username: { required },
      password: { required }
    }
  },
  methods: {
    ...mapMutations(["setLogin"]),
    ...mapActions(["createLogin"]),
    debounceInput: debounce(function(e) {
      console.log(e);
      this.setLogin(e);
    }, 300),
    login() {
      // Validate all fields
      this.$v.$touch();
      // เช็คว่าในฟอร์มไม่มี error
      if (!this.$v.$invalid) {
        // alert("login");
        this.createLogin()
          .then(() => {
            this.$router.push({ name: "PatientList" });
          })
          .catch(e => {
            console.log(e);
            this.error = e;
          });
      } else {
        alert("โปรดกรอกข้อมูลให้ถูกต้องทุกช่อง");
      }
    }
  },
  watch: {
    login_form: {
      // This will let Vue know to look inside the array
      deep: true,
      // We have to move our method to a handler field
      handler(val) {
        this.debounceInput(val);
        console.log("The form has changed!");
      }
    }
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
