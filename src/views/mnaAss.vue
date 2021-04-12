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
          <h1>แบบประเมินภาวะโภชนาการ (MNA)</h1>
          <div class="questions">
            <div id="quesOne">
              <h1 id="ques_title">
                1. ในช่วง 3
                เดือนที่ผ่านมามีการรับประทานอาหารได้น้อยลงเนื่องจากความอยากอาหารลดลง
                <br />
                มีปัญหาการย่อย การเคี้ยว หรือการกลืน หรือไม่?
              </h1>
              <!-- <div class="choices"> -->
              <input id="radio" type="radio" value="0" />
              <label id="radio" for="">ความอยากอาหารลดลงอย่างมาก</label><br />
              <input id="radio" type="radio" value="1" />
              <label id="radio" for="">ความอยากอาหารลดลงปานกลาง</label><br />
              <input id="radio" type="radio" value="2" />
              <label id="radio" for="">ความอยากอาหารไม่ลดลง</label><br />
              <!-- </div> -->
              <h1 id="ques_title">
                2. ในช่วง 3 เดือนที่ผ่านมา น้ำหนักลดลงหรือไม่?
                (โดยไม่ได้ตั้งใจลดน้ำหนัก)
              </h1>
              <!-- <div class="choices"> -->
              <input id="radio" type="radio" value="0" />
              <label id="radio" for="">น้ำหนักลดมากกว่า 3 กิโลกรัม</label><br />
              <input id="radio" type="radio" value="1" />
              <label id="radio" for="">น้ำหนักลดระหว่าง 1 - 3 กิโลกรัม</label
              ><br />
              <input id="radio" type="radio" value="2" />
              <label id="radio" for="">น้ำหนักไม่ลดลง</label>
              <input id="radio" type="radio" value="3 " />
              <label id="radio" for="">ไม่ทราบ</label>
              <!-- </div> -->
              <h1 id="ques_title">3. สามารถเคลื่อนไหวได้เองหรือไม่?</h1>
              <input id="radio" type="radio" value="0" />
              <label for="">นอนบนเตียง</label><br />
              <input id="radio" type="radio" value="1" />
              <label for=""
                >ลุกจากเตียงหรือรถเข็นได้บ้าง
                แต่ไม่สามมารถไปข้างนอกได้เอง</label
              ><br />
              <input id="radio" type="radio" value="2" />
              <label for="">เดินและเคลื่อนไหวได้ตามปกติ</label><br />

              <h1 id="ques_title">
                4. ใน 3 เดือนที่ผ่านมา มีความเครียดรุนแรงหรือป่วยเฉียบพลัน
                หรือไม่
              </h1>
              <input id="radio" type="radio" value="0" />
              <label for="">มี</label><br />
              <input id="radio" type="radio" value="1" />
              <label for="">ไม่มี</label><br />

              <h1 id="ques_title">5. มีปัญหาทางจิตประสาท หรือไม่</h1>
              <input id="radio" type="radio" value="0" />
              <label for="">ความจำเสื่อม หรือ ซึมเศร้ารุนแรง</label><br />
              <input id="radio" type="radio" value="1" />
              <label for="">ความจำเสื่อมเล็กน้อย</label><br />
              <input id="radio" type="radio" value="2" />
              <label for="">ไม่มีปัญหาทางประสาท</label><br />

              <h1 id="ques_title">
                <p>
                  6. ดัชนีมวลกาย [BMI = น้ำหนัก (กก.) / ส่วนสูง
                  (ม.)<sup>2</sup>]
                </p>
              </h1>
              <label for="">BMI </label>
              <input id="bmiBox" type="box" disabled />
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
/* #ques_title {
        font-weight: 600;
        font-size: 1.15rem;
    } */
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
</style>
