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
            <h1>1. ท่านเริ่มมีอาการกลั้นปัสสาวะไม่อยู่มานานแค่ไหน</h1>
            <div class="ans">
              <input type="radio" />
              <label for=""> ไม่เกิน 6 เดือน</label>
              <input type="radio" />
              <label for=""> 1 - 5 ปี</label><br />
              <input type="radio" />
              <label for=""> มากกว่า 6 เดือนแต่ไม่ถึง 12 เดือน</label>
              <input type="radio" />
              <label for=""> 5 ปีขึ้นไป</label><br />
            </div>
            <h1>2. ท่านมีอาการกลั้นปัสสาวะไม่อยู่ดังต่อไปนี้หรือไม่</h1>
            <h1>2.1 ปัสสาวะเล็ด</h1>
            <h1>2.1.1 ปัสสาวะเล็ดพร้อมอาการไอ จาม หัวเราะ หรือออกแรง</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>มี</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ไม่มี</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>2.1.2 ปัสสาวะเล็ดออกมาจำนวนน้อย (เป็นหยด, พุ่งออกมา)</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>มี</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ไม่มี</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>2.1.3 ปัสสาวะโดยควบคุมไม่ได้</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>มี</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ไม่มี</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>2.2 ปัสสาวะราด / กลั้นปัสสาวะไม่ทัน</h1>
            <h1>2.2.1 เมื่อมีอาการปวดปัสสาวะต้องรีบเร่งเข้าห้องน้ำทันที</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>มี</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ไม่มี</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>2.2.2 ปัสสาวะราดก่อนถึงห้องน้ำ</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>มี</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ไม่มี</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>2.2.3 ปัสสาวะราดโดยควบคุมไม่ได้</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>มี</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ไม่มี</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>2.3 กลั้นปัสสาวะไม่อยู่เพราะปัสสาวะล้น</h1>
            <h1>2.3.1 ก่อนปัสาวะต้องรอนานกว่าจะออก</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>มี</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ไม่มี</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>
              2.3.2 ปัสสาวะพุ่ง/ปัสสาวะหลายขยัก หลายที
              หรือต้องเบ่งหลายครั้งกว่าจะสำเร็จ
            </h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>มี</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ไม่มี</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>2.3.3 ปัสาวะเสร็จแล้วมีหยดออกมาอีก</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>มี</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ไม่มี</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>2.3.4 ปัสสาเสร็จช้ากว่าปกติ หรือใช้เวลานาน</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>มี</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ไม่มี</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>2.3.5 ปัสสาวะไม่สุด รู้สึกเหมือนค้างในกระเพาะปัสสาวะ</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>มี</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ไม่มี</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>
              2.3.6 ปัสสาวะบ่อยแต่จำนวนน้อย หรือปัสสาวะเป็นหยด ๆ
              เวลาเปลี่ยนท่าหรืออริยาบท
            </h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>มี</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ไม่มี</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>2.4 ปัสสาวะรดเครื่องนุ่งห่มเพราะมีขีดจำกัดทางร่างกาย</h1>
            <h1>2.4.1 มีข้อจำกัดของการเคลื่อนไหว</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>มี</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ไม่มี</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>2.4.2 ไม่มีห้องน้ำหรือหาห้องน้ำไม่ได้ขณะปสดปัสสาวะ</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>มี</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ไม่มี</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>2.4.3 ถูกจำกัดให้อยู่กับที่</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>มี</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ไม่มี</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>
              2.4.4 ได้รับยาที่มีผลต่อการควบคุมการขับถ่ายปัสสาวะ เช่น
              ยากล่อมประสาท ยานอนหลับ ยากดประสาทส่วนกลาง ยาขับปัสสาวะ
            </h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>มี</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ไม่มี</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>
              2.4.5
              มีความเจ็บปวดเกิดกับร่างกายส่วนใดส่วนหนึ่งจนไม่อยากเคลื่อนไหว
            </h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>มี</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ไม่มี</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>3. ปริมาณปัสสาวะที่กลั้นไม่อยู่</h1>
            <div class="ans">
              <input type="radio" />
              <label for=""> เล็กน้อย (ไม่กี่หยดหรือไม่เกินครึ่งช้อนโต๊ะ)</label
              ><br />
              <input type="radio" />
              <label for="">
                ปานกลาง (ชุ่มกางเกงในหรือครึ่งถึง 2้ ช้อนโต๊ะ)</label
              ><br />
              <input type="radio" />
              <label for="">
                มาก (เปียกทะลุถึงชั้นนอกหรือมากกว่า 2 ช้อนโต๊ะ)</label
              ><br />
            </div>
            <h1>4. ความบ่อยของการกลั้นปัสสาวะไม่อยู่</h1>
            <div class="ans">
              <input type="radio" />
              <label for=""> เล็กน้อย / เดือนละครั้ง หรือน้อยกว่านี้</label
              ><br />
              <input type="radio" />
              <label for="">
                ปานกลาง / หลาย ๆ วันครั้ง หรือเดือนละ 2 ครั้งขึ้นไป</label
              ><br />
              <input type="radio" />
              <label for="">
                มาก / เกือบทุกวัน หรือวันละตั้งแต่ 1 ครั้งขึ้นไป</label
              ><br />
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
