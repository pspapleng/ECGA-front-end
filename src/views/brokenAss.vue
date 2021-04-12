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
          <h1>การคัดกรองโรคข้อเข่าเสื่อมทางคลินิก</h1>
          <div class="card">
            <header class="card-header">
              <p class="card-header-title is-centered">ข้อแนะนำ</p>
            </header>
            <div class="card-content">
              <div class="content">
                แบบคัดกรองข้อเข่าเสื่อมทางคลินิกใช้ประเมินผู้สูงอายุที่มีอาการปวดเข่าเพื่อค้นหาโอกาส
                ที่จะเป็นโรคข้อเข่าเสื่อม
                และส่งต่อแพทย์เพื่อตรวจวินิจฉัยและทำการรักษา
              </div>
            </div>
          </div>
          <h1>1. ข้อเข่าฝืดตึงหลังตื่นนอนตอนเช้า &lt; 30 นาที (stiffness)?</h1>
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
          <h1>2. เสียงดังกรอบแกรบในข้อเข่าขณะเคลื่อนไหว (crepitus)?</h1>
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
          <h1>3. กดเจ็บที่กระดูกข้อเข่า (bony tenderness)?</h1>
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
          <h1>4. ข้อใหญ่ผิดรูป (bony enlargement)?</h1>
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
          <h1>5. ไม่พบข้ออุ่น (no palpable warmth)?</h1>
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
