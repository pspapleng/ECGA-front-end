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
            <div class="ques">
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
            <div class="ques">
              <input type="radio" value="" />
              <label for="">ใช้</label><br />
              <input type="radio" value="" />
              <label for="">ไม่ใช้</label><br />
            </div>
            <h1>1.3 การทำความสะอาดซอกฟันทุกวัน / เกือบทุกวัน</h1>
            <div class="ques">
              <input type="radio" value="" />
              <label for="">ใช้</label><br />
              <input type="radio" value="" />
              <label for="">ไม่ใช้</label><br />
            </div>
            <h1>2. ประเมินสภาวะเสี่ยงต่อการเกิดโรคในช่องปาก</h1>
            <div class="ques">
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
            <div class="buttons">
              <b-button
                ><i class="fa fa-check-circle-o" aria-hidden="true"></i
                >ปกติ</b-button
              >
              <b-button>ผิดปกติ</b-button>
            </div>
          </div>
        </div>
        <!---->
        <!-- choose bar maybe fixed side nav-->
        <div class="column is-3" id="choosebar">
          <div class="box has-background-light">
            <div>
              <header id="choosebarHeader">หัวข้อแบบประเมินทั้งหมด</header>
            </div>
            <div class="assChoice">
              <i class="fas fa-check-circle" id="checkIcon"></i>
              <label for="">แบบประเมินภาวะโภชนาการ (MNA)</label>
            </div>
            <div class="assChoice">
              <i class="fas fa-check-circle" id="checkIcon"></i>
              <label for="">แบบประเมินช่องปากในผู้สูงอายุ</label>
            </div>
            <div class="assChoice">
              <i class="fas fa-check-circle" id="checkIcon"></i>
              <label for=""
                >แบบประเมินภาวะหกล้ม <br />(Fall Risk Assessment Tool)</label
              >
            </div>
            <div class="assChoice">
              <i class="fas fa-check-circle" id="checkIcon"></i>
              <label for="">แบบประเมินความเศร้าในผู้สูงอายุไทย 15 ข้อ</label>
            </div>
            <div class="assChoice">
              <i class="fas fa-check-circle" id="checkIcon"></i>
              <label for=""
                >แบบประเมินคัดกรองความจำเสื่อม <br />
                สำหรับผู้สูงอายุไทย</label
              >
            </div>
            <div class="assChoice">
              <i class="fas fa-check-circle" id="checkIcon"></i>
              <label for="">แบบประเมินภาวะกลั้นปัสสาวะไม่อยู่</label>
            </div>
            <div class="assChoice">
              <i class="fas fa-check-circle" id="checkIcon"></i>
              <label for="">แบบประเมินปัญหาการนอน</label>
            </div>
            <div class="assChoice">
              <i class="fas fa-check-circle" id="checkIcon"></i>
              <label for="">แบบประเมินความเสี่ยงต่อโรคกระดูกพรุน</label>
            </div>
            <div class="assChoice">
              <i class="fas fa-check-circle" id="checkIcon"></i>
              <label for=""
                >แบบประเมินผู้สูงอายุที่ต้องได้รับ <br />
                การดูแลระยะยาว</label
              >
            </div>
            <div class="assChoice">
              <i class="fas fa-check-circle" id="checkIcon"></i>
              <label for=""
                >แบบประเมินภาวะหกล้ม <br />
                (TIME UP AND GO TEST)</label
              >
            </div>
            <div class="assChoice">
              <i class="fas fa-check-circle" id="checkIcon"></i>
              <label for="">แบบประเมิน MMSE - Thai 2002</label>
            </div>
            <div class="assChoice">
              <i class="fas fa-check-circle" id="checkIcon"></i>
              <label for="">แบบประเมินสุขภาวะทางตา</label>
            </div>
            <div class="assChoice">
              <i class="fas fa-check-circle" id="checkIcon"></i>
              <label for="">แบบประเมินโรคข้อเข่าเสื่อมทางคลินิก</label>
            </div>
            <div class="buttons" id="startButton">
              <b-button type="is-success" to="">เริ่มทำแบบประเมิน</b-button>
            </div>
          </div>
        </div>
        <!---->
      </div>
    </section>
  </div>
</template>
<script>
import Sidebar from "@/components/sidebar.vue";
export default {
  components: {
    Sidebar
  },
  name: "form1list",
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
.questions {
  margin-top: 3vh;
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
#ques_title {
  font-weight: 600;
  font-size: 1.15rem;
}
.choices {
  display: inline-block;
  text-align: left;
  margin-left: 3vw;
  margin-top: 1vh;
}
#radio {
  margin-top: 2vh;
}
#bmiBox {
  margin-bottom: 5vh;
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
