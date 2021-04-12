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
          <h1>แบบวัดความเศร้าในผู้สูงอายุไทย (TGDS)</h1>
          <div class="question">
            <span><u>คำชี้แจง</u></span>
            <span>
              โปรดกดเลือกคำตอบที่ตรงกับความรู้สึกของคุณในช่วง 1
              สัปดาห์ที่ผ่านมา</span
            >
            <h1>1. โดยทั่วไปแล้วคุณพึงพอใจกับชีวิตตัวเองหรือไม่ ?</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>ใช่</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ไม่ใช่</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>2. คุณลดกิจกรรมหรือความสนใจในสิ่งต่าง ๆ ลงหรือไม่ ?</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>ใช่</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ไม่ใช่</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>3. คุณรู้สึกว่าชีวิตคุณว่างเปล่าหรือไม่ ?</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>ใช่</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ไม่ใช่</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>4. คุณรู้สึกเบื่อ ๆ อยู่บ่อยครั้งหรือไม่ ?</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>ใช่</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ไม่ใช่</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>5. คุณอารมณ์ดีเป็นส่วนใหญ่หรือไม่ ?</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>ใช่</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ไม่ใช่</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>6. คุณกลัวว่าอะไรร้าย ๆ จะเกิดขึ้นกับคุณหรือไม่ ?</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>ใช่</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ไม่ใช่</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>7. คุรรู้สึกมีความสุขเป็นส่วนใหญ่หรือไม่ ?</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>ใช่</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ไม่ใช่</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>8. คุณรู้สึกหมดหนทางอยู่บ่อยครั้งหรือไม่ ?</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>ใช่</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ไม่ใช่</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>9. คุณชอบอยู่กับบ้านมากกว่าออกไปหาอะไรทำนอกบ้านหรือไม่ ?</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>ใช่</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ไม่ใช่</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>10. คุรณรู้สึกว่าคุณมีปัญหาความจำมากกว่าใคร ๆ หรือไม่ ?</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>ใช่</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ไม่ใช่</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>
              11.
              คุณคิดว่ากำไรที่มีชีวิตอยู่ได้จนถึงทุกวันนี้มันช่างแสนวิเศษใช่หรือไม่
              ?
            </h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>ใช่</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ไม่ใช่</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>
              12.
              คุณรู้สึกหรือไม่ว่าชีวิตที่กำลังเป็นอยู่ตอนนี้ข่างไร้ค่าเหลือเกิน
              ?
            </h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>ใช่</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ไม่ใช่</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>13. คุณรู้สึกมีกำลังเต็มที่หรือไม่ ?</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>ใช่</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ไม่ใช่</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>14. คุณรู้สึกหมดหวังกับสิ่งที่คุรเผชิญอยู่หรือไม่ ?</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>ใช่</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ไม่ใช่</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>15. คุณคิดว่าคนอื่น ๆ ดีกว่าคุณหรือไม่ ?</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>ใช่</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ไม่ใช่</span>
                </b-radio-button>
              </b-field>
            </div>
          </div>
        </div>
        <!---->
        <!-- choose bar maybe fixed side nav-->
        <div class="column is-3" id="choosebar">
          <chooseBar />
        </div>
        <!---->
      </div>
    </section>
  </div>
</template>
<script>
import Sidebar from "@/components/sidebar.vue";
import chooseBar from "@/components/chooseBar.vue";
export default {
  components: {
    Sidebar,
    chooseBar
  },
  name: "Patientlist",
  data() {
    return {};
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
