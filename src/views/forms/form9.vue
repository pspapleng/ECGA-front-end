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
        <div class="column is-11">
          <div class="assName card mr-6">
            <header class="card-header">
              <p
                class="card-header-title"
                style="color: white; background-color: #1e3a8a"
              >
                การคัดกรองผู้สูงอายุที่ต้องได้รับการดูแลระยะยาว
              </p>
            </header>
            <div class="card-content">
              <div class="content">
                <p>
                  การคัดกรองผู้สูงอายุที่ต้องได้รับการดูแลระยะยาวมีทั้งหมด 5
                  ด้าน คือ ด้านสังคม ความสามารถในการมองเห็นและการได้ยิน
                  ภาวะหลงลืมและภาวะซึมเศร้า ภาวะเปราะบาง
                  และความสามารถในการทำกิจวัตรประจำวัน
                </p>
              </div>
            </div>
          </div>

          <div class="card mr-6">
            <div class="card-content">
              <p>
                <u>ส่วนที่ 1 ด้านสังคม (การอยู่อาศัย ที่อยู่อาศัย รายได้)</u>
              </p>
              <div class="content">
                <div
                  class="questions"
                  v-for="ques in form.slice(98, 101)"
                  :key="ques.ques_id"
                >
                  <p id="ques_title">
                    {{ ques.ques }}
                  </p>
                  <div v-for="ch in ques.choice" :key="ch.ans_id">
                    <b-field>
                      <b-radio
                        id="ques.ques_id"
                        v-model="ques.ans"
                        :native-value="ch.ans_value"
                        type="is-info"
                        @change.native="
                          e =>
                            setAns({ id: ques.ques_id, value: e.target.value })
                        "
                      >
                      </b-radio>
                      <label id="ques.ques_id" for="">{{ ch.ans_title }}</label>
                    </b-field>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card mr-6">
            <div class="card-content">
              <p><u>ส่วนที่ 2 ความสามารถในการมองเห็นและการได้ยิน</u></p>
              <div class="content">
                <div
                  class="questions"
                  v-for="ques in form.slice(101, 103)"
                  :key="ques.ques_id"
                >
                  <p id="ques_title">
                    {{ ques.ques }}
                  </p>
                  <div v-for="ch in ques.choice" :key="ch.ans_id">
                    <b-field>
                      <b-radio
                        id="ques.ques_id"
                        v-model="ques.ans"
                        :native-value="ch.ans_value"
                        type="is-info"
                        @change.native="
                          e =>
                            setAns({ id: ques.ques_id, value: e.target.value })
                        "
                      >
                      </b-radio>
                      <label id="ques.ques_id" for="">{{ ch.ans_title }}</label>
                    </b-field>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card mr-6">
            <div class="card-content">
              <p><u>ส่วนที่ 3 ภาวะหลงลืมและภาวะซึมเศร้า</u></p>
              <div class="content">
                <div
                  class="questions"
                  v-for="ques in form.slice(103, 104)"
                  :key="ques.ques_id"
                >
                  <p id="ques_title">
                    {{ ques.ques }}
                  </p>
                  <div v-for="ch in ques.choice" :key="ch.ans_id">
                    <b-field>
                      <b-radio
                        id="ques.ques_id"
                        v-model="ques.ans"
                        :native-value="ch.ans_value"
                        type="is-info"
                        @change.native="
                          e =>
                            setAns({ id: ques.ques_id, value: e.target.value })
                        "
                      >
                      </b-radio>
                      <label id="ques.ques_id" for="">{{ ch.ans_title }}</label>
                    </b-field>
                  </div>
                </div>
              </div>
              <div class="content">
                <p>ใน 2 สัปดาห์ที่ผ่านมา รวมวันนี้ ท่านมีความรู้สึก</p>
                <div
                  class="questions"
                  v-for="ques in form.slice(104, 106)"
                  :key="ques.ques_id"
                >
                  <p id="ques_title">
                    {{ ques.ques }}
                  </p>
                  <div v-for="ch in ques.choice" :key="ch.ans_id">
                    <b-field>
                      <b-radio
                        id="ques.ques_id"
                        v-model="ques.ans"
                        :native-value="ch.ans_value"
                        type="is-info"
                        @change.native="
                          e =>
                            setAns({ id: ques.ques_id, value: e.target.value })
                        "
                      >
                      </b-radio>
                      <label id="ques.ques_id" for="">{{ ch.ans_title }}</label>
                    </b-field>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card mr-6">
            <div class="card-content">
              <p><u>ส่วนที่ 4 ภาวะเปราะบาง</u></p>
              <div class="content">
                <div
                  class="questions"
                  v-for="ques in form.slice(106, 111)"
                  :key="ques.ques_id"
                >
                  <p id="ques_title">
                    {{ ques.ques }}
                  </p>
                  <div v-for="ch in ques.choice" :key="ch.ans_id">
                    <b-field>
                      <b-radio
                        id="ques.ques_id"
                        v-model="ques.ans"
                        :native-value="ch.ans_value"
                        type="is-info"
                        @change.native="
                          e =>
                            setAns({ id: ques.ques_id, value: e.target.value })
                        "
                      >
                      </b-radio>
                      <label id="ques.ques_id" for="">{{ ch.ans_title }}</label>
                    </b-field>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card mr-6">
            <div class="card-content">
              <p><u>ส่วนที่ 5 ความสามารถในการทำกิจวัตรประจำวัน</u></p>
              <div class="content">
                <p><u>กิจกรรมพื้นฐาน</u></p>
                <div
                  class="questions"
                  v-for="ques in form.slice(111, 121)"
                  :key="ques.ques_id"
                >
                  <p id="ques_title">
                    {{ ques.ques }}
                  </p>
                  <div v-for="ch in ques.choice" :key="ch.ans_id">
                    <b-field>
                      <b-radio
                        id="ques.ques_id"
                        v-model="ques.ans"
                        :native-value="ch.ans_value"
                        type="is-info"
                        @change.native="
                          e =>
                            setAns({ id: ques.ques_id, value: e.target.value })
                        "
                      >
                      </b-radio>
                      <label id="ques.ques_id" for="">{{ ch.ans_title }}</label>
                    </b-field>
                  </div>
                </div>
                <p><u>กิจกรรมพื้นฐาน</u></p>
                <div
                  class="questions"
                  v-for="ques in form.slice(121, 127)"
                  :key="ques.ques_id"
                >
                  <p id="ques_title">
                    {{ ques.ques }}
                  </p>
                  <div v-for="ch in ques.choice" :key="ch.ans_id">
                    <b-field>
                      <b-radio
                        id="ques.ques_id"
                        v-model="ques.ans"
                        :native-value="ch.ans_value"
                        type="is-info"
                        @change.native="
                          e =>
                            setAns({ id: ques.ques_id, value: e.target.value })
                        "
                      >
                      </b-radio>
                      <label id="ques.ques_id" for="">{{ ch.ans_title }}</label>
                    </b-field>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="columns mt-4">
            <div class="column is-1">
              <router-link to="/forms/form8">
                <b-button class="mr-2">
                  <b-icon icon="chevron-left"> </b-icon>
                </b-button>
              </router-link>
              <router-link to="/forms/form10">
                <b-button>
                  <b-icon icon="chevron-right"> </b-icon>
                </b-button>
              </router-link>
            </div>
            <div class="column is-11 is-offset-4">
              <router-link to="">
                <b-button
                  class="back mr-2"
                  type="is-light"
                  @click="backHome()"
                  style="font-family: 'Kanit', sans-serif; font-weight: 400; color: #1E3A8A"
                  >กลับสู่หน้าหลัก</b-button
                >
              </router-link>
              <b-button
                class="assess"
                type="is-light"
                @click="sumResult()"
                style="font-family: 'Kanit', sans-serif; font-weight: 400; color: #047857"
                >ประเมินผล</b-button
              >
            </div>
          </div>
        </div>
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
                href="/forms/form10"
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
// import assChooseBar from "@/components/assChooseBar.vue";
import { mapState, mapMutations } from "vuex";
// import question from "../assets/test.json";
export default {
  components: {
    Sidebar
    // assChooseBar,
  },
  name: "Patientlist",
  data() {
    return {
      // question,
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
      if (confirm("sure mai ka??")) {
        window.location.pathname = "startpage";
      }
    },
    ...mapMutations(["setAns"]),
    sumResult() {
      this.isEditResult = true;
      // console.log(ans)
      // for (var i = 0; i < 6; i++) {
      //     this.cal_ans += this.ans[i].ans_value
      // }
      // return this.cal_ans
    }
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
.card-header-title {
  font-size: 18px;
  font-weight: 500;
}
.content {
  font-size: 1rem;
  text-align: left;
}
.quesContent {
  margin-left: 60px;
}
.card {
  margin-top: 3vh;
}
p {
  text-align: left;
}
.ans {
  text-align: left;
  margin-left: 2vw;
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
