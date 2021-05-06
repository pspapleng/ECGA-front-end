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
                  แบบประเมินผู้สูงอายุที่ต้องได้รับการดูแลระยะยาว
                </p>
              </header>
              <div class="card-content">
                <div class="content has-text-left">
                  <u>ข้อแนะนำ</u> :
                  การคัดกรองผู้สูงอายุที่ต้องได้รับการดูแลระยะยาวมีทั้งหมด 5
                  ด้าน คือ ด้านสังคม ความสามารถในการมองเห็นและการได้ยิน
                  ภาวะหลงลืมและภาวะซึมเศร้า ภาวะเปราะบาง
                  และความสามารถในการทำกิจวัตรประจำวัน
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <div class="content has-text-left">
                  <u class="title"
                    >ส่วนที่ 1 ด้านสังคม (การอยู่อาศัย ที่อยู่อาศัย รายได้)</u
                  >
                  <div
                    class="ques mt-3 ml-5"
                    v-for="ques in form.slice(98, 101)"
                    :key="ques.ques_id"
                  >
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
            </div>
            <div class="card">
              <div class="card-content">
                <div class="content has-text-left">
                  <u class="title"
                    >ส่วนที่ 2 ความสามารถในการมองเห็นและการได้ยิน</u
                  >
                  <div
                    class="ques mt-3 ml-5"
                    v-for="ques in form.slice(101, 103)"
                    :key="ques.ques_id"
                  >
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
            </div>
            <div class="card">
              <div class="card-content">
                <div class="content has-text-left">
                  <u class="title">ส่วนที่ 3 ภาวะหลงลืมและภาวะซึมเศร้า</u>
                  <div
                    class="ques mt-3 ml-5"
                    v-for="ques in form.slice(103, 104)"
                    :key="ques.ques_id"
                  >
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
                  <div>
                    <p class="title mt-3 ml-5">
                      2. ใน 2 สัปดาห์ที่ผ่านมา รวมวันนี้ ท่านมีความรู้สึก
                    </p>
                    <div
                      class="ques mt-3 ml-6"
                      v-for="ques in form.slice(104, 106)"
                      :key="ques.ques_id"
                    >
                      <p class="title">
                        {{ ques.ques }}
                      </p>
                      <div
                        class="ans"
                        v-for="ch in ques.choice"
                        :key="ch.ans_id"
                      >
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
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <div class="content has-text-left">
                  <u class="title">ส่วนที่ 4 ภาวะเปราะบาง</u>
                  <div
                    class="ques mt-3 ml-5"
                    v-for="ques in form.slice(106, 111)"
                    :key="ques.ques_id"
                  >
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
            </div>
            <div class="card">
              <div class="card-content">
                <div class="content has-text-left">
                  <u class="title"
                    >ส่วนที่ 5 ความสามารถในการทำกิจวัตรประจำวัน</u
                  >
                  <p class="title mt-3 ml-5">
                    กิจกรรมพื้นฐาน
                  </p>
                  <div
                    class="ques mt-3 ml-6"
                    v-for="ques in form.slice(111, 121)"
                    :key="ques.ques_id"
                  >
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
                  <p class="title mt-3 ml-5">
                    กิจกรรมซับซ้อน
                  </p>
                  <div
                    class="ques mt-3 ml-6"
                    v-for="ques in form.slice(121, 127)"
                    :key="ques.ques_id"
                  >
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
            </div>

            <div class="columns mt-4">
              <div class="column is-2">
                <router-link to="/results/result8">
                  <b-button class="mr-2">
                    <b-icon icon="chevron-left"> </b-icon>
                  </b-button>
                </router-link>
                <router-link to="/results/result10">
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
                ผลการประเมินผู้สูงอายุที่ต้องได้รับการดูแลระยะยาว
              </p>
            </header>
            <div class="card-content" style="background-color: #f4f4f4">
              <div class="content has-text-left ml-6">
                การแปลผล
                <br />
                คะแนน 0 - 16 คะแนน = ไม่ต้องได้รับการดูแลระยะยาว
                สนับสนุนการส่งเสริมสุขภาพ
                <br />
                คะแนน 17 - 19 คะแนน = ต้องเฝ้าระวัง ประเมินซ้ำทุก 6 เดือน หรือ 1
                ปี
                <br />
                คะแนน 20 คะแนนขึ้นไป = ต้องได้รับการดูแลระยะยาว
                ประเมินซ้ำทุกเดือนก่อนพบแพทย์ ในด้านต่อไปนี้
                <ol class="ml-6 my-0">
                  <li>โรคประจำตัว</li>
                  <li>ด้านสังคม</li>
                  <li>ภาวะซึมเศร้า</li>
                  <li>สมรรถภาพสมอง หรือ ภาวะสมองเสื่อม</li>
                </ol>
              </div>
              <div class="card">
                <div class="card-content has-text-centered">
                  <div class="content">
                    <p class="title">
                      {{ user.result.LTTA }}
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
              <router-link class="card-footer-item" to="/results/result10">
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
  name: "result9",
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
