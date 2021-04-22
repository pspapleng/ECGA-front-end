<template>
  <div id="bigBox" class="box has-background-light">
    <div>
      <header id="choosebarHeader">หัวข้อแบบประเมินทั้งหมด</header>
    </div>
    <div class="assChoice">
      <a href="mnaAss">
        <i class="fas fa-check-circle" id="checkIcon"></i>
        <label for="">แบบประเมินภาวะโภชนาการ (MNA)</label>
      </a>
    </div>
    <div class="assChoice">
      <a href="mouthAss">
        <i class="fas fa-check-circle" id="checkIcon"></i>
        <label for="">แบบประเมินช่องปากในผู้สูงอายุ</label>
      </a>
    </div>
    <div class="assChoice">
      <a href="fallRisk">
        <i class="fas fa-check-circle" id="checkIcon"></i>
        <label for=""
          >แบบประเมินภาวะหกล้ม <br />(Fall Risk Assessment Tool)</label
        >
      </a>
    </div>
    <div class="assChoice">
      <a href="tugtAss">
        <i class="fas fa-check-circle" id="checkIcon"></i>
        <label for="">แบบประเมินภาวะหกล้ม <br />(TIME UP AND GO TEST)</label>
      </a>
    </div>
    <div class="assChoice">
      <a href="eyeAss">
        <i class="fas fa-check-circle" id="checkIcon"></i>
        <label for="">แบบประเมินสุขภาวะทางตา</label>
      </a>
    </div>
    <div class="assChoice">
      <a href="tgdsAss">
        <i class="fas fa-check-circle" id="checkIcon"></i>
        <label for="">แบบประเมินความเศร้าในผู้สูงอายุไทย 15 ข้อ</label>
      </a>
    </div>
    <div class="assChoice">
      <a href="iqCode">
        <i class="fas fa-check-circle" id="checkIcon"></i>
        <label for=""
          >แบบประเมินคัดกรองความจำเสื่อม <br />สำหรับผู้สูงอายุไทย</label
        >
      </a>
    </div>
    <div class="assChoice">
      <a href="mmseAss">
        <i class="fas fa-check-circle" id="checkIcon"></i>
        <label for="">แบบประเมิน MMSE - Thai 2002</label>
      </a>
    </div>
    <div class="assChoice">
      <a href="longtermAss">
        <i class="fas fa-check-circle" id="checkIcon"></i>
        <label for=""
          >แบบประเมินผู้สูงอายุที่ต้องได้รับ <br />การดูแลระยะยาว</label
        >
      </a>
    </div>
    <div class="assChoice">
      <a href="toiletAss">
        <i class="fas fa-check-circle" id="checkIcon"></i>
        <label for="">แบบประเมินภาวะกลั้นปัสสาวะไม่อยู่</label>
      </a>
    </div>
    <div class="assChoice">
      <a href="sleepAss">
        <i class="fas fa-check-circle" id="checkIcon"></i>
        <label for="">แบบประเมินปัญหาการนอน</label>
      </a>
    </div>
    <div class="assChoice">
      <a href="brokenAss">
        <i class="fas fa-check-circle" id="checkIcon"></i>
        <label for="">แบบประเมินโรคข้อเข่าเสื่อมทางคลินิก</label>
      </a>
    </div>
    <div class="assChoice">
      <a href="bonyAss">
        <i class="fas fa-check-circle" id="checkIcon"></i>
        <label for="">แบบประเมินความเสี่ยงต่อโรคกระดูกพรุน</label>
      </a>
    </div>
    <div class="buttons" id="startButton">
      <b-button type="is-success" tag="a" href="/startpage" target=""
        >เสร็จสิ้นการทำแบบประเมิน</b-button
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  name: "assChooseBar"
};
</script>
<style>
#bigBox {
  position: fixed;
  height: 100%;
  width: 100%;
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
a {
  color: inherit;
}
label {
  cursor: pointer;
}
</style>
