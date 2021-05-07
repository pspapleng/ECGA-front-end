<template>
  <div class="hero is-fullheight">
    <div class="hero-body py-3">
      <div class="container">
        <div class="columns py-4">
          <div
            class="column is-11-desktop is-9-tablet is-7-mobile is-offset-1-desktop is-offset-2-tablet is-offset-3-mobile"
          >
            <div class="columns">
              <div class="column left is-6">
                <div class="column is-10">
                  <h1 class="title pb-6 pl-6">
                    <nobr id="underline">ข้อมูล</nobr>บัญชีพยาบาล
                    <a @click="edit"
                      ><b-icon
                        class="ml-5"
                        pack="fas"
                        icon="user-edit"
                        size="is-small"
                        style="color: #1e3a8a"
                      ></b-icon>
                    </a>
                  </h1>
                  <forProfile class="pr-6 mr-6" />
                </div>
              </div>
              <div class="column right is-6 is-offset-7">
                <div class="column is-9 has-text-left">
                  <b-field class="mb-2" label="รหัสประจำตัวพยาบาล ">
                    <b-input disabled v-model="form.ID" expanded></b-input>
                  </b-field>
                  <b-field
                    class="mb-2"
                    label="ชื่อ"
                    :type="{ 'is-danger': $v.form.n_fname.$error }"
                  >
                    <b-input
                      :disabled="isEdit"
                      v-model="$v.form.n_fname.$model"
                      expanded
                    ></b-input>
                  </b-field>
                  <template v-if="$v.form.n_fname.$error">
                    <p class="help is-danger" v-if="!$v.form.n_fname.required">
                      * กรุณากรอกชื่อ
                    </p>
                    <p
                      class="help is-danger"
                      v-if="!$v.form.n_fname.onlyString"
                    >
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
                    <b-input
                      :disabled="isEdit"
                      v-model="$v.form.n_lname.$model"
                      expanded
                    ></b-input>
                  </b-field>
                  <template v-if="$v.form.n_lname.$error">
                    <p class="help is-danger" v-if="!$v.form.n_lname.required">
                      * กรุณากรอกนามสกุล
                    </p>
                    <p
                      class="help is-danger"
                      v-if="!$v.form.n_lname.onlyString"
                    >
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
                    <b-input
                      :disabled="isEdit"
                      v-model="$v.form.username.$model"
                      expanded
                    ></b-input>
                  </b-field>
                  <template v-if="$v.form.username.$error">
                    <p class="help is-danger" v-if="!$v.form.username.required">
                      * กรุณากรอกชื่อบัญชีผู้ใช้
                    </p>
                    <p
                      class="help is-danger"
                      v-if="!$v.form.username.minLength"
                    >
                      ชื่อบัญชีผู้ใช้สั้นเกินไป
                    </p>
                    <p
                      class="help is-danger"
                      v-if="!$v.form.username.maxLength"
                    >
                      ชื่อบัญชีผู้ใช้ต้องไม่เกิน 15 ตัวอักษร
                    </p>
                    <p class="help is-danger" v-if="!$v.form.username.alphaNum">
                      ชื่อบัญชีผู้ใช้ต้องเป็นภาษาอังกฤษ และ ไม่ใช้อักขระพิเศษ
                    </p>
                  </template>
                  <div v-show="!isEdit">
                    <b-field
                      class="mb-2"
                      label="รหัสผ่านเดิม"
                      :type="{ 'is-danger': $v.form.old_password.$error }"
                    >
                      <b-input
                        v-model="$v.form.old_password.$model"
                        type="password"
                        password-reveal
                        expanded
                      ></b-input>
                    </b-field>
                    <template v-if="$v.form.old_password.$error">
                      <p
                        class="help is-danger"
                        v-if="!$v.form.old_password.required"
                      >
                        * กรุณากรอกรหัสผ่าน
                      </p>
                    </template>
                    <b-field
                      class="mb-2"
                      label="รหัสผ่านใหม่"
                      :type="{ 'is-danger': $v.form.new_password.$error }"
                    >
                      <b-input
                        v-model="$v.form.new_password.$model"
                        type="password"
                        password-reveal
                        expanded
                      ></b-input>
                    </b-field>
                    <template v-if="$v.form.new_password.$error">
                      <p
                        class="help is-danger"
                        v-if="!$v.form.new_password.required"
                      >
                        * กรุณากรอกรหัสผ่าน
                      </p>
                      <p
                        class="help is-danger"
                        v-if="!$v.form.new_password.minLength"
                      >
                        รหัสผ่านสั้นเกินไป
                      </p>
                      <p
                        class="help is-danger"
                        v-if="!$v.form.new_password.alphaNum"
                      >
                        รหัสผ่านต้องไม่ใช้อักขระพิเศษ
                      </p>
                      <p
                        class="help is-danger"
                        v-if="!$v.form.new_password.complexPassword"
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
                    <div class="buttons ml-2 px-5">
                      <b-button class="save mt-4 px-6" @click="save">
                        บันทึก
                      </b-button>
                      <b-button class="cancel mt-4 px-6" @click="cancel">
                        ยกเลิก
                      </b-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-1-desktop is-3-tablet is-5-mobile">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/sidebar.vue";
import forProfile from "@/components/forProfile.vue";
// import { debounce } from "debounce";
import { mapMutations, mapState, mapActions } from "vuex";
import {
  required,
  minLength,
  maxLength,
  sameAs,
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
    Sidebar,
    forProfile
  },
  name: "Profile",
  data() {
    return {
      form: {
        old_password: "",
        new_password: "",
        confirm_password: ""
      },
      defaultForm: {},
      isEdit: true
    };
  },
  validations: {
    form: {
      old_password: { required },
      new_password: {
        required,
        minLength: minLength(6),
        alphaNum,
        complexPassword
      },
      confirm_password: { sameAs: sameAs("new_password") },
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
      }
    }
  },
  methods: {
    ...mapMutations(["setUpdateNurse", "resetUpdateNurse"]),
    ...mapActions(["updateNurse"]),
    edit() {
      this.isEdit = false;
    },
    save() {
      // Validate all fields
      this.$v.$touch();

      // เช็คว่าในฟอร์มไม่มี error
      if (!this.$v.$invalid) {
        this.setUpdateNurse(this.form);
        this.updateNurse()
          .then(() => {
            alert("บันทึกข้อมูลเรียบร้อย");
            this.isEdit = true;
            this.form.old_password = "";
            this.form.new_password = "";
            this.form.confirm_password = "";

            this.defaultForm = JSON.parse(JSON.stringify(this.form));
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
    },
    cancel() {
      // this.form.old_password = "";
      // this.form.new_password = "";
      // this.form.confirm_password = "";
      // this.resetUpdateNurse();
      this.isEdit = true;
      this.form = JSON.parse(JSON.stringify(this.defaultForm));
      console.log(this.defaultForm);
    }
  },
  computed: {
    ...mapState(["who_login"])
  },
  watch: {},
  mounted() {
    const temp = JSON.parse(JSON.stringify(this.who_login));

    this.form = { ...this.form, ...temp };
    this.defaultForm = JSON.parse(JSON.stringify(this.form));
  }
};
</script>
<style>
.left {
  position: fixed;
  top: 50pt;
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
.save {
  color: #ffffff;
  background-color: #047857;
  font-family: "Kanit", sans-serif;
  font-weight: 400;
}
.cancel {
  color: #ffffff;
  background-color: #db2b39;
  font-family: "Kanit", sans-serif;
  font-weight: 400;
}
</style>
