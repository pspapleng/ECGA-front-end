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
          <h1>แบบทดสอบ MMSE - Thai 2002</h1>
          <p style="text-align: left">
            Mini - Mental State Examination: Thai Version
          </p>
          <div class="question">
            <h1>ผู้ถูกทดสอบมีระดับการศึกษาระดับใด?</h1>
            <div class="ans">
              <input type="radio" />
              <label for="">ไม่สามารถอ่านออกเขียนได้</label>
              <input type="radio" />
              <label for="">เรียนระดับประถมศึกษา</label>
              <input type="radio" />
              <label for="">เรียนสูงกว่าระดับประถมศึกษา</label>
            </div>
            <h1><u>ส่วนที่ 1 Orientation for time</u></h1>
            <p style="text-align: left">
              ให้ผู้ทดสอบตอบคำถามแล้วตรวจเช็คความถูกต้องของคำตอบพร้อมบันทึกคำตอบทั้งผิดและถูกทุกครั้ง
            </p>
            <h1>1. วันนี้วันที่เท่าไหร่?</h1>
            <div class="ans">
              <span>
                <label for="">คำตอบ : </label>
                <input type="text" />
                <b-field>
                  <b-radio-button
                    v-model="radioButton"
                    native-value="0"
                    type="is-success is-light is-outlined"
                  >
                    <b-icon icon="check"></b-icon>
                    <span>ถูกต้อง</span>
                  </b-radio-button>
                  <b-radio-button
                    v-model="radioButton"
                    native-value="0"
                    type="is-warning is-light is-outlined"
                  >
                    <b-icon icon="close"></b-icon>
                    <span>ไม่ถูกต้อง</span>
                  </b-radio-button>
                </b-field>
              </span>
            </div>
            <h1>2. วันนี้วันอะไร?</h1>
            <div class="ans">
              <span>
                <label for="">คำตอบ : </label>
                <input type="text" />
                <b-field>
                  <b-radio-button
                    v-model="radioButton"
                    native-value="0"
                    type="is-success is-light is-outlined"
                  >
                    <b-icon icon="check"></b-icon>
                    <span>ถูกต้อง</span>
                  </b-radio-button>
                  <b-radio-button
                    v-model="radioButton"
                    native-value="0"
                    type="is-warning is-light is-outlined"
                  >
                    <b-icon icon="close"></b-icon>
                    <span>ไม่ถูกต้อง</span>
                  </b-radio-button>
                </b-field>
              </span>
            </div>
            <h1>3. เดือนนี้เดือนอะไร?</h1>
            <div class="ans">
              <span>
                <label for="">คำตอบ : </label>
                <input type="text" />
                <b-field>
                  <b-radio-button
                    v-model="radioButton"
                    native-value="0"
                    type="is-success is-light is-outlined"
                  >
                    <b-icon icon="check"></b-icon>
                    <span>ถูกต้อง</span>
                  </b-radio-button>
                  <b-radio-button
                    v-model="radioButton"
                    native-value="0"
                    type="is-warning is-light is-outlined"
                  >
                    <b-icon icon="close"></b-icon>
                    <span>ไม่ถูกต้อง</span>
                  </b-radio-button>
                </b-field>
              </span>
            </div>
            <h1>4. ปีนี้ปีอะไร?</h1>
            <div class="ans">
              <span>
                <label for="">คำตอบ : </label>
                <input type="text" />
                <b-field>
                  <b-radio-button
                    v-model="radioButton"
                    native-value="0"
                    type="is-success is-light is-outlined"
                  >
                    <b-icon icon="check"></b-icon>
                    <span>ถูกต้อง</span>
                  </b-radio-button>
                  <b-radio-button
                    v-model="radioButton"
                    native-value="0"
                    type="is-warning is-light is-outlined"
                  >
                    <b-icon icon="close"></b-icon>
                    <span>ไม่ถูกต้อง</span>
                  </b-radio-button>
                </b-field>
              </span>
            </div>
            <h1>5. ฤดูนี้ฤดูอะไร?</h1>
            <div class="ans">
              <span>
                <label for="">คำตอบ : </label>
                <input type="text" />
                <b-field>
                  <b-radio-button
                    v-model="radioButton"
                    native-value="0"
                    type="is-success is-light is-outlined"
                  >
                    <b-icon icon="check"></b-icon>
                    <span>ถูกต้อง</span>
                  </b-radio-button>
                  <b-radio-button
                    v-model="radioButton"
                    native-value="0"
                    type="is-warning is-light is-outlined"
                  >
                    <b-icon icon="close"></b-icon>
                    <span>ไม่ถูกต้อง</span>
                  </b-radio-button>
                </b-field>
              </span>
            </div>
            <h1><u>ส่วนที่ 2 Orientation for place</u></h1>
            <p style="text-align: left">
              ให้ผู้ทดสอบตอบคำถามแล้วตรวจเช็คความถูกต้องของคำตอบพร้อมบันทึกคำตอบทั้งผิดและถูกทุกครั้ง
            </p>
            <h1>ขณะที่กำลังทดสอบ ผู้ทดสอบอยู่ในสถานที่ใด?</h1>
            <div class="ans">
              <input type="radio" />
              <label for="">โรงพยาบาล</label>
              <input type="radio" />
              <label for="">บ้านของผู้ถูกสอบถาม</label>
            </div>
            <h1>กรณีอยู่โรงพยาบาล</h1>
            <div class="atHospital">
              <h1>1. สถานที่ตรงนี้เรียกว่าอะไร? และชื่อว่าอะไร?</h1>
              <div class="ans">
                <span>
                  <label for="">คำตอบ : </label>
                  <input type="text" />
                  <b-field>
                    <b-radio-button
                      v-model="radioButton"
                      native-value="0"
                      type="is-success is-light is-outlined"
                    >
                      <b-icon icon="check"></b-icon>
                      <span>ถูกต้อง</span>
                    </b-radio-button>
                    <b-radio-button
                      v-model="radioButton"
                      native-value="0"
                      type="is-warning is-light is-outlined"
                    >
                      <b-icon icon="close"></b-icon>
                      <span>ไม่ถูกต้อง</span>
                    </b-radio-button>
                  </b-field>
                </span>
              </div>
              <h1>2. ขณะนี้ท่านอยู่ชั้นที่เท่าไหร่ของตัวอาคาร?</h1>
              <div class="ans">
                <span>
                  <label for="">คำตอบ : </label>
                  <input type="text" />
                  <b-field>
                    <b-radio-button
                      v-model="radioButton"
                      native-value="0"
                      type="is-success is-light is-outlined"
                    >
                      <b-icon icon="check"></b-icon>
                      <span>ถูกต้อง</span>
                    </b-radio-button>
                    <b-radio-button
                      v-model="radioButton"
                      native-value="0"
                      type="is-warning is-light is-outlined"
                    >
                      <b-icon icon="close"></b-icon>
                      <span>ไม่ถูกต้อง</span>
                    </b-radio-button>
                  </b-field>
                </span>
              </div>
              <h1>3. ที่อยู่ในอำเภอ / เขตอะไร?</h1>
              <div class="ans">
                <span>
                  <label for="">คำตอบ : </label>
                  <input type="text" />
                  <b-field>
                    <b-radio-button
                      v-model="radioButton"
                      native-value="0"
                      type="is-success is-light is-outlined"
                    >
                      <b-icon icon="check"></b-icon>
                      <span>ถูกต้อง</span>
                    </b-radio-button>
                    <b-radio-button
                      v-model="radioButton"
                      native-value="0"
                      type="is-warning is-light is-outlined"
                    >
                      <b-icon icon="close"></b-icon>
                      <span>ไม่ถูกต้อง</span>
                    </b-radio-button>
                  </b-field>
                </span>
              </div>
              <h1>4. ที่นี่จังหวัดอะไร?</h1>
              <div class="ans">
                <span>
                  <label for="">คำตอบ : </label>
                  <input type="text" />
                  <b-field>
                    <b-radio-button
                      v-model="radioButton"
                      native-value="0"
                      type="is-success is-light is-outlined"
                    >
                      <b-icon icon="check"></b-icon>
                      <span>ถูกต้อง</span>
                    </b-radio-button>
                    <b-radio-button
                      v-model="radioButton"
                      native-value="0"
                      type="is-warning is-light is-outlined"
                    >
                      <b-icon icon="close"></b-icon>
                      <span>ไม่ถูกต้อง</span>
                    </b-radio-button>
                  </b-field>
                </span>
              </div>
              <h1>5. ที่นี่ภาคอะไร?</h1>
              <div class="ans">
                <span>
                  <label for="">คำตอบ : </label>
                  <input type="text" />
                  <b-field>
                    <b-radio-button
                      v-model="radioButton"
                      native-value="0"
                      type="is-success is-light is-outlined"
                    >
                      <b-icon icon="check"></b-icon>
                      <span>ถูกต้อง</span>
                    </b-radio-button>
                    <b-radio-button
                      v-model="radioButton"
                      native-value="0"
                      type="is-warning is-light is-outlined"
                    >
                      <b-icon icon="close"></b-icon>
                      <span>ไม่ถูกต้อง</span>
                    </b-radio-button>
                  </b-field>
                </span>
              </div>
            </div>
            <h1>กรณีอยู่บ้านของผู้ถูกทดสอบ</h1>
            <div class="atHome">
              <h1>1. สถานที่ตรงนี้เรียกว่าอะไร? และบ้านเลขที่อะไร?</h1>
              <div class="ans">
                <span>
                  <label for="">คำตอบ : </label>
                  <input type="text" />
                  <b-field>
                    <b-radio-button
                      v-model="radioButton"
                      native-value="0"
                      type="is-success is-light is-outlined"
                    >
                      <b-icon icon="check"></b-icon>
                      <span>ถูกต้อง</span>
                    </b-radio-button>
                    <b-radio-button
                      v-model="radioButton"
                      native-value="0"
                      type="is-warning is-light is-outlined"
                    >
                      <b-icon icon="close"></b-icon>
                      <span>ไม่ถูกต้อง</span>
                    </b-radio-button>
                  </b-field>
                </span>
              </div>
              <h1>2. ที่นี่หมู่บ้าน หรือละแวก/คุ้ม/ย่าน/ถนนอะไร?</h1>
              <div class="ans">
                <span>
                  <label for="">คำตอบ : </label>
                  <input type="text" />
                  <b-field>
                    <b-radio-button
                      v-model="radioButton"
                      native-value="0"
                      type="is-success is-light is-outlined"
                    >
                      <b-icon icon="check"></b-icon>
                      <span>ถูกต้อง</span>
                    </b-radio-button>
                    <b-radio-button
                      v-model="radioButton"
                      native-value="0"
                      type="is-warning is-light is-outlined"
                    >
                      <b-icon icon="close"></b-icon>
                      <span>ไม่ถูกต้อง</span>
                    </b-radio-button>
                  </b-field>
                </span>
              </div>
              <h1>3. ที่อยู่ในอำเภอ / เขตอะไร?</h1>
              <div class="ans">
                <span>
                  <label for="">คำตอบ : </label>
                  <input type="text" />
                  <b-field>
                    <b-radio-button
                      v-model="radioButton"
                      native-value="0"
                      type="is-success is-light is-outlined"
                    >
                      <b-icon icon="check"></b-icon>
                      <span>ถูกต้อง</span>
                    </b-radio-button>
                    <b-radio-button
                      v-model="radioButton"
                      native-value="0"
                      type="is-warning is-light is-outlined"
                    >
                      <b-icon icon="close"></b-icon>
                      <span>ไม่ถูกต้อง</span>
                    </b-radio-button>
                  </b-field>
                </span>
              </div>
              <h1>4. ที่นี่จังหวัดอะไร?</h1>
              <div class="ans">
                <span>
                  <label for="">คำตอบ : </label>
                  <input type="text" />
                  <b-field>
                    <b-radio-button
                      v-model="radioButton"
                      native-value="0"
                      type="is-success is-light is-outlined"
                    >
                      <b-icon icon="check"></b-icon>
                      <span>ถูกต้อง</span>
                    </b-radio-button>
                    <b-radio-button
                      v-model="radioButton"
                      native-value="0"
                      type="is-warning is-light is-outlined"
                    >
                      <b-icon icon="close"></b-icon>
                      <span>ไม่ถูกต้อง</span>
                    </b-radio-button>
                  </b-field>
                </span>
              </div>
              <h1>5. ที่นี่ภาคอะไร?</h1>
              <div class="ans">
                <span>
                  <label for="">คำตอบ : </label>
                  <input type="text" />
                  <b-field>
                    <b-radio-button
                      v-model="radioButton"
                      native-value="0"
                      type="is-success is-light is-outlined"
                    >
                      <b-icon icon="check"></b-icon>
                      <span>ถูกต้อง</span>
                    </b-radio-button>
                    <b-radio-button
                      v-model="radioButton"
                      native-value="0"
                      type="is-warning is-light is-outlined"
                    >
                      <b-icon icon="close"></b-icon>
                      <span>ไม่ถูกต้อง</span>
                    </b-radio-button>
                  </b-field>
                </span>
              </div>
            </div>
            <h1><u>ส่วนที่ 3 Registration</u></h1>
            <p style="text-align: left">
              ผู้ทำแบบทดสอบเคยทำแบบทดสอบนี้ภายใน 2 เดือนที่ผ่านมาหรือไม่?
            </p>
            <div class="ans">
              <input type="radio" />
              <label for="">ไม่เคย</label>
              <input type="radio" />
              <label for="">เคย</label>
            </div>
            <p>ให้พยาบาลบอกรายละเอียดกับผู้ถูกทดสอบดังนี้</p>
            <div class="card" id="description">
              <div class="card-content">
                <div class="content">
                  <p>
                    "ต่อไปนี้เป็นการทดสอบความจำ ผม (ดิฉัน) จะบอกชื่อของ 3 อย่าง
                    คุณ (ตา, ยาย, ...) ตั้งใจฟังให้ดีนะ
                    เพราะจะบอกเพียงครั้งเดียว ไม่มีการบอกซ้ำอีก เมื่อผม (ดิฉัน)
                    พูดจบให้คุณ (ตา, ยาย, ...) พูดทบทวนตามที่ได้ยินให้ครบทั้ง 3
                    ชื่อ แล้วพยายามจำไว้ให้ดี เดี๋ยวผม (ดิฉัน) จะถามซ้ำ"
                  </p>
                </div>
              </div>
            </div>
            <h1>
              <u>ข้อปฏิบัติ</u> การบอกชื่อแต่ละคำให้ห่างกันประมาณ 1 วินาที
              ต้องไม่ช้าหรือเร็วเกินไป
            </h1>
            <div class="ansjing">
              <input type="checkbox" />
              <label for=""> ดอกไม้ </label>
              <input type="checkbox" />
              <label for=""> ไม่ถูกต้อง</label><br />
              <input type="checkbox" />
              <label for=""> แม่น้ำ </label>
              <input type="checkbox" />
              <label for=""> ไม่ถูกต้อง</label><br />
              <input type="checkbox" />
              <label for=""> รถไฟ </label>
              <input type="checkbox" />
              <label for=""> ไม่ถูกต้อง</label><br />
            </div>
            <div class="ans_disable">
              <input type="checkbox" />
              <label for=""> ต้นไม้ </label>
              <input type="checkbox" />
              <label for=""> ไม่ถูกต้อง</label><br />
              <input type="checkbox" />
              <label for=""> ทะเล </label>
              <input type="checkbox" />
              <label for=""> ไม่ถูกต้อง</label><br />
              <input type="checkbox" />
              <label for=""> รถยนต์ </label>
              <input type="checkbox" />
              <label for=""> ไม่ถูกต้อง</label><br />
            </div>
            <h1><u>ส่วนที่ 4 Attention/Calculation</u></h1>
            <p style="text-align: left">
              ให้ผู้ถูกทดสอบตอบคำถามแล้วตรวจเช็คความถูกต้องของคำตอบพร้อมบันทึกคำตอบทั้งผิดและถูกทุกครั้ง
            </p>
            <h1>ผู้ถูกทดสอบสามารถคิดเลขในใจได้หรือไม่?</h1>
            <input type="radio" />
            <label for="">ได้</label><br />
            <input type="radio" />
            <label for="">ไม่ได้</label><br />
            <div class="canCal">
              <h1>กรณีสามารถคิดเลขในใจได้</h1>
              <p style="text-align: left">
                ให้พยาบาลบอกรายละเอียดกับผู้ถูกทดสอบดังนี้
              </p>
              <div class="card" id="description">
                <div class="card-content">
                  <div class="content">
                    <p>
                      "ข้อนี้คิดในใจ เอา 100 ตั้ง ลบออกทีละ 7 ไปเรื่อย ๆ
                      ได้ผลเท่าไหร่บอกมา"
                    </p>
                  </div>
                </div>
              </div>
              <h1>คำตอบ :</h1>
              <div class="ans">
                <input type="checkbox" />
                <label for=""> 93 </label>
                <input type="checkbox" />
                <label for=""> 86 </label>
                <input type="checkbox" />
                <label for=""> 79 </label>
                <input type="checkbox" />
                <label for=""> 72 </label>
                <input type="checkbox" />
                <label for=""> 65 </label>
                <input type="checkbox" />
                <label for=""> 58 </label>
                <input type="checkbox" />
                <label for=""> 51 </label>
                <input type="checkbox" />
                <label for=""> 44 </label>
                <input type="checkbox" />
                <label for=""> 37 </label>
                <input type="checkbox" />
                <label for=""> 30 </label>
                <input type="checkbox" />
                <label for=""> 23 </label>
                <input type="checkbox" />
                <label for=""> 16 </label>
                <input type="checkbox" />
                <label for=""> 9 </label>
                <input type="checkbox" />
                <label for=""> 2 </label><br />
                <label for="">รวม : </label>
                <input type="text" disabled /><br />
              </div>
            </div>
            <div class="cantCal">
              <h1>กรณีที่ไม่สามารถคิดเลขในใจได้หรือ</h1>
              <p style="text-align: left">
                ให้พยาบาลบอกรายละเอียดกับผู้ถูกทดสอบดังนี้
              </p>
              <div class="card" id="description">
                <div class="card-content">
                  <div class="content">
                    <p>
                      "ผม (ดิฉัน) จะสะกดคำว่า มะนาว ให้คุณ (ตา, ยาย, ...) ฟัง
                      แล้วให้คุณ (ตา, ยาย, ...) สะกดถอยหลังไปตัวแรก
                      คำว่ามะนาวสะกดว่า มอม้า-สระอะ-นอหนู-สระอา-วอแหวน ไหนคุณ
                      (ตา, ยาย, ...) สะกดถอยหลังให้ฟังหน่อย"
                    </p>
                  </div>
                </div>
              </div>
              <h1>คำตอบ :</h1>
              <div class="ans">
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
              </div>
            </div>
            <h1><u>ส่วนที่ 5 Recall</u></h1>
            <p style="text-align: left">
              ให้พยาบาลบอกรายละเอียดกับผู้ถูกทดสอบดังนี้
            </p>
            <div class="card" id="description">
              <div class="card-content">
                <div class="content">
                  <p>"เมื่อสักครู่ที่ให้จำของ 3 อย่าง จำได้ไหม มีอะไรบ้าง"</p>
                </div>
              </div>
            </div>
            <div class="ans_recalljing">
              <input type="checkbox" />
              <label for=""> ดอกไม้ </label>
              <input type="checkbox" />
              <label for=""> ไม่ถูกต้อง</label><br />
              <input type="checkbox" />
              <label for=""> แม่น้ำ </label>
              <input type="checkbox" />
              <label for=""> ไม่ถูกต้อง</label><br />
              <input type="checkbox" />
              <label for=""> รถไฟ </label>
              <input type="checkbox" />
              <label for=""> ไม่ถูกต้อง</label><br />
            </div>
            <div class="ans_recalldisable">
              <input type="checkbox" />
              <label for=""> ต้นไม้ </label>
              <input type="checkbox" />
              <label for=""> ไม่ถูกต้อง</label><br />
              <input type="checkbox" />
              <label for=""> ทะเล </label>
              <input type="checkbox" />
              <label for=""> ไม่ถูกต้อง</label><br />
              <input type="checkbox" />
              <label for=""> รถยนต์ </label>
              <input type="checkbox" />
              <label for=""> ไม่ถูกต้อง</label><br />
            </div>
            <h1><u>ส่วนที่ 6 Naming</u></h1>
            <h1>
              1. ยื่นดินสอให้ผู้ถูกทดสอบดูแล้วถามว่า "ของสิ่งนี้เรียกว่าอะไร"
            </h1>
            <div class="ans">
              <input type="checkbox" />
              <label for=""> ดินสอ </label>
              <label for="">คำตอบอื่น : </label>
              <input type="text" />
            </div>
            <h1>
              2. ชี้นาฬิกาข้อมูลให้ผู้ถูกทดสอบดูแล้วถามว่า
              "ของสิ่งนี้เรียกว่าอะไร"
            </h1>
            <div class="ans">
              <input type="checkbox" />
              <label for=""> นาฬิกาข้อมือ </label>
              <label for="">คำตอบอื่น : </label>
              <input type="text" />
            </div>
            <h1><u>ส่วนที่ 7 Repetition</u></h1>
            <p style="text-align: left">
              ให้พยาบาลบอกรายละเอียดกับผู้ถูกทดสอบดังนี้
            </p>
            <div class="card" id="description">
              <div class="card-content">
                <div class="content">
                  <p>
                    "ตั้งใจฟังผม (ดิฉัน) เมื่อผม (ดิฉัน) พูดข้อความนี้แล้วให้คุณ
                    (ตา , ยาย, ...) พูดตาม ผม (ดิฉัน) จะบอกเพียงครั้งเดียว"
                  </p>
                  <p>
                    <b>"ใครใคร่ขายไข่ไก่"</b>
                  </p>
                </div>
              </div>
            </div>
            <div class="ans">
              <input type="checkbox" />
              <label for=""> สามารถพูดได้อย่างถูกต้อง</label><br />
              <input type="checkbox" />
              <label for=""> พูดไม่ถูกต้อง </label>
              <label for="">คำตอบอื่น : </label>
              <input type="text" />
            </div>
            <h1><u>ส่วนที่ 8 Verbal command</u></h1>
            <p style="text-align: left">
              ให้พยาบาลบอกรายละเอียดกับผู้ถูกทดสอบดังนี้
            </p>
            <div class="card" id="description">
              <div class="card-content">
                <div class="content">
                  <p>
                    "ฟังดี ๆ นะ เดี๋ยวผม (ดิฉัน) จะส่งกระดาษให้คุณ แล้วให้คุณ
                    (ตา , ยาย, ...) รับด้วยมือขวา พับครึ่งกระดาษ
                    แล้ววางไว้ที่... (พื้น, โต๊ะ, เตียง)"
                  </p>
                </div>
              </div>
            </div>
            <h1>1. รับด้วยมือขวา</h1>
            <div class="ans">
              <span>
                <b-field>
                  <b-radio-button
                    v-model="radioButton"
                    native-value="0"
                    type="is-success is-light is-outlined"
                  >
                    <b-icon icon="check"></b-icon>
                    <span>ทำได้</span>
                  </b-radio-button>
                  <b-radio-button
                    v-model="radioButton"
                    native-value="0"
                    type="is-warning is-light is-outlined"
                  >
                    <b-icon icon="close"></b-icon>
                    <span>ทำไม่ได้</span>
                  </b-radio-button>
                </b-field>
              </span>
            </div>
            <h1>2. พับครึ่ง</h1>
            <div class="ans">
              <span>
                <b-field>
                  <b-radio-button
                    v-model="radioButton"
                    native-value="0"
                    type="is-success is-light is-outlined"
                  >
                    <b-icon icon="check"></b-icon>
                    <span>ทำได้</span>
                  </b-radio-button>
                  <b-radio-button
                    v-model="radioButton"
                    native-value="0"
                    type="is-warning is-light is-outlined"
                  >
                    <b-icon icon="close"></b-icon>
                    <span>ทำไม่ได้</span>
                  </b-radio-button>
                </b-field>
              </span>
            </div>
            <h1>3. วางไว้ที่(พื้น, โต๊ะ, เตียง)</h1>
            <div class="ans">
              <span>
                <b-field>
                  <b-radio-button
                    v-model="radioButton"
                    native-value="0"
                    type="is-success is-light is-outlined"
                  >
                    <b-icon icon="check"></b-icon>
                    <span>ทำได้</span>
                  </b-radio-button>
                  <b-radio-button
                    v-model="radioButton"
                    native-value="0"
                    type="is-warning is-light is-outlined"
                  >
                    <b-icon icon="close"></b-icon>
                    <span>ทำไม่ได้</span>
                  </b-radio-button>
                </b-field>
              </span>
            </div>
            <h1><u>ส่วนที่ 9 Written command</u></h1>
            <p style="text-align: left">
              ให้พยาบาลบอกรายละเอียดกับผู้ถูกทดสอบดังนี้
            </p>
            <div class="card" id="description">
              <div class="card-content">
                <div class="content">
                  <p>
                    "ต่อไปนี้เป็นคำสั่งที่เขียนเป็นตัวหนังสือ ต้องการให้คุณ (ตา,
                    ยาย, ...) อ่านแล้วทำตาม คุณ (ตา, ยาย, ...)
                    จะอ่านออกเสียงหรืออ่านในใจก็ได้"
                  </p>
                </div>
              </div>
            </div>
            <h1>1. ผู้ทดสอบอ่านการดาษที่แสดงคำว่า "หลับตา" แล้วทำตาม</h1>
            <div class="ans">
              <span>
                <b-field>
                  <b-radio-button
                    v-model="radioButton"
                    native-value="0"
                    type="is-success is-light is-outlined"
                  >
                    <b-icon icon="check"></b-icon>
                    <span>ทำได้</span>
                  </b-radio-button>
                  <b-radio-button
                    v-model="radioButton"
                    native-value="0"
                    type="is-warning is-light is-outlined"
                  >
                    <b-icon icon="close"></b-icon>
                    <span>ทำไม่ได้</span>
                  </b-radio-button>
                </b-field>
              </span>
            </div>
            <h1><u>ส่วนที่ 10 Writing</u></h1>
            <p style="text-align: left">
              ให้พยาบาลบอกรายละเอียดกับผู้ถูกทดสอบดังนี้
            </p>
            <div class="card" id="description">
              <div class="card-content">
                <div class="content">
                  <p>
                    "ให้คุณ (ตา, ยาย, ...)
                    เขียนข้อความอะไรก็ได้ที่อ่านแล้วรู้เรื่องหรือมีความหมายมา 1
                    ประโยค"
                  </p>
                </div>
              </div>
            </div>
            <div class="ans">
              <label for="">ข้อความที่เขียน </label>
              <input type="text" />
              <h1>ข้อความที่เขียนมีความหมายหรือไม่?</h1>
              <span>
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
                    native-value="0"
                    type="is-warning is-light is-outlined"
                  >
                    <b-icon icon="close"></b-icon>
                    <span>ไม่มี</span>
                  </b-radio-button>
                </b-field>
              </span>
            </div>
            <h1><u>ส่วนที่ 11 Visuoconstruction</u></h1>
            <p style="text-align: left">
              ข้อนี้เป็นคำสั่ง "จงวาดภาพให้เหมือนภาพตัวอย่าง"
            </p>
            <img src="@/assets/visuo.png" alt="" />
          </div>
        </div>
        <!---->
        <!-- choose bar maybe fixed side nav-->
        <div class="column is-3" id="choosebar">
          <assChooseBar />
        </div>
      </div>
      <!---->
    </section>
  </div>
</template>
<script>
import Sidebar from "@/components/sidebar.vue";
import assChooseBar from "@/components/assChooseBar.vue";
export default {
  components: {
    Sidebar,
    assChooseBar
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
  margin-top: 1vh;
}
</style>
