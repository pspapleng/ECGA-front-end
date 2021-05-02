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
          <div class="assName card mt-6 mr-6">
            <p
              class="card-header-title"
              style="color: white; background-color: #1E3A8A"
            >
              แบบประเมินปัญหาการนอน
            </p>
          </div>

          <div class="questions">
            <div class="card mr-6">
              <div
                class="card-content"
                v-for="ques in form.slice(148, 149)"
                :key="ques.ques_id"
              >
                <div class="quesContent content">
                  <p>{{ ques.ques }}</p>
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
              <div
                class="card-content"
                v-for="ques in form.slice(149, 155)"
                :key="ques.ques_id"
              >
                <div class="quesContent content">
                  <p>{{ ques.ques }}</p>
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
              <div style="float: left;">
                <input type="text" /> ปี <input type="text" /> เดือน
              </div>
            </div>
          </div>

          <div
            class="questions"
            v-for="ques in form.slice(155, 156)"
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
                      type="text"
                      v-model="ques.ans_input"
                      @change="
                        e =>
                          setAns({
                            id: ques.ques_id,
                            value: e.target.v - model
                          })
                      "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="questions"
            v-for="ques in form.slice(156, 157)"
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
                      v-model="ques.anst"
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

          <div class="component">
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
        </div>
        <!---->
        <!-- choose bar maybe fixed side nav-->
        <div class="column is-3" id="choosebar">
          <assChooseBar />
        </div>
        <!---->
        <b-modal v-model="isEditResult">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                ผลการประเมินปัญหาการนอน
              </p>
            </header>
            <div class="card-content">
              <div class="content">
                การพิจารณา
                <br />
                หากตอบ "มีปัญหา" ข้อใดข้อหนึ่ง
                ควรส่งต่อแพทย์ตรวจวินิจฉัยเพื่อยืนยันผลและทำการรักษา
                <div class="innerCard">
                  <div class="innerContent">
                    มีปัญหาการนอนหลับ
                    <br />
                    มีอาการง่วงเพลีย
                  </div>
                </div>
              </div>
              <b-button
                id="nextAss"
                type="is-success"
                tag="a"
                href="/brokenAss"
                target=""
                >ทำแบบประเมินถัดไป</b-button
              >
            </div>
          </div>
        </b-modal>
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
    // assChooseBar
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
      // sleepProb: '',
      // cantSleep: '',
      // murmurSleep: '',
      // sleepToMuch: '',
      // snoreSleep: '',
      // sleepElse: '',
      // sleepYrs: '',
      // sleepMth: '',
      // sleepHrs: '',
      // dayTimeRunDown: ''
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
  /* color: white; */
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
