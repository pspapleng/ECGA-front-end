<template>
  <div class="hero is-fullheight">
    <div class="hero-body py-3">
      <div class="container">
        <div class="columns">
          <div
            class="column is-11-desktop is-9-tablet is-7-mobile is-offset-1-desktop is-offset-2-tablet is-offset-3-mobile"
          >
            <div class="card">
              <header class="card-header">
                <p
                  class="card-header-title  has-text-left"
                  style="color: white; background-color: #1E3A8A"
                >
                  แบบประเมิน MMSE – Thai 2002
                </p>
              </header>
              <div class="card-content">
                <div class="content has-text-left">
                  Mini - Mental State Examination : Thai Version <br />
                  <u>คำชี้แจง</u> : ในกรณีที่ผู้ทดสอบอ่านไม่ออกเขียนไม่ได้
                  ไม่ต้องทำข้อ 4, 9 และ 10
                </div>
              </div>
            </div>
            <div
              class="card"
              v-for="ques in form.slice(70, 71)"
              :key="ques.ques_id"
            >
              <div class="card-content">
                <div class="content has-text-left">
                  <p class="title">
                    {{ ques.ques }}
                  </p>
                  <div class="ans" v-for="ch in ques.choice" :key="ch.ans_id">
                    <b-radio
                      disabled
                      v-if="ans[ques.ques_id - 1].ans_value != ch.ans_value"
                      id="ques.ques_id"
                      :native-value="ch.ans_value"
                      v-model="ans[ques.ques_id - 1].ans_value"
                      type="is-info"
                    >
                      <p style="color: black">{{ ch.ans_title }}</p>
                    </b-radio>
                    <b-radio
                      disabled
                      v-else
                      id="ques.ques_id"
                      :native-value="ch.ans_value"
                      v-model="ans[ques.ques_id - 1].ans_value"
                      type="is-info"
                    >
                      <p style="color: black">
                        {{ ans[ques.ques_id - 1].ans_title }}
                      </p>
                    </b-radio>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <div class="content has-text-left">
                  <u class="title">ส่วนที่ 1 Orientation for time</u>
                  <p>
                    ให้ผู้ทดสอบตอบคำถามแล้วตรวจเช็คความถูกต้องของคำตอบพร้อมบันทึกคำตอบทั้งผิดและถูกทุกครั้ง
                  </p>
                  <div
                    class="ques mt-3 ml-5"
                    v-for="ques in form.slice(71, 76)"
                    :key="ques.ques_id"
                  >
                    <p class="title">
                      {{ ques.ques }}
                    </p>
                    <div v-if="ans[ques.ques_id - 1].ans_value === 1">
                      คำตอบ :
                      <mark style="background-color: #047857; color: white">
                        <span class="mx-2">{{
                          ans[ques.ques_id - 1].ans_title
                        }}</span>
                      </mark>
                    </div>
                    <div v-else>
                      คำตอบ :
                      <mark style="background-color: #DF2935; color: white">
                        <span class="mx-2">{{
                          ans[ques.ques_id - 1].ans_title
                        }}</span>
                      </mark>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <div class="content has-text-left">
                  <u class="title">ส่วนที่ 2 Orientation for place</u>
                  <p>
                    ให้ผู้ทดสอบตอบคำถามแล้วตรวจเช็คความถูกต้องของคำตอบพร้อมบันทึกคำตอบทั้งผิดและถูกทุกครั้ง
                  </p>
                  <div
                    class="ques mt-3 ml-5"
                    v-for="ques in form.slice(76, 77)"
                    :key="ques.ques_id"
                  >
                    <p class="title">
                      {{ ques.ques }}
                    </p>
                    <div class="ans" v-for="ch in ques.choice" :key="ch.ans_id">
                      <b-radio
                        disabled
                        v-if="ans[ques.ques_id - 1].ans_value != ch.ans_value"
                        id="ques.ques_id"
                        :native-value="ch.ans_value"
                        v-model="ans[ques.ques_id - 1].ans_value"
                        type="is-info"
                      >
                        <p style="color: black">{{ ch.ans_title }}</p>
                      </b-radio>
                      <b-radio
                        disabled
                        v-else
                        id="ques.ques_id"
                        :native-value="ch.ans_value"
                        v-model="ans[ques.ques_id - 1].ans_value"
                        type="is-info"
                      >
                        <p style="color: black">
                          {{ ans[ques.ques_id - 1].ans_title }}
                        </p>
                      </b-radio>
                    </div>
                  </div>
                  <div
                    class="ques mt-3 ml-5"
                    v-for="ques in form.slice(77, 82)"
                    :key="ques.ques_id"
                  >
                    <p class="title">
                      {{ ques.ques }}
                    </p>
                    <div v-if="ans[ques.ques_id - 1].ans_value === 1">
                      คำตอบ :
                      <mark style="background-color: #047857; color: white">
                        <span class="mx-2">{{
                          ans[ques.ques_id - 1].ans_title
                        }}</span>
                      </mark>
                    </div>
                    <div v-else>
                      คำตอบ :
                      <mark style="background-color: #DF2935; color: white">
                        <span class="mx-2">{{
                          ans[ques.ques_id - 1].ans_title
                        }}</span>
                      </mark>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <div class="content has-text-left">
                  <u class="title">ส่วนที่ 3 Registration</u>
                  <p>ให้พยาบาลบอกรายละเอียดกับผู้ถูกทดสอบดังนี้</p>
                  <div class="card mb-4">
                    <div class="card-content">
                      <div class="content has-text-left">
                        "ต่อไปนี้เป็นการทดสอบความจำ ผม (ดิฉัน) จะบอกชื่อของ 3
                        อย่าง คุณ (ตา, ยาย, ...) ตั้งใจฟังให้ดีนะ
                        เพราะจะบอกเพียงครั้งเดียว ไม่มีการบอกซ้ำอีก เมื่อผม
                        (ดิฉัน) พูดจบให้คุณ (ตา, ยาย, ...)
                        พูดทบทวนตามที่ได้ยินให้ครบทั้ง 3 ชื่อ
                        แล้วพยายามจำไว้ให้ดี เดี๋ยวผม (ดิฉัน) จะถามซ้ำ"
                      </div>
                    </div>
                  </div>
                  <u>ข้อปฏิบัติ</u> การบอกชื่อแต่ละคำให้ห่างกันประมาณ 1 วินาที
                  ต้องไม่ช้าหรือเร็วเกินไป
                  <div
                    class="ques mt-3 ml-5"
                    v-for="ques in form.slice(82, 85)"
                    :key="ques.ques_id"
                  >
                    <p class="title">
                      {{ ques.ques }}
                    </p>
                    <div v-if="ans[ques.ques_id - 1].ans_value === 1">
                      คำตอบ :
                      <mark style="background-color: #047857; color: white">
                        <span class="mx-2">{{
                          ans[ques.ques_id - 1].ans_title
                        }}</span>
                      </mark>
                    </div>
                    <div v-else>
                      คำตอบ :
                      <mark style="background-color: #DF2935; color: white">
                        <span class="mx-2">{{
                          ans[ques.ques_id - 1].ans_title
                        }}</span>
                      </mark>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <div class="content has-text-left">
                  <u class="title">ส่วนที่ 4 Attention/Calculation</u>
                  <p>
                    ให้ผู้ถูกทดสอบตอบคำถามแล้วตรวจเช็คความถูกต้องของคำตอบพร้อมบันทึกคำตอบทั้งผิดและถูกทุกครั้ง
                  </p>
                  <div
                    class="ques mt-3 ml-5"
                    v-for="ques in form.slice(85, 86)"
                    :key="ques.ques_id"
                  >
                    <p class="title">
                      {{ ques.ques }}
                    </p>
                    <div class="ans" v-for="ch in ques.choice" :key="ch.ans_id">
                      <b-radio
                        disabled
                        v-if="ans[ques.ques_id - 1].ans_value != ch.ans_value"
                        id="ques.ques_id"
                        :native-value="ch.ans_value"
                        v-model="ans[ques.ques_id - 1].ans_value"
                        type="is-info"
                      >
                        <p style="color: black">{{ ch.ans_title }}</p>
                      </b-radio>
                      <b-radio
                        disabled
                        v-else
                        id="ques.ques_id"
                        :native-value="ch.ans_value"
                        v-model="ans[ques.ques_id - 1].ans_value"
                        type="is-info"
                      >
                        <p style="color: black">
                          {{ ans[ques.ques_id - 1].ans_title }}
                        </p>
                      </b-radio>
                    </div>
                    <div v-if="ans[ques.ques_id - 1].ans_value === 1">
                      <div
                        class="ques mt-3 ml-5"
                        v-for="ques in form.slice(86, 87)"
                        :key="ques.ques_id"
                      >
                        <p class="title">
                          {{ ques.ques }}
                        </p>
                        <p>
                          “ข้อนี้คิดในใจเอา 100 ตั้ง ลบออกทีละ 7 ไปเรื่อยๆ
                          ได้ผลเท่าไหร่บอกมา”
                          <mark
                            ><span style="color: #047857"
                              >(เฉลย : 93, 86, 79, 72, 65)</span
                            >
                          </mark>
                        </p>
                        <div v-if="ans[ques.ques_id - 1].ans_value === 1">
                          คำตอบ :
                          <mark style="background-color: #047857; color: white">
                            <span class="mx-2">{{
                              ans[ques.ques_id - 1].ans_title
                            }}</span>
                          </mark>
                        </div>
                        <div v-else>
                          คำตอบ :
                          <mark style="background-color: #DF2935; color: white">
                            <span class="mx-2">{{
                              ans[ques.ques_id - 1].ans_title
                            }}</span>
                          </mark>
                        </div>
                      </div>
                    </div>
                    <div v-if="ans[ques.ques_id - 1].ans_value === 0">
                      <div
                        class="ques mt-3 ml-5"
                        v-for="ques in form.slice(87, 88)"
                        :key="ques.ques_id"
                      >
                        <p class="title">{{ ques.ques }}</p>
                        <p>
                          “ผม (ดิฉัน) จะสะกดคำว่า มะนาว ให้คุณ (ตา, ยาย, ...)
                          ฟัง แล้วให้คุณ (ตา, ยาย, ...) สะกดถอยหลัง
                          จากพยัญชนะตัวหลังไปตัวแรก คำว่ามะนาวสะกดว่า
                          มอม้า-สระอะ-นอหนู-สระอา-วอแหวน ไหนคุณ (ตา, ยาย, ...)
                          สะกดถอยหลังให้ฟังหน่อยสิคะ”
                          <mark
                            ><span style="color: #047857"
                              >(เฉลย : ว, า, น, ะ, ม)</span
                            >
                          </mark>
                        </p>
                        <div v-if="ans[ques.ques_id - 1].ans_value === 1">
                          คำตอบ :
                          <mark style="background-color: #047857; color: white">
                            <span class="mx-2">{{
                              ans[ques.ques_id - 1].ans_title
                            }}</span>
                          </mark>
                        </div>
                        <div v-else>
                          คำตอบ :
                          <mark style="background-color: #DF2935; color: white">
                            <span class="mx-2">{{
                              ans[ques.ques_id - 1].ans_title
                            }}</span>
                          </mark>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <div class="content has-text-left">
                  <u class="title">ส่วนที่ 5 Recall</u>
                  <p>ให้พยาบาลบอกรายละเอียดกับผู้ถูกทดสอบดังนี้</p>
                  <div
                    class="ques mt-3 ml-5"
                    v-for="ques in form.slice(88, 89)"
                    :key="ques.ques_id"
                  >
                    <p class="title">
                      {{ ques.ques }}
                    </p>
                    <div v-if="ans[ques.ques_id - 1].ans_value === 1">
                      คำตอบ :
                      <mark style="background-color: #047857; color: white">
                        <span class="mx-2">{{
                          ans[ques.ques_id - 1].ans_title
                        }}</span>
                      </mark>
                    </div>
                    <div v-else>
                      คำตอบ :
                      <mark style="background-color: #DF2935; color: white">
                        <span class="mx-2">{{
                          ans[ques.ques_id - 1].ans_title
                        }}</span>
                      </mark>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <div class="content has-text-left">
                  <u class="title">ส่วนที่ 6 Naming</u>
                  <div
                    class="ques mt-3 ml-5"
                    v-for="ques in form.slice(89, 91)"
                    :key="ques.ques_id"
                  >
                    <p class="title">
                      {{ ques.ques }}
                    </p>
                    <div v-if="ans[ques.ques_id - 1].ans_value === 1">
                      คำตอบ :
                      <mark style="background-color: #047857; color: white">
                        <span class="mx-2">{{
                          ans[ques.ques_id - 1].ans_title
                        }}</span>
                      </mark>
                    </div>
                    <div v-else>
                      คำตอบ :
                      <mark style="background-color: #DF2935; color: white">
                        <span class="mx-2">{{
                          ans[ques.ques_id - 1].ans_title
                        }}</span>
                      </mark>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <div class="content has-text-left">
                  <u class="title">ส่วนที่ 7 Repetition</u>
                  <p>ให้พยาบาลบอกรายละเอียดกับผู้ถูกทดสอบดังนี้</p>
                  <div class="card mb-4">
                    <div class="card-content">
                      <div class="content has-text-centered">
                        "ตั้งใจฟังผม (ดิฉัน) เมื่อผม (ดิฉัน)
                        พูดข้อความนี้แล้วให้คุณ (ตา , ยาย, ...) พูดตาม ผม
                        (ดิฉัน) จะบอกเพียงครั้งเดียว"
                        <br />
                        <b class="title">"ใครใคร่ขายไข่ไก่"</b>
                      </div>
                    </div>
                  </div>
                  <div
                    class="ques mt-3 ml-5"
                    v-for="ques in form.slice(91, 92)"
                    :key="ques.ques_id"
                  >
                    <p class="title">
                      {{ ques.ques }}
                    </p>
                    <div v-if="ans[ques.ques_id - 1].ans_value === 1">
                      คำตอบ :
                      <mark style="background-color: #047857; color: white">
                        <span class="mx-2">{{
                          ans[ques.ques_id - 1].ans_title
                        }}</span>
                      </mark>
                    </div>
                    <div v-else>
                      คำตอบ :
                      <mark style="background-color: #DF2935; color: white">
                        <span class="mx-2">{{
                          ans[ques.ques_id - 1].ans_title
                        }}</span>
                      </mark>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <div class="content has-text-left">
                  <u class="title">ส่วนที่ 8 Verbal command</u>
                  <p>ให้พยาบาลบอกรายละเอียดกับผู้ถูกทดสอบดังนี้</p>
                  <div class="card mb-4">
                    <div class="card-content">
                      <div class="content has-text-centered">
                        "ฟังดี ๆ นะ เดี๋ยวผม (ดิฉัน) จะส่งกระดาษให้คุณ
                        แล้วให้คุณ (ตา , ยาย, ...) รับด้วยมือขวา พับครึ่งกระดาษ
                        แล้ววางไว้ที่... (พื้น, โต๊ะ, เตียง)"
                      </div>
                    </div>
                  </div>
                  <div
                    class="ques mt-3 ml-5"
                    v-for="ques in form.slice(92, 95)"
                    :key="ques.ques_id"
                  >
                    <p class="title">
                      {{ ques.ques }}
                    </p>
                    <div v-if="ans[ques.ques_id - 1].ans_value === 1">
                      คำตอบ :
                      <mark style="background-color: #047857; color: white">
                        <span class="mx-2">{{
                          ans[ques.ques_id - 1].ans_title
                        }}</span>
                      </mark>
                    </div>
                    <div v-else>
                      คำตอบ :
                      <mark style="background-color: #DF2935; color: white">
                        <span class="mx-2">{{
                          ans[ques.ques_id - 1].ans_title
                        }}</span>
                      </mark>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <div class="content has-text-left">
                  <u class="title">ส่วนที่ 9 Written command</u>
                  <p>ให้พยาบาลบอกรายละเอียดกับผู้ถูกทดสอบดังนี้</p>
                  <div class="card mb-4">
                    <div class="card-content">
                      <div class="content has-text-centered">
                        "ต่อไปนี้เป็นคำสั่งที่เขียนเป็นตัวหนังสือ ต้องการให้คุณ
                        (ตา, ยาย, ...) อ่านแล้วทำตาม คุณ (ตา, ยาย, ...)
                        จะอ่านออกเสียงหรืออ่านในใจก็ได้"
                      </div>
                    </div>
                  </div>
                  <div
                    class="ques mt-3 ml-5"
                    v-for="ques in form.slice(95, 96)"
                    :key="ques.ques_id"
                  >
                    <p class="title">
                      {{ ques.ques }}
                    </p>
                    <div v-if="ans[ques.ques_id - 1].ans_value === 1">
                      คำตอบ :
                      <mark style="background-color: #047857; color: white">
                        <span class="mx-2">{{
                          ans[ques.ques_id - 1].ans_title
                        }}</span>
                      </mark>
                    </div>
                    <div v-else>
                      คำตอบ :
                      <mark style="background-color: #DF2935; color: white">
                        <span class="mx-2">{{
                          ans[ques.ques_id - 1].ans_title
                        }}</span>
                      </mark>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <div class="content has-text-left">
                  <u class="title">ส่วนที่ 10 Writing</u>
                  <p>ให้พยาบาลบอกรายละเอียดกับผู้ถูกทดสอบดังนี้</p>
                  <div class="card mb-4">
                    <div class="card-content">
                      <div class="content has-text-centered">
                        "ให้คุณ (ตา, ยาย, ...)
                        เขียนข้อความอะไรก็ได้ที่อ่านแล้วรู้เรื่องหรือมีความหมายมา
                        1 ประโยค"
                      </div>
                    </div>
                  </div>
                  <div
                    class="ques mt-3 ml-5"
                    v-for="ques in form.slice(96, 97)"
                    :key="ques.ques_id"
                  >
                    <p class="title">
                      {{ ques.ques }}
                    </p>
                    <div v-if="ans[ques.ques_id - 1].ans_value === 1">
                      คำตอบ :
                      <mark style="background-color: #047857; color: white">
                        <span class="mx-2">{{
                          ans[ques.ques_id - 1].ans_title
                        }}</span>
                      </mark>
                    </div>
                    <div v-else>
                      คำตอบ :
                      <mark style="background-color: #DF2935; color: white">
                        <span class="mx-2">{{
                          ans[ques.ques_id - 1].ans_title
                        }}</span>
                      </mark>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <div class="content has-text-left">
                  <u class="title">ส่วนที่ 11 Visuoconstruction</u>
                  <div class="card mb-4">
                    <div class="card-content">
                      <div class="content has-text-centered">
                        <img src="@/assets/visuo.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div
                    class="ques mt-3 ml-5"
                    v-for="ques in form.slice(97, 98)"
                    :key="ques.ques_id"
                  >
                    <p class="title">
                      {{ ques.ques }}
                    </p>
                    <div v-if="ans[ques.ques_id - 1].ans_value === 1">
                      คำตอบ :
                      <mark style="background-color: #047857; color: white">
                        <span class="mx-2">{{
                          ans[ques.ques_id - 1].ans_title
                        }}</span>
                      </mark>
                    </div>
                    <div v-else>
                      คำตอบ :
                      <mark style="background-color: #DF2935; color: white">
                        <span class="mx-2">{{
                          ans[ques.ques_id - 1].ans_title
                        }}</span>
                      </mark>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="columns mt-4">
              <div class="column is-2">
                <router-link to="/results/result7">
                  <b-button class="mr-2">
                    <b-icon icon="chevron-left"> </b-icon>
                  </b-button>
                </router-link>
                <router-link to="/results/result9">
                  <b-button>
                    <b-icon icon="chevron-right"> </b-icon>
                  </b-button>
                </router-link>
              </div>
              <div class="column is-8 is-offset-4">
                <router-link to="/results">
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
                  @click="isAssess = true"
                  style="font-family: 'Kanit', sans-serif; font-weight: 400; color: #047857"
                  >ประเมินผล</b-button
                >
              </div>
            </div>
          </div>
          <div class="column is-1-desktop is-3-tablet is-5-mobile">
            <Sidebar />
          </div>
        </div>

        <!-- ผลประเมิน -->
        <b-modal v-model="isAssess" :width="640">
          <div class="card">
            <header class="card-header">
              <p
                class="card-header-title has-text-left"
                style="color: white; background-color: #1E3A8A"
              >
                ผลการประเมิน MMSE – Thai 2002
              </p>
            </header>
            <div class="card-content" style="background-color: #f4f4f4">
              <div class="content has-text-centered ml-6">
                <div class="has-text-left mb-4">
                  การแปลผล
                  <p>
                    ถ้าคะแนนน้อยกว่าจุดตัด แสดงว่า
                    เป็นผู้สงสัยว่ามีภาสะสมองเสื่อม (Cognitive Impairment)
                    ให้ส่งต่อแพทย์เพื่อตรวจวินิจฉัยยืนยันและทำการรักษาในรายการที่สงสัยว่าภาวะสมองเสื่อม
                  </p>
                </div>
                <img src="@/assets/result_mmse.png" alt="" />
              </div>
              <div class="card">
                <div class="card-content has-text-centered">
                  <div class="content">
                    <p class="title">
                      {{ user.result.MMSE }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <footer class="card-footer">
              <p
                class="card-footer-item"
                @click="isAssess = false"
                style="color: #F90000"
              >
                ย้อนกลับ
              </p>
              <router-link class="card-footer-item" to="/results/result9">
                <p style="color: #047857">
                  ดูผลแบบประเมินถัดไป
                </p>
              </router-link>
            </footer>
          </div>
        </b-modal>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/sidebar.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    Sidebar
  },
  name: "result8",
  data() {
    return {
      isAssess: false
    };
  },
  computed: {
    ...mapState({
      form: "json",
      ans: "ans",
      user: "owner"
    })
  },
  methods: {
    ...mapActions(["getAns"])
  },
  beforeRouteEnter(to, from, next) {
    console.log("before");
    next(vm => {
      vm.getAns();
    });
  }
};
</script>
<style>
.card-header-title {
  font-size: 1.5rem;
  font-weight: 500;
}
.head {
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
}
.title {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
}
.card {
  margin-top: 3vh;
}
</style>
