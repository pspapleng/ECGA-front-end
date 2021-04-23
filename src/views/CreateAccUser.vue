<template>
  <div class="hero is-fullheight">
    <div class="hero-body py-1">
      <div class="container">
        <div class="columns">
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
        <div class="columns has-text-left">
          <div class="column is-3 is-offset-1 pl-5">
            <b-field
              class="mb-2"
              label="ชื่อ"
              :type="{ 'is-danger': fillFname }"
              :message="{
                '* กรุณากรอกชื่อ และ ชื่อต้องเป็นตัวอักษรเท่านั้น': fillFname
              }"
            >
              <b-input v-model="form.u_fname" expanded></b-input>
            </b-field>
            <b-field
              class="mb-2"
              label="นามสกุล"
              :type="{ 'is-danger': fillFname }"
              :message="{
                '* กรุณากรอกชื่อ และ ชื่อต้องเป็นตัวอักษรเท่านั้น': fillFname
              }"
            >
              <b-input v-model="form.u_lname" expanded></b-input>
            </b-field>
            <b-field
              label="วัน เดือน ปีเกิด"
              :type="{ 'is-danger': fillDate }"
              :message="{
                '* กรุณาเลือกวัน เดือน ปี': fillDate
              }"
            >
              <b-datepicker
                v-model="form.date_of_birth"
                placeholder="Type or select a date..."
                icon="calendar-today"
                editable
              >
              </b-datepicker>
            </b-field>
          </div>
          <div class="column is-3 is-offset-1">
            <b-field grouped>
              <div class="block">
                <b-field
                  class="mr-6"
                  label="เพศ"
                  :type="{ 'is-danger': fillGender }"
                  :message="{
                    '* กรุณาเลือกหนึ่งตัวเลือก': fillGender
                  }"
                >
                  <b-radio
                    class="mr-5 ml-1 mt-2"
                    v-model="form.gender"
                    name="ชาย"
                    native-value="2"
                  >
                    ชาย
                  </b-radio>
                  <b-radio
                    class="ml-3 mt-2"
                    v-model="form.gender"
                    name="หญิง"
                    native-value="1"
                  >
                    หญิง
                  </b-radio>
                </b-field>
              </div>
              <b-field label="BMI">
                <b-input v-model="calBMI" disabled expanded> </b-input>
              </b-field>
            </b-field>
            <b-field grouped>
              <b-field
                label="น้ำหนัก (กิโลกรัม)"
                :type="{ 'is-danger': isWeight }"
                :message="[
                  {
                    '* กรุณากรอกน้ำหนัก': fillWeight
                  },
                  { 'น้ำหนักต้องเป็นตัวเลข >= 1 เท่านั้น': isWeight }
                ]"
              >
                <b-input v-model="form.weight" expanded></b-input>
              </b-field>
              <b-field
                label="ส่วนสูง (เซนติเมตร)"
                :type="{ 'is-danger': isHeight }"
                :message="[
                  {
                    '* กรุณากรอกส่วนสูง': fillHeight
                  },
                  { 'ส่วนสูงต้องเป็นตัวเลข >= 1 เท่านั้น': isHeight }
                ]"
              >
                <b-input v-model="form.height" expanded></b-input>
              </b-field>
            </b-field>
            <b-field grouped>
              <b-field
                label="รอบเอว (นิ้ว)"
                :type="{ 'is-danger': isWaistline }"
                :message="[
                  {
                    '* กรุณากรอกรอบเอว': fillWaistline
                  },
                  { 'รอบเอวต้องเป็นตัวเลข >= 1 เท่านั้น': isWaistline }
                ]"
              >
                <b-input v-model="form.waistline" expanded></b-input>
              </b-field>
              <b-field
                label="ประวัติการล้มใน 1 ปี (ครั้ง)"
                :type="{ 'is-danger': isFall }"
                :message="[
                  {
                    '* กรุณากรอกจำนวนครั้ง': fillFall
                  },
                  { จำนวนครั้งต้องเป็นตัวเลขจำนวนเต็มเท่านั้น: isFall }
                ]"
              >
                <b-input v-model="form.fall_history" expanded></b-input>
              </b-field>
            </b-field>
          </div>
        </div>
        <b-button
          class="login mt-3"
          style="font-family: 'Kanit', sans-serif; font-weight: 400;"
          @click="createU"
        >
          สร้างบัญชี
        </b-button>
        <router-link to="/patientlist">
          <p class="cancel pt-1">
            ยกเลิก
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/sidebar.vue";
import forUsers from "@/components/forUsers.vue";
import { debounce } from "debounce";
import { mapMutations, mapActions } from "vuex";
export default {
  components: {
    Sidebar,
    forUsers
  },
  name: "CreateAccUsers",
  data() {
    return {
      form: {
        u_fname: "asdas",
        u_lname: "dasfd",
        gender: 1,
        date_of_birth: new Date(), //null
        weight: 65.5,
        height: 167.25,
        waistline: 32,
        fall_history: 5
      }
      // locale: "en-CA",
    };
  },
  computed: {
    calBMI() {
      let bmi = parseFloat(
        this.form.weight / Math.pow(this.form.height / 100, 2)
      ).toFixed(2);
      if (isFinite(bmi)) {
        return bmi;
      } else {
        return "0";
      }
    },
    fillFname() {
      return (
        this.form.u_fname.length < 2 ||
        !this.form.u_fname.match(/^[ก-์a-zA-Z]*$/gm)
      );
    },
    fillLname() {
      return (
        this.form.u_lname.length < 2 ||
        !this.form.u_lname.match(/^[ก-์a-zA-Z]*$/gm)
      );
    },
    fillDate() {
      return this.form.date_of_birth == null;
    },
    fillGender() {
      return this.form.gender == "";
    },
    fillWeight() {
      return this.form.weight.length < 2;
    },
    isWeight() {
      return !("" + this.form.weight).match(/^(?![.,0])[.-9]*$/gm);
    },
    fillHeight() {
      return this.form.height.length < 3;
    },
    isHeight() {
      return !("" + this.form.height).match(/^(?![.,0])[.-9]*$/gm);
    },
    fillWaistline() {
      return this.form.waistline.length < 2;
    },
    isWaistline() {
      return !("" + this.form.waistline).match(/^(?![.,0])[.-9]*$/gm);
    },
    fillFall() {
      return this.form.fall_history.length < 1;
    },
    isFall() {
      return !("" + this.form.fall_history).match(/^[0-9]*$/gm);
    }
  },
  methods: {
    ...mapMutations(["setCreateUsers"]),
    ...mapActions(["createUsers"]),
    debounceInput: debounce(function(e) {
      console.log(e);
      this.setCreateUsers(e);
    }, 300),
    createU() {
      if (
        this.fillFname ||
        this.fillLname ||
        this.fillDate ||
        this.fillGender ||
        this.fillWeight ||
        this.isWeight ||
        this.fillHeight ||
        this.isHeight ||
        this.fillWaistline ||
        this.isWaistline ||
        this.fillFall ||
        this.isFall
      ) {
        alert("โปรดกรอกข้อมูลให้ครบทุกช่อง");
        return;
      } else {
        // alert("complete");
        this.createUsers()
          .then(() => {
            this.$router.push({ name: "PatientList" });
          })
          .catch(e => {
            console.log(e);
            alert(e.message);
          });
      }
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
