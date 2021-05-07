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
              style="color: white; background-color: #1E3A8A"
            >
              แบบประเมินภาวะหกล้ม (Fall Risk Assessment Tool)
            </p>
          </div>
          <div
            class="questions"
            v-for="ques in form.slice(18, 28)"
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
              <router-link to="/forms/form2">
                <b-button class="mr-2">
                  <b-icon icon="chevron-left"> </b-icon>
                </b-button>
              </router-link>
              <router-link to="/forms/form4">
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
                ผลการประเมินภาวะหกล้ม (Fall Risk Assessment Tool)
              </p>
            </header>
            <div class="card-content" style="background-color: #f4f4f4">
              <div class="content has-text-lefts ml-6">
                การพิจารณา (คะแนนเต็ม 30 คะแนน)
                <br />
                18 - 30 คะแนน = มีความเสี่ยงที่จะหกล้มสูง
                <br />
                8 - 17 คะแนน = มีความเสี่ยงที่จะหกล้มปานกลาง
                <br />
                0 - 7 คะแนน = มีความเสี่ยงที่จะหกล้ม ให้ทำการทดสอบ stan test
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
                style="color: #F90000"
              >
                ย้อนกลับ
              </p>
              <router-link
                class="card-footer-item"
                to="/forms/form4"
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
      ansvalue: 0,
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
    ...mapState(["formFinish"])
  },
  methods: {
    ...mapMutations(["setAns", "setFormFinish", "setFallRisk"]),
    ...mapActions(["getUserById"]),
    sumResult() {
      console.log(this.ans);
      this.isEditResult = true;
      this.anstitle = "";
      this.ansvalue = 0;
      this.resultans = "";

      for (var i = 0; i < 28; i++) {
        this.ansvalue += this.ans[i].ans_value;
      }

      if (this.ansvalue >= 0 && this.ansvalue <= 7) {
        this.anstitle = "มีความเสี่ยงที่จะหกล้ม ให้ทำการทดสอบ stan test";
      } else if (this.ansvalue >= 8 && this.ansvalue <= 17) {
        this.anstitle = "มีความเสี่ยงที่จะหกล้มปานกลาง";
      } else if (this.ansvalue >= 18 && this.ansvalue <= 30) {
        this.anstitle = "มีความเสี่ยงที่จะหกล้มสูง";
      }

      this.resultans = "ได้คะแนน " + this.ansvalue + " คะแนน " + this.anstitle;
      this.setFallRisk(this.resultans);
    },
    Finish() {
      this.formFinish.push("FallRisk");
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
