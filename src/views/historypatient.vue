<template>
  <div class="hero is-fullheight bg">
    <section class="section">
      <div id="app">
        <b-button
          class="button column is-half container is-max-desktop"
          @click="isActive = true"
          >นางสาว ธิดาพร ชาวคูเวียง</b-button
        >
        <b-modal v-model="isActive">
          <form class="card">
            <div class="column is-full has-background-grey-light">
              <strong id="head">ประวัติผู้เข้ารับบริการ</strong>
            </div>
            <div class="name column is-full has-background-grey-light">
              <strong id="head-name">นางสาว ธิดาพร ชาวคูเวียง</strong>
            </div>
            <div class="column  is-full">
              <div class="level">
                <div class="br column is-6">
                  <b-field grouped>
                    <b-field id="tx" label="ชื่อ">
                      <b-input id="info" value="ธิดาพร" disabled></b-input>
                    </b-field>
                    <b-field id="tx" label="นามสกุล">
                      <b-input id="info" value="ชาวคูเวียง" disabled></b-input>
                    </b-field>
                  </b-field>
                  <b-field grouped>
                    <b-field id="tx" label="เพศ">
                      <b-input id="info" value="หญิง" disabled></b-input>
                    </b-field>
                  </b-field>
                  <b-field grouped>
                    <b-field id="tx" label="วัน เดือน ปีเกิด">
                      <b-field class="column is-2">
                        <b-input id="info" value="9" disabled></b-input>
                      </b-field>
                      <b-field class="column is-2">
                        <b-input id="info" value="กันยายน" disabled></b-input>
                      </b-field>
                      <b-field class="column is-2">
                        <b-input id="info" value="1994" disabled></b-input>
                      </b-field>
                    </b-field>
                  </b-field>
                  <b-field grouped>
                    <b-field id="tx" label="อายุ" class="column is-4">
                      <b-input id="info" value="27" disabled></b-input>
                    </b-field>
                  </b-field>
                </div>
                <div class="bl column is-6">
                  <b-field grouped>
                    <b-field id="tx" label="วันที่เข้ารับบริการ">
                      <b-field class="column is-2">
                        <b-input id="info" value="19" disabled></b-input>
                      </b-field>
                      <b-field class="column is-2">
                        <b-input id="info" value="มีนาคม" disabled></b-input>
                      </b-field>
                      <b-field class="column is-2">
                        <b-input id="info" value="2021" disabled></b-input>
                      </b-field>
                    </b-field>
                  </b-field>
                  <b-field grouped>
                    <b-field id="tx" label="น้ำหนัก" class="column is-3">
                      <b-input id="info" value="50" disabled></b-input>
                    </b-field>
                    <b-field id="tx" label="ส่วนสูง" class="column is-3">
                      <b-input id="info" value="145" disabled></b-input>
                    </b-field>
                    <b-field id="tx" label="BMI" class="column is-3">
                      <b-input id="info" value="23.78" disabled></b-input>
                    </b-field>
                  </b-field>
                  <b-field grouped>
                    <b-field id="tx" label="รอบเอว" class="column is-4">
                      <b-input id="info" value="32" disabled></b-input>
                    </b-field>
                  </b-field>
                  <b-field grouped>
                    <b-field
                      id="tx"
                      label="ประวัติการล้มใน 1 ปี"
                      class="column is-5"
                    >
                      <b-input id="info" value="365" disabled></b-input>
                    </b-field>
                  </b-field>
                </div>
              </div>
            </div>
          </form>
        </b-modal>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "historypatient",
  data() {
    return {
      isActive: false
    };
  }
};
</script>

<style>
.bg {
  background-color: #1e3a8a;
}
.name {
  margin: 2px 0px 3px 0px;
}
#tx {
  color: black;
  justify-content: left;
  text-align: left;
}
.br {
  margin-right: 10px;
}
.bl {
  margin-left: 10px;
}
#info {
  color: black;
}
#head-name {
  font-size: 1.6rem;
}
#head {
  font-size: 1.2rem;
}
</style>
