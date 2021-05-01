<template>
  <div class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-1">
            <Sidebar />
          </div>
          <div class="column is-8">
            <div class="column is-10">
              <h1 class="title">
                ผลการประเมิน E-CGA
              </h1>
              <!-- <div v-for="(item, index) in result" :key="index">
                {{ item }}
              </div> -->
              <div class="card">
                <header class="card-header" style="background-color: #F4F4F4;">
                  <p class="card-header-title" style="font-weight: 500;">
                    รายละเอียด
                  </p>
                </header>
                <div class="card-content">
                  <div class="content has-text-left" style="font-weight: 300;">
                    ผู้ทำแบบประเมิน : คุณ {{ result[0].u_fname }}
                    {{ result[0].u_lname }} <br />
                    ประเมินโดย : พยาบาล {{ result[0].n_fname }}
                    {{ result[0].n_lname }} <br />
                    วันที่ประเมิน :
                    {{ new Date(result[0].result_date).getDate() }}/{{
                      new Date(result[0].result_date).getMonth()
                    }}/{{ new Date(result[0].result_date).getFullYear() }}
                    <br />
                    ผลการทำแบบประเมินทั้งหมด :
                    <button
                      class="result_bt mr-2"
                      v-for="(item, index) in result"
                      :key="item.id"
                    >
                      {{ index + 1 }}
                    </button>
                  </div>
                </div>
              </div>
              <div class="card mt-5">
                <header class="card-header" style="background-color: #F4F4F4;">
                  <p class="card-header-title" style="font-weight: 500;">
                    ผลการประเมิน
                  </p>
                </header>
                <div class="card-content">
                  <div class="content has-text-left" style="font-weight: 300;">
                    <ul class="mt-0">
                      <li class="form_title">แบบประเมินภาวะโภชนาการ (MNA)</li>
                      {{
                        result[0].result.MNA
                      }}
                      <li class="form_title">แบบประเมินช่องปากในผู้สูงอายุ</li>
                      {{
                        result[0].result.OCA
                      }}
                      <li class="form_title">
                        แบบประเมินภาวะกลั้นปัสสาวะไม่อยู่
                      </li>
                      {{
                        result[0].result.UIA
                      }}
                      <li class="form_title">แบบประเมินสุขภาวะทางตา</li>
                      {{
                        result[0].result.EYES
                      }}
                      <li class="form_title">
                        แบบประเมินโรคข้อเข่าเสื่อมทางคลินิก
                      </li>
                      {{
                        result[0].result.KNEE
                      }}
                      <li class="form_title">
                        แบบประเมินผู้สูงอายุที่ต้องได้รับการดูแลระยะยาว
                      </li>
                      {{
                        result[0].result.LTTA
                      }}
                      <li class="form_title">แบบประเมิน MMSE - Thai 2002</li>
                      {{
                        result[0].result.MMSE
                      }}
                      <li class="form_title">
                        แบบประเมินความเสี่ยงต่อโรคกระดูกพรุน
                      </li>
                      {{
                        result[0].result.OSTA
                      }}
                      <li class="form_title">
                        แบบประเมินภาวะหกล้ม (TIME UP AND GO TEST)
                      </li>
                      {{
                        result[0].result.TUGT
                      }}
                      <li class="form_title">
                        แบบประเมินปัญหาการนอน
                      </li>
                      {{
                        result[0].result.SLEEP
                      }}
                      <li class="form_title">
                        แบบประเมินคัดกรองความจำเสื่อมสำหรับผู้สูงอายุไทย
                      </li>
                      {{
                        result[0].result.IQCODE
                      }}
                      <li class="form_title">
                        แบบประเมินความเศร้าในผู้สูงอายุไทย 15 ข้อ
                      </li>
                      {{
                        result[0].result.TGDS15
                      }}
                      <li class="form_title">
                        แบบประเมินภาวะหกล้ม (Fall Risk Assessment Tool)
                      </li>
                      {{
                        result[0].result.FallRisk
                      }}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-3">
            <completeChooseBar />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/sidebar.vue";
import completeChooseBar from "@/components/completeChooseBar.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: {
    Sidebar,
    completeChooseBar
  },
  name: "Result",
  data() {
    return {};
  },
  computed: {
    ...mapState(["result"])
  },
  methods: {
    ...mapActions(["getResult"])
  },
  beforeRouteEnter(to, from, next) {
    console.log("before");
    next(vm => {
      vm.getResult();
    });
  }
};
</script>
<style>
.title {
  color: black;
  text-align: left;
  font-weight: 500;
  font-size: 1.75rem;
}
.result_bt {
  font-family: "Kanit", sans-serif;
  font-weight: 500;
  width: 30px;
  height: 30px;
}
.form_title {
  font-weight: 500;
  font-size: 1rem;
  padding-top: 5px;
}
</style>
