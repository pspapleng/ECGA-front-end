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
                            <div class="content">
                            </div>
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
                                <b-progress style="margin-top: 5vh;" size="is-large" type="is-info" :value="40" show-value></b-progress>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-3 has-background-light" id="choosebar">
                    <header id="choosebarHeader">หัวข้อแบบประเมินทั้งหมด</header>
                    <a id="chooseAss"><i class="fas fa-check-circle" id="checkIcon"></i> แบบประเมินภาวะโภชนาการ (MNA)</a><br>
                    <a id="chooseAss"><i class="fas fa-check-circle" id="checkIcon"></i> แบบประเมินช่องปากในผู้สูงอายุ</a><br>
                    <a id="chooseAss"><i class="fas fa-check-circle" id="checkIcon"></i> แบบประเมินภาวะหกล้ม (Fall Risk Assessment Tool)</a><br>
                    <a id="chooseAss"><i class="fas fa-check-circle" id="checkIcon"></i> แบบประเมินความเศร้าในผู้สูงอายุไทย 15 ข้อ</a><br>
                    <a id="chooseAss"><i class="fas fa-check-circle" id="checkIcon"></i> แบบประเมินคัดกรองความจำเสื่อมสำหรับผู้สูงอายุไทย</a><br>
                    <a id="chooseAss"><i class="fas fa-check-circle" id="checkIcon"></i> แบบประเมินภาวะกลั้นปัสสาวะไม่อยู่</a><br>
                    <a id="chooseAss"><i class="fas fa-check-circle" id="checkIcon"></i> แบบประเมินปัญหาการนอน</a><br>
                    <a id="chooseAss"><i class="fas fa-check-circle" id="checkIcon"></i> แบบประเมินความเสี่ยงต่อโรคกระดูกพรุน</a><br>
                    <a id="chooseAss"><i class="fas fa-check-circle" id="checkIcon"></i> แบประเมินผู้สูงอายุที่ต้องได้รับการดูแลระยะยาว</a><br>
                    <a id="chooseAss"><i class="fas fa-check-circle" id="checkIcon"></i> แบบประเมินภาวะหกล้ม (TIME UP AND GO TEST)</a><br>
                    <a id="chooseAss"><i class="fas fa-check-circle" id="checkIcon"></i> แบบประเมิน MMSE - Thai 2002</a><br>
                    <a id="chooseAss"><i class="fas fa-check-circle" id="checkIcon"></i> แบบประเมินสุขภาวะทางตา</a><br>
                    <a id="chooseAss"><i class="fas fa-check-circle" id="checkIcon"></i> แบบประเมินโรคข้อเข่าเสื่อมทางคลินิก</a>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Sidebar from "@/components/sidebar.vue";
export default {
  components: {
    Sidebar,
  },
  name: "Patientlist",
  data() {
    return {

    };
  },
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
        font-size: 1.6667rem;
    }
    #choosebar {
        text-align: left;
    }
</style>
