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
          <h1>การคัดกรองผู้สูงอายุที่ต้องได้รับการดูแลระยะยาว</h1>
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">ข้อมูลแนะนำ</p>
            </header>
            <div class="card-content">
              <div class="content">
                การคัดกรองผู้สูงอายุที่ต้องได้รับการดูแลระยะยาวมีทั้งหมด 5 ด้าน
                คือ ด้านสังคม ความสามารถในการมองเห็นและการได้ยิน
                ภาวะหลงลืมและภาวะซึมเศร้า ภาวะเปราะบาง
                และความสามารถในการทำกิจวัตรประจำวัน
              </div>
            </div>
          </div>
          <div>
            <h1><u>ส่วนที่ 1 ด้านสังคม (การอยู่อาศัย ที่อยู่ศัย รายได้)</u></h1>
            <h1>1. การอยู่อาศัย หรือ ดูแลเมื่อเจ็บป่วย</h1>
            <div class="ans">
              <input type="radio" />
              <label for=""> ไม่ได้อยู่คนเดียว หรือ มีคนดูแลเมื่อเจ็บป่วย</label
              ><br />
              <input type="radio" />
              <label for=""> อยู่คนเดียว หรือ ไม่มีคนดูแลเมื่อเจ็บป่วย</label>
            </div>
            <h1>2. ลักษณะที่อยู่อาศัย</h1>
            <div class="ans">
              <input type="radio" />
              <label for="">
                มั่นคงแข็งแรง หรือ
                ไม่มั่นคงแต่ไม่มีผลต่อความปลอดภัยในชีวิตและสุขภาพ</label
              ><br />
              <input type="radio" />
              <label for="">
                ไม่มีที่อยู่อาศัย หรือ
                มีที่อยู่อาศัยแต่ไม่ปลอดภัยต่อสุขภาพและชีวิต</label
              >
            </div>
            <h1>3. ความเพียงพอของรายได้ในการใช้ชีวิตประจำวัน</h1>
            <div class="ans">
              <input type="radio" />
              <label for=""> เพียงพอ</label><br />
              <input type="radio" />
              <label for=""> ไม่เพียงพอ</label>
            </div>
            <h1><u>ส่วนที่ 2 ความสามารถในการมองเห็นและการได้ยิน</u></h1>
            <h1>1. ความสามารถในการมองเห็น</h1>
            <div class="ans">
              <input type="radio" />
              <label for=""> ชัดเจนโดยไม่ต้องใส่แว่น</label>
              <input type="radio" />
              <label for="">
                ไม่ชัดเจน และ <b>มี</b> ปัญหาในการทำกิจวัตรประจำวัน</label
              ><br />
              <input type="radio" />
              <label for=""> ชัดเจนโดยต้องใส่แว่น</label>
              <input type="radio" />
              <label for=""> ไม่เห็นเลย</label><br />
              <input type="radio" />
              <label for="">
                ไม่ชัดเจน แต่ <b>ไม่มี</b> ปัญหาในการทำกิจวัตรประจำวัน</label
              ><br />
            </div>
            <h1><u>ส่วนที่ 3 ภาวะหลงลืมและภาวะซึมเศร้า</u></h1>
            <h1>1. มีอาการหลงลืม</h1>
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
            <h1>
              2. ในสองสัปดาห์ที่ผ่านมา รวมวันนี้ ท่านมีความรู้สึกท้อแท้ สิ้นหวัง
            </h1>
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
            <h1>
              3. ใน 2 สัปดาห์ที่ผ่านมา รวมวันนี้ ท่ายมีความรู้สึกเบื่อ
              ทำอะไรก็ไม่เพลิน
            </h1>
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
            <h1><u>ส่วนที่ 4 ภาวะเปราะบาง</u></h1>
            <h1>1. ใน 1 ปีที่ผ่านมา น้ำหนักท่านลดลงมากกว่า 4.5 กิโลกรัม</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>ใช่</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ไม่ใช่</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>2. ท่านรู้สึกเหนื่อยตลอดเวลา</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>ใช่</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ไม่ใช่</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>3. ท่านไม่สามารถเดินได้โดยลำพัง ต้องมีคนช่วยพยุง</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>ใช่</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ไม่ใช่</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>
              4. ให้ผู้สูงอายุเดิน TUGT แล้วใช้เวลามากกว่า 30
              วินาทีหรือไม่สามารถเดินได้
            </h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>ใช่</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ไม่ใช่</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>5. ผู้สูงอายุมีความอ่อนแรงของกำลังมือ แขน ขา ชัดเจน</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <b-icon icon="check"></b-icon>
                  <span>ใช่</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="1"
                  type="is-danger is-light is-outlined"
                >
                  <b-icon icon="close"></b-icon>
                  <span>ไม่ใช่</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1><u>ส่วนที่ 5 ความสามามรถในการทำกิจวัตรประจำวัน</u></h1>
            <h1><u>กิจกรรมพื้นฐาน</u></h1>
            <h1>1. ลุกนั่งจากที่นอนหรือเตียง</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <span>ทำได้ด้วยตัวเอง รวมใช้อุปกรณ์ช่วย</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-warning is-light is-outlined"
                >
                  <span>ทำได้ด้วยตัวเองบ้าง ต้องมีคนช่วยจึงจะสำเร็จ</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-danger is-light is-outlined"
                >
                  <span>ทำด้วยตนเองไม่ได้เลย</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>2. ล้างหน้า แปรงฟัน หวีผม</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <span>ทำได้ด้วยตัวเอง รวมใช้อุปกรณ์ช่วย</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-warning is-light is-outlined"
                >
                  <span>ทำได้ด้วยตัวเองบ้าง ต้องมีคนช่วยจึงจะสำเร็จ</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-danger is-light is-outlined"
                >
                  <span>ทำด้วยตนเองไม่ได้เลย</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>3. อาบน้ำ</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <span>ทำได้ด้วยตัวเอง รวมใช้อุปกรณ์ช่วย</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-warning is-light is-outlined"
                >
                  <span>ทำได้ด้วยตัวเองบ้าง ต้องมีคนช่วยจึงจะสำเร็จ</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-danger is-light is-outlined"
                >
                  <span>ทำด้วยตนเองไม่ได้เลย</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>4. สวมใส่เสื้อผ้า</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <span>ทำได้ด้วยตัวเอง รวมใช้อุปกรณ์ช่วย</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-warning is-light is-outlined"
                >
                  <span>ทำได้ด้วยตัวเองบ้าง ต้องมีคนช่วยจึงจะสำเร็จ</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-danger is-light is-outlined"
                >
                  <span>ทำด้วยตนเองไม่ได้เลย</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>5. ตัก / หยิบอาหารรับประทาน</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <span>ทำได้ด้วยตัวเอง รวมใช้อุปกรณ์ช่วย</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-warning is-light is-outlined"
                >
                  <span>ทำได้ด้วยตัวเองบ้าง ต้องมีคนช่วยจึงจะสำเร็จ</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-danger is-light is-outlined"
                >
                  <span>ทำด้วยตนเองไม่ได้เลย</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>6. การใช้ห้องน้ำหรือการทำความสะอาดหลังขับถ่าย</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <span>ทำได้ด้วยตัวเอง รวมใช้อุปกรณ์ช่วย</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-warning is-light is-outlined"
                >
                  <span>ทำได้ด้วยตัวเองบ้าง ต้องมีคนช่วยจึงจะสำเร็จ</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-danger is-light is-outlined"
                >
                  <span>ทำด้วยตนเองไม่ได้เลย</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>7. เดินหรือเคลื่อนที่ภายในบ้าน</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <span>ทำได้ด้วยตัวเอง รวมใช้อุปกรณ์ช่วย</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-warning is-light is-outlined"
                >
                  <span>ทำได้ด้วยตัวเองบ้าง ต้องมีคนช่วยจึงจะสำเร็จ</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-danger is-light is-outlined"
                >
                  <span>ทำด้วยตนเองไม่ได้เลย</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>8. ขึ้นลงบันได 1 ขั้น</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <span>ทำได้ด้วยตัวเอง รวมใช้อุปกรณ์ช่วย</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-warning is-light is-outlined"
                >
                  <span>ทำได้ด้วยตัวเองบ้าง ต้องมีคนช่วยจึงจะสำเร็จ</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-danger is-light is-outlined"
                >
                  <span>ทำด้วยตนเองไม่ได้เลย</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>9. กลั้นปัสสาวะ</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <span>กลั้นได้ปกติ</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-warning is-light is-outlined"
                >
                  <span>กลั้นไม่ได้บางครั้ง</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-danger is-light is-outlined"
                >
                  <span>กลั้นไม่ได้เลย (รวมสวน / ใส่สายสวน)</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>10. กลั้นอุจจาระ</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <span>กลั้นได้ปกติ</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-warning is-light is-outlined"
                >
                  <span>กลั้นไม่ได้บางครั้ง</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-danger is-light is-outlined"
                >
                  <span>กลั้นไม่ได้เลย (รวมสวน / ใส่สายสวน)</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1><u>กิจกรรมซับซ้อน</u></h1>
            <h1>11. เดินหรือเคลื่อนที่นอกบ้าน</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <span>ทำได้ด้วยตัวเอง รวมใช้อุปกรณ์ช่วย</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-warning is-light is-outlined"
                >
                  <span>ทำได้ด้วยตัวเองบ้าง ต้องมีคนช่วยจึงจะสำเร็จ</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-danger is-light is-outlined"
                >
                  <span>ทำด้วยตนเองไม่ได้เลย</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>12. ทำหรือเตรียมอาหาร</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <span>ทำได้ด้วยตัวเอง รวมใช้อุปกรณ์ช่วย</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-warning is-light is-outlined"
                >
                  <span>ทำได้ด้วยตัวเองบ้าง ต้องมีคนช่วยจึงจะสำเร็จ</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-danger is-light is-outlined"
                >
                  <span>ทำด้วยตนเองไม่ได้เลย</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>13. กวาด/ถูบ้าน หรือซักรีดผ้า</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <span>ทำได้ด้วยตัวเอง รวมใช้อุปกรณ์ช่วย</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-warning is-light is-outlined"
                >
                  <span>ทำได้ด้วยตัวเองบ้าง ต้องมีคนช่วยจึงจะสำเร็จ</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-danger is-light is-outlined"
                >
                  <span>ทำด้วยตนเองไม่ได้เลย</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>14. การซื้อของ/จ่ายตลาด</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <span>ทำได้ด้วยตัวเอง รวมใช้อุปกรณ์ช่วย</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-warning is-light is-outlined"
                >
                  <span>ทำได้ด้วยตัวเองบ้าง ต้องมีคนช่วยจึงจะสำเร็จ</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-danger is-light is-outlined"
                >
                  <span>ทำด้วยตนเองไม่ได้เลย</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>
              15. ใช้บริการขนส่งระบบสาธารณะ เข่น รถโดยสาร รถเมล์ แท็กซี่ รถไฟ
            </h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <span>ทำได้ด้วยตัวเอง รวมใช้อุปกรณ์ช่วย</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-warning is-light is-outlined"
                >
                  <span>ทำได้ด้วยตัวเองบ้าง ต้องมีคนช่วยจึงจะสำเร็จ</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-danger is-light is-outlined"
                >
                  <span>ทำด้วยตนเองไม่ได้เลย</span>
                </b-radio-button>
              </b-field>
            </div>
            <h1>16. การรับประทานยาตามแพทย์สั่ง</h1>
            <div class="ans">
              <b-field>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-success is-light is-outlined"
                >
                  <span>ทำได้ด้วยตัวเอง รวมใช้อุปกรณ์ช่วย</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-warning is-light is-outlined"
                >
                  <span>ทำได้ด้วยตัวเองบ้าง ต้องมีคนช่วยจึงจะสำเร็จ</span>
                </b-radio-button>
                <b-radio-button
                  v-model="radioButton"
                  native-value="0"
                  type="is-danger is-light is-outlined"
                >
                  <span>ทำด้วยตนเองไม่ได้เลย</span>
                </b-radio-button>
              </b-field>
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
