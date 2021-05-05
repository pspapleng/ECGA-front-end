<template>
  <div class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div
            class="column is-8-desktop is-7-tablet is-6-mobile is-offset-1-desktop is-offset-2-tablet is-offset-2-mobile"
          >
            <div class="column is-10">
              <h1 class="head ml-2">
                ผลการประเมิน E-CGA
              </h1>
              <div class="card">
                <header class="card-header" style="background-color: #F4F4F4;">
                  <p class="card-header-title" style="font-weight: 500;">
                    รายละเอียด
                  </p>
                </header>
                <div class="card-content">
                  <div class="content has-text-left" style="font-weight: 300;">
                    ผู้ทำแบบประเมิน : คุณ
                    {{ result_now ? result_now.u_fname : "" }}
                    {{ result_now ? result_now.u_lname : "" }} <br />
                    ประเมินโดย : พยาบาล
                    {{ result_now ? result_now.n_fname : "" }}
                    {{ result_now ? result_now.n_lname : "" }} <br />
                    วันที่ประเมิน :
                    {{ new Date(result_now.result_date).getDate() }}/{{
                      new Date(result_now.result_date).getMonth()
                    }}/{{ new Date(result_now.result_date).getFullYear() }}
                    <br />
                    ผลการทำแบบประเมินทั้งหมด
                    <div class="buttons mt-2">
                      <button
                        v-for="(item, index) in result"
                        :key="index + item.result_id + index"
                        class="result_bt mr-2 button"
                        :disabled="item.result_id === result_id"
                        :class="{
                          'is-info': item.result_id === result_id,
                          'is-light': item.result_id !== result_id
                        }"
                        @click="changeResultTo(item.result_id)"
                      >
                        {{ index + 1 }}
                      </button>
                    </div>
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
                        result_now.result.MNA
                      }}
                      <li class="form_title">แบบประเมินช่องปากในผู้สูงอายุ</li>
                      {{
                        result_now.result.OCA
                      }}
                      <li class="form_title">
                        แบบประเมินภาวะกลั้นปัสสาวะไม่อยู่
                      </li>
                      {{
                        result_now.result.UIA
                      }}
                      <li class="form_title">แบบประเมินสุขภาวะทางตา</li>
                      {{
                        result_now.result.EYES
                      }}
                      <li class="form_title">
                        แบบประเมินโรคข้อเข่าเสื่อมทางคลินิก
                      </li>
                      {{
                        result_now.result.KNEE
                      }}
                      <li class="form_title">
                        แบบประเมินผู้สูงอายุที่ต้องได้รับการดูแลระยะยาว
                      </li>
                      {{
                        result_now.result.LTTA
                      }}
                      <li class="form_title">แบบประเมิน MMSE - Thai 2002</li>
                      {{
                        result_now.result.MMSE
                      }}
                      <li class="form_title">
                        แบบประเมินความเสี่ยงต่อโรคกระดูกพรุน
                      </li>
                      {{
                        result_now.result.OSTA
                      }}
                      <li class="form_title">
                        แบบประเมินภาวะหกล้ม (TIME UP AND GO TEST)
                      </li>
                      {{
                        result_now.result.TUGT
                      }}
                      <li class="form_title">
                        แบบประเมินปัญหาการนอน
                      </li>
                      {{
                        result_now.result.SLEEP
                      }}
                      <li class="form_title">
                        แบบประเมินคัดกรองความจำเสื่อมสำหรับผู้สูงอายุไทย
                      </li>
                      {{
                        result_now.result.IQCODE
                      }}
                      <li class="form_title">
                        แบบประเมินความเศร้าในผู้สูงอายุไทย 15 ข้อ
                      </li>
                      {{
                        result_now.result.TGDS15
                      }}
                      <li class="form_title">
                        แบบประเมินภาวะหกล้ม (Fall Risk Assessment Tool)
                      </li>
                      {{
                        result_now.result.FallRisk
                      }}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-1-desktop is-3-tablet is-5-mobile">
            <Sidebar />
          </div>
          <div class="column is-3-desktop is-5-tablet is-7-mobile">
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
import { mapActions, mapState, mapMutations } from "vuex";
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
    ...mapState(["result", "UserId", "result_id"]),
    result_now() {
      console.log("result", this.result);
      if (!this.result || this.result.length === 0) {
        return {
          result_id: 0,
          result_date: null,
          result: {
            MNA: "",
            OCA: "",
            UIA: "",
            EYES: "",
            KNEE: "",
            LTTA: "",
            MMSE: "",
            OSTA: "",
            TUGT: "",
            SLEEP: "",
            IQCODE: "",
            TGDS15: "",
            FallRisk: ""
          },
          u_fname: "",
          u_lname: "",
          n_fname: "",
          n_lname: ""
        };
      }
      console.log("user", this.UserId);
      console.log("result id", this.result_id);
      console.log(this.result.find(e => e.result_id === this.result_id));
      return this.result.find(e => e.result_id === this.result_id);
    }
  },
  methods: {
    ...mapActions(["getAllResultByUid", "updateResultId"]),
    ...mapMutations(["setResultId"]),
    changeResultTo(id) {
      // console.log("have click result", id);
      this.setResultId(id);
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log("before");
    next(vm => {
      console.log("before router enter");
      vm.getAllResultByUid();
    });
  }
};
</script>
<style>
.head {
  color: black;
  text-align: left;
  font-weight: 500;
  font-size: 1.75rem;
  margin-bottom: 1rem;
}
.result_bt {
  font-family: "Kanit", sans-serif;
  font-weight: 500;
  width: 30px;
  height: 30px;
  cursor: pointer;
}
.form_title {
  font-weight: 500;
  font-size: 1rem;
  padding-top: 5px;
}
</style>
