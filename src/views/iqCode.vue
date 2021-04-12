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
          <h1>แบบประเมินคัดกรองความจำเสื่อมสำหรับผู้สูงอายุไทย (IQCODE)</h1>
          <div class="card">
            <header class="card-header" style="background-color: #1e3a8a;">
              <p class="card-header-title" style="color: white;">คำชี้แจง</p>
            </header>
            <div class="card-content">
              <div class="content">
                <p style="text-align: left;">
                  ขอความกรุณาให้ผู้ดูแลผู้สูงอายุเปรียบเทียบความจำ สติปัญญา
                  และความสามารถในการปฏิบัติกิจวัตรประจำวันในแต่ละสถานการณ์ในระยะเวลา
                  10 ปีที่ผ่านมากับปัจจุบันของผู้สูงอายุ โดยทำเครื่องหมาย /
                  ลงในช่องที่แสดงถึงระดับการเปลี่ยนแปลงว่า ดีขึ้นมาก,
                  ดีขึ้นเล็กน้อย, เท่าเดิม, แย่ลงเล็กน้อย, หรือแย่ลงมาก
                </p>
                <br />
                <p style="text-align: left;">
                  <u style="color: red;">ตัวอย่างเช่น</u> ถ้าเมื่อ 10
                  ปีก่อนผู้สูงอายุมักจำชื่อคนอื่นไม่ค่อยได้
                  และปัจจุบันยังคงจำไม่ได้เหมือนเดิมนั้น ให้ถือว่า
                  "ไม่เปลี่ยนแปลง" แต่ถ้าเมื่อ 10 ปีที่แล้วจำได้ดี
                  แต่ตอนนี้จำไม่ได้เลยให้ถือว่า "แย่ลงมาก" แต่ถ้า 10
                  ปีที่แล้วจำไม่ได้เลยและตอนนี้จำได้บ้างถือว่า "ดีขึ้นเล็กน้อย"
                </p>
              </div>
            </div>
          </div>
          <div class="question">
            <div class="ans">
              <input type="radio" />
              <label for="">ผู้ดูแลประจำ</label>
              <input type="radio" />
              <label for="">ผู้ดูแลบางครั้ง</label>
              <input type="radio" />
              <label for="">มาคนเดียว ไม่ต้องทำแบบคัดกรอง</label>
            </div>
            <h1>
              1. ความจำในรายละเอียดของคนในครอบครัวหรือญาติ เกี่ยวกับอาชีพ
              ที่อยู่ <br />(ถ้าเมื่อ 10 ปีที่แล้วยังจำได้ดีแต่ตอนนี้จำไม่ได้เลย
              ให้ถือว่าแย่ลงมาก แต่ถ้า 10 ปีที่แล้วจำไม่ได้เลย
              ตอนนี้จำได้บ้างให้ถือว่าดีขึ้นเล็กน้อย)
            </h1>
            <div class="ans">
              <input type="radio" />
              <label for=""> ดีขึ้นมาก</label><br />
              <input type="radio" />
              <label for=""> ดีขึ้นเล็กน้อย</label><br />
              <input type="radio" />
              <label for=""> ไม่เปลี่ยนแปลง</label><br />
              <input type="radio" />
              <label for=""> แย่ลงเล็กน้อย</label><br />
              <input type="radio" />
              <label for=""> แย่ลงมาก</label><br />
            </div>
            <h1>
              2. จำได้ว่าตอนนี้พักอาศัยอยู่ที่ไหน<span style="color: red;">
                **10 ปีที่ผ่านมา**</span
              >
            </h1>
            <div class="ans">
              <input type="radio" />
              <label for=""> ดีขึ้นมาก</label><br />
              <input type="radio" />
              <label for=""> ดีขึ้นเล็กน้อย</label><br />
              <input type="radio" />
              <label for=""> ไม่เปลี่ยนแปลง</label><br />
              <input type="radio" />
              <label for=""> แย่ลงเล็กน้อย</label><br />
              <input type="radio" />
              <label for=""> แย่ลงมาก</label><br />
            </div>
            <h1>
              3. ทราบเหตุการณ์ที่สำคัญในอดีต
              <span style="color: red;"> **10 ปีที่ผ่านมา**</span>
            </h1>
            <div class="ans">
              <input type="radio" />
              <label for=""> ดีขึ้นมาก</label><br />
              <input type="radio" />
              <label for=""> ดีขึ้นเล็กน้อย</label><br />
              <input type="radio" />
              <label for=""> ไม่เปลี่ยนแปลง</label><br />
              <input type="radio" />
              <label for=""> แย่ลงเล็กน้อย</label><br />
              <input type="radio" />
              <label for=""> แย่ลงมาก</label><br />
            </div>
            <h1>
              4. ความสามารถในการปรับตัวเข้ากับการดปลี่ยนแปลงในชีวิตประจำวัน
              <span style="color: red;"> **10 ปีที่ผ่านมา**</span>
            </h1>
            <div class="ans">
              <input type="radio" />
              <label for=""> ดีขึ้นมาก</label><br />
              <input type="radio" />
              <label for=""> ดีขึ้นเล็กน้อย</label><br />
              <input type="radio" />
              <label for=""> ไม่เปลี่ยนแปลง</label><br />
              <input type="radio" />
              <label for=""> แย่ลงเล็กน้อย</label><br />
              <input type="radio" />
              <label for=""> แย่ลงมาก</label><br />
            </div>
            <h1>
              5. สามารถเรียนรู้สิ่งใหม่ ๆ ทั่วไป
              <span style="color: red;"> **10 ปีที่ผ่านมา**</span>
            </h1>
            <div class="ans">
              <input type="radio" />
              <label for=""> ดีขึ้นมาก</label><br />
              <input type="radio" />
              <label for=""> ดีขึ้นเล็กน้อย</label><br />
              <input type="radio" />
              <label for=""> ไม่เปลี่ยนแปลง</label><br />
              <input type="radio" />
              <label for=""> แย่ลงเล็กน้อย</label><br />
              <input type="radio" />
              <label for=""> แย่ลงมาก</label><br />
            </div>
            <h1>
              6. สามารถที่จะเข้าใจสิ่งที่เกิดขึ้นพร้อมกับให้เหตุผลในสิ่งนั้นได้
              <span style="color: red;"> **10 ปีที่ผ่านมา**</span>
            </h1>
            <div class="ans">
              <input type="radio" />
              <label for=""> ดีขึ้นมาก</label><br />
              <input type="radio" />
              <label for=""> ดีขึ้นเล็กน้อย</label><br />
              <input type="radio" />
              <label for=""> ไม่เปลี่ยนแปลง</label><br />
              <input type="radio" />
              <label for=""> แย่ลงเล็กน้อย</label><br />
              <input type="radio" />
              <label for=""> แย่ลงมาก</label><br />
            </div>
            <h1>
              7. สามมารถเดินทางไป - กลับสถานที่คุ้นเคยได้โดยลำพัง
              <span style="color: red;"> **10 ปีที่ผ่านมา**</span>
            </h1>
            <div class="ans">
              <input type="radio" />
              <label for=""> ดีขึ้นมาก</label><br />
              <input type="radio" />
              <label for=""> ดีขึ้นเล็กน้อย</label><br />
              <input type="radio" />
              <label for=""> ไม่เปลี่ยนแปลง</label><br />
              <input type="radio" />
              <label for=""> แย่ลงเล็กน้อย</label><br />
              <input type="radio" />
              <label for=""> แย่ลงมาก</label><br />
            </div>
            <h1>
              8. สามารถทำงานที่เคยทำได้
              <span style="color: red;"> **10 ปีที่ผ่านมา**</span>
            </h1>
            <div class="ans">
              <input type="radio" />
              <label for=""> ดีขึ้นมาก</label><br />
              <input type="radio" />
              <label for=""> ดีขึ้นเล็กน้อย</label><br />
              <input type="radio" />
              <label for=""> ไม่เปลี่ยนแปลง</label><br />
              <input type="radio" />
              <label for=""> แย่ลงเล็กน้อย</label><br />
              <input type="radio" />
              <label for=""> แย่ลงมาก</label><br />
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
