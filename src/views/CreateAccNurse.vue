<template>
  <div class="hero is-fullheight is-light">
    <div class="hero-body py-3">
      <div class="container">
        <div class="columns">
          <div class="column left is-7 pl-3">
            <h1 class="title ml-6 mb-6 pl-6 py-6">
              <nobr id="underline">สร้าง</nobr>บัญชีพยาบาล
            </h1>
            <forNurse class="mt-4" />
          </div>
          <div class="column right is-5 mt-3 is-offset-7">
            <div class="column is-10 is-offset-1 has-text-left">
              <b-field
                class="mb-2"
                label="รหัสประจำตัวพยาบาล "
                :type="{ 'is-danger': $v.form.id.$error }"
              >
                <p class="control">
                  <span class="button is-static"> ว. </span>
                </p>
                <b-input v-model="$v.form.id.$model" expanded></b-input>
              </b-field>
              <template v-if="$v.form.id.$error">
                <p class="help is-danger" v-if="!$v.form.id.required">
                  * กรุณากรอกรหัสประจำตัว
                </p>
                <p class="help is-danger" v-if="!$v.form.id.numeric">
                  รหัสต้องเป็นตัวเลขเท่านั้น
                </p>
                <p
                  class="help is-danger"
                  v-if="!($v.form.id.minLength && $v.form.id.maxLength)"
                >
                  รหัสต้องมีความยาว 11 หลัก
                </p>
              </template>
              <b-field
                class="mb-2"
                label="ชื่อ"
                :type="{ 'is-danger': $v.form.n_fname.$error }"
              >
                <b-input v-model="$v.form.n_fname.$model" expanded></b-input>
              </b-field>
              <template v-if="$v.form.n_fname.$error">
                <p class="help is-danger" v-if="!$v.form.n_fname.required">
                  * กรุณากรอกชื่อ
                </p>
                <p class="help is-danger" v-if="!$v.form.n_fname.onlyString">
                  ชื่อต้องเป็นตัวอักษรเท่านั้น
                </p>
                <p class="help is-danger" v-if="!$v.form.n_fname.minLength">
                  ชื่อต้องมีความยาวขั้นต่ำ 2 ตัวอักษร
                </p>
              </template>
              <b-field
                class="mb-2"
                label="นามสกุล"
                :type="{ 'is-danger': $v.form.n_lname.$error }"
              >
                <b-input v-model="$v.form.n_lname.$model" expanded></b-input>
              </b-field>
              <template v-if="$v.form.n_lname.$error">
                <p class="help is-danger" v-if="!$v.form.n_lname.required">
                  * กรุณากรอกนามสกุล
                </p>
                <p class="help is-danger" v-if="!$v.form.n_lname.onlyString">
                  นามสกุลต้องเป็นตัวอักษรเท่านั้น
                </p>
                <p class="help is-danger" v-if="!$v.form.n_lname.minLength">
                  นามสกุลต้องมีความยาวขั้นต่ำ 2 ตัวอักษร
                </p>
              </template>
              <b-field
                class="mb-2"
                label="ชื่อผู้ใช้"
                :type="{ 'is-danger': $v.form.username.$error }"
              >
                <b-input v-model="$v.form.username.$model" expanded></b-input>
              </b-field>
              <template v-if="$v.form.username.$error">
                <p class="help is-danger" v-if="!$v.form.username.required">
                  * กรุณากรอกชื่อบัญชีผู้ใช้
                </p>
                <p class="help is-danger" v-if="!$v.form.username.minLength">
                  ชื่อบัญชีผู้ใช้สั้นเกินไป
                </p>
                <p class="help is-danger" v-if="!$v.form.username.maxLength">
                  ชื่อบัญชีผู้ใช้ต้องไม่เกิน 15 ตัวอักษร
                </p>
                <p class="help is-danger" v-if="!$v.form.username.alphaNum">
                  ชื่อบัญชีผู้ใช้ต้องเป็นภาษาอังกฤษ และ ไม่ใช้อักขระพิเศษ
                </p>
              </template>
              <b-field
                class="mb-2"
                label="รหัสผ่าน"
                :type="{ 'is-danger': $v.form.password.$error }"
              >
                <b-input
                  v-model="$v.form.password.$model"
                  type="password"
                  password-reveal
                  expanded
                ></b-input>
              </b-field>
              <template v-if="$v.form.password.$error">
                <p class="help is-danger" v-if="!$v.form.password.required">
                  * กรุณากรอกรหัสผ่าน
                </p>
                <p class="help is-danger" v-if="!$v.form.password.minLength">
                  รหัสผ่านสั้นเกินไป
                </p>
                <p class="help is-danger" v-if="!$v.form.password.alphaNum">
                  รหัสผ่านต้องไม่ใช้อักขระพิเศษ
                </p>
                <p
                  class="help is-danger"
                  v-if="!$v.form.password.complexPassword"
                >
                  รหัสผ่านง่ายเกินไป
                </p>
              </template>
              <b-field
                class="mb-2"
                label="ยืนยันรหัสผ่าน"
                :type="{ 'is-danger': $v.form.confirm_password.$error }"
              >
                <b-input
                  v-model="$v.form.confirm_password.$model"
                  type="password"
                  password-reveal
                  expanded
                ></b-input>
              </b-field>
              <template v-if="$v.form.confirm_password.$error">
                <p
                  class="help is-danger"
                  v-if="!$v.form.confirm_password.sameAs"
                >
                  * กรุณายืนยันรหัสผ่านให้ถูกต้อง
                </p>
              </template>
              <b-button
                class="login mt-4"
                style="font-family: 'Kanit', sans-serif; font-weight: 400;"
                @click="createN"
                expanded
              >
                สร้างบัญชี
              </b-button>
              <p class="haveacc pt-1 has-text-centered">
                มีบัญชีแล้ว?
                <router-link to="/login">
                  <nobr
                    style="font-style: italic;text-decoration: underline;color: #047857; cursor: pointer;"
                  >
                    เข้าสู่ระบบ
                  </nobr>
                </router-link>
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
import { debounce } from "debounce";
import { mapMutations, mapActions } from "vuex";
import {
  required,
  minLength,
  maxLength,
  sameAs,
  numeric,
  alphaNum
} from "vuelidate/lib/validators";

