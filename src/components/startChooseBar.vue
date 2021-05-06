<template>
  <div id="bigBox" class="box has-background-light has-text-left">
    <div>
      <header id="choosebarHeader">หัวข้อแบบประเมินทั้งหมด</header>
    </div>
    <div class="assChoice">
      <i
        class="fas fa-check-circle"
        style="color: green"
        id="checkIcon"
        v-if="MNA == true"
      ></i>
      <i class="fas fa-check-circle" id="checkIcon" v-if="MNA == false"></i>
      <label for="">แบบประเมินภาวะโภชนาการ (MNA)</label>
    </div>
    <div class="assChoice">
      <i
        class="fas fa-check-circle"
        style="color: green"
        id="checkIcon"
        v-if="OCA == true"
      ></i>
      <i class="fas fa-check-circle" id="checkIcon" v-if="OCA == false"></i>
      <label for="">แบบประเมินช่องปากในผู้สูงอายุ</label>
    </div>
    <div class="assChoice">
      <i
        class="fas fa-check-circle"
        style="color: green"
        id="checkIcon"
        v-if="FallRisk == true"
      ></i>
      <i
        class="fas fa-check-circle"
        id="checkIcon"
        v-if="FallRisk == false"
      ></i>
      <label for=""
        >แบบประเมินภาวะหกล้ม <br />
        (Fall Risk Assessment Tool)</label
      >
    </div>
    <div class="assChoice">
      <i
        class="fas fa-check-circle"
        style="color: green"
        id="checkIcon"
        v-if="TUGT == true"
      ></i>
      <i class="fas fa-check-circle" id="checkIcon" v-if="TUGT == false"></i>
      <label for=""
        >แบบประเมินภาวะหกล้ม <br />
        (TIME UP AND GO TEST)</label
      >
    </div>
    <div class="assChoice">
      <i
        class="fas fa-check-circle"
        style="color: green"
        id="checkIcon"
        v-if="EYES == true"
      ></i>
      <i class="fas fa-check-circle" id="checkIcon" v-if="EYES == false"></i>
      <label for="">แบบประเมินสุขภาวะทางตา</label>
    </div>
    <div class="assChoice">
      <i
        class="fas fa-check-circle"
        style="color: green"
        id="checkIcon"
        v-if="TGDS15 == true"
      ></i>
      <i class="fas fa-check-circle" id="checkIcon" v-if="TGDS15 == false"></i>
      <label for=""
        >แบบประเมินความเศร้า <br />
        ในผู้สูงอายุไทย 15 ข้อ</label
      >
    </div>
    <div class="assChoice">
      <i
        class="fas fa-check-circle"
        style="color: green"
        id="checkIcon"
        v-if="IQCODE == true"
      ></i>
      <i class="fas fa-check-circle" id="checkIcon" v-if="IQCODE == false"></i>
      <label for=""
        >แบบประเมินคัดกรองความจำเสื่อม <br />
        สำหรับผู้สูงอายุไทย</label
      >
    </div>
    <div class="assChoice">
      <i
        class="fas fa-check-circle"
        style="color: green"
        id="checkIcon"
        v-if="MMSE == true"
      ></i>
      <i class="fas fa-check-circle" id="checkIcon" v-if="MMSE == false"></i>
      <label for="">แบบประเมิน MMSE - Thai 2002</label>
    </div>
    <div class="assChoice">
      <i
        class="fas fa-check-circle"
        style="color: green"
        id="checkIcon"
        v-if="LTTA == true"
      ></i>
      <i class="fas fa-check-circle" id="checkIcon" v-if="LTTA == false"></i>
      <label for=""
        >แบบประเมินผู้สูงอายุที่ต้องได้รับ <br />
        การดูแลระยะยาว</label
      >
    </div>
    <div class="assChoice">
      <i
        class="fas fa-check-circle"
        style="color: green"
        id="checkIcon"
        v-if="UIA == true"
      ></i>
      <i class="fas fa-check-circle" id="checkIcon" v-if="UIA == false"></i>
      <label for="">แบบประเมินภาวะกลั้นปัสสาวะไม่อยู่</label>
    </div>
    <div class="assChoice">
      <i
        class="fas fa-check-circle"
        style="color: green"
        id="checkIcon"
        v-if="SLEEP == true"
      ></i>
      <i class="fas fa-check-circle" id="checkIcon" v-if="SLEEP == false"></i>
      <label for="">แบบประเมินปัญหาการนอน</label>
    </div>
    <div class="assChoice">
      <i
        class="fas fa-check-circle"
        style="color: green"
        id="checkIcon"
        v-if="KNEE == true"
      ></i>
      <i class="fas fa-check-circle" id="checkIcon" v-if="KNEE == false"></i>
      <label for="">แบบประเมินโรคข้อเข่าเสื่อมทางคลินิก</label>
    </div>
    <div class="assChoice">
      <i
        class="fas fa-check-circle"
        style="color: green"
        id="checkIcon"
        v-if="OSTA == true"
      ></i>
      <i class="fas fa-check-circle" id="checkIcon" v-if="OSTA == false"></i>
      <label for="">แบบประเมินความเสี่ยงต่อโรคกระดูกพรุน</label>
    </div>
    <div class="buttons" id="startButton">
      <router-link :to="{ name: linker }">
        <b-button type="is-success" tag="a">เริ่มทำแบบประเมิน</b-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      MNA: false,
      OCA: false,
      UIA: false,
      EYES: false,
      KNEE: false,
      LTTA: false,
      MMSE: false,
      OSTA: false,
      TUGT: false,
      SLEEP: false,
      IQCODE: false,
      TGDS15: false,
      FallRisk: false,
      num: 0,
      linker: "forms/form1",
    };
  },
  mounted() {
    this.check();
  },
  methods: {
    ...mapMutations(["setCheckForm"]),
    check() {
      var num = this.formFinish.length;
      for (var i = 0; i < num; i++) {
        if (this.formFinish[i] == "MNA") {
          this.MNA = true;
          this.linker = "forms/form2";
        }
        if (this.formFinish[i] == "OCA") {
          this.OCA = true;
          this.linker = "forms/form3";
        }
        if (this.formFinish[i] == "FallRisk") {
          this.FallRisk = true;
          this.linker = "forms/form4";
        }
        if (this.formFinish[i] == "TUGT") {
          this.TUGT = true;
          this.linker = "forms/form5";
        }
        if (this.formFinish[i] == "EYES") {
          this.EYES = true;
          this.linker = "forms/form6";
        }
        if (this.formFinish[i] == "TGDS15") {
          this.TGDS15 = true;
          this.linker = "forms/form7";
        }
        if (this.formFinish[i] == "IQCODE") {
          this.IQCODE = true;
          this.linker = "forms/form8";
        }
        if (this.formFinish[i] == "MMSE") {
          this.MMSE = true;
          this.linker = "forms/form9";
        }
        if (this.formFinish[i] == "LTTA") {
          this.LTTA = true;
          this.linker = "forms/form10";
        }
        if (this.formFinish[i] == "UIA") {
          this.UIA = true;
          this.linker = "forms/form11";
        }
        if (this.formFinish[i] == "SLEEP") {
          this.SLEEP = true;
          this.linker = "forms/form12";
        }
        if (this.formFinish[i] == "KNEE") {
          this.KNEE = true;
          this.linker = "forms/form13";
        }
        if (this.formFinish[i] == "OSTA") {
          this.OSTA = true;
          this.linker = "forms/form13";
        }
      }
      this.num =
        this.MNA +
        this.OCA +
        this.UIA +
        this.EYES +
        this.KNEE +
        this.LTTA +
        this.MMSE +
        this.OSTA +
        this.TUGT +
        this.SLEEP +
        this.IQCODE +
        this.TGDS15 +
        this.FallRisk;
      this.setCheckForm(num);
      console.log(this.linker);
    },
    doAssign() {
      this.router.push({ name: "forms/form1" });
    },
  },
  computed: {
    ...mapState(["formFinish", "checkForm"]),
  },
  name: "startChooseBar",
};
</script>
<style>
#bigBox {
  position: fixed;
  height: 100%;
  width: 320px;
  right: 0px;
}
#choosebarHeader {
  text-align: left;
  margin-top: 5vh;
  margin-bottom: 2vh;
  font-size: 1.125rem;
  font-weight: 600;
}
#choosebar {
  text-align: left;
}
.assChoice {
  margin-top: 1vh;
}
#checkIcon {
  margin-right: 0.5vw;
}
#startButton {
  position: fixed;
  bottom: 30vh;
  left: 83vw;
}
</style>
