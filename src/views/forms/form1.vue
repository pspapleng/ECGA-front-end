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
          <div class="assName card mt-6 ml-1 mr-6">
            <p
              class="card-header-title"
              style="color: white; background-color: #1e3a8a"
            >
              แบบประเมินภาวะโภชนาการ (MNA)
            </p>
          </div>
          <div
            class="questions"
            v-for="ques in form.slice(0, 5)"
            :key="ques.ques_id"
          >
            <div class="card mr-6">
              <div class="card-content">
                <div class="content">
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
                              title: ch.ans_title,
                              u_id: UserId
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
            v-for="ques in form.slice(5, 6)"
            :key="ques.ques_id"
          >
            <div class="card mr-6">
              <div class="card-content">
                <div class="content">
                  <p>{{ ques.ques }}</p>
                  <label for="" style="float: left; margin-left: 2vw"
                    >BMI
                  </label>
                  <input
                    id="ques.ques_id"
                    style="float: left; margin-left: 5px"
                    type="text"
                    v-model="ques.ans_input"
                    :placeholder="user.bmi"
                    disabled
                  /><br />
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
                              title: ch.ans_title,
                              u_id: UserId
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
              <b-button class="mr-2" disabled>
                <b-icon icon="chevron-left"> </b-icon>
              </b-button>
              <router-link to="/forms/form2">
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
                ผลการประเมินภาวะโภชนาการ (MNA)
              </p>
            </header>
            <div class="card-content" style="background-color: #f4f4f4">
              <div class="content has-text-left ml-6">
                การพิจารณา (คะแนนเต็ม 14 คะแนน)
                <br />
                12 - 14 คะแนน = ภาวะโภชนาการปกติ
                <br />
                8 - 11 คะแนน = มีความเสี่ยงต่อการเกิดภาวะขาดสารอาหาร
                <br />
                0 - 7 คะแนน = มีภาวะขาดสารอาหาร
              </div>
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <p class="has-text-centered">
                      ได้คะแนน {{ ansvalue }} คะแนน {{ anstitle }}
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
                to="/forms/form2"
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
      ansvalue: 0,
      anstitle: "",
      resultans: ""
    };
  },
  computed: {
    ...mapState({
      count: state => state.count,
      form: "json",
      ans: "keep_ans",
      user: "user"
    }),
    ...mapState(["formFinish", "UserId"])
  },
  methods: {
    ...mapMutations(["setAns", "setFormFinish", "setMNA"]),
    ...mapActions(["getUserById"]),
    sumResult() {
      console.log(this.ans);
      this.isEditResult = true;
      this.ansvalue = 0;
      this.anstitle = "";
      this.resultans = "";

      for (var i = 0; i < 7; i++) {
        this.ansvalue += this.ans[i].ans_value;
      }

      if (this.ansvalue >= 0 && this.ansvalue <= 7) {
        this.anstitle = "มีภาวะขาดสารอาหาร";
      } else if (this.ansvalue >= 8 && this.ansvalue <= 11) {
        this.anstitle = "มีความเสี่ยงต่อการเกิดภาวะขาดสารอาหาร";
      } else if (this.ansvalue >= 12 && this.ansvalue <= 14) {
        this.anstitle = "ภาวะโภชนาการปกติ";
      }

      this.resultans = "ได้คะแนน " + this.ansvalue + " คะแนน " + this.anstitle;

      this.setMNA(this.resultans);
    },
    Finish() {
      this.formFinish.push("MNA");
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
