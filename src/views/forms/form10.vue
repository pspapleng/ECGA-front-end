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
              แบบประเมินภาวะกลั้นปัสสาวะไม่อยู่
            </p>
          </div>

          <div class="card mr-6">
            <div class="card-content">
              <div class="content">
                <div
                  class="questions"
                  v-for="ques in form.slice(127, 128)"
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
              <p>2. ท่านมีอาการกลั้นปัสสาวะไม่อยู่ดังต่อไปนี้หรือไม่</p>
              <p>2.1 ปัสสาวะเล็ด</p>
              <div class="content">
                <div
                  class="questions"
                  v-for="ques in form.slice(128, 131)"
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
              <p>2.2 ปัสสาวะราด/กลั้นปัสสาวะไม่ทัน</p>
              <div class="content">
                <div
                  class="questions"
                  v-for="ques in form.slice(131, 134)"
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
              <p>2.3 กลั้นปัสสาวะไม่อยู่เพราะปัสสาวะล้น</p>
              <div class="content">
                <div
                  class="questions"
                  v-for="ques in form.slice(134, 140)"
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
              <p>2.4 ปัสสาวะรดเครื่องนุ่งห่มเพราะมีขีดจำกัดทางร่างกาย</p>
              <div class="content">
                <div
                  class="questions"
                  v-for="ques in form.slice(140, 145)"
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

          <div
            class="questions"
            v-for="ques in form.slice(145, 148)"
            :key="ques.ques_id"
          >
            <div class="card mr-6">
              <div class="card-content">
                <div class="content">
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
              <router-link to="/forms/form9">
                <b-button class="mr-2">
                  <b-icon icon="chevron-left"> </b-icon>
                </b-button>
              </router-link>
              <router-link to="/forms/form11">
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
                ผลการประเมินภาวะกลั้นปัสสาวะไม่อยู่ (พิจารณาจากข้อ 3 และ 4)
              </p>
            </header>
            <div class="card-content" style="background-color: #f4f4f4">
              <div class="content has-text-left ml-6">
                การพิจารณา
                <br />
                รุนแรงมาก =
                ปริมาณปัสสาวะที่กลั้นไม่อยู่มากถึงระดับเปียกถึงผ้านุ่งชั้นนอก<br />และ
                / หรือ เกิดอาการบ่อยมาก
                <br />
                รุนแรงปานกลาง = ปริมาณปัสสาวะมากระดับชุ่มกางเกง<br />และ / หรือ
                เกิดอาการบ่อยปานกลาง
                <br />
                รุนแรงน้อย =
                ปริมาณปัสสาวะที่กลั้นไม่อยู่ไม่กี่หยดและเกิดอาการบ่อยเล็กน้อย
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
                to="/forms/form11"
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
      anstitle: "",
      ansvalue: 0
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
    ...mapMutations(["setAns", "setFormFinish", "setUIA"]),
    ...mapActions(["getUserById"]),
    sumResult() {
      console.log(this.ans);
      this.isEditResult = true;
      this.anstitle = "";
      this.ansvalue = 0;

      if (this.ans[145].ans_value == 3 || this.ans[146].ans_value == 3) {
        this.anstitle = "มีการกลั้นปัสสาวะไม่อยู่ในระดับรุนแรงมาก";
      } else if (this.ans[145].ans_value == 2 || this.ans[146].ans_value == 2) {
        this.anstitle = "มีการกลั้นปัสสาวะไม่อยู่ในระดับรุนแรงปานกลาง";
      } else if (this.ans[145].ans_value == 1 && this.ans[146].ans_value == 1) {
        this.anstitle = "มีการกลั้นปัสสาวะไม่อยู่ในระดับรุนแรงน้อย";
      }
      this.setUIA(this.anstitle);
    },
    Finish() {
      this.formFinish.push("UIA");
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
