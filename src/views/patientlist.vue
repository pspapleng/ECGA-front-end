<template>
  <div>
    <section>
      <div class="columns is-gapless">
        <div class="column is-1">
          <Sidebar />
        </div>
        <div class="column is-11" id="righttext">
          <div>
            <h1
              style="
                font-size: 1.6667rem;
                text-align: left;
                font-weight: 600;
                padding: 20px 0px 0px;
              "
            >
              รายชื่อผู้ทำแบบประเมิน
            </h1>
          </div>
          <div style="padding: 20px 0px 0px">
            <b-field grouped>
              <b-input
                v-model="in_search"
                placeholder="Search..."
                type="search"
                icon="magnify"
              >
              </b-input>
              <b-button
                type="is-success"
                icon-left="search"
                icon-pack="fas"
                @click="getData()"
                >ค้นหา
              </b-button>
              <b-button
                type="is-success"
                icon-left="user-plus"
                icon-pack="fas"
                style="position: absolute; right: 50px"
                @click="doc()"
              >
                เพิ่ม
              </b-button>
            </b-field>
          </div>
          <!-- ตาราง -->
          <div
            class="column is-12"
            style="padding-right: 30px; padding-left: 0px"
          >
            <b-table
              :data="data1"
              :paginated="true"
              per-page="10"
              current-page.sync="1"
              pagination-position="bottom"
              default-sort-direction="DESC"
              sort-icon="arrow-up"
              sort-icon-size="is-small"
              default-sort="user.first_name"
              aria-next-label="Next page"
              aria-previous-label="Previous page"
              aria-page-label="Page"
              aria-current-label="Current page"
              style="text-align: left"
            >
              <b-table-column
                field="HN"
                label="HN"
                width="40"
                sortable
                centered
                v-slot="props"
              >
                {{ props.row.HN }}
              </b-table-column>

              <b-table-column
                field="u_fname"
                label="ชื่อ"
                sortable
                v-slot="props"
              >
                <span>{{ props.row.u_fname }}</span>
              </b-table-column>

              <b-table-column
                field="u_lname"
                label="นามสกุล"
                sortable
                v-slot="props"
              >
                {{ props.row.u_lname }}
              </b-table-column>

              <b-table-column label="เพศ" centered width="110" v-slot="props">
                <span>
                  {{ props.row.gender }}
                  <b-icon
                    pack="fas"
                    :icon="props.row.gender === 'Male' ? 'mars' : 'venus'"
                  >
                  </b-icon>
                </span>
              </b-table-column>

              <b-table-column
                field="date"
                label="สถานะ"
                centered
                width="100"
                v-slot="props"
              >
                <span
                  class="tag is-success is-light"
                  v-if="
                    props.row.result != null &&
                    selected.getFullYear() -
                      new Date(props.row.result_date).getFullYear() <
                      1
                  "
                >
                  ประเมินเมื่อ
                  {{ new Date(props.row.result_date).toLocaleDateString() }}
                </span>

                <span
                  class="tag is-warning is-light"
                  v-if="
                    props.row.result != null &&
                    selected.getFullYear() -
                      new Date(props.row.result_date).getFullYear() >
                      1
                  "
                >
                  ประเมินเมื่อ
                  {{ new Date(props.row.result_date).toLocaleDateString() }}
                </span>

                <span class="tag" v-if="props.row.result == null" disabled>
                  ไม่มีข้อมูลผลประเมิน
                </span>
              </b-table-column>

              <b-table-column width="100" v-slot="props" centered>
                <b-button
                  style="background-color: #1e3a8a; color: white"
                  size="is-small"
                  v-if="
                    props.row.result == null ||
                    selected.getFullYear() -
                      new Date(props.row.result_date).getFullYear() >
                      1
                  "
                >
                  ทำแบบประเมิน
                </b-button>
              </b-table-column>

              <b-table-column
                width="40"
                style="padding: 8px 6px"
                v-slot="props"
              >
                <b-button
                  type="is-light"
                  icon-right="user"
                  icon-pack="fas"
                  size="is-small"
                  @click="
                    open(props.row.HN),
                      (isResult = true),
                      getAge(props.row.date_of_birth)
                  "
                />
              </b-table-column>

              <b-table-column width="40" v-slot="props">
                <b-button
                  type="is-light"
                  icon-right="pen"
                  icon-pack="fas"
                  size="is-small"
                  @click="open(props.row.HN), (isEditResult = true)"
                />
              </b-table-column>

              <b-table-column width="40">
                <b-button
                  type="is-light"
                  icon-right="trash"
                  icon-pack="fas"
                  size="is-small"
                />
              </b-table-column>

              <template #bottom-left>
                <b>ทั้งหมด {{ data1.length }} รายชื่อ</b>
              </template>
            </b-table>
          </div>
        </div>
        <!-- ดูประวัติ -->
        <b-modal v-model="isResult">
          <form class="card">
            <div class="column is-full" style="background-color: #1e3a8a">
              <div class="columns">
                <div class="column is-2" style="color: white">
                  <b-icon
                    pack="fas"
                    icon="user"
                    custom-size="fa-5x"
                    style="padding-top: 50px"
                  >
                  </b-icon>
                </div>
                <div class="column is-10">
                  <div class="columns">
                    <div
                      class="column is-5"
                      style="
                        padding: 20px 0px 0px;
                        text-align: left;
                        color: white;
                      "
                    >
                      <p style="font-size: 30px">
                        {{ result.u_fname }} {{ result.u_lname }}
                      </p>
                    </div>
                    <div
                      class="column is-3"
                      style="padding: 20px 20px 10px; color: white"
                    ></div>
                    <div
                      class="column is-4"
                      style="padding: 20px 20px 10px; color: white"
                    >
                      <p>วันที่เข้ารับบริการ</p>
                    </div>
                  </div>

                  <div class="columns">
                    <div
                      class="column is-3"
                      style="
                        padding: 0px 0px 20px;
                        text-align: left;
                        color: white;
                      "
                    >
                      <p>HN {{ result.HN }}</p>
                    </div>
                    <div class="column is-5"></div>
                    <div
                      class="column is-4"
                      style="padding: 0px 20px 20px; text-align: center"
                    >
                      <b-field>
                        <b-input
                          icon="calendar-alt"
                          icon-pack="fas"
                          icon-size="large"
                          v-model="dateResult"
                          disabled
                        >
                        </b-input>
                      </b-field>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="column is-full" id="bodybar">
              <div class="columns">
                <div
                  class="br column is-6"
                  style="padding: 20px 30px 3px; border-right-style: solid"
                >
                  <div class="level" style="margin-bottom: 0px">
                    <p class="level-left">ชื่อ</p>
                    <p class="level-right">
                      <strong> {{ result.u_fname }} </strong>
                    </p>
                  </div>
                  <hr style="margin-top: 0px; margin-bottom: 20px" />
                  <div class="level" style="margin-bottom: 0px">
                    <p class="level-left">นามสกุล</p>
                    <p class="level-right">
                      <strong> {{ result.u_lname }} </strong>
                    </p>
                  </div>
                  <hr style="margin-top: 0px; margin-bottom: 20px" />
                  <div class="level" style="margin-bottom: 0px">
                    <p class="level-left">เพศ</p>
                    <p class="level-right">
                      <strong> {{ result.gender }} </strong>
                    </p>
                  </div>
                  <hr style="margin-top: 0px; margin-bottom: 20px" />
                  <div class="level" style="margin-bottom: 0px">
                    <p class="level-left">อายุ</p>
                    <p class="level-right">
                      <strong> {{ getAge(result.date_of_birth) }} </strong>
                    </p>
                    <p class="level-right">ปี</p>
                  </div>
                  <hr style="margin-top: 0px; margin-bottom: 20px" />
                  <div class="level" style="margin-bottom: 0px">
                    <p class="level-left">วัน เดือน ปีเกิด</p>
                    <p class="level-right">
                      <strong>
                        {{
                          new Date(result.date_of_birth).toLocaleDateString()
                        }}
                      </strong>
                    </p>
                  </div>
                  <hr style="margin-top: 0px; margin-bottom: 20px" />
                </div>

                <div class="bl column is-6" style="padding: 20px 30px 3px">
                  <div class="level" style="margin-bottom: 0px">
                    <p class="level-left">น้ำหนัก</p>
                    <p style="padding-left: 30px">
                      <strong> {{ result.weight }} </strong>
                    </p>
                    <p class="level-right">กิโลกรัม</p>
                  </div>
                  <hr style="margin-top: 0px; margin-bottom: 20px" />
                  <div class="level" style="margin-bottom: 0px">
                    <p class="level-left">ส่วนสูง</p>
                    <p style="padding-left: 30px">
                      <strong> {{ result.height }} </strong>
                    </p>
                    <p class="level-right">เซนติเมตร</p>
                  </div>
                  <hr style="margin-top: 0px; margin-bottom: 20px" />
                  <div class="level" style="margin-bottom: 0px">
                    <p class="level-left">BMI</p>
                    <p>
                      <strong> {{ result.bmi }} </strong>
                    </p>
                    <p class="level-right"></p>
                  </div>
                  <hr style="margin-top: 0px; margin-bottom: 20px" />
                  <div class="level" style="margin-bottom: 0px">
                    <p class="level-left">รอบเอว</p>
                    <p style="padding-left: 30px">
                      <strong> {{ result.waistline }} </strong>
                    </p>
                    <p class="level-right">นิ้ว</p>
                  </div>
                  <hr style="margin-top: 0px; margin-bottom: 20px" />
                  <div class="level" style="margin-bottom: 0px">
                    <p class="level-left">ประวัติการล้มใน 1 ปี</p>
                    <p style="padding-left: 30px">
                      <strong> {{ result.fall_history }} </strong>
                    </p>
                    <p class="level-right">ครั้ง</p>
                  </div>
                  <hr style="margin-top: 0px; margin-bottom: 20px" />
                </div>
              </div>
            </div>

            <div class="column is-full" id="bodybar">
              <div class="columns">
                <div class="column is-5"></div>
                <div class="column is-2">
                  <b-button
                    style="
                      background-color: #1e3a8a;
                      color: white;
                      border-color: #1e3a8a;
                    "
                    @click="isResult = !isResult"
                    expanded
                    >กลับ
                  </b-button>
                </div>
                <div class="column is-5"></div>
              </div>
            </div>
          </form>
        </b-modal>
        <!-- แก้ไขประว้ติ -->
        <b-modal v-model="isEditResult">
          <form class="card">
            <div class="column is-full" style="background-color: #1e3a8a">
              <div class="columns">
                <div class="column is-2" style="color: white">
                  <b-icon
                    pack="fas"
                    icon="user"
                    custom-size="fa-5x"
                    style="padding-top: 50px"
                  >
                  </b-icon>
                </div>
                <div class="column is-10">
                  <div class="columns">
                    <div
                      class="column is-5"
                      style="
                        padding: 20px 0px 0px;
                        text-align: left;
                        color: white;
                      "
                    >
                      <p style="font-size: 30px">
                        {{ result.u_fname }} {{ result.u_lname }}
                      </p>
                    </div>
                    <div
                      class="column is-3"
                      style="padding: 20px 20px 10px; color: white"
                    ></div>
                    <div
                      class="column is-4"
                      style="padding: 20px 20px 10px; color: white"
                    >
                      <p>วันที่เข้ารับบริการ</p>
                    </div>
                  </div>

                  <div class="columns">
                    <div
                      class="column is-3"
                      style="
                        padding: 0px 0px 20px;
                        text-align: left;
                        color: white;
                      "
                    >
                      <p>HN {{ result.HN }}</p>
                    </div>
                    <div class="column is-5"></div>
                    <div
                      class="column is-4"
                      style="padding: 0px 20px 20px; text-align: center"
                    >
                      <b-field>
                        <!-- <b-datepicker
                          v-model="editDateResult"
                          icon="calendar-alt"
                          icon-pack="fas"
                          trap-focus
                        >
                        </b-datepicker> -->
                        <b-input
                          icon="calendar-alt"
                          icon-pack="fas"
                          icon-size="large"
                          v-model="dateResult"
                          disabled
                        >
                        </b-input>
                      </b-field>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="column is-full" id="bodybar">
              <div class="columns">
                <div
                  class="br column is-6"
                  style="padding: 20px 30px 3px; border-right-style: solid"
                >
                  <div class="level" style="margin-bottom: 0px">
                    <p class="level-left">ชื่อ</p>
                    <b-input v-model="result.u_fname" />
                  </div>
                  <hr style="margin-top: 0px; margin-bottom: 20px" />
                  <div class="level" style="margin-bottom: 0px">
                    <p class="level-left">นามสกุล</p>
                    <b-input v-model="result.u_lname" />
                  </div>
                  <hr style="margin-top: 0px; margin-bottom: 20px" />
                  <div class="level" style="margin-bottom: 0px">
                    <p class="level-left">เพศ</p>
                    <b-input v-model="result.gender" />
                  </div>
                  <hr style="margin-top: 0px; margin-bottom: 30px" />
                  <div class="level" style="margin-bottom: 0px">
                    <p class="level-left">อายุ</p>
                    <p class="level-right">
                      <strong> {{ result.u_lname }} </strong>
                    </p>
                    <p class="level-right">ปี</p>
                  </div>
                  <hr style="margin-top: 6px; margin-bottom: 30px" />
                  <div class="level" style="margin-bottom: 0px">
                    <p class="level-left">วัน เดือน ปีเกิด</p>
                    <p class="level-right">
                      <strong>
                        {{
                          new Date(result.date_of_birth).toLocaleDateString()
                        }}
                      </strong>
                    </p>
                  </div>
                  <hr style="margin-top: 6px; margin-bottom: 20px" />
                </div>

                <div class="bl column is-6" style="padding: 20px 30px 3px">
                  <div class="level" style="margin-bottom: 0px">
                    <p class="level-left">น้ำหนัก</p>
                    <b-input v-model="result.height" />
                    <p class="level-right">กิโลกรัม</p>
                  </div>
                  <hr style="margin-top: 0px; margin-bottom: 20px" />
                  <div class="level" style="margin-bottom: 0px">
                    <p class="level-left">ส่วนสูง</p>
                    <b-input v-model="result.weight" />
                    <p class="level-right">เซนติเมตร</p>
                  </div>
                  <hr style="margin-top: 0px; margin-bottom: 30px" />
                  <div class="level" style="margin-bottom: 0px">
                    <p class="level-left">BMI</p>
                    <p>
                      <strong> {{ result.bmi }} </strong>
                    </p>
                    <p class="level-right"></p>
                  </div>
                  <hr style="margin-top: 5px; margin-bottom: 20px" />
                  <div class="level" style="margin-bottom: 0px">
                    <p class="level-left">รอบเอว</p>
                    <b-input v-model="result.waistline" />
                    <p class="level-right">นิ้ว</p>
                  </div>
                  <hr style="margin-top: 0px; margin-bottom: 20px" />
                  <div class="level" style="margin-bottom: 0px">
                    <p class="level-left">ประวัติการล้มใน 1 ปี</p>
                    <b-input v-model="result.fall_history" />
                    <p class="level-right">ครั้ง</p>
                  </div>
                  <hr style="margin-top: 0px; margin-bottom: 20px" />
                </div>
              </div>
            </div>

            <div class="column is-full" id="bodybar">
              <div class="columns">
                <div class="column is-4"></div>
                <div class="column is-2">
                  <b-button
                    style="
                      background-color: #017836;
                      color: white;
                      border-color: #017836;
                    "
                    @click="isEditResult = !isEditResult"
                    expanded
                    >บันทึก
                  </b-button>
                </div>
                <div class="column is-2">
                  <b-button
                    style="
                      background-color: #D12424;
                      color: white;
                      border-color: #D12424;
                    "
                    @click="isEditResult = !isEditResult"
                    expanded
                    >ยกเลิก
                  </b-button>
                </div>
                <div class="column is-4"></div>
              </div>
            </div>
          </form>
        </b-modal>
      </div>
    </section>
  </div>
