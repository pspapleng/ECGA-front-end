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
          <div class="assName card mt-6 mr-6">
            <p
              class="card-header-title"
              style="color: white; background-color: #1E3A8A"
            >
              แบบประเมินช่องปากผู้สูงอายุ
            </p>
            <div class="card-content">
              <div class="content">
                <p>
                  <u>ข้อแนะนำ</u>
                  การประเมินสุขภาพช่องปากผู้สูงอายุเป็นการประเมินพฤติกรรมการดูแลสุขภาพช่องปาก
                  สภาวะเสี่ยงของสุขภาพช่องปาก
                  และการส่งต่อเพื่อรับการรักษาทางทันตะกรรม
                  ตามปัญหาและความต้องการของผู้สูงอายุ
                </p>
              </div>
            </div>
          </div>
          <div class="card mt-5 mr-6">
            <div class="card-content">
              <div class="content">
                <h5 style="text-align: left;">
                  <u>ส่วนที่ 1 ประเมินพฤติกรรมเสี่ยงต่อสุขภาพช่องปาก</u>
                </h5>
                <p>
                  เพื่อให้ผู้สูงอายุทราบถึงพฤติกรรมการดูแลสุขภาพช่องปากของตนเองว่ามีความเสี่ยงต่อการเกิดปัญหาสุขภาพปากหรือไม่
                  และปรับพฤติกรรมเพื่อดูแลช่องปากที่เหมาะสม
                </p>
              </div>
            </div>
          </div>

          <div class="questions">
            <div class="card mr-6">
              <header class="quesHeader">
                <u>1. ประเมินพฤติกรรมเสี่ยงต่อสุขภาพช่องปาก</u>
              </header>
              <div
                class="card-content"
                v-for="ques in form.slice(6, 7)"
                :key="ques.ques_id"
              >
                <div class="quesContent content">
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
                <div
                  class="quesContent content"
                  v-for="ques in form.slice(7, 9)"
                  :key="ques.ques_id"
                >
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

          <div class="questions">
            <div class="card mr-6">
              <header class="quesHeader">
                <u>2. ประเมินสภาวะเสี่ยงต่อการเกิดโรคในช่องปาก</u>
              </header>
              <div
                class="card-content"
                v-for="ques in form.slice(9, 11)"
                :key="ques.ques_id"
              >
                <div class="quesContent content">
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

          <div class="card mr-6">
            <div class="card-content">
              <p><u>ส่วนที่ 2 ประเมินสุขภาพช่องปากผู้สูงอายุ</u></p>
            </div>
          </div>

          <div
            class="questions"
            v-for="ques in form.slice(11, 18)"
            :key="ques.ques_id"
          >
            <div class="card mr-6">
              <div class="card-content">
                <div class="partTwoQues content">
                  <p>{{ ques.ques }}</p>
                  <div v-for="ch in ques.choice" :key="ch.ans_id">
                    <b-field>
                      <b-radio
                        id="ques.ques_id"
                        v-model="ques.ans"
                        :native-value="ch.ans_value"
                        type="is-info"
                        @change.native.native="
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
        <b-modal v-model="isEditResult">
          <div class="card">
            <header class="result card-header">
              <p class="card-header-title">ผลการประเมินช่องปากผู้สูงอายุ</p>
            </header>
            <div class="card-content">
              <div class="content">
                การแปรผล
                <br />
                หากมีความผิดปกติหรือมีความจำเป็นที่จะต้องได้รับการรักษาในข้อ 1 -
                5 แบบประเมินส่วนที่ 2
                ให้ทำการส่งต่อเพื่อเข้ารับบริการทางทันตกรรมจากทันตบุคลากร
              </div>
              <div class="innerCard">
                <div class="innerContent">
                  เนื้อเยื่อในช่องปากผิดปกติ
                  <br />
                  ปัญหาการเคี้ยว
                  <br />
                  โปรดส่งต่อเพื่อเข้ารับบริการทางทันตกรรมกับบุคลากร
                </div>
              </div>
            </div>
            <b-button
              id="nextAss"
              type="is-success"
              tag="a"
              href="/forms/form3"
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
.quesHeader {
  margin-top: 2vh;
  margin-left: 2vw;
  text-align: left;
}
.partTwoQues {
  margin-left: 1vw;
}
</style>
