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
                :type="{ 'is-danger': fillFname }"
                :message="{
                  '* กรุณากรอกชื่อ และ ชื่อต้องเป็นตัวอักษรเท่านั้น': fillFname
                }"
              >
                <b-input v-model="form.n_fname" expanded></b-input>
              </b-field>
              <b-field
                class="mb-2"
                label="นามสกุล"
                :type="{ 'is-danger': fillLname }"
                :message="{
                  '* กรุณากรอกนามสกุล และ นามสกุลต้องเป็นตัวอักษรเท่านั้น': fillLname
                }"
              >
                <b-input v-model="form.n_lname" expanded></b-input>
              </b-field>
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
                :type="{ 'is-danger': shortPass }"
                :message="[
                  { '* กรุณากรอกรหัสผ่าน': fillPass },
                  { รหัสผ่านสั้นเกินไป: shortPass }
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
                  v-model="form.confirm_pass"
                  type="password"
                  password-reveal
                  expanded
                ></b-input>
              </b-field>
              <b-button
                class="login"
                style="font-family: 'Kanit', sans-serif; font-weight: 400;"
                @click="create"
                expanded
              >
                ลงทะเบียน
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
        password: "123456",
        confirm_pass: "123456"
      }
    };
  },
  methods: {
    ...mapMutations(["setCreateNurse"]),
    ...mapActions(["createNurse"]),
    debounceInput: debounce(function(e) {
      console.log(e);
      this.setCreateNurse(e);
    }, 300),
    create() {
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
        if (this.form.password !== this.form.confirm_pass) {
          alert("การยืนยันรหัสผ่านผิดพลาดกรุณากรอกรหัสผ่านใหม่");
        } else {
          this.createNurse()
            .then(() => {
              this.$router.push({ name: "Login" });
            })
            .catch(e => {
              console.log(e);
              alert(e.message);
            });
        }
      }
    }
  },
  computed: {
    fillId() {
      return this.form.id.length !== 11 || !this.form.id.match(/^[0-9]*$/gm);
    },
    // isNumber() {
    //   console.log(this.form.id.match(/^[0-9]*$/gm));
    //   return !this.form.id.match(/^[0-9]*$/gm);
    // },
    fillFname() {
      return (
        this.form.n_fname.length < 2 ||
        !this.form.n_fname.match(/^[ก-์a-zA-Z]*$/gm)
      );
    },
    // isSringFname() {
    //   return !this.form.n_fname.match(/^[ก-์a-zA-Z]*$/gm);
    // },
    fillLname() {
      return (
        this.form.n_lname.length < 2 ||
        !this.form.n_lname.match(/^[ก-์a-zA-Z]*$/gm)
      );
    },
    // isSringLname() {
    //   return !this.form.n_lname.match(/^[ก-์a-zA-Z]*$/gm);
    // },
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
      return this.form.password.length < 5;
    },
    fillConfirm() {
      return this.form.confirm_pass.length < 1;
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
