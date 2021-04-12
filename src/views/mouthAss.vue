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
          <h1>แบบประเมินช่องปากผู้สูงอายุ</h1>
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                ข้อมูลแนะนำ
              </p>
            </header>
            <div class="card-content">
              <div class="content">
                การประเมินสุขภาพช่องปากผู้สูงอายุเป็นการประเมินพฤติกรรมการดูแลสุขภาพช่องปาก
                <br />
                สภาวะเสี่ยงของสุขภาพช่องปาก
                และการส่งต่อเพื่อรับการรักษาทางทันตะกรรม
                ตามปัญหาและความต้องการของผู้สูงอายุ
              </div>
            </div>
          </div>
          <div class="part1">
            <p class="description">
              <u>ส่วนที่ 1 ประเมินพฤติกรรมเสี่ยงต่อสุขภาพช่องปาก</u>
            </p>
            <p class="subdes">
              เพื่อให้ผู้สูงอายุทราบถึงพฤติกรรมการดูแลสุขภาพช่องปากของตนเองว่ามีความเสี่ยงต่อการเกิดปัญหาสุขภาพปากหรือไม่
              และปรับพฤติกรรมเพื่อดูแลช่องปากที่เหมาะสม
            </p>
          </div>
          <div class="question">
            <h1>1. ประเมินพฤติกรรมการทำความสะอาดช่องปาก</h1>
            <h1>1.1 การแปรงฟัน</h1>
            <div class="ans">
              <input type="radio" value="" />
              <label for="">ไม่ได้ใช้แปรงสีฟัน</label><br />
              <input type="radio" value="" />
              <label for="">แปรงฟันวันละ 1 ครั้ง ก่อนนอน</label><br />
              <input type="radio" value="" />
              <label for="">แปรงฟันวันละ 2 ครั้ง เช้าและก่อนนอน</label><br />
              <input type="radio" value="" />
              <label for="">แปรงฟันมากกว่าวันละ 2 ครั้ง ระบุ </label
              ><input type="box" /><br />
            </div>
            <h1>1.2 การใช้ยาสีฟันผสมฟลูออไรด์ทุกวัน</h1>
            <div class="ans">
              <input type="radio" value="" />
              <label for="">ใช้</label><br />
              <input type="radio" value="" />
              <label for="">ไม่ใช้</label><br />
            </div>
            <h1>1.3 การทำความสะอาดซอกฟันทุกวัน / เกือบทุกวัน</h1>
            <div class="ans">
              <input type="radio" value="" />
              <label for="">ใช้</label><br />
              <input type="radio" value="" />
              <label for="">ไม่ใช้</label><br />
            </div>
            <h1>2. ประเมินสภาวะเสี่ยงต่อการเกิดโรคในช่องปาก</h1>
            <div class="ans">
              <input type="checkbox" value="" />
              <label for="">สูบบุหรี่มากกว่า 10 มวน / วัน</label><br />
              <input type="checkbox" value="" />
              <label for="">เคี้ยวหมาเป็นประจำ</label><br />
            </div>
          </div>
          <div class="part2">
            <p class="description">
              <u>ส่วนที่ 2 ประเมินสุขภาพช่องปากผู้สูงอายุ</u>
            </p>
          </div>
          <div class="question">
            <h1>
              1. เนื้อเยื่อในช่องปาก : บริเวณริมฝีปาก แก้ม ลิ้น
              มีปุ่ม/ก้อนเนื้อ/มีแผลเรื้อรัง หรือไม่ ?
            </h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>ปกติ</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ผิดปกติ</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>
              2. เหงือกและอวัยวะปริทนต์ : บริเวณเหงือกมีเลือดออก/มีฝีหนอง/ฟันโยก
              หรือไม่ ?
            </h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>ปกติ</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ผิดปกติ</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>
              3. ฟันผุ : ฟันเป็นรู เสียวฟัน ฟันหัก ฟันแตกเหลือแต่ตอฟัน หรือไม่ ?
            </h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>ปกติ</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ผิดปกติ</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>
              4. ปัญหาการเคี้ยวอาหาร / การกลืน : มีปัญหาการเคี้ยวอาหาร/การกลืน
              หรือไม่ ?
            </h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>ปกติ</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ผิดปกติ</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>
              5. ฟันเทียม : จำเป็นต้องใส่ฟันเทียม หรือทำฟันเทียมใหม่ หรือไม่ ?
            </h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>ปกติ</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ผิดปกติ</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>
              6. การได้รับการตรวจหรือรักษาจากทันตบุคลากร :
              ท่านเคยได้รับการตรวจหรือการรักษาจากทันตบุคลากร หรือไม่ ?
            </h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>ปกติ</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ผิดปกติ</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>
              7.ความต้องการการรักษาทางทันตกรรม :
              ปัจจุบันท่านต้องการการรักษาทางทันตกรรม
            </h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>ปกติ</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ผิดปกติ</span>
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
#radio {
  margin-top: 2vh;
}
.content {
  font-size: 1rem;
}
.card {
  margin-top: 3vh;
}
.part1 {
  width: 40vw;
}
.description {
  margin-top: 3vh;
  text-align: left;
  font-weight: 800;
}
.subdes {
  text-align: left;
}
</style>
