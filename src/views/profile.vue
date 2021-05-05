<template>
  <div class="hero is-fullheight">
    <div class="hero-body py-1">
      <div class="container">
        <div class="columns">
          <div class="column is-1 ">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/sidebar.vue";
// import forUsers from "@/components/forUsers.vue";
import { debounce } from "debounce";
import { mapMutations, mapActions } from "vuex";
import {
  required,
  minLength,
  integer,
  minValue,
  decimal
} from "vuelidate/lib/validators";

function onlyString(value) {
  if (!value.match(/^[ก-์a-zA-Z]*$/gm)) {
    return false;
  }
  return true;
}

export default {
  components: {
    Sidebar
    // forUsers,
  },
  name: "CreateAccUsers",
  data() {
    return {
      form: {
        u_fname: "กิตติพงศ์",
        u_lname: "สุนทรแตร",
        gender: 2,
        date_of_birth: new Date("1954-05-03"), //null new Date()
        weight: 70,
        height: 171.5,
        waistline: 35,
        fall_history: 2
      }
    };
  },
  validations: {
    form: {
      u_fname: {
        required,
        onlyString,
        minLength: minLength(2)
      },
      u_lname: {
        required,
        onlyString,
        minLength: minLength(2)
      },
      date_of_birth: { required },
      gender: { required },
      weight: { required, decimal, minValue: minValue(0) },
      height: { required, decimal, minValue: minValue(0) },
      waistline: { required, decimal, minValue: minValue(0) },
      fall_history: { required, integer, minValue: minValue(0) }
    }
  },
  computed: {
    calBMI() {
      let bmi = parseFloat(
        this.form.weight / Math.pow(this.form.height / 100, 2)
      ).toFixed(2);
      if (isFinite(bmi) && bmi > 0) {
        return bmi;
      } else {
        return "0";
      }
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
      // Validate all fields
      this.$v.$touch();

      // เช็คว่าในฟอร์มไม่มี error
      if (!this.$v.$invalid) {
        // alert("complete");
        this.createUsers()
          .then(() => {
            this.$router.push({ name: "PatientList" });
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
              console.log(e);
              alert(e.message);
            }
          });
      } else {
        alert("โปรดกรอกข้อมูลให้ถูกต้องทุกช่อง");
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
