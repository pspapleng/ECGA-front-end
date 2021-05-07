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
                แบบประเมินความเสี่ยงต่อโรคกระดูกพรุน
              </p>
            </header>
            <div class="card-content">
              <div class="content">
                <p>
                  การพิจารณา
                  <br />
                  ค่า OSTA น้อยกว่า -4 = ความเสี่ยงสูง
                  <br />
                  ค่า OSTA ระหว่าง -4 ถึง -1 = ความเสี่ยงปานกลาง
                  <br />
                  ค่า OSTA ระหว่างมากกว่า -1 = ความเสี่ยงต่ำ
                </p>
              </div>
            </div>
          </div>

          <div class="card mr-6">
            <div class="card-content">
              <div class="content">
                <div style="overflow: hidden;">
                  <p class="mr-6" style="float: left;">
                    ข้อมูลผู้เข้ารับบริการ
                  </p>
                  <p class="ml-6">
                    น้ำหนักตัว
                    <input type="text" :placeholder="user.weight" disabled />
                    กิโลกรัม
                  </p>
                  <p style="margin-left: 217px;">
                    อายุ <input type="text" :placeholder="age" disabled /> ปี
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="card mr-6">
            <div class="card-content">
              <div class="content">
                <div style="overflow: hidden;">
                  <p class="mr-6" style="float: left;">การคำนวณค่า OSTA</p>
                  <p class="ml-6">สูตร 0.2 x (น้ำหนักตัว - อายุ)</p>
                  <p style="margin-left: 180px;">
                    แทนค่า 0.2 x (<input
                      type="text has-text-center"
                      :placeholder="user.weight"
                      disabled
                    />
                    - <input type="text" :placeholder="age" disabled />)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- <div
            class="card"
            v-for="ques in form.slice(162, 163)"
            :key="ques.ques_id"
          >
            <div class="card-content">
              <div class="content">
                <p>{{ ques.ques }}</p>
                ค่าที่คำนวณได้เท่ากับ
                <input
                  disabled
                  type="text"
                  v-model="osta"
                  @change.native="
                    (e) =>
                      setAns({
                        id: ques.ques_id,
                        value: parseInt(e.target.value),
                        title: osta,
                      })
                  "
                />
              </div>
            </div>
          </div> -->

          <h1>ตารางประเมินความเสี่ยง</h1>
          <img style="width: 45%; height: 45%;" src="@/assets/ass_table1.png" />
          <div class="columns mt-4">
            <div class="column is-1">
              <router-link to="/forms/form12">
                <b-button class="mr-2">
                  <b-icon icon="chevron-left"> </b-icon>
                </b-button>
              </router-link>
              <b-button disabled>
                <b-icon icon="chevron-right"> </b-icon>
              </b-button>
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
                ผลการประเมินความเสี่ยงต่อโรคกระดูกพรุน
              </p>
            </header>
            <div class="card-content has-text-centered">
              <div class="content">
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">
                      ค่าที่คำนวณได้เท่ากับ {{ osta }} มี{{
                        anstitle
                      }}ต่อโรคกระดูกพรุน
                    </p>
                  </header>
                  <div class="card-content">
                    คำแนะนำ
                    <br />
                    {{ anssuggest }}
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
                to="/startpage"
                @click="Finish()"
              >
                <p style="color: #047857">
                  เสร็จสิ้นการทำแบบประเมิน
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
      anssuggest: "",
      anstitle: "",
      osta: 0,
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
    age() {
      var today = new Date();
      var birthDate = new Date(this.user.date_of_birth);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    },
    ...mapState(["formFinish"])
  },
  methods: {
    ...mapMutations(["setAns", "setFormFinish", "setOSTA"]),
    ...mapActions(["getUserById", "submitAll"]),
    sumResult() {
      this.osta = 0;
      this.anstitle = "";
      this.anssuggest = "";
      this.resultans = "";
      this.isEditResult = true;

      this.osta = 0.2 * (this.user.weight - this.age);
      this.osta = this.osta.toFixed(2);
      if (this.osta < -4) {
        this.anstitle = "ความเสี่ยงสูง";
        this.anssuggest =
          "ถ้าเอกซเรย์ TL - spine พบ Osteopenia ไม่สามารถส่งตรวจความหนาแน่นของกระดูกด้วยเครื่อง DXA ได้ อาจพิจารณาให้การรักษา";
      } else if (this.osta >= -4 && this.osta <= -1) {
        this.anstitle = "ความเสี่ยงสูง";
        this.anssuggest =
          "ควรส่งตรวจความหนาแน่นของกระดูกก่อนพิจารณาให้การรักษา";
      } else if (this.osta >= -1) {
        this.anstitle = "ความเสี่ยงต่ำ";
        this.anssuggest = "ยังไม่จำเป็นต้องตรวจความหนาแน่นกระดูก";
      }
      this.setAns({
        id: 163,
        value: -1,
        title: this.osta
      });

      this.resultans =
        "ค่าที่คำนวณได้เท่ากับ " +
        this.osta +
        " มี " +
        this.anstitle +
        "ต่อโรคกระดูกพรุน" +
        " " +
        this.anssuggest;
      this.setOSTA(this.resultans);
    },
    Finish() {
      this.formFinish.push("OSTA");
      this.setFormFinish(this.formFinish);
      console.log(this.formFinish);
      this.submitAll()
        .then(() => {
          this.$router.push({ name: "PatientList" });
        })
        .catch(e => {
          console.log(e);
        });
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
