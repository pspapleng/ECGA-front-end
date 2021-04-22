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
          <div class="questions">
            <h1>แบบประเมินช่องปากผู้สูงอายุ</h1>
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">ข้อมูลแนะนำ</p>
              </header>
              <div class="card-content">
                <div class="content">
                  การประเมินสุขภาพช่องปากผู้สูงอายุเป็นการประเมินพฤติกรรมการดูแลสุขภาพช่องปาก
                  <br />
                  สภาวะเสี่ยงของสุขภาพช่องปาก
                  และการส่งต่อเพื่อรับการรักษาทางทันตะกรรม
                  ตามปัญหาและความต้องการของผู้สูงอายุ
                </div>
              </div>
            </div>
            <div class="part1">
              <p class="description">
                <u>ส่วนที่ 1 ประเมินพฤติกรรมเสี่ยงต่อสุขภาพช่องปาก</u>
              </p>
              <p class="subdes">
                เพื่อให้ผู้สูงอายุทราบถึงพฤติกรรมการดูแลสุขภาพช่องปากของตนเองว่ามีความเสี่ยงต่อการเกิดปัญหาสุขภาพปากหรือไม่
                และปรับพฤติกรรมเพื่อดูแลช่องปากที่เหมาะสม
              </p>
            </div>
            <h1>1. ประเมินพฤติกรรมการทำความสะอาดช่องปาก</h1>
            <div
              class="question"
              v-for="ques in form.slice(6, 9)"
              :key="ques.ques_id"
            >
              <p>{{ ques.ques }}</p>
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
            <h1>2. ประเมินสภาวะเสี่ยงต่อการเกิดโรคในช่องปาก</h1>
            <div
              class="question"
              v-for="ques in form.slice(9, 11)"
              :key="ques.ques_id"
            >
              <p>{{ ques.ques }}</p>
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
            <div class="part2">
              <p class="description">
                <u>ส่วนที่ 2 ประเมินสุขภาพช่องปากผู้สูงอายุ</u>
              </p>
            </div>
            <div
              class="question"
              v-for="ques in form.slice(11, 18)"
              :key="ques.ques_id"
            >
              <p>{{ ques.ques }}</p>
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
            <div class="component">
              <b-pagination
                :order="order"
                :size="size"
                :icon-prev="prevIcon"
                :icon-next="nextIcon"
              >
              </b-pagination>
              <span>
                <b-button
                  class="checkButt"
                  label="ประเมินผล"
                  type="is-light"
                  size=""
                  @click="isEditResult = true"
                />
                <b-button
                  class="checkButt"
                  label="กลับสู่หน้าหลัก"
                  type="is-light"
                  size=""
                  @click="backHome"
                />
              </span>
            </div>
          </div>
        </div>
        <!---->
        <!-- choose bar maybe fixed side nav-->
        <div class="column is-3" id="choosebar">
          <assChooseBar />
        </div>
        <b-modal v-model="isEditResult">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">ผลการประเมินช่องปากผู้สูงอายุ</p>
            </header>
            <div class="card-content">
              <div class="content">
                การแปรผล
                <br />
                หากมีความผิดปกติหรือมีความจำเป็นที่จะต้องได้รับการรักษาในข้อ 1 -
                5 แบบประเมินส่วนที่ 2
                ให้ทำการส่งต่อเพื่อเข้ารับบริการทางทันตกรรมจากทันตบุคลากร
              </div>
              <div class="innerCard">
                <div class="innerContent">
                  เนื้อเยื่อในช่องปากผิดปกติ
                  <br />
                  ปัญหาการเคี้ยว
                  <br />
                  โปรดส่งต่อเพื่อเข้ารับบริการทางทันตกรรมกับบุคลากร
                </div>
              </div>
            </div>
            <b-button
              id="nextAss"
              type="is-success"
              tag="a"
              href="/fallRisk"
              target=""
              >ทำแบบประเมินถัดไป</b-button
            >
          </div>
        </b-modal>
        <!---->
      </div>
    </section>
  </div>
</template>
<script>
import Sidebar from "@/components/sidebar.vue";
import assChooseBar from "@/components/assChooseBar.vue";
import { mapState, mapMutations } from "vuex";
import question from "../assets/test.json";
export default {
  components: {
    Sidebar,
    assChooseBar
  },
  name: "Patientlist",
  data() {
    return {
      question,
      // ans: '',
      order: "is-right",
      size: "default",
      prevIcon: "chevron-left",
      nextIcon: "chevron-right",
      isEditResult: false
      // oralCleaning: '',
      // fluorToothPaste: '',
      // everydayClean: '',
      // oralRisk: '',
      // oralInjury: '',
      // gumInjury: '',
      // teethInjury: '',
      // chewingProb: '',
      // falsetooth: '',
      // everDiag: '',
      // dentistNeed: ''
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
    backHome() {
      // console.log("tid laeww")
      // alert("Sure mai ka???")
      // window.location.href = "startpage";
      if (confirm("sure mai ka??") == true) {
        window.location.href = "startpage";
      }
    },
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
#radio {
  margin-top: 2vh;
}
.content {
  font-size: 1rem;
}
.card {
  margin-top: 3vh;
}
.description {
  text-align: left;
  margin-top: 2vh;
  font-weight: 700;
}
.subdes {
  text-align: left;
  margin-top: 1vh;
}
/* .part1 {
  width: 40vw;
} */
p {
  text-align: left;
}
.ans {
  text-align: left;
  margin-left: 2vw;
  /* display: flex; */
}
#ques.ques_id {
  margin: 10px 10px;
}
.component {
  display: flex;
}
.checkButt {
  float: right;
}
.innerCard {
  border-radius: 10px;
  display: block;
  text-align: center;
  height: auto;
  margin-bottom: 0.5vh;
  margin-left: 12vw;
  position: relative;
  width: 25vw;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.innerContent {
  margin-top: 2.2vh;
}
#nextAss {
  margin-bottom: 3vh;
}
</style>
