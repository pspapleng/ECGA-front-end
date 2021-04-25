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
                    <label id="ques.ques_id" for="">{{ ch.ans_title }}</label
                    ><br />
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
                label="ประเมินผล"
                type="is-light"
                size=""
                @click="isEditResult = true"
              />
              <b-button
                class="checkButt"
                label="กลับสู่หน้าหลัก"
                type="is-light"
                size=""
                @click="backHome"
              />
            </span>
          </div>
        </div>
        <!---->
        <!-- choose bar maybe fixed side nav-->
        <!-- <div class="column is-3" id="choosebar">
          <assChooseBar />
        </div>  -->
        <!---->
        <b-modal v-model="isEditResult">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">ผลการประเมินภาวะหกล้ม</p>
            </header>
            <div class="card-content">
              <div class="content">
                การพิจารณา (คะแนนเต็ม 30 คะแนน)
                <br />
                เนื้อเยื่อในช่องปากผิดปกติ
                <br />
                18 - 30 คะแนน = มีความเสี่ยงที่จะหกล้มสูง
                <br />
                8 - 17 คะแนน = มีความเสี่ยงที่จะหกล้มปานกลาง
                <br />
                0 - 7 คะแนน = มีความเสี่ยงที่จะหกล้ม ให้ทำการทดสอบ stand test
              </div>
              <div class="innerCard">
                <div class="innerContent">มีปัญหา ...</div>
              </div>
              <b-button
                id="nextAss"
                type="is-success"
                tag="a"
                href="/form4"
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
import question from "../assets/test.json";
export default {
  components: {
    Sidebar
    // assChooseBar,
  },
  name: "Patientlist",
  data() {
    return {
      question,
      order: "is-right",
      size: "default",
      prevIcon: "chevron-left",
      nextIcon: "chevron-right",
      isEditResult: false
      // age: '',
      // fallHistory: '',
      // selfBalance: '',
      // knowing: '',
      // physical: '',
      // sight: '',
      // speaking: '',
      // medicine: '',
      // chronicDis: '',
      // toiletContr: ''
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
  /* color: white; */
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
