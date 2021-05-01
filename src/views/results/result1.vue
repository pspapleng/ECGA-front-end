<template>
  <div class="hero is-fullheight">
    <div class="hero-body py-3">
      <div class="container">
        <div class="column is-1 ">
          <Sidebar />
        </div>
        <div class="column is-11 is-offset-1">
          <div class="card">
            <header class="card-header">
              <p
                class="card-header-title"
                style="color: white; background-color: #1E3A8A"
              >
                แบบประเมินภาวะโภชนาการ (MNA)
              </p>
            </header>
          </div>
          <div
            class="card"
            v-for="ques in form.slice(0, 5)"
            :key="ques.ques_id"
          >
            <div class="card-content">
              <div class="content has-text-left">
                <p class="title">
                  {{ ques.ques }}
                </p>
                <div class="ans" v-for="ch in ques.choice" :key="ch.ans_id">
                  <b-radio
                    disabled
                    id="ques.ques_id"
                    :native-value="ch.ans_value"
                    v-model="ans_arr[ques.ques_id - 1].ans_value"
                    type="is-info"
                  >
                    <p style="color: black">{{ ch.ans_title }}</p>
                  </b-radio>
                </div>
              </div>
            </div>
          </div>
          <div
            class="card"
            v-for="ques in form.slice(5, 6)"
            :key="ques.ques_id"
          >
            <div class="card-content">
              <div class="content has-text-left">
                <p class="title">
                  {{ ques.ques }}
                </p>
                <b-field class="mb-2" label="">
                  <p class="control">
                    <span
                      class="button is-static"
                      style="color: white; background-color: #3e5ba8"
                    >
                      BMI
                    </span>
                  </p>
                  <b-input v-model="bmi" disabled></b-input>
                </b-field>
                <div class="ans" v-for="ch in ques.choice" :key="ch.ans_id">
                  <b-radio
                    disabled
                    id="ques.ques_id"
                    :native-value="ch.ans_value"
                    v-model="ans_arr[ques.ques_id - 1].ans_value"
                    type="is-info"
                  >
                    <p style="color: black">{{ ch.ans_title }}</p>
                  </b-radio>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  name: "result1",
  data() {
    return {
      ans_arr: [
        {
          ans_id: 1,
          ans_title: "ความอยากอาหารไม่ลดลง",
          ans_value: 2,
          ans_time: "2021-04-24T16:28:37.000Z",
          ques_id: 1,
          u_id: 1,
          result_id: 1
        },
        {
          ans_id: 2,
          ans_title: "น้ำหนักไม่ลดลง",
          ans_value: 2,
          ans_time: "2021-04-24T16:28:37.000Z",
          ques_id: 2,
          u_id: 1,
          result_id: 1
        },
        {
          ans_id: 3,
          ans_title: "เดินและเคลื่อนไหวได้ตามปกติ",
          ans_value: 2,
          ans_time: "2021-04-24T16:28:37.000Z",
          ques_id: 3,
          u_id: 1,
          result_id: 1
        },
        {
          ans_id: 4,
          ans_title: "ไม่มี",
          ans_value: 1,
          ans_time: "2021-04-24T16:28:37.000Z",
          ques_id: 4,
          u_id: 1,
          result_id: 1
        },
        {
          ans_id: 5,
          ans_title: "ไม่มีปัญหาทางประสาท",
          ans_value: 2,
          ans_time: "2021-04-24T16:28:37.000Z",
          ques_id: 5,
          u_id: 1,
          result_id: 1
        },
        {
          ans_id: 6,
          ans_title: "BMIตั้งแต่ 23 ขึ้นไป",
          ans_value: 3,
          ans_time: "2021-04-24T16:28:37.000Z",
          ques_id: 6,
          u_id: 1,
          result_id: 1
        }
      ],
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
    })
  },
  methods: {
    ...mapMutations(["setAns"])
  }
};
</script>
<style>
.card-header-title {
  /* color: white; */
  font-size: 1.5rem;
  font-weight: 500;
}
.title {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
}
.card {
  margin-top: 3vh;
}
</style>
