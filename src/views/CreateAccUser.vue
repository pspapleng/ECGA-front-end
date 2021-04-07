<template>
  <div class="hero is-fullheight">
    <section class="section is-small">
      <div class="row">
        <div class="column is-6">
          <h1><nobr id="sang">สร้าง</nobr>บัญชีผู้เช้ารับบริการ</h1>
        </div>
      </div>
      <div class="row">
        <div class="columns">
          <div class="column is-6">
            <form class="boxlogin column is-10">
              <div class="field">
                <div class="control">
                  <label class="level-left" for="">ชื่อ</label>
                  <input class="input" type="text" placeholder="" />
                  <label class="level-left" for="">นามสกุล</label>
                  <input class="input" type="text" placeholder="" />

                  <label class="level-left" for="">เพศ</label>
                  <b-radio
                    class="mr-5"
                    v-model="radio"
                    name="name"
                    native-value="male"
                  >
                    ชาย
                  </b-radio>
                  <b-radio
                    class="ml-5"
                    v-model="radio"
                    name="name"
                    native-value="female"
                  >
                    หญิง
                  </b-radio>
                  <label class="level-left" for="">วันที่เข้ารับริการ</label>
                  <b-field>
                    <b-datepicker
                      v-model="selected"
                      :show-week-number="showWeekNumber"
                      :locale="locale"
                      placeholder="Click to select..."
                      icon="calendar-today"
                      trap-focus
                    >
                    </b-datepicker>
                  </b-field>
                </div>
              </div>
            </form>
          </div>
          <div class="column is-6">
            <label class="level-left" for="">วันที่เข้ารับริการ</label>
            <b-field>
              <b-datepicker
                v-model="selected"
                :show-week-number="showWeekNumber"
                :locale="locale"
                placeholder="Click to select..."
                icon="calendar-today"
                trap-focus
              >
              </b-datepicker>
            </b-field>
            <b-field grouped>
              <b-field id="tx" label="น้ำหนัก" class="column is-3">
                <b-input id="info" value="50"></b-input>
              </b-field>
              <b-field id="tx" label="ส่วนสูง" class="column is-3">
                <b-input id="info" value="145"></b-input>
              </b-field>
              <b-field id="tx" label="BMI" class="column is-3">
                <b-input id="info" value="23.78" disabled></b-input>
              </b-field>
            </b-field>
            <b-field grouped>
              <b-field id="tx" label="รอบเอว" class="column is-4">
                <b-input id="info" value="32"></b-input>
              </b-field>
            </b-field>
            <b-field grouped>
              <b-field id="tx" label="ประวัติการล้มใน 1 ปี" class="column is-4">
                <b-input id="info" value="365"></b-input>
              </b-field>
            </b-field>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
h1 {
  font-size: 2rem;
}
#sang {
  border-bottom: solid 10px #1e3a8a;
}
label {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
}
</style>
