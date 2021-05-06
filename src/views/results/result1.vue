<template>
  <div class="hero is-fullheight">
    <div class="hero-body py-3">
      <div class="container">
        <div class="columns">
          <!-- <div class="column is-1">
            <Sidebar />
          </div> -->
          <div
            class="column is-11-desktop is-9-tablet is-7-mobile is-offset-1-desktop is-offset-2-tablet is-offset-3-mobile"
          >
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
                      v-if="ans[ques.ques_id - 1].ans_value != ch.ans_value"
                      id="ques.ques_id"
                      :native-value="ch.ans_value"
                      v-model="ans[ques.ques_id - 1].ans_value"
                      type="is-info"
                    >
                      <p style="color: black">{{ ch.ans_title }}</p>
                    </b-radio>
                    <b-radio
                      disabled
                      v-else
                      id="ques.ques_id"
                      :native-value="ch.ans_value"
                      v-model="ans[ques.ques_id - 1].ans_value"
                      type="is-info"
                    >
                      <p style="color: black">
                        {{ ans[ques.ques_id - 1].ans_title }}
                      </p>
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
                        style="color: white; background-color: #3e5ba8;border: 0;border-radius: 0.5"
                      >
                        BMI
                      </span>
                      <span
                        class="button is-static"
                        style="color: #393939; font-weight: 400;border: 0;border-radius: 0"
                      >
                        <p class="mx-3">{{ user.bmi }}</p>
                      </span>
                    </p>
                    <!-- <b-input
                    v-model="result[0].bmi"
                    disabled
                    style="color: black; font-weight: 500;"
                  ></b-input> -->
                  </b-field>
                  <div class="ans" v-for="ch in ques.choice" :key="ch.ans_id">
                    <b-radio
                      disabled
                      v-if="ans[ques.ques_id - 1].ans_value != ch.ans_value"
                      id="ques.ques_id"
                      :native-value="ch.ans_value"
                      v-model="ans[ques.ques_id - 1].ans_value"
                      type="is-info"
                    >
                      <p style="color: black">{{ ch.ans_title }}</p>
                    </b-radio>
                    <b-radio
                      disabled
                      v-else
                      id="ques.ques_id"
                      :native-value="ch.ans_value"
                      v-model="ans[ques.ques_id - 1].ans_value"
                      type="is-info"
                    >
                      <p style="color: black">
                        {{ ans[ques.ques_id - 1].ans_title }}
                      </p>
                    </b-radio>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns mt-4">
              <div class="column is-2">
                <b-button class="mr-2" disabled>
                  <b-icon icon="chevron-left"> </b-icon>
                </b-button>
                <router-link to="/results/result2">
                  <b-button>
                    <b-icon icon="chevron-right"> </b-icon>
                  </b-button>
                </router-link>
              </div>
              <div class="column is-8 is-offset-4">
                <router-link to="/results">
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
                  @click="isAssess = true"
                  style="font-family: 'Kanit', sans-serif; font-weight: 400; color: #047857"
                  >ประเมินผล</b-button
                >
              </div>
            </div>
          </div>
          <div class="column is-1-desktop is-3-tablet is-5-mobile">
            <Sidebar />
          </div>
        </div>

        <!-- ผลประเมิน -->
        <b-modal v-model="isAssess" :width="640">
          <div class="card">
            <header class="card-header">
              <p
                class="card-header-title"
                style="color: white; background-color: #1E3A8A"
              >
                ผลการประเมินภาวะโภชนาการ (MNA)
              </p>
            </header>
            <div class="card-content" style="background-color: #f4f4f4">
              <div class="content has-text-left ml-6">
                การพิจารณา (คะแนนเต็ม 14 คะแนน)
                <br />
                12 - 14 คะแนน = ภาวะโภชนาการปกติ
                <br />
                8 - 11 คะแนน = มีความเสี่ยงต่อการเกิดภาวะขาดสารอาหาร
                <br />
                0 - 7 คะแนน = มีภาวะขาดสารอาหาร
              </div>
              <div class="card">
                <div class="card-content has-text-centered">
                  <div class="content">
                    <p class="title">
                      {{ user.result.MNA }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <footer class="card-footer">
              <p
                class="card-footer-item"
                @click="isAssess = false"
                style="color: #F90000"
              >
                ย้อนกลับ
              </p>
              <router-link class="card-footer-item" to="/results/result2">
                <p style="color: #047857">
                  ดูผลแบบประเมินถัดไป
                </p>
              </router-link>
            </footer>
          </div>
        </b-modal>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/sidebar.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    Sidebar
  },
  name: "result1",
  data() {
    return {
      isAssess: false
    };
  },
  computed: {
    ...mapState({
      form: "json",
      ans: "ans",
      user: "owner"
    })
  },
  methods: {
    ...mapActions(["getAns"])
  },
  beforeRouteEnter(to, from, next) {
    console.log("before");
    next(vm => {
      vm.getAns();
    });
  }
};
</script>
<style>
.card-header-title {
  font-size: 1.5rem;
  font-weight: 500;
}
.head {
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
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