</template> 
 
<script>
import Sidebar from "@/components/sidebar.vue";
import axios from "axios";
export default {
  components: {
    Sidebar,
  },
  name: "Patientlist",
  data() {
    return {
      data1: {},
      isResult: false,
      isEditResult: false,
      in_search: "",
      success: false,
      unsuccess: false,
      expire: true,
      result: {},
      selected: new Date(),
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    doc() {
      console.log(this.data1);
    },
    open(id) {
      var num = this.data1.length
      for (var i = 0 ; i < num ; i++) {
        console.log(parseInt(this.data1[i].HN));
        if (parseInt(id) === parseInt(this.data1[i].HN)){
          this.result = this.data1[i];
        }
      }
      console.log(this.result);
    },
    getData() {
      axios
        .get("http://localhost:4000/api/users", {
          params: {
            search: this.in_search,
          },
        })
        .then((response) => {
          this.data1 = response.data;
          console.log(this.result);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getAge(date) {
      var today = new Date();
      var birthDate = new Date(date);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    },
  },
  computed: {
    dateResult() {
      return new Date(this.result.service_date).toLocaleDateString();
    },
    editDateResult() {
      return new Date(this.result.service_date);
    },
    // statusResult(resul, date) {
    //   if (resul.length == 0){
    //     return "no_data"
    //   }else if(resul.length > 0 && (date.getFullYear() - this.selected.getFullYear() > 1) ){
    //     return "expire"
    //   }else if(resul.length > 0 && (date.getFullYear() - this.selected.getFullYear() <= 0) ){
    //     return "have_data"
    //   }
    // }
  },
};
</script>

<style>
#righttext {
  height: 100%;
}
.pagination-link.is-current {
  background-color: #1e3a8a;
  border-color: #1e3a8a;
}
.headbar {
  height: 100px;
}
.modal .modal-content {
  width: 70%;
}
</style>