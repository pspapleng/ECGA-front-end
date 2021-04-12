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
          <h1>แบบคัดกรองภาวะหกล้ม (TIME UP AND GO TEST : TUGT)</h1>
          <div class="card" id="description">
            <header class="card-header" style="background-color: #1e3a8a;">
              <p class="card-header-title is-centered" style="color: white;">
                ข้อมูลแนะนำ
              </p>
            </header>
            <div class="card-content">
              <div class="content">
                เป็นการทดสอบด้วยการเดินตามวิธีที่กำหนดโดยสังเกตท่าเดินและจับเวลาที่ใช้ในการเดิน
              </div>
            </div>
          </div>
          <div class="card" id="howTo">
            <header class="card-header" style="background-color: #1e3a8a;">
              <p class="card-header-title is-centered" style="color: white;">
                วิธีการประเมิน
              </p>
            </header>
            <div class="card-content">
              <div class="content">
                <p>
                  <u>วิธีการประเมิน</u> :
                  ให้ผู้สูงอายุลุกขึ้นจากเก้าอี้ที่มีที่ท้าวแขน เดินเป็นเส้นตรง
                  ระยะทาง 3 เมตร หมุนตัวและเดินกลับมานั่งที่เดิม
                </p>
                <img src="@/assets/tugt.png" />
              </div>
            </div>
          </div>
          <p id="caution">
            <u style="color: red;">ข้อควรระวัง</u> :
            ผู้สูงอายุมีโอกาสที่จะหกล้มมากกว่าวัยอื่น ดังนั้น
            ผู้ทดสอบจึงควรระมัดระวังขณะทำการทดสอบ
          </p>
          <h1><u>ผลการทดสอบ</u></h1>
          <div class="ans">
            <input type="radio" />
            <span>
              <label for=""> เดินได้ เป็นเวลา </label>
              <input type="text" />
              <label for=""> นาที </label>
              <input type="text" />
              <label for=""> วินาที</label><br />
            </span>
            <input type="radio" />
            <label for=""> เดินไม่ได้</label>
          </div>
          <h1>ลักษณะการเดิน / การทรงตัว</h1>
          <div class="ans">
            <input type="radio" />
            <label for=""> มั่นคง</label><br />
            <input type="radio" />
            <label for=""> ไม่มั่นคง</label>
          </div>
          <h1>ความยาวของการก้าว</h1>
          <div class="ans">
            <input type="radio" />
            <label for=""> ปกติ</label>
            <input type="radio" />
            <label for=""> สั้น</label>
            <input type="radio" />
            <label for=""> ยาว</label><br />
            <input type="radio" />
            <label for=""> อื่น ๆ ระบุ </label>
            <input type="text" />
          </div>
          <h1>ความมั่นใจขณะเดิน</h1>
          <div class="ans">
            <input type="radio" />
            <label for=""> มั่นใจ</label><br />
            <input type="radio" />
            <label for=""> ไม่มั่นใจ</label><br />
            <input type="radio" />
            <label for=""> อื่น ๆ ระบุ </label>
            <input type="text" />
          </div>
          <h1>อุปกรณ์ช่วยขณะเดิน</h1>
          <div class="ans">
            <input type="radio" />
            <label for=""> ไม้เท้า</label>
            <input type="radio" />
            <label for=""> single cane</label>
            <br />
            <input type="radio" />
            <label for=""> tripod cane</label>
            <input type="radio" />
            <label for=""> walker</label>
            <br />
            <input type="radio" />
            <label for=""> อื่น ๆ ระบุ </label>
            <input type="text" />
          </div>
          <h1>ลักษณะรองเท้า</h1>
          <div class="ans">
            <input type="radio" />
            <label for=""> เหมาะสม</label>
            <input type="radio" />
            <label for=""> ไม่เหมาะสม</label>
            <br />
            <input type="radio" />
            <label for=""> ใช้ประจำ</label>
            <input type="radio" />
            <label for=""> บางครั้ง</label>
          </div>
          <h1>ลักษณะรองเท้า</h1>
          <div class="ans">
            <input type="radio" />
            <label for=""> เหมาะสม</label>
            <br />
            <input type="radio" />
            <label for=""> ไม่เหมาะสม</label>
            <br />
          </div>
          <div class="card" id="fullTandem">
            <header class="card-header" style="background-color: #1e3a8a;">
              <p class="card-header-title is-centered" style="color: white;">
                การประเมิน Full Tandem stand
              </p>
            </header>
            <div class="card-content">
              <div class="content" style="text-align: left;">
                <h3><u>วิธีการประเมิน</u></h3>
                <p>
                  1. ยืนให้สันเท้าข้างใดข้างหนึ่งแตะปลายเท้าของเท้าอีกข้างหนึ่ง
                </p>
                <p>2. ผู้ถูกทดสอบสามมารถลงน้ำหนักขาข้างใดก็ได้ตามที่ถนัด</p>
                <h3><u>การบันทึกผลการทดสอบ</u></h3>
                <p>
                  1. บันทึกว่าผู้ถูกทดสอบสามารถยืนทรงตัวตามรูป "ได้" หรือ
                  "ไม่ได้"
                </p>
                <p>2. บันทึกเวลาที่ผู้ถูกทดสอบสามารถยืนทรงตัว ตามการยืนได้</p>
              </div>
            </div>
          </div>
          <p id="caution1">
            <u style="color: red;">หมายเหตุ</u> :
            ผู้ถูกทดสอบต้องยืนทรงตัวอย่างน้อยที่สุด 1 วินาทีจึงจะบันทึกได้ว่า
            "สามารถยืนทรงตัวได้"
          </p>
          <h1><u>ผลการทดสอบ</u></h1>
          <div class="ans">
            <input type="radio" />
            <span>
              <label for=""> เดินได้ เป็นเวลา </label>
              <input type="text" />
              <label for=""> นาที </label>
              <input type="text" />
              <label for=""> วินาที</label><br />
            </span>
            <input type="radio" />
            <label for=""> เดินไม่ได้</label>
          </div>
          <h1>ลักษณะการทรงตัว</h1>
          <div class="ans">
            <input type="radio" />
            <label for=""> มั่นคง</label><br />
            <input type="radio" />
            <label for=""> ไม่มั่นคง</label>
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
#description {
  margin-top: 3vh;
}
#howTo {
  margin-top: 3vh;
}
</style>
