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
          <h1>แบบประเมินความเสี่ยงต่อโรคกระดูกพรุน</h1>
          <h1>การพิจารณา</h1>
          <p>ค่า OSTA น้อยกว่า -4 <span>= ความเสี่ยงสูง</span></p>
          <p>ค่า OSTA ระหว่าง -4 ถึง -1 <span>= ความเสี่ยงปานกลาง</span></p>
          <p>ค่า OSTA ระหว่างมากกว่า -1 <span>= ความเสี่ยงต่ำ</span></p>
          <h1>
            ข้อมูลผู้เข้ารับบริการ
            <span>
              <label for="">น้ำหนักตัว </label>
              <input type="text" disabled />
              <label for=""> กิโลกรัม</label><br />
            </span>
          </h1>
          <label for="">อายุ </label>
          <input type="text" disabled />
          <label for=""> ปี</label>
          <h1>
            การคำนวณค่า OSTA
            <span>
              สูตร 0.2 x (น้ำหนักตัว - อายุ)
            </span>
          </h1>
          <p>
            แทนค่า 0.2 x ( <input type="text" disabled /> -
            <input type="text" disabled /> )
          </p>
          <p>ค่าที่คำนวณได้ <input type="text" disabled /></p>
          <h1>ตารางประเมินความเสี่ยง</h1>
          <img src="@/assets/ass_table1.png" />
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
