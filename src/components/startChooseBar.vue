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
        v-if="UIA == true"
      ></i>
      <i class="fas fa-check-circle" id="checkIcon" v-if="UIA == false"></i>
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
        v-if="EYES == true"
      ></i>
      <i class="fas fa-check-circle" id="checkIcon" v-if="EYES == false"></i>
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
        v-if="KNEE == true"
      ></i>
      <i class="fas fa-check-circle" id="checkIcon" v-if="KNEE == false"></i>
      <label for="">แบบประเมินสุขภาวะทางตา</label>
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
        >แบบประเมินความเศร้า <br />
        ในผู้สูงอายุไทย 15 ข้อ</label
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
        v-if="OSTA == true"
      ></i>
      <i class="fas fa-check-circle" id="checkIcon" v-if="OSTA == false"></i>
      <label for="">แบบประเมิน MMSE - Thai 2002</label>
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
        >แบบประเมินผู้สูงอายุที่ต้องได้รับ <br />
        การดูแลระยะยาว</label
      >
    </div>
    <div class="assChoice">
      <i
        class="fas fa-check-circle"
        style="color: green"
        id="checkIcon"
        v-if="SLEEP == true"
      ></i>
      <i class="fas fa-check-circle" id="checkIcon" v-if="SLEEP == false"></i>
      <label for="">แบบประเมินภาวะกลั้นปัสสาวะไม่อยู่</label>
    </div>
    <div class="assChoice">
      <i
        class="fas fa-check-circle"
        style="color: green"
        id="checkIcon"
        v-if="IQCODE == true"
      ></i>
      <i class="fas fa-check-circle" id="checkIcon" v-if="IQCODE == false"></i>
      <label for="">แบบประเมินปัญหาการนอน</label>
    </div>
    <div class="assChoice">
      <i
        class="fas fa-check-circle"
        style="color: green"
        id="checkIcon"
        v-if="TGDS15 == true"
      ></i>
      <i class="fas fa-check-circle" id="checkIcon" v-if="TGDS15 == false"></i>
      <label for="">แบบประเมินโรคข้อเข่าเสื่อมทางคลินิก</label>
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
      <label for="">แบบประเมินความเสี่ยงต่อโรคกระดูกพรุน</label>
    </div>
    <div class="buttons" id="startButton">
      <b-button type="is-success" tag="a" href="/forms/form1" target=""
        >เริ่มทำแบบประเมิน</b-button
      >
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
      num: 0
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
        }
        if (this.formFinish[i] == "OCA") {
          this.OCA = true;
        }
        if (this.formFinish[i] == "UIA") {
          this.UIA = true;
        }
        if (this.formFinish[i] == "EYES") {
          this.EYES = true;
        }
        if (this.formFinish[i] == "KNEE") {
          this.KNEE = true;
        }
        if (this.formFinish[i] == "LTTA") {
          this.LTTA = true;
        }
        if (this.formFinish[i] == "MMSE") {
          this.MMSE = true;
        }
        if (this.formFinish[i] == "OSTA") {
          this.OSTA = true;
        }
        if (this.formFinish[i] == "TUGT") {
          this.TUGT = true;
        }
        if (this.formFinish[i] == "SLEEP") {
          this.SLEEP = true;
        }
        if (this.formFinish[i] == "IQCODE") {
          this.IQCODE = true;
        }
        if (this.formFinish[i] == "TGDS15") {
          this.TGDS15 = true;
        }
        if (this.formFinish[i] == "FallRisk") {
          this.FallRisk = true;
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
      console.log(this.checkForm);
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
