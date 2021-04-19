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
          <h1>แบบประเมินภาวะกลั้นปัสสาวะไม่อยู่</h1>
          <div class="question">
            <div
              class="questions"
              v-for="ques in form.slice(127, 128)"
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
            </div>
            <h1 id="ques_title">
              2. ท่านมีอาการกลั้นปัสสาวะไม่อยู่ดังต่อไปนี้หรือไม่
            </h1>
            <h1 id="sub_ques">2.1 ปัสสาวะเล็ด</h1>
            <div
              class="questions"
              v-for="ques in form.slice(128, 131)"
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
            </div>
            <h1 id="sub_ques">2.2 ปัสสาวะราด / กลั้นปัสสาวะไม่ทัน</h1>
            <div
              class="questions"
              v-for="ques in form.slice(131, 134)"
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
            </div>
            <h1 id="sub_ques">2.3 กลั้นปัสสาวะไม่อยู่เพราะปัสสาวะล้น</h1>
            <div
              class="questions"
              v-for="ques in form.slice(134, 140)"
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
            </div>
            <h1 id="sub_ques">
              2.4 ปัสสาวะรดเครื่องนุ่งห่มเพราะมีขีดจำกัดทางร่างกาย
            </h1>
            <div
              class="questions"
              v-for="ques in form.slice(140, 145)"
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
            </div>
            <div
              class="questions"
              v-for="ques in form.slice(145, 148)"
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
            </div>
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
      question
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
</style>
