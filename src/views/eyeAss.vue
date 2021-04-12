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
          <h1>การคัดกรองสุขภาวะทางตา</h1>
          <div class="card">
            <header class="card-header">
              <p class="card-header-title is-centered">ข้อแนะนำ</p>
            </header>
            <div class="card-content">
              <div class="content">
                การคัดกรอบสุขภาวะทางตาเป็นการคัดกรองการมองเห็น (ระยะไกล-ใกล้)
                ที่มีผลต่อการใช้ชีวิตประจำวัน
                และลักษณะการมองเห็นผิดปกติที่เป็นปัญหาและพบบ่อยในผู้สูงอายุ
                ได้แก่ ต้อกระจก จ้อหิน และจอตาเลื่อน
              </div>
            </div>
          </div>
          <h1>1. นับนิ้วในระยะ 3 เมตรได้ถูกต้อง น้อยกว่า 3 ใน 4 ครั้ง?</h1>
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
          <h1>2. อ่านหนังสือพิมพ์หน้าหนึ่งในระยะ 1 ฟุต ไม่ได้?</h1>
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
          <h1>3. ปิดตาดูทีละข้างพบว่าตามัวคล้ายหมอกบัง?</h1>
          <h1>3.1 ตาซ้าย</h1>
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
          <h1>3.2 ตาขวา</h1>
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
            4. ปิดตาดูทีละข้างพบว่ามองเห็นชัดแต่ตรงกลาง
            ไม่เห็นรอบข้างหรือมักเดินชนประตู สิ่งของ บ่อย ๆ?
          </h1>
          <h1>4.1 ตาซ้าย</h1>
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
          <h1>4.2 ตาขวา</h1>
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
            5. ปิดตาดูทีละข้างพบว่ามองเห็นจุดดำกลางภาพหรือเห็นภาพบิดเบี้ยว?
          </h1>
          <h1>5.1 ตาซ้าย</h1>
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
          <h1>5.2 ตาขวา</h1>
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
