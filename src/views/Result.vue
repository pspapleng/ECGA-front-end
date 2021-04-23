<template>
  <div class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-1">
            <Sidebar />
          </div>
          <div class="column is-8">
            <div class="column is-8 is-is-offset-1">
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
                      v-for="(item, index) in result"
                      :key="index"
                      style="font-family: 'Kanit', sans-serif; font-weight: 500;"
                    >
                      {{ index + 1 }}
                    </button>
                  </div>
                </div>
              </div>
              <div class="card">
                <header class="card-header" style="background-color: #F4F4F4;">
                  <p class="card-header-title" style="font-weight: 500;">
                    ผลการประเมิน
                  </p>
                </header>
                <div class="card-content">
                  <div class="content has-text-left" style="font-weight: 300;">
                    <ul>
                      <li>{{ result[0].n_lname }}</li>
                      {{
                        result[0].n_lname
                      }}
                      <li>{{ result[0].n_lname }}</li>
                      {{
                        result[0].n_lname
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
  name: "Patientlist",
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
  font-size: 1.25rem;
}
</style>
