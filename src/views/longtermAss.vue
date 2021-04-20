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
          <h1>การคัดกรองผู้สูงอายุที่ต้องได้รับการดูแลระยะยาว</h1>
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">ข้อมูลแนะนำ</p>
            </header>
            <div class="card-content">
              <div class="content">
                การคัดกรองผู้สูงอายุที่ต้องได้รับการดูแลระยะยาวมีทั้งหมด 5 ด้าน
                คือ ด้านสังคม ความสามารถในการมองเห็นและการได้ยิน
                ภาวะหลงลืมและภาวะซึมเศร้า ภาวะเปราะบาง
                และความสามารถในการทำกิจวัตรประจำวัน
              </div>
            </div>
          </div>
          <h1><u>ส่วนที่ 1 ด้านสังคม (การอยู่อาศัย ที่อยู่ศัย รายได้)</u></h1>
          <div
            class="questions"
            v-for="ques in form.slice(98, 101)"
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
          <h1><u>ส่วนที่ 2 ความสามารถในการมองเห็นและการได้ยิน</u></h1>
          <div
            class="questions"
            v-for="ques in form.slice(101, 103)"
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
          <h1><u>ส่วนที่ 3 ภาวะหลงลืมและภาวะซึมเศร้า</u></h1>
          <div
            class="questions"
            v-for="ques in form.slice(103, 106)"
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
          <h1><u>ส่วนที่ 4 ภาวะเปราะบาง</u></h1>
          <div
            class="questions"
            v-for="ques in form.slice(106, 111)"
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
          <h1><u>ส่วนที่ 5 ความสามารถในการทำกิจวัตรประจำวัน</u></h1>
          <div
            class="questions"
            v-for="ques in form.slice(111, 127)"
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
                label="กลับสู่หน้าหลัก"
                type="is-light"
                size=""
                @click="backHome"
              />
              <b-button
                class="checkButt"
                label="ประเมินผล"
                type="is-light"
                size=""
                @click="isEditResult = true"
              />
            </span>
          </div>
        </div>
        <!---->
        <!-- choose bar maybe fixed side nav-->
        <div class="column is-3" id="choosebar">
          <assChooseBar />
        </div>
        <!---->
        <b-modal v-model="isEditResult">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                ผลการประเมินคัดกรองผู้สูงอายุที่ต้องได้รับการดูแลระยะยาว
              </p>
            </header>
            <div class="card-content">
              <div class="content">
                การแปลผล
                <br />
                คะแนน 0 - 16 คะแนน = ไม่ต้องได้รับการดูแลระยะยาว
                สนับสนุนการส่งเสริมสุขภาพ
                <br />
                คะแนน 17 - 19 คะแนน = ต้องเฝ้าระวัง ประเมินซ้ำทุก 6 เดือน หรือ 1
                ปี
                <br />
                คะแนน 20 คะแนนขึ้นไป = ต้องได้รับการดูแลระยะยาว
                ประเมินซ้ำทุกเดือนก่อนพบแพทย์
                <ol>
                  <li>โรคประจำตัว</li>
                  <li>ด้านสังคม</li>
                  <li>ภาวะซึมเศร้า</li>
                  <li>สมรรถภาพสมอง หรือ ภาวะสมองเสื่อม</li>
                </ol>
                <div class="innerCard">
                  <div class="innerContent">
                    คะแนนที่ได้ทั้งหมด 99 คะแนน
                    <br />
                    ต้องได้รับการดูแลระยะยาวและประเมินซ้ำทุกเดือนก่อนพบแพทย์
                  </div>
                </div>
              </div>
              <b-button
                id="nextAss"
                type="is-success"
                tag="a"
                href="/toiletAss"
                target=""
                >ทำแบบประเมินถัดไป</b-button
              >
            </div>
          </div>
        </b-modal>
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
      order: "is-right",
      size: "default",
      prevIcon: "chevron-left",
      nextIcon: "chevron-right",
      isEditResult: false
      // pplTakeCare: '',
      // habitatType: '',
      // inCome: '',
      // sightLevel: '',
      // forgetThing: '',
      // twoWeeksDep: '',
      // twoWeeksBored: '',
      // yearLoseWeight: '',
      // alwaysTried: '',
      // cantWalkAlone: '',
      // thirtySecTUGT: '',
      // cleanHouse: '',
      // handsWeakness: '',
      // getUpBed: '',
      // tidyTheirSelves: '',
      // takeBath: '',
      // getDress: '',
      // eatAlone: '',
      // afterToilet: '',
      // walkAtHome: '',
      // stepStair: '',
      // holdToilet: '',
      // holdHugeToilet: '',
      // walkOutHome: '',
      // cookFood: '',
      // goShopping: '',
      // publicTransport: '',
      // takeMed: ''
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
.component {
  display: flex;
}
.innerCard {
  border-radius: 10px;
  display: block;
  text-align: center;
  height: 7vh;
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
