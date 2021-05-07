<template>
  <div>
    <section>
      <div class="columns">
        <div class="column is-1">
          <div>
            <Sidebar />
          </div>
        </div>

        <div class="column is-11">
          <div class="assName card mt-6 mr-6">
            <p
              class="card-header-title"
              style="color: white; background-color: #1e3a8a"
            >
              แบบประเมินช่องปากผู้สูงอายุ
            </p>
            <div class="card-content">
              <div class="content">
                <p>
                  <u>ข้อแนะนำ</u>
                  การประเมินสุขภาพช่องปากผู้สูงอายุเป็นการประเมินพฤติกรรมการดูแลสุขภาพช่องปาก
                  สภาวะเสี่ยงของสุขภาพช่องปาก
                  และการส่งต่อเพื่อรับการรักษาทางทันตะกรรม
                  ตามปัญหาและความต้องการของผู้สูงอายุ
                </p>
              </div>
            </div>
          </div>
          <div class="card mt-5 mr-6">
            <div class="card-content">
              <div class="content">
                <h5 style="text-align: left">
                  <u>ส่วนที่ 1 ประเมินพฤติกรรมเสี่ยงต่อสุขภาพช่องปาก</u>
                </h5>
                <p>
                  เพื่อให้ผู้สูงอายุทราบถึงพฤติกรรมการดูแลสุขภาพช่องปากของตนเองว่ามีความเสี่ยงต่อการเกิดปัญหาสุขภาพปากหรือไม่
                  และปรับพฤติกรรมเพื่อดูแลช่องปากที่เหมาะสม
                </p>
              </div>
            </div>
          </div>

          <div class="questions">
            <div class="card mr-6">
              <header class="quesHeader">
                <u>1. ประเมินพฤติกรรมเสี่ยงต่อสุขภาพช่องปาก</u>
              </header>
              <div
                class="card-content"
                v-for="ques in form.slice(6, 7)"
                :key="ques.ques_id"
              >
                <div class="quesContent content">
                  <p>{{ ques.ques }}</p>
                  <div v-for="ch in ques.choice" :key="ch.ans_id">
                    <b-field>
                      <b-radio
                        id="ques.ques_id"
                        v-model="ques.ans"
                        :native-value="ch.ans_value"
                        type="is-info"
                        @change.native="
                          e =>
                            setAns({
                              id: ques.ques_id,
                              value: parseInt(e.target.value),
                              title: ch.ans_title
                            })
                        "
                      >
                      </b-radio>
                      <label id="ques.ques_id" for="">{{ ch.ans_title }}</label>
                    </b-field>
                  </div>
                </div>
                <div
                  class="quesContent content"
                  v-for="ques in form.slice(7, 9)"
                  :key="ques.ques_id"
                >
                  <p>{{ ques.ques }}</p>
                  <div v-for="ch in ques.choice" :key="ch.ans_id">
                    <b-field>
                      <b-radio
                        id="ques.ques_id"
                        v-model="ques.ans"
                        :native-value="ch.ans_value"
                        type="is-info"
                        @change.native="
                          e =>
                            setAns({
                              id: ques.ques_id,
                              value: parseInt(e.target.value),
                              title: ch.ans_title
                            })
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

          <div class="questions">
            <div class="card mr-6">
              <header class="quesHeader">
                <u>2. ประเมินสภาวะเสี่ยงต่อการเกิดโรคในช่องปาก</u>
              </header>
              <div
                class="card-content"
                v-for="ques in form.slice(9, 11)"
                :key="ques.ques_id"
              >
                <div class="quesContent content">
                  <p>{{ ques.ques }}</p>
                  <div v-for="ch in ques.choice" :key="ch.ans_id">
                    <b-field>
                      <b-radio
                        id="ques.ques_id"
                        v-model="ques.ans"
                        :native-value="ch.ans_value"
                        type="is-info"
                        @change.native="
                          e =>
                            setAns({
                              id: ques.ques_id,
                              value: parseInt(e.target.value),
                              title: ch.ans_title
                            })
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
              <p><u>ส่วนที่ 2 ประเมินสุขภาพช่องปากผู้สูงอายุ</u></p>
            </div>
          </div>

          <div
            class="questions"
            v-for="ques in form.slice(11, 18)"
            :key="ques.ques_id"
          >
            <div class="card mr-6">
              <div class="card-content">
                <div class="partTwoQues content">
                  <p>{{ ques.ques }}</p>
                  <div v-for="ch in ques.choice" :key="ch.ans_id">
                    <b-field>
                      <b-radio
                        id="ques.ques_id"
                        v-model="ques.ans"
                        :native-value="ch.ans_value"
                        type="is-info"
                        @change.native="
                          e =>
                            setAns({
                              id: ques.ques_id,
                              value: parseInt(e.target.value),
                              title: ch.ans_title
                            })
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
              <router-link to="/forms/form1">
                <b-button class="mr-2">
                  <b-icon icon="chevron-left"> </b-icon>
                </b-button>
              </router-link>
              <router-link to="/forms/form3">
                <b-button>
                  <b-icon icon="chevron-right"> </b-icon>
                </b-button>
              </router-link>
            </div>
            <div class="column is-11 is-offset-4">
              <router-link to="/startpage">
                <b-button
                  class="back mr-2"
                  type="is-light"
                  style="
                    font-family: 'Kanit', sans-serif;
                    font-weight: 400;
                    color: #1e3a8a;
                  "
                  >กลับสู่หน้าหลัก</b-button
                >
              </router-link>
              <b-button
                class="assess"
                type="is-light"
                @click="sumResult()"
                style="
                  font-family: 'Kanit', sans-serif;
                  font-weight: 400;
                  color: #047857;
                "
                >ประเมินผล</b-button
              >
            </div>
          </div>
        </div>
        <b-modal v-model="isEditResult" :width="640">
          <div class="card">
            <header class="card-header">
              <p
                class="card-header-title"
                style="color: white; background-color: #1e3a8a"
              >
                ผลการประเมินช่องปากผู้สูงอายุ
              </p>
            </header>
            <div class="card-content" style="background-color: #f4f4f4">
              <div class="content has-text-left ml-6">
                การแปลผล
                หากมีความผิดปกติหรือมีความจำเป็นที่จะต้องได้รับการรักษา<br />ในข้อ
                1 - 5 ของแบบประเมินส่วนที่ 2
                ให้ทำการส่งต่อเพื่อเข้ารับบริการทางทันตกรรม<br />จากทันตบุคลากร
              </div>
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <p class="has-text-centered">
                      {{ anstitle1 }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <footer class="card-footer">
              <p
                class="card-footer-item"
                @click="isEditResult = false"
                style="color: #f90000"
              >
                ย้อนกลับ
              </p>
              <router-link
                class="card-footer-item"
                to="/forms/form3"
                @click="Finish()"
              >
                <p style="color: #047857">
                  ทำแบบประเมินถัดไป
                </p>
              </router-link>
            </footer>
          </div>
        </b-modal>
      </div>
    </section>
  </div>
</template>
<script>
import Sidebar from "@/components/sidebar.vue";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  components: {
    Sidebar
  },
  name: "Patientlist",
  data() {
    return {
      order: "is-right",
      size: "default",
      prevIcon: "chevron-left",
      nextIcon: "chevron-right",
      isEditResult: false,
      anstitle1: ""
    };
  },
  computed: {
    ...mapState({
      count: state => state.count,
      form: "json",
      ans: "keep_ans",
      user: "user"
    }),
    ...mapState(["formFinish"])
  },
  methods: {
    ...mapMutations(["setAns", "setFormFinish", "setOCA"]),
    ...mapActions(["getUserById"]),
    sumResult() {
      console.log(this.ans);
      this.isEditResult = true;
      this.anstitle1 = "";

      if (this.ans[11].ans_value == 1) {
        this.anstitle1 += " เนื้อเยื่อในช่องปากผิดปกติ";
      }
      if (this.ans[12].ans_value == 1) {
        this.anstitle1 += " เหงือกและอวัยวะปริทันต์ผิดปกติ";
      }
      if (this.ans[13].ans_value == 1) {
        this.anstitle1 += " ฟันผิดปกติ";
      }
      if (this.ans[14].ans_value == 1) {
        this.anstitle1 += " ปัญหาการเคี้ยวอาหารผิดปกติ";
      }
      if (this.ans[15].ans_value == 1) {
        this.anstitle1 += " ฟันเทียมผิดปกติ";
      } else if (
        this.ans[11].ans_value == 0 &&
        this.ans[12].ans_value == 0 &&
        this.ans[13].ans_value == 0 &&
        this.ans[14].ans_value == 0 &&
        this.ans[15].ans_value == 0
      ) {
        this.anstitle1 += "ไม่มีความผิดปกติด้านสุขภาพช่องปาก";
      }
      this.setOCA(this.anstitle1);
    },
    Finish() {
      this.formFinish.push("OCA");
      this.setFormFinish(this.formFinish);
      console.log(this.formFinish);
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log("before");
    next(vm => {
      vm.getUserById();
    });
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
.quesHeader {
  margin-top: 2vh;
  margin-left: 2vw;
  text-align: left;
}
.partTwoQues {
  margin-left: 1vw;
}
</style>
