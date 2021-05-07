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
              การคัดกรองสุขภาวะทางตา
            </p>
            <div class="card-content">
              <div class="content">
                <p>
                  <u>ข้อแนะนำ</u>
                  การคัดกรองสุขภาวะทางตาเป็นการคัดกรองการมองเห็น (ระยะไกล -
                  ใกล้)
                  ที่มีผลต่อการใช้ชีวิตประจำวันและลักษณะการมองเห็นผิดปกติที่เป็นปัญหาและพบบ่อยในผู้สูงอายุ
                  ได้แก่ ต้อกระจก ต้อหิน และจอตาเสื่อม
                </p>
              </div>
            </div>
          </div>

          <div class="card mr-6">
            <div class="card-content">
              <div class="content">
                <div
                  class="questions"
                  v-for="ques in form.slice(38, 40)"
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
              <div class="content">
                <div
                  class="questions"
                  v-for="ques in form.slice(40, 42)"
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
              <div class="content">
                <div
                  class="questions"
                  v-for="ques in form.slice(42, 44)"
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
              <div class="content">
                <div
                  class="questions"
                  v-for="ques in form.slice(44, 46)"
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
              <router-link to="/forms/form4">
                <b-button class="mr-2">
                  <b-icon icon="chevron-left"> </b-icon>
                </b-button>
              </router-link>
              <router-link to="/forms/form6">
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

        <b-modal v-model="isEditResult" :width="640">
          <div class="card">
            <header class="card-header">
              <p
                class="card-header-title"
                style="color: white; background-color: #1E3A8A"
              >
                ผลการประเมินสุขภาวะทางตา
              </p>
            </header>
            <div class="card-content" style="background-color: #f4f4f4">
              <div class="content has-text-center">
                การพิจารณา
                <br />
                ถ้าตอบ ใช่ ข้อใดข้อหนึ่ง แสดงว่า มีปัญหาการมองเห็น
              </div>
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <p class="has-text-centered">
                      {{ anstitle }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <footer class="card-footer">
              <p
                class="card-footer-item"
                @click="isEditResult = false"
                style="color: #F90000"
              >
                ย้อนกลับ
              </p>
              <router-link
                class="card-footer-item"
                to="/forms/form6"
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
      anstitle: ""
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
    ...mapMutations(["setAns", "setFormFinish", "setEYES"]),
    ...mapActions(["getUserById"]),
    sumResult() {
      console.log(this.ans);
      this.isEditResult = true;
      this.anstitle = "";

      if (this.ans[38].ans_value == 1) {
        this.anstitle +=
          " นับนิ้วในระยะ 3 เมตรได้ถูกต้อง น้อยกว่า 3 ใน 4 ครั้ง";
      }
      if (this.ans[39].ans_value == 1) {
        this.anstitle += " อ่านหนังสือพิมพ์หน้าหนึ่งในระยะ 1 ฟุต ไม่ได้";
      }
      if (this.ans[40].ans_value == 1) {
        this.anstitle += " ตาข้างซ้ายมัวคล้ายหมอกบัง";
      }
      if (this.ans[41].ans_value == 1) {
        this.anstitle += " ตาข้างขวามัวคล้ายหมอกบัง";
      }
      if (this.ans[42].ans_value == 1) {
        this.anstitle += " ตาข้างซ้ายมองเห็นชัดแต่ตรงกลาง";
      }
      if (this.ans[43].ans_value == 1) {
        this.anstitle += " ตาข้างขวามองเห็นชัดแต่ตรงกลาง";
      }
      if (this.ans[44].ans_value == 1) {
        this.anstitle += " ตาข้างซ้ายมองเห็นจุดดำกลางภาพ";
      }
      if (this.ans[45].ans_value == 1) {
        this.anstitle += " ตาข้างขวามองเห็นจุดดำกลางภาพ";
      } else if (
        this.ans[38].ans_value == 0 &&
        this.ans[39].ans_value == 0 &&
        this.ans[40].ans_value == 0 &&
        this.ans[41].ans_value == 0 &&
        this.ans[42].ans_value == 0 &&
        this.ans[43].ans_value == 0 &&
        this.ans[44].ans_value == 0 &&
        this.ans[45].ans_value == 0
      ) {
        this.anstitle += "สุขภาวะทางตาปกติ";
      }
      this.setEYES(this.anstitle);
    },
    Finish() {
      this.formFinish.push("EYES");
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
</style>
