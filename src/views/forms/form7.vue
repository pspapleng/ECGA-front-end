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
                  <u style="color : red;">ตัวอย่างเช่น</u> ถ้าเมื่อ 10
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
                  <div class="ans" v-for="ch in ques.choice" :key="ch.ans_id">
                    <input
                      id="ques.ques_id"
                      type="radio"
                      :value="ch.ans_value"
                      v-model="ques.ans"
                      @change="
                        e => setAns({ id: ques.ques_id, value: e.target.value })
                      "
                    />
                    <label id="ques.ques_id" for="">{{ ch.ans_title }}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="component mt-6">
            <b-pagination
              :order="order"
              :size="size"
              :icon-prev="prevIcon"
              :icon-next="nextIcon"
            >
            </b-pagination>
            <span>
              <b-button
                class="checkButt"
                label="กลับสู่หน้าหลัก"
                type="is-light"
                size=""
                @click="backHome"
              />
              <b-button
                class="checkButt"
                label="ประเมินผล"
                type="is-light"
                size=""
                @click="isEditResult = true"
              />
            </span>
          </div>

          <b-modal v-model="isEditResult">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">
                  ผลการประเมินคัดกรองความจำเสื่อมสำหรับผู้สูงอายุไทย
                </p>
              </header>
              <div class="card-content">
                <div class="content">
                  การคิดคะแนน
                  <br />
                  ทั้งหมด / จำนวนข้อ
                  <br />
                  ถ้าผู้สูงอายุมีคะแนนเท่ากับหรือมากกว่า 3.44 =
                  ผู้สูงอายุน่าจะมีภาวะสมองเสื่อม
                  <div class="innerCard">
                    <div class="innerContent">
                      ผู้สูงอายุน่าจะมีภาวะสมองเสื่อม
                    </div>
                  </div>
                </div>
                <b-button
                  id="nextAss"
                  type="is-success"
                  tag="a"
                  href="/form7"
                  target=""
                  >ทำแบบประเมินถัดไป</b-button
                >
              </div>
            </div>
          </b-modal>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Sidebar from "@/components/sidebar.vue";
// import assChooseBar from "@/components/assChooseBar.vue";
import { mapState, mapMutations } from "vuex";
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
      isEditResult: false
      // nurse: '',
      // famMemmory: '',
      // pastEvent: '',
      // selfAdjust: '',
      // learnNew: '',
      // understandSitu: '',
      // canTravel: '',
      // canWork: ''
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
      if (confirm("sure mai ka??") == true) {
        window.location.href = "startpage";
      }
    },
    ...mapMutations(["setAns"])
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
