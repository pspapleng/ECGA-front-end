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
                style="color: white; background-color: #1E3A8A"
              >
                แบบประเมินความเสี่ยงในการหกล้ม (TIME UP AND GO TEST)
              </p>
            </header>
            <div class="card-content">
              <div class="content">
                <u>ข้อแนะนำ</u> :
                เป็นการทดสอบด้วยการเดินตามวิธีที่กำหนดโดยสังเกตท่าเดินและจับเวลาที่ใช้ในการเดินและจับเวลาที่ใช้ในการเดิน<br />
                <u style="color : red;">ข้อควรระวัง</u> :
                ผู้สูงอายุมีโอกาสที่จะหกล้มมากกว่าวัยอื่น ดังนั้น
                ผู้ทดสอบจึงควรระมัดระวังขณะทำการทดสอบ
              </div>
            </div>
          </div>

          <div class="card mr-6">
            <div class="card-content">
              <div class="content">
                <u>ส่วนที่ 1 แบบคัดกรองภาวะหกล้ม (TIME UP AND GO TEST)</u><br />
                <u>วิธีการประเมิน</u> :
                ให้ผู้สูงอายุลุกขึ้นจากเก้าอี้ที่มีที่ท้าวแขน เดินเป็นเส้นตรง
                ระยะทาง 3 เมตร หมุนตัวและเดินกลับมานั่งที่เดิม
                <img
                  class="mt-4 ml-6"
                  style="width: 45%; display: block;"
                  src="@/assets/tugt1.png"
                />
              </div>
            </div>
          </div>

          <div class="card mr-6">
            <div class="card-content">
              <div class="content">
                <div
                  class="questions"
                  v-for="ques in form.slice(28, 29)"
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
                              title: ch.ans_title + concatTimeTUG
                            })
                        "
                      >
                        <p>{{ ch.ans_title }}</p>
                      </b-radio>
                    </b-field>
                  </div>
                  <form>
                    นาที : <input type="text" v-model="minsTUG" /> วินาที :
                    <input type="text" v-model="secTUG" /> เวลารวม :
                    <input disabled type="text" :value="concatTimeTUG" />
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div
            class="questions"
            v-for="ques in form.slice(29, 30)"
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

          <div
            class="questions"
            v-for="ques in form.slice(30, 33)"
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
                              title: ch.ans_title + ques.ans_input
                            })
                        "
                      >
                      </b-radio>
                      <label id="ques.ques_id" for="">{{ ch.ans_title }}</label>
                    </b-field>
                  </div>
                  <input class="ml-5" v-model="ques.ans_input" type="text" />
                </div>
              </div>
            </div>
          </div>

          <div
            class="questions"
            v-for="ques in form.slice(33, 36)"
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

          <div class="card">
            <div class="card-content">
              <div class="content has-text-left">
                <u class="head">ส่วนที่ 2 การประเมิน Full tandem stand </u>
                <br />
                <u>วิธีการประเมิน</u><br />
                1. ยืนให้ส้นเท้าข้างใดข้างหนึ่งแตะปลายเท้าของเท้าอีกข้างหนึ่ง
                <br />
                2. ผู้ถูกทดสอบสามารถลงน้ำหนักขาข้างใดก็ใดตามถนัด
                <br />
                <u>การบันทึกผลการทดสอบ</u><br />
                1. บันทึกว่าผู้ถูกทดสอบสามารถยืนทรงตัวตามรูป“ได้” หรือ “ไม่ได้”
                <br />
                2. บันทึกเวลาที่ผู้ถูกทดสอบสามารถยืนทรงตัว ตามการยืนได้
                <br />
                <u style="color : #F90000;">หมายเหตุ</u> :
                ผู้ถูกทดสอบต้องยืนทรงตัวอย่างน้อยที่สุด 1
                วินาทีจึงจะบันทึกได้ว่า “สามารถยืนทรงตัวได้”
              </div>
            </div>
          </div>

          <div
            class="questions"
            v-for="ques in form.slice(36, 37)"
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
                              title: ch.ans_title + concatTimeFull
                            })
                        "
                      >
                      </b-radio>
                      <label id="ques.ques_id" for="">{{ ch.ans_title }}</label>
                    </b-field>
                  </div>
                  <form>
                    นาที :
                    <input type="text" v-model="minsFull" min="0" max="90" />
                    วินาที :
                    <input type="text" v-model="secFull" min="0" max="59" />
                    เวลารวม : <input type="text" :value="concatTimeFull" />
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div
            class="questions"
            v-for="ques in form.slice(37, 38)"
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
              <router-link to="/forms/form3">
                <b-button class="mr-2">
                  <b-icon icon="chevron-left"> </b-icon>
                </b-button>
              </router-link>
              <router-link to="/forms/form5">
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
                ผลการประเมินการคัดกรองภาวะหกล้ม
              </p>
            </header>
            <div class="card-content" style="background-color: #f4f4f4">
              <div class="content has-text-lefts ml-6">
                การพิจารณา (คะแนนเต็ม 30 คะแนน)
                <br />
                ถ้าหากผลการทดสอบ TUG มากกว่า 14 วินาที และ ผลการทดสอบ Full
                Tandem Stand น้อยกว่า 10 วินาที ให้ส่งต่อคลินิก Fall
              </div>
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <p class="has-text-centered">
                      ใช้เวลาในการเดิน {{ concatTimeTUG }} และ ยืนได้
                      {{ concatTimeFull }} <br />
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
                to="/forms/form5"
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
      minsTUG: "",
      secTUG: "",
      minsFull: "",
      secFull: "",
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
    concatTimeTUG() {
      return " " + this.minsTUG + " นาที " + this.secTUG + " วินาที ";
    },
    concatTimeFull() {
      return " " + this.minsFull + " นาที " + this.secFull + " วินาที ";
    },
    ...mapState(["formFinish"])
  },
  methods: {
    ...mapMutations(["setAns", "setFormFinish", "setTUGT"]),
    ...mapActions(["getUserById"]),
    sumResult() {
      console.log(this.ans);
      console.log(this.minsTUG, this.secTUG, typeof this.concatTimeTUG);
      console.log(this.minsFull, this.secFull, typeof this.concatTimeFull);
      this.anstitle = "";
      this.ansvalue1 = 0;
      this.ansvalue2 = 0;
      this.resultans = "";
      // this.minsTUG = 0;
      // this.secTUG = 0;
      // this.minsFull = 0;
      // this.secFull = 0
      this.isEditResult = true;

      if (this.minsTUG == 0) {
        if (this.secTUG > 14) {
          this.ansvalue1 += 1;
        } else {
          this.ansvalue1 += 0;
        }
      } else if (this.minsTUG > 0) {
        this.ansvalue1 += 1;
      }

      if (this.minsFull == 0) {
        if (this.secFull < 10) {
          this.ansvalue2 += 1;
        } else {
          this.ansvalue2 += 0;
        }
      } else if (this.minsFull > 0) {
        this.ansvalue2 += 0;
      }

      if (this.ansvalue1 == 1 && this.ansvalue2 == 1) {
        this.anstitle = "มีความเสี่ยงต่อภาวะหกล้ม";
      } else {
        this.anstitle = "ไม่มีความเสี่ยงต่อภาวะหกล้ม";
      }

      this.resultans =
        "ใช้เวลาในการเดิน" +
        this.concatTimeTUG +
        " และ ยืนได้" +
        this.concatTimeFull +
        " " +
        this.anstitle;
      this.setTUGT(this.resultans);
    },
    Finish() {
      this.formFinish.push("TUGT");
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
