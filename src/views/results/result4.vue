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
                  แบบประเมินความเสี่ยงในการหกล้ม (TIME UP AND GO TEST)
                </p>
              </header>
              <div class="card-content">
                <div class="content has-text-left">
                  <u>ข้อแนะนำ</u> :
                  เป็นการทดสอบด้วยการเดินตามวิธีที่กำหนดโดยสังเกตท่าเดินและจับเวลาที่ใช้ในการเดินและจับเวลาที่ใช้ในการเดิน
                  <br />
                  <u style="color : #F90000;">ข้อควรระวัง</u> :
                  ผู้สูงอายุมีโอกาสที่จะหกล้มมากกว่าวัยอื่น ดังนั้น
                  ผู้ทดสอบจึงควรระมัดระวังขณะทำการทดสอบ
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <div class="content has-text-left">
                  <u class="head"
                    >ส่วนที่ 1 แบบคัดกรองภาวะหกล้ม (TIME UP AND GO TEST)</u
                  >
                  <br />
                  <u>วิธีการประเมิน</u> :
                  ให้ผู้สูงอายุลุกขึ้นจากเก้าอี้ที่มีที่ท้าวแขน เดินเป็นเส้นตรง
                  ระยะทาง 3 เมตร หมุนตัวและเดินกลับมานั่งที่เดิม
                  <img
                    class="mt-4 ml-6"
                    style="width: 75%; "
                    src="@/assets/tugt1.png"
                  />
                </div>
              </div>
            </div>
            <div
              class="card"
              v-for="ques in form.slice(28, 36)"
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
            <div class="card">
              <div class="card-content">
                <div class="content has-text-left">
                  <u class="head">ส่วนที่ 2 การประเมิน Full tandem stand </u>
                  <br />
                  <u>วิธีการประเมิน</u><br />
                  1. ยืนให้ส้นเท้าข้างใดข้างหนึ่งแตะปลายเท้าของเท้าอีกข้างหนึ่ง
                  <br />
                  2. ผู้ถูกทดสอบสามารถลงน้ำหนักขาข้างใดก็ใดตามถนัด
                  <br />
                  <u>การบันทึกผลการทดสอบ</u><br />
                  1. บันทึกว่าผู้ถูกทดสอบสามารถยืนทรงตัวตามรูป“ได้” หรือ
                  “ไม่ได้”
                  <br />
                  2. บันทึกเวลาที่ผู้ถูกทดสอบสามารถยืนทรงตัว ตามการยืนได้
                  <br />
                  <u style="color : #F90000;">หมายเหตุ</u> :
                  ผู้ถูกทดสอบต้องยืนทรงตัวอย่างน้อยที่สุด 1
                  วินาทีจึงจะบันทึกได้ว่า “สามารถยืนทรงตัวได้”
                </div>
              </div>
            </div>
            <div
              class="card"
              v-for="ques in form.slice(36, 38)"
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
            <div class="columns mt-4">
              <div class="column is-2">
                <router-link to="/results/result3">
                  <b-button class="mr-2">
                    <b-icon icon="chevron-left"> </b-icon>
                  </b-button>
                </router-link>
                <router-link to="/results/result5">
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
                ผลการประเมินความเสี่ยงในการหกล้ม (TUGT)
              </p>
            </header>
            <div class="card-content" style="background-color: #f4f4f4">
              <div class="content has-text-left ml-6">
                การพิจารณา
                <br />
                ถ้าหากผลการทดสอบ TUG มากกว่า 14 วินาที และ ผลการทดสอบ Full
                tandem stand น้อยกว่า 10 วินาที ให้ส่งต่อคลินิก Fall
              </div>
              <div class="card">
                <div class="card-content has-text-centered">
                  <div class="content">
                    <p class="title">
                      {{ user.result.TUGT }}
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
              <router-link class="card-footer-item" to="/results/result5">
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
  name: "result4",
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
