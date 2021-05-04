<template>
  <div class="box has-background-light has-text-left py-5 px-5">
    <header class="head-title my-2">
      หัวข้อแบบประเมินทั้งหมด
    </header>
    <div>
      <div class="name mt-2">
        <b-icon pack="fas" icon="check-circle" style="color: #047857;">
        </b-icon>
        <router-link to="/results/result1">
          <span class="name-title mx-1">แบบประเมินภาวะโภชนาการ (MNA)</span>
        </router-link>
      </div>
      <div class="name mt-2">
        <b-icon pack="fas" icon="check-circle" style="color: #047857;">
        </b-icon>
        <router-link to="/results/result2">
          <span class="name-title mx-1">แบบประเมินช่องปากผู้สูงอายุ</span>
        </router-link>
      </div>
      <div class="name mt-2">
        <b-icon pack="fas" icon="check-circle" style="color: #047857;">
        </b-icon>
        <router-link to="/results/result3">
          <span class="name-title mx-1"
            >แบบประเมินภาวะหกล้ม (Fall Risk Assessment Tool)</span
          >
        </router-link>
      </div>
      <div class="name mt-2">
        <b-icon pack="fas" icon="check-circle" style="color: #047857;">
        </b-icon>
        <router-link to="/results/result4">
          <span class="name-title mx-1"
            >แบบประเมินความเสี่ยงในการหกล้ม (TIME UP AND GO TEST)</span
          >
        </router-link>
      </div>
      <div class="name mt-2">
        <b-icon pack="fas" icon="check-circle" style="color: #047857;">
        </b-icon>
        <router-link to="/results/result5">
          <span class="name-title mx-1">แบบประเมินการคัดกรองสุขภาวะทางตา</span>
        </router-link>
      </div>
      <div class="name mt-2">
        <b-icon pack="fas" icon="check-circle" style="color: #047857;">
        </b-icon>
        <router-link to="/results/result6">
          <span class="name-title mx-1"
            >แบบประเมินความเศร้าในผู้สูงอายุไทย 15 ข้อ (TGDS-15)*</span
          >
        </router-link>
      </div>
      <div class="name mt-2">
        <b-icon pack="fas" icon="check-circle" style="color: #047857;">
        </b-icon>
        <router-link to="/results/result7">
          <span class="name-title mx-1"
            >แบบประเมินคัดกรองความจำเสื่อมสำหรับผู้สูงอายุไทย (IQCODE)</span
          >
        </router-link>
      </div>
      <div class="name mt-2">
        <b-icon pack="fas" icon="check-circle" style="color: #047857;">
        </b-icon>
        <router-link to="/results/result8">
          <span class="name-title mx-1">แบบประเมิน MMSE – Thai 2002</span>
        </router-link>
      </div>
      <div class="name mt-2">
        <b-icon pack="fas" icon="check-circle" style="color: #047857;">
        </b-icon>
        <router-link to="/results/result9">
          <span class="name-title mx-1"
            >แบบประเมินผู้สูงอายุที่ต้องได้รับการดูแลระยะยาว</span
          >
        </router-link>
      </div>
      <div class="name mt-2">
        <b-icon pack="fas" icon="check-circle" style="color: #047857;">
        </b-icon>
        <router-link to="/results/result10">
          <span class="name-title mx-1">แบบประเมินภาวะกลั้นปัสสาวะไม่อยู่</span>
        </router-link>
      </div>
      <div class="name mt-2">
        <b-icon pack="fas" icon="check-circle" style="color: #047857;">
        </b-icon>
        <router-link to="/results/result11">
          <span class="name-title mx-1">แบบประเมินปัญหาการนอน</span>
        </router-link>
      </div>
      <div class="name mt-2">
        <b-icon pack="fas" icon="check-circle" style="color: #047857;">
        </b-icon>
        <router-link to="/results/result12">
          <span class="name-title mx-1"
            >แบบประเมินโรคข้อเข่าเสื่อมทางคลินิก</span
          >
        </router-link>
      </div>
      <div class="name mt-2">
        <b-icon pack="fas" icon="check-circle" style="color: #047857;">
        </b-icon>
        <router-link to="/results/result13">
          <span class="name-title mx-1"
            >แบบประเมินความเสี่ยงต่อโรคกระดูกพรุน</span
          >
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  name: "completeChooseBar"
};
</script>
<style>
.box {
  position: fixed;
  height: 100%;
  width: 30vw;
  top: 0;
  right: 0;
  overflow: auto;
}
.head-title {
  font-size: 1.25rem;
  font-weight: 500;
}
.name-title {
  font-size: 1rem;
  font-weight: 500;
  color: #393939;
}
</style>
