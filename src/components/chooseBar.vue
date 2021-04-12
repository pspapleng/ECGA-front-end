<template>
  <div class="box has-background-light">
    <div>
      <header id="choosebarHeader">หัวข้อแบบประเมินทั้งหมด</header>
    </div>
    <div class="assChoice">
      <i class="fas fa-check-circle" id="checkIcon"></i>
      <label for="">แบบประเมินภาวะโภชนาการ (MNA)</label>
    </div>
    <div class="assChoice">
      <i class="fas fa-check-circle" id="checkIcon"></i>
      <label for="">แบบประเมินช่องปากในผู้สูงอายุ</label>
    </div>
    <div class="assChoice">
      <i class="fas fa-check-circle" id="checkIcon"></i>
      <label for=""
        >แบบประเมินภาวะหกล้ม <br />(Fall Risk Assessment Tool)</label
      >
    </div>
    <div class="assChoice">
      <i class="fas fa-check-circle" id="checkIcon"></i>
      <label for=""
        >แบบประเมินภาวะหกล้ม <br />
        (TIME UP AND GO TEST)</label
      >
    </div>
    <div class="assChoice">
      <i class="fas fa-check-circle" id="checkIcon"></i>
      <label for="">แบบประเมินสุขภาวะทางตา</label>
    </div>
    <div class="assChoice">
      <i class="fas fa-check-circle" id="checkIcon"></i>
      <label for="">แบบประเมินความเศร้าในผู้สูงอายุไทย 15 ข้อ</label>
    </div>
    <div class="assChoice">
      <i class="fas fa-check-circle" id="checkIcon"></i>
      <label for=""
        >แบบประเมินคัดกรองความจำเสื่อม <br />
        สำหรับผู้สูงอายุไทย</label
      >
    </div>
    <div class="assChoice">
      <i class="fas fa-check-circle" id="checkIcon"></i>
      <label for="">แบบประเมิน MMSE - Thai 2002</label>
    </div>
    <div class="assChoice">
      <i class="fas fa-check-circle" id="checkIcon"></i>
      <label for=""
        >แบบประเมินผู้สูงอายุที่ต้องได้รับ <br />
        การดูแลระยะยาว</label
      >
    </div>
    <div class="assChoice">
      <i class="fas fa-check-circle" id="checkIcon"></i>
      <label for="">แบบประเมินภาวะกลั้นปัสสาวะไม่อยู่</label>
    </div>
    <div class="assChoice">
      <i class="fas fa-check-circle" id="checkIcon"></i>
      <label for="">แบบประเมินปัญหาการนอน</label>
    </div>
    <div class="assChoice">
      <i class="fas fa-check-circle" id="checkIcon"></i>
      <label for="">แบบประเมินโรคข้อเข่าเสื่อมทางคลินิก</label>
    </div>
    <div class="assChoice">
      <i class="fas fa-check-circle" id="checkIcon"></i>
      <label for="">แบบประเมินความเสี่ยงต่อโรคกระดูกพรุน</label>
    </div>
    <div class="buttons" id="startButton">
      <b-button type="is-success" to="">เริ่มทำแบบประเมิน</b-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {},
  name: "chooseBar"
};
</script>
<style>
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
</style>
