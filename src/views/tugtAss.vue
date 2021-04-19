<template>
  <div>
    <section>
      <div class="columns">
        <!-- side bar -->
        <div class="column is-1">
          <div>
            <Sidebar />
          </div>
        </div>
        <!---->
        <!-- questions -->
        <div class="column is-8">
          <h1>แบบคัดกรองภาวะหกล้ม (TIME UP AND GO TEST : TUGT)</h1>
          <div class="card" id="description">
            <header class="card-header" style="background-color: #1e3a8a">
              <p class="card-header-title is-centered" style="color: white">
                ข้อมูลแนะนำ
              </p>
            </header>
            <div class="card-content">
              <div class="content">
                เป็นการทดสอบด้วยการเดินตามวิธีที่กำหนดโดยสังเกตท่าเดินและจับเวลาที่ใช้ในการเดิน
              </div>
            </div>
          </div>
          <div class="card" id="howTo">
            <header class="card-header" style="background-color: #1e3a8a">
              <p class="card-header-title is-centered" style="color: white">
                วิธีการประเมิน
              </p>
            </header>
            <div class="card-content">
              <div class="content">
                <p>
                  <u>วิธีการประเมิน</u> :
                  ให้ผู้สูงอายุลุกขึ้นจากเก้าอี้ที่มีที่ท้าวแขน เดินเป็นเส้นตรง
                  ระยะทาง 3 เมตร หมุนตัวและเดินกลับมานั่งที่เดิม
                </p>
                <img src="@/assets/tugt.png" />
              </div>
            </div>
          </div>
          <p id="caution">
            <u style="color: red">ข้อควรระวัง</u> :
            ผู้สูงอายุมีโอกาสที่จะหกล้มมากกว่าวัยอื่น ดังนั้น
            ผู้ทดสอบจึงควรระมัดระวังขณะทำการทดสอบ
          </p>
          <div
            class="questions"
            v-for="ques in form.slice(28, 36)"
            :key="ques.ques_id"
          >
            <h1 id="ques_title">
              {{ ques.ques }}
            </h1>
            <div class="ans" v-for="ch in ques.choice" :key="ch.ans_id">
              <input
                id="ques.ques_id"
                type="radio"
                :value="ch.ans_value"
                v-model="ques.ans"
                @change="
                  e => setAns({ id: ques.ques_id, value: e.target.value })
                "
              />
              <label id="ques.ques_id" for="">{{ ch.ans_title }}</label
              ><br />
            </div>
          </div>
          <div class="card" id="description">
            <header class="card-header" style="background-color: #1e3a8a">
              <p class="card-header-title is-centered" style="color: white">
                การประเมิน Full tandem stand
              </p>
            </header>
            <div class="card-content">
              <div class="content">
                <p><u>วิธีการประเมิน</u></p>
                <p>
                  1. ยืนให้สันเท้าข้างใดข้างหนึ่งแตะปลายเท้าของเท้าอีกข้างหนึ่ง
                </p>
                <p>2. ผู้ถูกทดสอบสามารถลงน้ำหนักขาข้างใดก็ได้ตามถนัด</p>
                <p><u>การบันทึกผลการประเมิน</u></p>
                <p>
                  1. บันทึกว่าผู้ถูกทดสอบสามารถยืนทรงตัวตามรูป "ได้" หรือ
                  "ไม่ได้"
                </p>
                <p>2. บันทึกเวลาที่ผู้ถูกทดสอบสามารถยืนทรงตัว ตามการยืนได้</p>
              </div>
            </div>
          </div>
          <div
            class="questions"
            v-for="ques in form.slice(36, 38)"
            :key="ques.ques_id"
          >
            <h1 id="ques_title">
              {{ ques.ques }}
            </h1>
            <div class="ans" v-for="ch in ques.choice" :key="ch.ans_id">
              <input
                id="ques.ques_id"
                type="radio"
                :value="ch.ans_value"
                v-model="ques.ans"
                @change="
                  e => setAns({ id: ques.ques_id, value: e.target.value })
                "
              />
              <label id="ques.ques_id" for="">{{ ch.ans_title }}</label
              ><br />
            </div>
          </div>
        </div>
        <!---->
        <!-- choose bar maybe fixed side nav-->
        <div class="column is-3" id="choosebar">
          <!-- <assChooseBar /> -->
        </div>
        <!---->
      </div>
    </section>
  </div>
</template>
<script>
import Sidebar from "@/components/sidebar.vue";
// import assChooseBar from "@/components/assChooseBar.vue";
import { mapState, mapMutations } from "vuex";
import question from "../assets/test.json";
export default {
  components: {
    Sidebar
    // assChooseBar
  },
  name: "Patientlist",
  data() {
    return {
      question
      // canWalk: '',
      // cantWalk: '',
      // howWalk: '',
      // walkMin: '',
      // walkSec: '',
      // walkStep: '',
      // walkConfidence: '',
      // walkEquip: '',
      // shoeSuite: '',
      // shoeFreq: '',
      // pantSuite: '',
      // fullTanCanWalk: '',
      // fullTanWalkMin: '',
      // fullTanWalkSec: '',
      // fullTanCantWalk: '',
      // fullTanHowWalk: ''
    };
  },
  computed: {
    ...mapState({
      count: state => state.count,
      form: "json"
      // {
      //   get () {
      //   console.log(this.$store.state.json)
      //   return this.$store.state.json
      // }}
    })
  },
  methods: {
    ...mapMutations(["setAns"])
  }
};
</script>
<style>
h1 {
  font-weight: 600;
  margin-top: 2vh;
  margin-left: 0vw;
  text-align: left;
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
#startButton {
  width: 200px;
  bottom: 1px;
}
.assChoice {
  margin-top: 1vh;
}
#checkIcon {
  margin-right: 0.5vw;
}
#startButton {
  position: fixed;
  bottom: 6vh;
  right: 4vw;
}
#description {
  margin-top: 3vh;
}
#howTo {
  margin-top: 3vh;
}
</style>
