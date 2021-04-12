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
          <h1>แบบประเมินปัญหาการนอน</h1>
          <div class="question">
            <h1>1. ผู้สูงอายุมีปัญหานอนหลับหรือไม่ ?</h1>
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
            <div class="ans">
              <input type="checkbox" />
              <label for=""> นอนไม่หลับ</label>
              <input type="checkbox" />
              <label for=""> นอนละเมอ</label><br />
              <input type="checkbox" />
              <label for=""> นอนหลับมากไป</label>
              <input type="checkbox" />
              <label for=""> นอนกรน</label><br />
              <input type="checkbox" />
              <label for=""> อื่น ๆ ระบุ </label>
              <input type="text" />
              <h1>1.6 ระยะเวลาที่มีปัญหาการนอนหลับ</h1>
              <b-field>
                <b-numberinput controls-position="compact"></b-numberinput>
              </b-field>
              <b-field>
                <b-numberinput controls-position="compact"></b-numberinput>
              </b-field>
            </div>
            <div class="ans">
              <h1>โดยเฉลี่ยผู้สูงอายุหลับได้คืนละ</h1>
              <b-field>
                <b-numberinput controls-position="compact"></b-numberinput>
              </b-field>
            </div>
          </div>
          <h1>2. ผู้สูงอายุมีอาการง่วง อ่อนเพลีย ตอนกลางวันหรือไม่ ?</h1>
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
