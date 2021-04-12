<template>
  <div>
    <section>
      <div class="columns">
        <div class="column is-1">
          <div>
            <Sidebar />
          </div>
        </div>
        <div class="column is-8" id="details">
          <h1 id="pageHeader">แบบประเมิน E-CGA</h1>
          <div class="card" id="detailBox">
            <header class="card-header" style="background-color: lightgrey;">
              <p class="card-header-title">
                รายละเอียด
              </p>
            </header>
            <div class="card-content">
              <div class="content"></div>
            </div>
          </div>
          <div class="card" id="statusBox">
            <header class="card-header" style="background-color: lightgrey;">
              <p class="card-header-title">
                สถานะ
              </p>
            </header>
            <div class="card-content">
              <div class="content">
                <b-progress
                  style="margin-top: 5vh;"
                  size="is-large"
                  type="is-info"
                  :value="100"
                  show-value
                >
                  {{ value }} out of 13</b-progress
                >
              </div>
            </div>
          </div>
        </div>
        <div class="column is-3" id="choosebar">
          <chooseBar />
        </div>
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
#pageHeader {
  font-size: 1.6667rem;
  text-align: left;
  font-weight: 600;
}
#details {
  margin-top: 4vh;
}
#detailBox {
  margin-top: 3vh;
  width: 60vw;
  height: 30vh;
}
#statusBox {
  margin-top: 10vh;
  width: 60vw;
  height: 25vh;
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
  height: 720px;
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
