<template>
  <div>
    <section>
      <div class="columns">
        <div class="column is-1">
          <div>
            <Sidebar />
          </div>
        </div>

        <div class="column is-11">
          <div class="assName card mt-6 mr-6">
            <p
              class="card-header-title"
              style="color: white; background-color: #1e3a8a"
            >
              แบบทดสอบ MMSE - Thai 2002 <br />
              Mini - Mental State Examination: Thai version
            </p>
          </div>

          <div class="questions">
            <div class="card mr-6">
              <div
                class="card-content"
                v-for="ques in form.slice(70, 71)"
                :key="ques.ques_id"
              >
                <div class="quesContent content">
                  <p>{{ ques.ques }}</p>
                  <div v-for="ch in ques.choice" :key="ch.ans_id">
                    <b-field>
                      <b-radio
                        id="ques.ques_id"
                        v-model="ques.ans"
                        :native-value="ch.ans_value"
                        type="is-info"
                        @change.native="
                          e =>
                            setAns({
                              id: ques.ques_id,
                              value: parseInt(e.target.value),
                              title: ch.ans_title
                            })
                        "
                      >
                      </b-radio>
                      <label id="ques.ques_id" for="">{{ ch.ans_title }}</label>
                    </b-field>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card mr-6">
            <div class="card-content">
              <p><u>ส่วนที่ 1 Orientation for time</u></p>
              <div class="content">
                <div
                  class="questions"
                  v-for="ques in form.slice(71, 76)"
                  :key="ques.ques_id"
                >
                  <p id="ques_title">
                    {{ ques.ques }}
                  </p>
                  <input
                    style="float: left;"
                    type="text"
                    v-model="ques.ans_input"
                  /><br />
                  <div v-for="ch in ques.choice" :key="ch.ans_id">
                    <b-field>
                      <b-radio
                        id="ques.ques_id"
                        v-model="ques.ans"
                        :native-value="ch.ans_value"
                        type="is-info"
                        @change.native="
                          e =>
                            setAns({
                              id: ques.ques_id,
                              value: parseInt(e.target.value),
                              title: ch.ans_title + ques.ans_input
                            })
                        "
                      >
                      </b-radio>
                      <label id="ques.ques_id" for="">{{ ch.ans_title }}</label>
                    </b-field>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card mr-6">
            <div class="card-content">
              <p><u>ส่วนที่ 2 Orientation for place</u></p>
              <p>
                ให้ผู้ถูกทดสอบตอบคำถามแล้วตรวจเช็คความถูกต้องของคำตอบพร้อมบันทึกคำตอบนั้นทั้งผิดและถูกทุกครั้ง
              </p>
              <div class="content mt-5">
                <div
                  class="questions"
                  v-for="ques in form.slice(76, 77)"
                  :key="ques.ques_id"
                >
                  <p id="ques_title">
                    {{ ques.ques }}
                  </p>
                  <div v-for="ch in ques.choice" :key="ch.ans_id">
                    <b-field>
                      <b-radio
                        id="ques.ques_id"
                        v-model="ques.ans"
                        :native-value="ch.ans_value"
                        type="is-info"
                        @change.native="
                          e =>
                            setAns({
                              id: ques.ques_id,
                              value: parseInt(e.target.value),
                              title: ch.ans_title
                            })
                        "
                      >
                      </b-radio>
                      <label id="ques.ques_id" for="">{{ ch.ans_title }}</label>
                    </b-field>
                  </div>
                </div>
                <div
                  class="questions"
                  v-for="ques in form.slice(77, 82)"
                  :key="ques.ques_id"
                >
                  <p id="ques_title">
                    {{ ques.ques }}
                  </p>
                  <input
                    style="float: left;"
                    type="text"
                    v-model="ques.ans_input"
                  /><br />
                  <div v-for="ch in ques.choice" :key="ch.ans_id">
                    <b-field>
                      <b-radio
                        id="ques.ques_id"
                        v-model="ques.ans"
                        :native-value="ch.ans_value"
                        type="is-info"
                        @change.native="
                          e =>
                            setAns({
                              id: ques.ques_id,
                              value: parseInt(e.target.value),
                              title: ch.ans_title + ques.ans_input
                            })
                        "
                      >
                      </b-radio>
                      <label id="ques.ques_id" for="">{{ ch.ans_title }}</label>
                    </b-field>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card mr-6">
            <div class="card-content">
              <p><u>ส่วนที่ 3 Registration</u></p>
              <p>ให้พยาบาลบอกรายละเอียดกับผู้ถูกทดสอบดังนี้ :</p>
              <div class="card">
                <div class="card-content">
                  <p>
                    "ต่อไปนี้เป็นการทดสอบความจำ ผม (ดิฉัน) จะบอกชื่อของ 3 อย่าง
                    คุณ (ตา, ยาย, ...) ตั้งใจฟังให้ดีนะ
                    เพราะจะบอกเพียงแค่ครั้งเดียว ไม่มีการบอกซ้ำอีก เมื่อผม
                    (ดิฉัน) พูดจบให้คุณ (ตา, ยาย, ...)
                    พูดทบทวนตามที่ได้ยินให้ครบทั้ง 3 ชื่อ แล้วพยายามจำไว้ให้ดี
                    เดี๋ยวผม (ดิฉัน) จะถามซ้ำ"
                  </p>
                </div>
              </div>
              <div class="content">
                <div
                  class="questions"
                  v-for="ques in form.slice(82, 85)"
                  :key="ques.ques_id"
                >
                  <p id="ques_title">
                    {{ ques.ques }}
                  </p>
                  <input
                    style="float: left;"
                    type="text"
                    v-model="ques.ans_input"
                  /><br />
                  <div v-for="ch in ques.choice" :key="ch.ans_id">
                    <b-field>
                      <b-radio
                        id="ques.ques_id"
                        v-model="ques.ans"
                        :native-value="ch.ans_value"
                        type="is-info"
                        @change.native="
                          e =>
                            setAns({
                              id: ques.ques_id,
                              value: parseInt(e.target.value),
                              title: ch.ans_title + ques.ans_input
                            })
                        "
                      >
                      </b-radio>
                      <label id="ques.ques_id" for="">{{ ch.ans_title }}</label>
                    </b-field>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card mr-6">
            <div class="card-content">
              <p><u>ส่วนที่ 4 Attention / Calculation</u></p>
              <p>
                ให้ผู้ถูกทดสอบตอบคำถามแล้วตรวจเช็คความถูกต้องของคำตอบพร้อมบันทึกคำตอบนั้นทั้งผิดและถูกทุกครั้ง
              </p>
              <div class="content mt-5">
                <div
                  class="questions"
                  v-for="ques in form.slice(85, 86)"
                  :key="ques.ques_id"
                >
                  <p id="ques_title">
                    {{ ques.ques }}
                  </p>
                  <div v-for="ch in ques.choice" :key="ch.ans_id">
                    <b-field>
                      <b-radio
                        id="ques.ques_id"
                        v-model="ques.ans"
                        :native-value="ch.ans_value"
                        type="is-info"
                        @change.native="
                          e =>
                            setAns({
                              id: ques.ques_id,
                              value: parseInt(e.target.value),
                              title: ch.ans_title
                            })
                        "
                      >
                      </b-radio>
                      <label id="ques.ques_id" for="">{{ ch.ans_title }}</label>
                    </b-field>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card mr-6">
            <div class="card-content">
              <p><u>กรณีสามารถคิดเลขในใจได้</u></p>
              <p>ให้พยาบาลบอกรายละเอียดกับผู้ถูกทดสอบดังนี้</p>
              <div class="card">
                <div class="card-content">
                  <p>
                    "ข้อนี้คิดในใจเอา 100 ตั้ง ลบทีละ 7 ไปเรื่อย ๆ
                    ได้ผลเท่าไหร่บอกมา"
                  </p>
                </div>
              </div>
              <div class="content mt-5">
                <div
                  class="questions"
                  v-for="ques in form.slice(86, 87)"
                  :key="ques.ques_id"
                >
                  <p id="ques_title">
                    {{ ques.ques }}
                  </p>
                  <div v-for="ch in ques.choice" :key="ch.ans_id">
                    <b-field>
                      <b-radio
                        id="ques.ques_id"
                        v-model="ques.ans"
                        :native-value="ch.ans_value"
                        type="is-info"
                        @change.native="
                          e =>
                            setAns({
                              id: ques.ques_id,
                              value: parseInt(e.target.value),
                              title: ch.ans_title + ques.ans_input
                            })
                        "
                      >
                      </b-radio>
                      <label id="ques.ques_id" for="">{{ ch.ans_title }}</label>
                    </b-field>
                  </div>
                  <input
                    class="ml-5 mt-2"
                    style="float: left;"
                    type="text"
                    v-model="ques.ans_input"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="card mr-6">
            <div class="card-content">
              <p><u>กรณีไม่สามารถคิดเลขในใจได้</u></p>
              <p>ให้พยาบาลบอกรายละเอียดกับผู้ถูกทดสอบดังนี้</p>
              <div class="card">
                <div class="card-content">
                  <p>
                    "ผม (ดิฉัน) จะสะกดคำว่า มะนาว ให้คุณ (ตา, ยาย, ...)
                    ฟังแล้วให้คุณ (ตา, ยาย, ...)
                    สะกดถอยหลังจากพยัญชนะตัวหลังไปตัวแรก คำว่ามะนาวสะกดว่า
                    มอม้า- สระอะ-นอหนู-สระอา-วอแหวน <br />
                    ไหนคุณ (ตา, ยาย, ...) สะกดถอยหลังให้ฟังหน่อยสิคะ"
                  </p>
                </div>
              </div>
              <div class="content mt-5">
                <div
                  class="questions"
                  v-for="ques in form.slice(87, 88)"
                  :key="ques.ques_id"
                >
                  <p id="ques_title">
                    {{ ques.ques }}
                  </p>
                  <div v-for="ch in ques.choice" :key="ch.ans_id">
                    <b-field>
                      <b-radio
                        id="ques.ques_id"
                        v-model="ques.ans"
                        :native-value="ch.ans_value"
                        type="is-info"
                        @change.native="
                          e =>
                            setAns({
                              id: ques.ques_id,
                              value: parseInt(e.target.value),
                              title: ch.ans_title + ques.ans_input
                            })
                        "
                      >
                      </b-radio>
                      <label id="ques.ques_id" for="">{{ ch.ans_title }}</label>
                    </b-field>
                  </div>
                  <input class="ml-3" type="text" v-model="ques.ans_input" />
                </div>
              </div>
            </div>
          </div>

          <div class="card mr-6">
            <div class="card-content">
              <p><u>ส่วนที่ 5 Recall</u></p>
              <div class="card">
                <div class="card-content">
                  <p>"เมื่อสักครู่ให้จำของ 3 อย่าง จำได้ไหมมีอะไรบ้าง"</p>
                </div>
              </div>
              <div class="content mt-5">
                <div
                  class="questions"
                  v-for="ques in form.slice(88, 89)"
                  :key="ques.ques_id"
                >
                  <p id="ques_title">
                    {{ ques.ques }}
                  </p>
                  <div v-for="ch in ques.choice" :key="ch.ans_id">
                    <b-field>
                      <b-radio
                        id="ques.ques_id"
                        v-model="ques.ans"
                        :native-value="ch.ans_value"
                        type="is-info"
                        @change.native="
                          e =>
                            setAns({
                              id: ques.ques_id,
                              value: parseInt(e.target.value),
                              title: ch.ans_title + ques.ans_input
                            })
                        "
                      >
                      </b-radio>
                      <label id="ques.ques_id" for="">{{ ch.ans_title }}</label>
                    </b-field>
                  </div>
                  <input
                    class="ml-5 mt-2"
                    style="float: left;"
                    type="text"
                    v-model="ques.ans_input"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="card mr-6">
            <div class="card-content">
              <p><u>ส่วนที่ 6 Naming</u></p>
              <div class="content">
                <div
                  class="questions"
                  v-for="ques in form.slice(89, 91)"
                  :key="ques.ques_id"
                >
                  <p id="ques_title">
                    {{ ques.ques }}
                  </p>
                  <input
                    style="float: left;"
                    type="text"
                    v-model="ques.ans_input"
                  /><br />
                  <div v-for="ch in ques.choice" :key="ch.ans_id">
                    <b-field>
                      <b-radio
                        id="ques.ques_id"
                        v-model="ques.ans"
                        :native-value="ch.ans_value"
                        type="is-info"
                        @change.native="
                          e =>
                            setAns({
                              id: ques.ques_id,
                              value: parseInt(e.target.value),
                              title: ch.ans_title + ques.ans_input
                            })
                        "
                      >
                      </b-radio>
                      <label id="ques.ques_id" for="">{{ ch.ans_title }}</label>
                    </b-field>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card mr-6">
            <div class="card-content">
              <p><u>ส่วนที่ 7 Repetition</u></p>
              <p>ให้พยาบาลบอกรายละเอียดกับผู้ถูกทดสอบดังนี้ :</p>
              <div class="card">
                <div class="card-content">
                  <p>
                    "ตั้งใจฟังผม (ดิฉัน) เมื่อผม (ดิฉัน) พูดข้อความนี้แล้วให้คุณ
                    (ตา, ยาย, ...) พูดตามผม (ดิฉัน) จะบอกเพียงครั้งเดียว <br />
                    "ใครใคร่ขายไข่ไก่""
                  </p>
                </div>
              </div>
              <div class="content">
                <div
                  class="questions"
                  v-for="ques in form.slice(91, 92)"
                  :key="ques.ques_id"
                >
                  <p id="ques_title">
                    {{ ques.ques }}
                  </p>
                  <input
                    style="float: left;"
                    type="text"
                    v-model="ques.ans_input"
                  /><br />
                  <div v-for="ch in ques.choice" :key="ch.ans_id">
                    <b-field>
                      <b-radio
                        id="ques.ques_id"
                        v-model="ques.ans"
                        :native-value="ch.ans_value"
                        type="is-info"
                        @change.native="
                          e =>
                            setAns({
                              id: ques.ques_id,
                              value: parseInt(e.target.value),
                              title: ch.ans_title + ques.ans_input
                            })
                        "
                      >
                      </b-radio>
                      <label id="ques.ques_id" for="">{{ ch.ans_title }}</label>
                    </b-field>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card mr-6">
            <div class="card-content">
              <p><u>ส่วนที่ 8 Verbal Command</u></p>
              <p>ให้พยาบาลบอกรายละเอียดกับผู้ถูกทดสอบดังนี้ :</p>
              <div class="card">
                <div class="card-content">
                  <p>
                    "ฟังดี ๆ นะ เดี๋ยวผม (ดิฉัน) จะส่งกระดาษให้คุณ แล้วให้คุณ
                    (ตา, ยาย, ...) รับด้วยมือขวา พับครึ่งกระดาษ แล้ววางไว้ที่
                    ... (พื้น, โต๊ะ, เตียง)"
                  </p>
                </div>
              </div>
              <div class="content">
                <div
                  class="questions"
                  v-for="ques in form.slice(92, 95)"
                  :key="ques.ques_id"
                >
                  <p id="ques_title">
                    {{ ques.ques }}
                  </p>
                  <div v-for="ch in ques.choice" :key="ch.ans_id">
                    <b-field>
                      <b-radio
                        id="ques.ques_id"
                        v-model="ques.ans"
                        :native-value="ch.ans_value"
                        type="is-info"
                        @change.native="
                          e =>
                            setAns({
                              id: ques.ques_id,
                              value: parseInt(e.target.value),
                              title: ch.ans_title
                            })
                        "
                      >
                      </b-radio>
                      <label id="ques.ques_id" for="">{{ ch.ans_title }}</label>
                    </b-field>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card mr-6">
            <div class="card-content">
              <p><u>ส่วนที่ 9 Written Command</u></p>
              <p>ให้พยาบาลบอกรายละเอียดกับผู้ถูกทดสอบดังนี้ :</p>
              <div class="card">
                <div class="card-content">
                  <p>
                    "ต่อไปเป็นคำสั่งที่เขียนเป็นตัวหนังสือ ต้องการให้คุณ (ตา,
                    ยาย, ...) อ่านแล้วทำตาม คุณ (ตา, ยาย, ...)
                    จะอ่านออกเสียงหรืออ่านในใจก็ได้"
                  </p>
                </div>
              </div>
              <div class="content">
                <div
                  class="questions"
                  v-for="ques in form.slice(95, 96)"
                  :key="ques.ques_id"
                >
                  <p id="ques_title">
                    {{ ques.ques }}
                  </p>
                  <div v-for="ch in ques.choice" :key="ch.ans_id">
                    <b-field>
                      <b-radio
                        id="ques.ques_id"
                        v-model="ques.ans"
                        :native-value="ch.ans_value"
                        type="is-info"
                        @change.native="
                          e =>
                            setAns({
                              id: ques.ques_id,
                              value: parseInt(e.target.value),
                              title: ch.ans_title
                            })
                        "
                      >
                      </b-radio>
                      <label id="ques.ques_id" for="">{{ ch.ans_title }}</label>
                    </b-field>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card mr-6">
            <div class="card-content">
              <p><u>ส่วนที่ 10 Writting</u></p>
              <p>ให้พยาบาลบอกรายละเอียดกับผู้ถูกทดสอบดังนี้ :</p>
              <div class="card">
                <div class="card-content">
                  <p>
                    "ให้คุณ (ตา, ยาย, ...)
                    เขียนข้อความอะไรก็ได้ที่อ่านแล้วรู้เรื่องหรือมีความหมายมา 1
                    ประโยค"
                  </p>
                </div>
              </div>
              <div class="content">
                <div
                  class="questions"
                  v-for="ques in form.slice(96, 97)"
                  :key="ques.ques_id"
                >
                  <p id="ques_title">
                    {{ ques.ques }}
                  </p>
                  <div v-for="ch in ques.choice" :key="ch.ans_id">
                    <b-field>
                      <b-radio
                        id="ques.ques_id"
                        v-model="ques.ans"
                        :native-value="ch.ans_value"
                        type="is-info"
                        @change.native="
                          e =>
                            setAns({
                              id: ques.ques_id,
                              value: parseInt(e.target.value),
                              title: ch.ans_title + ques.ans_input
                            })
                        "
                      >
                      </b-radio>
                      <label id="ques.ques_id" for="">{{ ch.ans_title }}</label
                      ><br />
                    </b-field>
                  </div>
                  <input
                    style="float: left;"
                    type="text"
                    v-model="ques.ans_input"
                  />
                  <p class="ml-6">ข้อความที่เขียน</p>
                </div>
              </div>
            </div>
          </div>

          <div class="card mr-6">
            <div class="card-content">
              <p><u>ส่วนที่ 11 Visuoconstruction</u></p>
              <p>ข้อนี้เป็นคำสั่ง "จงวาดภาพให้เหมือนภาพตัวอย่าง"</p>
              <div class="card">
                <div class="card-content">
                  <img src="@/assets/visuo.png" alt="" />
                </div>
              </div>
              <div class="content">
                <div
                  class="questions"
                  v-for="ques in form.slice(97, 98)"
                  :key="ques.ques_id"
                >
                  <p id="ques_title">
                    {{ ques.ques }}
                  </p>
                  <div v-for="ch in ques.choice" :key="ch.ans_id">
                    <b-field>
                      <b-radio
                        id="ques.ques_id"
                        v-model="ques.ans"
                        :native-value="ch.ans_value"
                        type="is-info"
                        @change.native="
                          e =>
                            setAns({
                              id: ques.ques_id,
                              value: parseInt(e.target.value),
                              title: ch.ans_title
                            })
                        "
                      >
                      </b-radio>
                      <label id="ques.ques_id" for="">{{ ch.ans_title }}</label
                      ><br />
                    </b-field>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="columns mt-4">
            <div class="column is-1">
              <router-link to="/forms/form7">
                <b-button class="mr-2">
                  <b-icon icon="chevron-left"> </b-icon>
                </b-button>
              </router-link>
              <router-link to="/forms/form9">
                <b-button>
                  <b-icon icon="chevron-right"> </b-icon>
                </b-button>
              </router-link>
            </div>
            <div class="column is-11 is-offset-4">
              <router-link to="/startpage">
                <b-button
                  class="back mr-2"
                  type="is-light"
                  style="font-family: 'Kanit', sans-serif; font-weight: 400; color: #1E3A8A"
                  >กลับสู่หน้าหลัก</b-button
                >
              </router-link>
              <b-button
                class="assess"
                type="is-light"
                @click="sumResult()"
                style="font-family: 'Kanit', sans-serif; font-weight: 400; color: #047857"
                >ประเมินผล</b-button
              >
            </div>
          </div>
        </div>
        <b-modal v-model="isEditResult" :width="640">
          <div class="card">
            <header class="card-header">
              <p
                class="card-header-title"
                style="color: white; background-color: #1E3A8A"
              >
                ผลการประเมินปัญหาการนอน
              </p>
            </header>
            <div class="card-content" style="background-color: #f4f4f4">
              <div class="content has-text-left ml-1">
                การพิจารณา
                <br />
                <img
                  class="is-centered"
                  src="@/assets/result_mmse.png"
                  alt=""
                />
                <br />
                การแปลผล
                <br />
                ถ้าคะแนนน้อยกว่าจุดตัด แสดงว่า เป็นผู้สงสัยว่ามีภาวะสมองเสื่อม
                (Cognitive impairment)
                ให้ส่งต่อแพทย์เพื่อวินิจฉัยยืนยันและทำการรักษาในรายที่สงสัยภาวะสมองเสื่อม
              </div>
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <p class="has-text-centered">
                      {{ anstitle }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <footer class="card-footer">
              <p
                class="card-footer-item"
                @click="isEditResult = false"
                style="color: #F90000"
              >
                ย้อนกลับ
              </p>
              <router-link
                class="card-footer-item"
                to="/forms/form9"
                @click="Finish()"
              >
                <p style="color: #047857">
                  ทำแบบประเมินถัดไป
                </p>
              </router-link>
            </footer>
          </div>
        </b-modal>
      </div>
    </section>
  </div>
</template>
<script>
import Sidebar from "@/components/sidebar.vue";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  components: {
    Sidebar
  },
  name: "Patientlist",
  data() {
    return {
      order: "is-right",
      size: "default",
      prevIcon: "chevron-left",
      nextIcon: "chevron-right",
      isEditResult: false,
      anstitle: "",
      ansvalue: 0,
      part1ans: "",
      calNum: ""
    };
  },
  computed: {
    ...mapState({
      count: state => state.count,
      form: "json",
      ans: "keep_ans",
      user: "user"
    }),
    ...mapState(["formFinish"])
  },
  methods: {
    ...mapMutations(["setAns", "setFormFinish", "setMMSE"]),
    ...mapActions(["getUserById"]),
    sumResult() {
      console.log(this.ans);
      this.anstitle = "";
      this.ansvalue = 0;
      this.isEditResult = true;

      if (this.ans[70].ans_value == 0) {
        for (var i = 71; i < 85; i++) {
          this.ansvalue += this.ans[i].ans_value;
        }
        for (i = 88; i < 95; i++) {
          this.ansvalue += this.ans[i].ans_value;
        }
        if (this.ans[97].ans_value == 1) {
          this.ansvalue += 1;
        }
      } else if (this.ans[70].ans_value == 1 || this.ans[70].ans_value == 2) {
        for (i = 71; i < 85; i++) {
          this.ansvalue += this.ans[i].ans_value;
        }
        if (this.ans[85].ans_value == 1) {
          this.ansvalue += this.ans[86].ans_value;
        } else {
          this.ansvalue += this.ans[87].ans_value;
        }
        for (i = 88; i < 98; i++) {
          this.ansvalue += this.ans[i].ans_value;
        }
      }

      if (this.ans[70].ans_value == 0 && this.ansvalue <= 14) {
        this.anstitle += "เป็นผู้สงสัยว่ามีภาวะสมองเสื่อม";
      } else if (this.ans[70].ans_value == 1 && this.ansvalue <= 17) {
        this.anstitle += "เป็นผู้สงสัยว่ามีภาวะสมองเสื่อม";
      } else if (this.ans[70].ans_value == 2 && this.ansvalue <= 22) {
        this.anstitle += "เป็นผู้สงสัยว่ามีภาวะสมองเสื่อม";
      } else {
        this.anstitle += "ไม่เป็นผู้สงสัยว่ามีภาวะสมองเสื่อม";
      }
      this.setMMSE(this.anstitle);
    },
    Finish() {
      this.formFinish.push("MMSE");
      this.setFormFinish(this.formFinish);
      console.log(this.formFinish);
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log("before");
    next(vm => {
      vm.getUserById();
    });
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
.card-header-title {
  font-size: 18px;
  font-weight: 500;
}
.content {
  font-size: 1rem;
}
.card {
  margin-top: 3vh;
}
p {
  text-align: left;
}
.ans {
  text-align: left;
  margin-left: 2vw;
}
.component {
  display: flex;
}
.checkButt {
  float: right;
}
.innerCard {
  border-radius: 10px;
  display: block;
  text-align: center;
  height: auto;
  margin-bottom: 0.5vh;
  margin-left: 12vw;
  position: relative;
  width: 25vw;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.innerContent {
  margin-top: 2.2vh;
}
#nextAss {
  margin-bottom: 3vh;
}
</style>