function onlyString(value) {
  if (!value.match(/^[ก-์a-zA-Z]*$/gm)) {
    return false;
  }
  return true;
}
function complexPassword(value) {
  if (!(value.match(/[a-z]/) && value.match(/[0-9]/))) {
    return false;
  }
  return true;
}

export default {
  components: {
    forNurse
  },
  name: "CreateAccNurse",
  data() {
    return {
      form: {
        id: "00000000004",
        n_fname: "ณัฐธิดา",
        n_lname: "ทวีชุติพรกุล",
        username: "nutthida",
        password: "nut1234",
        confirm_password: "nut1234"
      }
    };
  },
  validations: {
    form: {
      id: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11),
        numeric
      },
      n_fname: {
        required,
        onlyString,
        minLength: minLength(2)
      },
      n_lname: {
        required,
        onlyString,
        minLength: minLength(2)
      },
      username: {
        required: required,
        minLength: minLength(5),
        maxLength: maxLength(15),
        alphaNum
      },
      password: {
        required,
        minLength: minLength(6),
        alphaNum,
        complexPassword
      },
      confirm_password: { sameAs: sameAs("password") }
    }
  },
  methods: {
    ...mapMutations(["setCreateNurse"]),
    ...mapActions(["createNurse"]),
    debounceInput: debounce(function(e) {
      console.log(e);
      this.setCreateNurse(e);
    }, 300),
    createN() {
      // Validate all fields
      this.$v.$touch();

      // เช็คว่าในฟอร์มไม่มี error
      if (!this.$v.$invalid) {
        // alert("สร้าง");
        this.createNurse()
          .then(() => {
            this.$router.push({ name: "Login" });
          })
          .catch(e => {
            console.log(e.details);
            if (Array.isArray(e.details)) {
              console.log("yes");
              let err = "";
              e.details.forEach(e => {
                err += " " + e.message;
              });
              alert(err);
            } else {
              console.log("no");
              alert(e.details.message);
            }
          });
      } else {
        alert("โปรดกรอกข้อมูลให้ถูกต้องทุกช่อง");
      }
    }
  },

  computed: {},
  watch: {
    form: {
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
.left {
  position: fixed;
}
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
}
</style>
