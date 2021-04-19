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
              <h1>{{ ques.ques }}</h1>
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
              <h1>{{ ques.ques }}</h1>
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
            <div class="question">
              <div
                class="question"
                v-for="ques in form.slice(11, 18)"
                :key="ques.ques_id"
              >
                <h1>{{ ques.ques }}</h1>
                <div class="ans" v-for="ch in ques.choice" :key="ch.ans_id">
                  <!-- <template :v-show="ch.ans_value"> -->
                  <b-field>
                    <b-radio-button
                      :value="ch.ans_value"
                      v-model="ques.ans"
                      @change="
                        e => setAns({ id: ques.ques_id, value: e.target.value })
                      "
                      type="is-success is-light is-outlined"
                    >
                      <b-icon icon="check"></b-icon>
                      <span>{{ ch.ans_title }} yey</span>
                    </b-radio-button>

                    <!-- </template> -->
                    <!-- <template :v-show="ch.ans_value"> -->
                    <b-radio-button
                      :value="ch.ans_value"
                      v-model="ques.ans"
                      @change="
                        e => setAns({ id: ques.ques_id, value: e.target.value })
                      "
                      type="is-danger is-light is-outlined"
                    >
                      <b-icon icon="close"></b-icon>
                      <span>{{ ch.ans_title }}</span>
                    </b-radio-button>
                  </b-field>
                  <!-- </template> -->
                </div>
              </div>
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
.part1 {
  width: 40vw;
}
.description {
  margin-top: 3vh;
  text-align: left;
  font-weight: 800;
}
.subdes {
  text-align: left;
}
</style>
