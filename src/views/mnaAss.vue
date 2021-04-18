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
        <div class="column is-8">
          <h1>แบบประเมินภาวะโภชนาการ (MNA)</h1>
          <div
            class="questions"
            v-for="ques in form.slice(0, 6)"
            :key="ques.ques_id"
          >
            <h1 id="ques_title">
              {{ ques.ques }}
            </h1>
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
            <!-- <div>
                selected : {{ques.ans}}
              </div> -->
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
                label="ประเมินผล"
                type="is-light"
                size=""
                @click="checkButton"
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
        <div class="column is-3" id="choosebar">
          <assChooseBar />
        </div>
        <!---->
      </div>
    </section>
  </div>
</template>
<script>
import Sidebar from "@/components/sidebar.vue";
import assChooseBar from "@/components/assChooseBar.vue";
import { mapState, mapMutations } from "vuex";
import question from "../assets/test.json";

export default {
  components: {
    Sidebar,
    assChooseBar
  },
  name: "Patientlist",
  data() {
    return {
      question,
      // ans: '',
      order: "is-right",
      size: "default",
      prevIcon: "chevron-left",
      nextIcon: "chevron-right"
      // lessEating: '',
      // loseWeight: '',
      // canMove: '',
      // stressSick: '',
      // mentalProb: '',
      // bmi: ''
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
.questions {
  margin-top: 3vh;
}
#choosebarHeader {
  text-align: left;
  margin-top: 5vh;
  margin-bottom: 2vh;
  font-size: 1.125rem;
  font-weight: 600;
}
#choosebar {
  text-align: left;
}
#startButton {
  width: 200px;
  bottom: 1px;
}
.assChoice {
  margin-top: 1vh;
}
#checkIcon {
  margin-right: 0.5vw;
}
#startButton {
  position: fixed;
  bottom: 6vh;
  right: 4vw;
}
/* #ques_title {
        font-weight: 600;
        font-size: 1.15rem;
    } */
.choices {
  display: inline-block;
  text-align: left;
  margin-left: 3vw;
  margin-top: 1vh;
}
#radio {
  margin-top: 2vh;
}
#bmiBox {
  margin-bottom: 5vh;
}
.component {
  display: flex;
}
.checkButt {
  float: right;
}
</style>
