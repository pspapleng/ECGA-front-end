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
                    น้ำหนักตัว <input type="text" disabled /> กิโลกรัม
                  </p>
                  <p style="margin-left: 217px;">
                    อายุ <input type="text" disabled /> ปี
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
                    แทนค่า 0.2 x (<input type="text" disabled /> -
                    <input type="text" disabled />)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="content">
                        <div class="questions" v-for="ques in form.slice(162, 163)" :key="ques.ques_id">
                            <p id="ques_title">
                                {{ ques.ques }}
                            </p>
                            <div class="ans" v-for="ch in ques.choice" :key="ch.ans_id">
                                <input id="ques.ques_id" type="radio" :value="ch.ans_value" v-model="ques.ans" @change="(e) => setAns({ id: ques.ques_id, value: e.target.value })"/>
                                <label id="ques.ques_id" for="">{{ ch.ans_title }}</label>
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
              <router-link to="">
                <b-button
                  class="back mr-2"
                  type="is-light"
                  @click="backHome()"
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
        <!---->
        <!-- choose bar maybe fixed side nav-->
        <div class="column is-3" id="choosebar">
          <assChooseBar />
        </div>
        <!---->
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
                      ค่าที่คำนวณได้เท่ากับ -5 มีความเสี่ยงสูงต่อโรคกระดูกพรุน
                    </p>
                  </header>
                  <div class="card-content">
                    คำแนะนำ
                    <br />
                    ถ้าเอกซเรย์ TL - spine พบ Osteopenia
                    ไม่สามารถส่งตรวจความหนาแน่นของกระดูกด้วยเครื่อง DXA ได้
                    อาจพิจารณาให้การรักษา
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
              <router-link class="card-footer-item" to="/startpage">
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
import { mapState, mapMutations } from "vuex";
// import assChooseBar from "@/components/assChooseBar.vue";
export default {
  components: {
    Sidebar
    // assChooseBar
  },
  name: "Patientlist",
  data() {
    return {
      order: "is-right",
      size: "default",
      prevIcon: "chevron-left",
      nextIcon: "chevron-right",
      isEditResult: false
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
    backHome() {
      // console.log("tid laeww")
      // alert("Sure mai ka???")
      // window.location.href = "startpage";
      if (confirm("sure mai ka??")) {
        window.location.pathname = "startpage";
      }
    },
    ...mapMutations(["setAns"]),
    sumResult() {
      this.isEditResult = true;
      // console.log(ans)
      // for (var i = 0; i < 6; i++) {
      //     this.cal_ans += this.ans[i].ans_value
      // }
      // return this.cal_ans
    }
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
