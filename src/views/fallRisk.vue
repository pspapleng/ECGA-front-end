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
          <h1>แบบประเมินภาวะหกล้ม (Fall Risk Assessment Tool)</h1>
          <div class="question">
            <span><u>คำชี้แจง</u></span>
            <span>
              โปรดกดเลือกคำตอบหน้าข้อความตามความเป็นจริงที่เกี่ยวกับตัวผู้สูงอายุ</span
            >
            <h1>1. อายุ</h1>
            <div class="ans">
              <input type="radio" value="0" />
              <label for="">0 - 19 ปี</label><br />
              <input type="radio" value="1" />
              <label for="">20 - 59 ปี</label><br />
              <input type="radio" value="2" />
              <label for="">60 - 70 ปี</label><br />
              <input type="radio" value="3" />
              <label for="">มากกว่า 70 ปี</label><br />
            </div>
            <h1>2. ประวัติหกล้ม</h1>
            <div class="ans">
              <input type="radio" value="0" />
              <label for="">ไม่หกล้มในปีก่อน</label><br />
              <input type="radio" value="1" />
              <label for="">หกล้มใน 6 เดือนก่อน</label><br />
              <input type="radio" value="2" />
              <label for="">หกล้มใน 3 เดือนก่อน</label><br />
              <input type="radio" value="3" />
              <label for="">หกล้มในเดือนก่อน</label><br />
            </div>
            <h1>3. การทรงตัว</h1>
            <div class="ans">
              <input type="radio" value="0" />
              <label for="">ยืนและหมุนตัวได้ด้วยการช่วยเหลือจากผู้อื่น</label
              ><br />
              <input type="radio" value="1" />
              <label for="">เดินโดยใช้อุปกรณ์หรือคนช่วย 2 คน</label><br />
              <input type="radio" value="2" />
              <label for="">เดินโดยใช้อุปกรณ์หรือคนช่วย 1 คน</label><br />
              <input type="radio" value="3" />
              <label for="">เดินได้โดยไม่ใช้อุปกรณ์หรือไม่ต้องการคนช่วย</label
              ><br />
            </div>
            <h1>4. การรับรู้</h1>
            <div class="ans">
              <input type="radio" value="0" />
              <label for="">รู้เวลา สถานที่ บุคคล</label><br />
              <input type="radio" value="1" />
              <label for="">รู้สถานที่ บุคคล</label><br />
              <input type="radio" value="2" />
              <label for="">รู้บุคคล</label><br />
              <input type="radio" value="3" />
              <label for="">ไม่รับรู้ การตัดสินใจบกพร่อง</label><br />
            </div>
            <h1>5. สภาพร่างกายทั่วไป</h1>
            <div class="ans">
              <input type="radio" value="0" />
              <label for="">อาหารเพียงพอ การนอนหลับผิดปกติ</label><br />
              <input type="radio" value="1" />
              <label for="">ไม่เจริญอาหาร การนอนหลับผิดปกติ</label><br />
              <input type="radio" value="2" />
              <label for="">การนอนหลับผิดปกติมาก</label><br />
              <input type="radio" value="3" />
              <label for="">ขาดอาหาร น้ำหนักลด</label><br />
            </div>
            <h1>6. การมองเห็น</h1>
            <div class="ans">
              <input type="radio" value="0" />
              <label for="">ปกติ</label><br />
              <input type="radio" value="1" />
              <label for="">ใช้แว่นตา</label><br />
              <input type="radio" value="2" />
              <label for="">มองไม่ชัดเจน ตาต้อ</label><br />
              <input type="radio" value="3" />
              <label for="">มองเห็นผิดปกติมาก ถึงขั้นตาบอด</label><br />
            </div>
            <h1>7. การพูด</h1>
            <div class="ans">
              <input type="radio" value="0" />
              <label for="">ปกติ</label><br />
              <input type="radio" value="1" />
              <label for="">มีปัญหาการพูดแต่เข้าใจภาษาดี</label><br />
              <input type="radio" value="2" />
              <label for="">พูดไม่ชัด มีปัญหาการสื่อสาร</label><br />
              <input type="radio" value="3" />
              <label for="">การสื่อสารบกพร่องขั้นรุนแรง</label><br />
            </div>
            <h1>8. การใช้ยา</h1>
            <div class="ans">
              <input type="radio" value="0" />
              <label for="">ไม่มียาที่มีผล</label><br />
              <input type="radio" value="1" />
              <label for=""
                >มียาระบบหัวใจและหลอดเลือดที่มีผล เช่น &beta; - blocker
                ยาขับปัสสาวะ ยาลดความดันเลือด</label
              ><br />
              <input type="radio" value="2" />
              <label for=""
                >มียาระบบประสาทที่มีผล เช่น ยากล่อมประสาท ยานอนหลับ ยากลุ่ม
                psychoaactive</label
              ><br />
              <input type="radio" value="3" />
              <label for=""
                >มีทั้งยาระบบหัวใจ หลอดเลือดและระบบประสาทที่มีผล</label
              ><br />
            </div>
            <h1>9. ภาวะโรคเรื้อรัง</h1>
            <div class="ans">
              <input type="radio" value="0" />
              <label for="">ไม่มีปัญหา</label><br />
              <input type="radio" value="1" />
              <label for="">มีโรคเรื้อรัง 1 โรค</label><br />
              <input type="radio" value="2" />
              <label for="">มีโรคเรื้อรัง 2 โรค</label><br />
              <input type="radio" value="3" />
              <label for="">มีโรคเรื้อรังมากกว่าหรือเท่ากับ 3 โรค</label><br />
            </div>
            <h1>10. ไม่สามารถควบคุมการขับถ่าย</h1>
            <div class="ans">
              <input type="radio" value="0" />
              <label for="">ไม่มีปัญหา</label><br />
              <input type="radio" value="1" />
              <label for="">ปัสสาวะบ่อย</label><br />
              <input type="radio" value="2" />
              <label for=""
                >ปัสสาวะกลางคืน ปัสสาวะราด (stress incontinence)
                คาสายปัสสาวะ</label
              ><br />
              <input type="radio" value="3" />
              <label for="">ปัสสาวะราด (Urge incontinence)</label><br />
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
