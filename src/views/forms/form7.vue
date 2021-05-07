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
                แบบประเมินคัดกรองความจำเสื่อมสำหรับผู้สูงอายุไทย (IQCODE)
              </p>
            </header>
            <div class="card-content">
              <div class="content">
                <p>
                  <u>คำชี้แจง</u>
                  ขอความกรุณาให้ผู้ดูแลผู้สูงอายุเปรียบเทียบความจำ สติปัญญา
                  และความสามารถในการปฏิบัติกิจวัตรประจำวันในแต่ละสถานการณ์ในระยะเวลา
                  10 ปีที่ผ่านมากับปัจจุบันของผู้สูงอายุ โดยทำเครื่องหมาย /
                  ลงในช่องที่แสดงถึงระดับการเปลี่ยนแปลงว่า ดีขึ้นมาก,
                  ดีขึ้นเล็กน้อย, เท่าเดิม, แย่ลงเล็กน้อย, หรือแย่ลงมาก
                </p>
                <p>
                  <u style="color: red">ตัวอย่างเช่น</u> ถ้าเมื่อ 10
                  ปีก่อนผู้สูงอายุมักจำชื่อคนอื่นไม่ค่อยได้
                  และปัจจุบันยังคงจำไม่ได้เหมือนเดิมนั้น ให้ถือว่า
                  "ไม่เปลี่ยนแปลง" แต่ถ้าเมื่อ 10 ปีที่แล้วจำได้ดี
                  แต่ตอนนี้จำไม่ได้เลยให้ถือว่า "แย่ลงมาก" แต่ถ้า 10
                  ปีที่แล้วจำไม่ได้เลยและตอนนี้จำได้บ้างถือว่า "ดีขึ้นเล็กน้อย"
                </p>
              </div>
            </div>
          </div>

          <div
            class="questions"
            v-for="ques in form.slice(61, 70)"
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
              <router-link to="/forms/form6">
                <b-button class="mr-2">
                  <b-icon icon="chevron-left"> </b-icon>
                </b-button>
              </router-link>
              <router-link to="/forms/form8">
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
                style="
                  font-family: 'Kanit', sans-serif;
                  font-weight: 400;
                  color: #047857;
                "
                >ประเมินผล</b-button
              >
            </div>
          </div>

          <b-modal v-model="isEditResult" :width="640">
            <div class="card">
              <header class="card-header">
                <p
                  class="card-header-title"
                  style="color: white; background-color: #1e3a8a"
                >
                  ผลการประเมินคัดกรองความจำเสื่อมสำหรับผู้สูงอายุ
                </p>
              </header>
              <div class="card-content" style="background-color: #f4f4f4">
                <div class="content has-text-left ml-6">
                  การคิดคะแนน
                  <br />
                  คะแนนทั้งหมด / ขำนวนข้อทั้งหมด
                  <br />
                  ถ้าผู้สูงอายุมีคะแนนเท่ากับหรือมากกว่า 3.44 =
                  ผู้สูงอายุน่าจะมีภาวะสมองเสื่อม
                </div>
                <div class="card">
                  <div class="card-content">
                    <div class="content">
                      <p class="has-text-centered">
                        ได้คะแนน {{ ansvalue }} คะแนน <br />
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
                  style="color: #f90000"
                >
                  ย้อนกลับ
                </p>
                <router-link
                  class="card-footer-item"
                  to="/forms/form8"
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
    ...mapMutations(["setAns", "setFormFinish", "setIQCODE"]),
    ...mapActions(["getUserById"]),
    sumResult() {
      this.isEditResult = true;
      this.ansvalue = 0;
      this.anstitle = "";
      this.resultans = "";

      for (var i = 62; i < 70; i++) {
        this.ansvalue += this.ans[i].ans_value;
      }

      this.ansvalue = this.ansvalue / 8;

      if (this.ansvalue >= 3.44) {
        this.anstitle = "ผู้สูงอายุน่าจะมีภาวะสมองเสื่อม";
      } else {
        this.anstitle = "ผู้สูงอายุอยู่ในเกณฑ์ปกติ";
      }

      this.resultans = "ได้คะแนน " + this.ansvalue + " คะแนน " + this.anstitle;
      this.setIQCODE(this.resultans);
    },
    Finish() {
      this.formFinish.push("IQCODE");
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
