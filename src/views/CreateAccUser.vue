<template>
  <div class="hero is-fullheight">
    <div class="hero-body py-1">
      <div class="container">
        <div class="columns py-0 my-0">
          <div class="column is-1 ">
            <Sidebar />
          </div>
          <div class="column is-5">
            <h1 class="title pt-6 mt-5">
              <nobr id="underline">สร้าง</nobr>บัญชีผู้เข้ารับบริการ
            </h1>
          </div>
          <div class="column is-6">
            <forUsers class="pr-6" />
          </div>
        </div>
        <div class="columns">
          <div class="column is-4 is-offset-1 pl-5">
            <b-field class="mb-2" label="ชื่อ">
              <b-input v-model="form.f_name" required expanded></b-input>
            </b-field>
            <b-field class="mb-2" label="นามสกุล">
              <b-input v-model="form.l_name" required expanded></b-input>
            </b-field>
            <b-field label="วัน เดือน ปีเกิด">
              <b-datepicker
                v-model="form.date_of_birth"
                placeholder="Type or select a date..."
                icon="calendar-today"
                required
                editable
              >
              </b-datepicker>
            </b-field>
          </div>
          <div class="column is-4 is-offset-1">
            <b-field class="my-1" required label="เพศ">
              <b-radio
                class="my-1 mr-6 ml-1"
                v-model="form.gender"
                name="หญิง"
                native-value="1"
                required
              >
                หญิง
              </b-radio>
              <b-radio
                class="my-1"
                v-model="form.gender"
                name="ชาย"
                native-value="2"
                required
              >
                ชาย
              </b-radio>
            </b-field>
            <b-field grouped class="mt-4">
              <b-field label="น้ำหนัก (กิโลกรัม)">
                <b-input v-model="form.weight" required expanded></b-input>
              </b-field>
              <b-field label="ส่วนสูง (เซนติเมตร)">
                <b-input v-model="form.height" required expanded></b-input>
              </b-field>
            </b-field>
            <b-field grouped>
              <b-field label="รอบเอว (นิ้ว)">
                <b-input v-model="form.waistline" required expanded></b-input>
              </b-field>
              <b-field label="ประวัติการล้มใน 1 ปี (ครั้ง)">
                <b-input
                  v-model="form.fall_history"
                  required
                  expanded
                ></b-input>
              </b-field>
            </b-field>
          </div>
        </div>
        <b-button
          class="login mt-3"
          style="font-family: 'Kanit', sans-serif; font-weight: 400;"
        >
          สร้างบัญชี
        </b-button>
        <p class="cancel pt-1">
          ยกเลิก
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/sidebar.vue";
import forUsers from "@/components/forUsers.vue";
// import axios from "axios";
import { debounce } from "debounce";
import { mapMutations } from "vuex";
export default {
  components: {
    Sidebar,
    forUsers
  },
  name: "CreateAccUsers",
  data() {
    return {
      form: {
        id: "",
        f_name: "",
        l_name: "",
        gender: "",
        date_of_birth: null,
        weight: "",
        height: "",
        waistline: "",
        fall_history: ""
      }
    };
  },
  methods: {
    ...mapMutations(["setCreateUsers"]),
    debounceInput: debounce(function(e) {
      console.log(e);
      this.setCreateUsers(e);
    }, 300)
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
  width: 37%;
}
.cancel {
  font-size: 0.75rem;
  font-style: italic;
  color: #f90000;
  text-decoration: underline;
  cursor: pointer;
}
</style>
