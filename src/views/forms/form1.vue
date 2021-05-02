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
                            setAns({ id: ques.ques_id, value: e.target.value })
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
                            setAns({ id: ques.ques_id, value: e.target.value })
                        "
                      >
                      </b-radio>
                      <label id="ques.ques_id" for="">{{ ch.ans_title }}</label>
                    </b-field>
                  </div>

                  <!-- <div>
                    {{ans}}
                  </div> -->

                  <!-- <div class="ans" v-for="ch in ques.choice" :key="ch.ans_id">
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
                  </div> -->
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
                @click="sumResult()"
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
        <!-- <div class="column is-3" id="choosebar">
          <assChooseBar />
        </div> -->
        <!-- ผลประเมิน -->
        <b-modal v-model="isEditResult">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">ผลการประเมินภาวะโภชนาการ</p>
            </header>
            <div class="card-content">
              <div class="content">
                การพิจารณา (คะแนนเต็ม 14 คะแนน)
                <br />
                12 - 14 คะแนน = ภาวะโภชนาการปกติ
                <br />
                8 - 11 คะแนน = มีความเสี่ยงต่อการเกิดภาวะขาดสารอาหาร
                <br />
                0 - 7 คะแนน = มีภาวะขาดสารอาหาร
              </div>
              <div class="innerCard">
                <div class="innerContent">
                  ได้คะแนน 12 คะแนน ภาวะโภชนาการปกติ
                </div>
              </div>
            </div>
            <b-button
              id="nextAss"
              type="is-success"
              tag="a"
              href="/forms/form2"
              target=""
              >ทำแบบประเมินถัดไป</b-button
            >
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
    // assChooseBar,
  },
  name: "Patientlist",
  data() {
    return {
      // question,
      // ans: '',
      order: "is-right",
      size: "default",
      prevIcon: "chevron-left",
      nextIcon: "chevron-right",
      isEditResult: false
      // result1: 0,
      // ans: 0
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
