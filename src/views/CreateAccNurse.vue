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
              <!-- <b-field
                class="mb-2"
                label="รหัสประจำตัวพยาบาล "
                :type="{ 'is-danger': fillId }"
                :message="{
                  '* กรุณากรอกรหัสประจำตัว 11 หลัก และ รหัสต้องเป็นตัวเลขเท่านั้น': fillId,
                }"
              >
                <p class="control">
                  <span class="button is-static"> ว. </span>
                </p>
                <b-input v-model="form.id" expanded></b-input>
              </b-field> -->
              <b-field
                class="mb-2"
                label="รหัสประจำตัวพยาบาล "
                :type="{ 'is-danger': fillId }"
                :message="{
                  '* กรุณากรอกรหัสประจำตัว 11 หลัก และ รหัสต้องเป็นตัวเลขเท่านั้น': fillId
                }"
              >
                <p class="control">
                  <span class="button is-static"> ว. </span>
                </p>
                <b-input v-model="form.id" expanded></b-input>
              </b-field>
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
                <p class="help is-danger" v-if="!$v.form.n_fname.isString">
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
                <p class="help is-danger" v-if="!$v.form.n_lname.isString">
                  นามสกุลต้องเป็นตัวอักษรเท่านั้น
                </p>
                <p class="help is-danger" v-if="!$v.form.n_lname.minLength">
                  นามสกุลต้องมีความยาวขั้นต่ำ 2 ตัวอักษร
                </p>
              </template>
              <b-field
                class="mb-2"
                label="ชื่อผู้ใช้"
                :type="{ 'is-danger': shortUsername }"
                :message="[
                  { '* กรุณากรอกชื่อบัญชีผู้ใช้': fillUsername },
                  { ชื่อบัญชีผู้ใช้สั้นเกินไป: shortUsername }
                ]"
              >
                <b-input v-model="form.username" expanded></b-input>
              </b-field>
              <b-field
                class="mb-2"
                label="รหัสผ่าน"
                :type="{ 'is-danger': strongPass }"
                :message="[
                  { '* กรุณากรอกรหัสผ่าน': fillPass },
                  { รหัสผ่านสั้นเกินไป: shortPass },
                  { รหัสผ่านง่ายเกินไป: strongPass }
                ]"
              >
                <b-input
                  v-model="form.password"
                  type="password"
                  password-reveal
                  expanded
                ></b-input>
              </b-field>
              <b-field
                class="mb-4"
                label="ยืนยันรหัสผ่าน"
                :type="{ 'is-danger': fillConfirm }"
                :message="{ '* กรุณายืนยันรหัส': fillConfirm }"
              >
                <b-input
                  v-model="form.confirm_password"
                  type="password"
                  password-reveal
                  expanded
                ></b-input>
              </b-field>
              <b-button
                class="login"
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
import { required, minLength } from "vuelidate/lib/validators";

function isString(value) {
  return value.match(/^[ก-์a-zA-Z]*$/gm);
}

export default {
  components: {
    forNurse
  },
  name: "CreateAccNurse",
  data() {
    return {
      form: {
        id: "00000000000",
        n_fname: "asd",
        n_lname: "asd",
        username: "admin",
        password: "123456a",
        confirm_password: "123456a"
      }
    };
  },
  validations: {
    form: {
      id: { required, minLength: minLength(2), isString },
      n_fname: {
        required,
        isString,
        minLength: minLength(2)
      },
      n_lname: { required, isString, minLength: minLength(2) },
      username: { required },
      password: { required },
      confirm_password: { required }
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
      if (
        this.fillId ||
        this.fillFname ||
        this.fillLname ||
        this.fillUsername ||
        this.shortUsername ||
        this.fillPass ||
        this.shortPass ||
        this.fillConfirm
      ) {
        alert("โปรดกรอกข้อมูลให้ครบทุกช่อง");
        return;
      } else {
        if (this.form.password !== this.form.confirm_password) {
          alert("การยืนยันรหัสผ่านผิดพลาดกรุณากรอกรหัสผ่านใหม่");
        } else {
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
        }
      }
    }
  },
  computed: {
    fillId() {
      return this.form.id.length !== 11 || !this.form.id.match(/^[0-9]*$/gm);
    },
    fillFname() {
      return (
        this.form.n_fname.length < 2 ||
        !this.form.n_fname.match(/^[ก-์a-zA-Z]*$/gm)
      );
    },
    fillLname() {
      return (
        this.form.n_lname.length < 2 ||
        !this.form.n_lname.match(/^[ก-์a-zA-Z]*$/gm)
      );
    },
    fillUsername() {
      return this.form.username.length < 1;
    },
    shortUsername() {
      return this.form.username.length < 5;
    },
    fillPass() {
      return this.form.password.length < 1;
    },
    shortPass() {
      return this.form.password.length < 6;
    },
    strongPass() {
      return !(
        this.form.password.match(/[a-z]/) && this.form.password.match(/[0-9]/)
      );
    },
    fillConfirm() {
      return this.form.confirm_password.length < 1;
    },
    fillAll() {
      return "complete";
    }
  },
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
