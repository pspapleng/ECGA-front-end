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
                ผลการประเมินการคัดกรองผู้สูงอายถที่ต้องได้รับการดูแลระยะยาว
              </p>
            </header>
            <div class="card-content" style="background-color: #f4f4f4">
              <div class="content has-text-left ml-6">
                การแปลผล
                <br />
                คะแนน 0 - 16 คะแนน = ไม่ต้องได้รับการดูแลระยะยาว
                สนับสนุนการส่งเสริมสุขภาพ
                <br />
                คะแนน 17 - 19 คะแนน = ต้องเฝ้าระวัง ประเมินซ้ำทุก 6 เดือน หรือ 1
                ปี
                <br />
                คะแนน 20 คะแนนขึ้นไป = ต้องได้รับการดูแลระยะยาว
                ประเมินซ้ำทุกเดือนก่อนพบแพทย์ ในด้านต่อไปนี้
                <ol class="ml-6 my-0">
                  <li>โรคประจำตัว</li>
                  <li>ด้านสังคม</li>
                  <li>ภาวะซึมเศร้า</li>
                  <li>สมรรถภาพสมอง หรือ ภาวะสมองเสื่อม</li>
                </ol>
              </div>
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <p class="has-text-centered">
                      ได้คะแนน {{ anssum }} คะแนน {{ anstitle }}
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
                to="/forms/form10"
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
// import assChooseBar from "@/components/assChooseBar.vue";
import { mapState, mapMutations, mapActions } from "vuex";
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
      isEditResult: false,
      valuepart1: 0,
      valuepart2: 0,
      valuepart3: 0,
      valuepart4: 0,
      valuepart5: 0,
      anssum: 0,
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
    ...mapState(["formFinish"])
  },
  methods: {
    ...mapMutations(["setAns", "setFormFinish", "setLTTA"]),
    ...mapActions(["getUserById"]),
    sumResult() {
      var i = 0;
      this.valuepart1 = 0;
      this.valuepart2 = 0;
      this.valuepart3 = 0;
      this.valuepart4 = 0;
      this.valuepart5 = 0;
      this.anssum = 0;
      this.anstitle = "";
      this.resultans = "";
      console.log(this.anssum);
      console.log(this.anstitle);
      console.log(this.ans);
      this.isEditResult = true;

      //part1
      for (i = 98; i < 101; i++) {
        this.valuepart1 += this.ans[i].ans_value;
      }
      this.valuepart1 = 0;

      //part2
      for (i = 101; i < 103; i++) {
        if (this.ans[i].ans_value < 0) {
          this.ans[i].ans_value = 0;
          this.valuepart2 += this.ans[i].ans_value;
        } else {
          this.valuepart2 += this.ans[i].ans_value;
        }
      }
      if (this.valuepart2 == 0) {
        this.valuepart2 = 1;
      } else if (this.valuepart2 == 1) {
        this.valuepart2 = 2;
      } else if (this.valuepart2 == 2) {
        this.valuepart2 = 3;
      }

      //part3
      for (i = 103; i < 106; i++) {
        if (this.ans[104].ans_value == 0 && this.ans[105].ans_value == 0) {
          this.valuepart3 = this.ans[103].ans_value;
        } else if (
          this.ans[104].ans_value == 1 ||
          this.ans[105].ans_value == 1
        ) {
          this.valuepart3 = this.ans[103].ans_value + 1;
        }
      }
      if (this.valuepart3 == 0) {
        this.valuepart3 = 2;
      } else if (this.valuepart3 == 1) {
        this.valuepart3 = 4;
      } else if (this.valuepart3 == 2) {
        this.valuepart3 = 6;
      }

      //part4
      for (i = 106; i < 111; i++) {
        this.valuepart4 += this.ans[i].ans_value;
      }
      if (this.valuepart4 == 0) {
        this.valuepart4 = 4;
      } else if (this.valuepart4 >= 1 && this.valuepart4 <= 2) {
        this.valuepart4 = 8;
      } else if (this.valuepart4 >= 3 && this.valuepart4 <= 5) {
        this.valuepart4 = 12;
      }

      //part5
      for (i = 111; i < 127; i++) {
        this.valuepart5 += this.ans[i].ans_value;
      }
      if (this.valuepart5 >= 16 && this.valuepart5 <= 20) {
        this.valuepart5 = 6;
      } else if (this.valuepart5 >= 21 && this.valuepart5 <= 35) {
        this.valuepart5 = 12;
      } else if (this.valuepart5 >= 36 && this.valuepart5 <= 48) {
        this.valuepart5 = 18;
      }

      //sumall
      this.anssum =
        this.valuepart1 +
        this.valuepart2 +
        this.valuepart3 +
        this.valuepart4 +
        this.valuepart5;
      if (this.anssum >= 0 && this.anssum <= 16) {
        this.anstitle = "ไม่ต้องดูแลระยะยาว และสนับสนุนการส่งเสริมสุขภาพ";
      } else if (this.anssum >= 17 && this.anssum <= 19) {
        this.anstitle = "ต้องเฝ้าระวังและประเมินซ้ำทุก 6 เดือนหรือ 1 ปี";
      } else if (this.anssum >= 20) {
        this.anstitle =
          "ต้องได้รับการดูแลระยะยาวและประเมินซ้ำทุกเดือนก่อนพบแพทย์";
      }

      this.resultans = "ได้คะแนน " + this.anssum + " คะแนน " + this.anstitle;
      this.setLTTA(this.resultans);
    },
    Finish() {
      this.formFinish.push("LTTA");
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
