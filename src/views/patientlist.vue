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
              <router-link to="/CreateAccUser">
                <b-button
                  type="is-success"
                  icon-left="user-plus"
                  icon-pack="fas"
                  style="position: absolute; right: 50px"
                >
                  เพิ่ม
                </b-button>
              </router-link>
            </b-field>
          </div>
          <!-- ตาราง -->
          <div
            class="column is-12"
            style="padding-right: 30px; padding-left: 0px"
          >
            <b-table
              :data="u_Data"
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
                v-slot="user"
              >
                {{ user.row.HN }}
              </b-table-column>

              <b-table-column
                field="u_fname"
                label="ชื่อ"
                sortable
                v-slot="user"
              >
                <span>{{ user.row.u_fname }}</span>
              </b-table-column>

              <b-table-column
                field="u_lname"
                label="นามสกุล"
                sortable
                v-slot="user"
              >
                {{ user.row.u_lname }}
              </b-table-column>

              <b-table-column label="เพศ" centered width="110" v-slot="user">
                <span>
                  {{ user.row.gender }}
                  <b-icon
                    pack="fas"
                    :icon="user.row.gender === 'Male' ? 'mars' : 'venus'"
                  >
                  </b-icon>
                </span>
              </b-table-column>

              <b-table-column
                field="date"
                label="สถานะ"
                centered
                width="100"
                v-slot="user"
              >
                <router-link to="/results">
                  <span
                    class="tag is-success is-light"
                    @click="seeResult(user.row)"
                    v-if="
                      user.row.result != null &&
                      today.getFullYear() -
                        new Date(user.row.result_date).getFullYear() <
                        1
                    "
                  >
                    ประเมินเมื่อ
                    {{ new Date(user.row.result_date).toLocaleDateString() }}
                  </span>
                </router-link>

                <span
                  class="tag is-warning is-light"
                  @click="seeResult(user.row)"
                  v-if="
                    user.row.result != null &&
                    today.getFullYear() -
                      new Date(user.row.result_date).getFullYear() >=
                      1
                  "
                >
                  ประเมินเมื่อ
                  {{ new Date(user.row.result_date).toLocaleDateString() }}
                  <router-link to="/results" />
                </span>

                <span class="tag" v-if="user.row.result == null" disabled>
                  ไม่มีข้อมูลผลประเมิน
                </span>
              </b-table-column>

              <b-table-column width="100" v-slot="user" centered>
                <router-link to="/startpage">
                  <b-button
                    style="background-color: #1e3a8a; color: white"
                    size="is-small"
                    @click="DoForm(user.row)"
                    v-if="
                      user.row.result == null ||
                      today.getFullYear() -
                        new Date(user.row.result_date).getFullYear() >=
                        1
                    "
                  >
                    ทำแบบประเมิน
                  </b-button>
                </router-link>
              </b-table-column>

              <b-table-column
                width="40"
                style="padding: 8px 6px"
                v-slot="user"
              >
                <b-button
                  type="is-light"
                  icon-right="user"
                  icon-pack="fas"
                  size="is-small"
                  @click="
                    open(user.row.HN),
                      (isResult = true),
                      getAge(user.row.date_of_birth)
                  "
                />
              </b-table-column>

              <b-table-column width="40" v-slot="user">
                <b-button
                  type="is-light"
                  icon-right="pen"
                  icon-pack="fas"
                  size="is-small"
                  @click="
                    open(user.row.HN),
                      (isEditResult = true),
                      editHistory(user.row)
                  "
                />
              </b-table-column>

              <b-table-column width="40" v-slot="user">
                <b-button
                  type="is-light"
                  icon-right="trash"
                  icon-pack="fas"
                  size="is-small"
                  @click="DeleteUser(user.row, user.row.HN)"
                />
              </b-table-column>

              <template #bottom-left>
                <b>ทั้งหมด {{ u_Data.length }} รายชื่อ</b>
              </template>
            </b-table>
          </div>
        </div>
        <!-- ดูประวัติ -->
        <b-modal v-model="isResult" :can-cancel="false"
          >>
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
                      class="column is-6"
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
                      class="column is-2"
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
        <b-modal v-model="isEditResult" :can-cancel="false"
          >>
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
                    <b-field :type="{ 'is-danger': $v.editFname.$error }">
                      <b-input v-model="$v.editFname.$model" />
                      <template v-if="$v.editFname.$error">
                        <p class="help is-danger" v-if="!$v.editFname.required">
                          * กรุณากรอกชื่อ
                        </p>
                        <p
                          class="help is-danger"
                          v-if="!$v.editFname.onlyString"
                        >
                          ชื่อต้องเป็นตัวอักษรเท่านั้น
                        </p>
                        <p
                          class="help is-danger"
                          v-if="!$v.editFname.minLength"
                        >
                          ชื่อต้องมีความยาวขั้นต่ำ 2 ตัวอักษร
                        </p>
                      </template>
                    </b-field>
                  </div>
                  <hr style="margin-top: 0px; margin-bottom: 20px" />
                  <div class="level" style="margin-bottom: 0px">
                    <p class="level-left">นามสกุล</p>
                    <b-field :type="{ 'is-danger': $v.editLname.$error }">
                      <b-input v-model="$v.editLname.$model" />
                      <template v-if="$v.editLname.$error">
                        <p class="help is-danger" v-if="!$v.editLname.required">
                          * กรุณากรอกนามสกุล
                        </p>
                        <p
                          class="help is-danger"
                          v-if="!$v.editLname.onlyString"
                        >
                          นามสกุลต้องเป็นตัวอักษรเท่านั้น
                        </p>
                        <p
                          class="help is-danger"
                          v-if="!$v.editLname.minLength"
                        >
                          นามสกุลต้องมีความยาวขั้นต่ำ 2 ตัวอักษร
                        </p>
                      </template>
                    </b-field>
                  </div>
                  <hr style="margin-top: 0px; margin-bottom: 20px" />
                  <div class="level" style="margin-bottom: 0px">
                    <p class="level-left">เพศ</p>
                    <b-field :type="{ 'is-danger': $v.editGender.$error }">
                      <b-input v-model="$v.editGender.$model" />
                      <template v-if="$v.editGender.$error">
                        <p
                          class="help is-danger"
                          v-if="!$v.editGender.required"
                        >
                          * กรุณากรอกเพศ
                        </p>
                        <p
                          class="help is-danger"
                          v-if="!$v.editGender.GenderOnly"
                        >
                          * กรุณากรอกชาย หรือหญิง เท่านั้น
                        </p>
                      </template>
                    </b-field>
                  </div>
                  <hr style="margin-top: 0px; margin-bottom: 30px" />
                  <div class="level" style="margin-bottom: 0px">
                    <p class="level-left">อายุ</p>
                    <p class="level-right">
                      <strong> {{ getAge(result.date_of_birth) }} </strong>
                    </p>
                    <p class="level-right">ปี</p>
                  </div>
                  <hr style="margin-top: 6px; margin-bottom: 20px" />
                  <div class="level" style="margin-bottom: 0px">
                    <p>ประวัติการล้มใน 1 ปี</p>
                    <b-field
                      :type="{ 'is-danger': $v.editFall.$error }"
                      style="margin-bottom: 0px"
                    >
                      <b-input v-model="$v.editFall.$model" />
                      <template v-if="$v.editFall.$error">
                        <p class="help is-danger" v-if="!$v.editFall.required">
                          * กรุณากรอกจำนวนครั้ง
                        </p>
                        <p
                          class="help is-danger"
                          v-if="!($v.editFall.integer && $v.editFall.minValue)"
                        >
                          จำนวนครั้งต้องเป็นจำนวนเต็มมากกว่าหรือเท่ากับ 0
                        </p>
                      </template>
                    </b-field>
                    <p>ครั้ง</p>
                  </div>
                  <hr style="margin-top: 0px; margin-bottom: 20px" />
                </div>

                <div class="bl column is-6" style="padding: 20px 30px 3px">
                  <div class="level" style="margin-bottom: 0px">
                    <p class="level-left">วัน เดือน ปีเกิด</p>
                    <p class="level-right">
                      <b-field :type="{ 'is-danger': $v.editBirth.$error }">
                        <b-datepicker
                          v-model="$v.editBirth.$model"
                          position="is-right"
                          icon="calendar-today"
                          trap-focus
                        >
                        </b-datepicker>
                      </b-field>
                      <template v-if="$v.editBirth.$error">
                        <p class="help is-danger" v-if="!$v.editBirth.required">
                          * กรุณากรอกวันเดือนปีเกิด
                        </p>
                      </template>
                    </p>
                  </div>
                  <hr style="margin-top: 0px; margin-bottom: 20px" />
                  <div class="level" style="margin-bottom: 0px">
                    <p class="level-left">น้ำหนัก</p>
                    <b-field
                      :type="{ 'is-danger': $v.editWeight.$error }"
                      style="margin-bottom: 0px"
                    >
                      <b-input v-model="$v.editWeight.$model" />
                      <template v-if="$v.editWeight.$error">
                        <p
                          class="help is-danger"
                          v-if="!$v.editWeight.required"
                        >
                          * กรุณากรอกน้ำหนัก
                        </p>
                        <p
                          class="help is-danger"
                          v-if="
                            !($v.editWeight.decimal && $v.editWeight.minValue)
                          "
                        >
                          น้ำหนักต้องเป็นตัวเลขมากกว่าหรือเท่ากับ 0
                        </p>
                      </template>
                    </b-field>
                    <p class="level-right">กิโลกรัม</p>
                  </div>
                  <hr style="margin-top: 0px; margin-bottom: 20px" />
                  <div class="level" style="margin-bottom: 0px">
                    <p class="level-left">ส่วนสูง</p>
                    <b-field
                      :type="{ 'is-danger': $v.editHeight.$error }"
                      style="margin-bottom: 0px"
                    >
                      <b-input v-model="$v.editHeight.$model" />
                      <template v-if="$v.editHeight.$error">
                        <p
                          class="help is-danger"
                          v-if="!$v.editHeight.required"
                        >
                          * กรุณากรอกส่วนสูง
                        </p>
                        <p
                          class="help is-danger"
                          v-if="
                            !($v.editHeight.decimal && $v.editHeight.minValue)
                          "
                        >
                          ส่วนสูงต้องเป็นตัวเลขมากกว่าหรือเท่ากับ 0
                        </p>
                      </template>
                    </b-field>
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
                  <hr style="margin-top: 6px; margin-bottom: 20px" />
                  <div class="level" style="margin-bottom: 0px">
                    <p class="level-left">รอบเอว</p>
                    <b-field
                      :type="{ 'is-danger': $v.editWaistline.$error }"
                      style="margin-bottom: 0px"
                    >
                      <b-input v-model="$v.editWaistline.$model" />
                      <template v-if="$v.editWaistline.$error">
                        <p
                          class="help is-danger"
                          v-if="!$v.editWaistline.required"
                        >
                          * กรุณากรอกรอบเอว
                        </p>
                        <p
                          class="help is-danger"
                          v-if="
                            !(
                              $v.editWaistline.decimal &&
                              $v.editWaistline.minValue
                            )
                          "
                        >
                          รอบเอวต้องเป็นตัวเลขมากกว่าหรือเท่ากับ 0
                        </p>
                      </template>
                    </b-field>
                    <p class="level-right">นิ้ว</p>
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
                    @click="saveHistory(result)"
                    expanded
                    >บันทึก
                  </b-button>
                </div>
                <div class="column is-2">
                  <b-button
                    style="
                      background-color: #d12424;
                      color: white;
                      border-color: #d12424;
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
import { debounce } from "debounce";
import { mapState, mapActions, mapMutations } from "vuex";
import {
  required,
  integer,
  minValue,
  decimal,
  minLength,
} from "vuelidate/lib/validators";

function onlyString(value) {
  if (!value.match(/^[ก-์a-zA-Z]*$/gm)) {
    return false;
  }
  return true;
}

function GenderOnly(value) {
  if (!value.match(/Male|Female/)) {
    return false;
  }
  return true;
}

export default {
  components: {
    Sidebar,
  },
  name: "Patientlist",
  data() {
    return {
      isResult: false,
      isEditResult: false,
      result: {},
      today: new Date(),
      editFname: "",
      editLname: "",
      editGender: "",
      editBirth: "",
      editWeight: "",
      editHeight: "",
      editWaistline: "",
      editFall: "",
      in_search: "",
    };
  },
  validations: {
    editFname: {
      required,
      onlyString,
      minLength: minLength(2),
    },
    editLname: {
      required,
      onlyString,
      minLength: minLength(2),
    },
    editGender: {
      required,
      GenderOnly,
    },
    editBirth: {
      required,
    },
    editWeight: {
      required,
      decimal,
      minValue: minValue(0),
    },
    editHeight: {
      required,
      decimal,
      minValue: minValue(0),
    },
    editWaistline: {
      required,
      decimal,
      minValue: minValue(0),
    },
    editFall: {
      required,
      integer,
      minValue: minValue(0),
    },
  },
  methods: {
    ...mapMutations(["setSearch", "setUserId", "setResultId"]),
    ...mapActions(["editUser"]),
    debounceInput: debounce(function (e) {
      this.setSearch(this.in_search);
      this.getUser(e);
      console.log(e);
      console.log(this.in_search);
    }, 300),
    open(id) {
      var num = this.u_Data.length;
      for (var i = 0; i < num; i++) {
        if (parseInt(id) === parseInt(this.u_Data[i].HN)) {
          this.result = this.u_Data[i];
        }
      }
    },
    seeResult(id) {
      console.log(id);
      this.setUserId(id.u_id);
      this.setResultId(id.result_id);
      console.log(this.result_id);
    },
    DoForm(id) {
      console.log(id.u_id);
      this.setUserId(id.u_id);
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
    DeleteUser(user, index) {
      this.setUserId(user.u_id);
      let confirmResult = confirm("are you sure!?");
      if (confirmResult) {
        this.deleteUser()
          .then((res) => {
            console.log(res);
            var num = this.u_Data.length;
            for (var i = 0; i < num; i++) {
              if (parseInt(index) === parseInt(this.u_Data[i].HN)) {
                this.u_Data.splice(i, 1);
              }
            }
          })
          .catch((err) => {
            console.log(err);
            alert(err.response.data.message);
          });
      }
    },
    editHistory(histy) {
      this.editFname = histy.u_fname;
      this.editLname = histy.u_lname;
      this.editGender = histy.gender;
      this.editBirth = new Date(histy.date_of_birth);
      this.editWeight = histy.weight;
      this.editHeight = histy.height;
      this.editWaistline = histy.waistline;
      this.editFall = histy.fall_history;
      this.setUserId(histy.u_id);
    },
    saveHistory(histy) {
      this.$v.$touch();

      // เช็คว่าในฟอร์มไม่มี error
      if (!this.$v.$invalid) {
        const payload = {
          u_fname: this.editFname,
          u_lname: this.editLname,
          gender: this.editGender,
          date_of_birth: this.editBirth.toISOString().substring(0, 10),
          weight: this.editWeight,
          height: this.editHeight,
          bmi: parseFloat(
            this.editWeight / Math.pow(this.editHeight / 100, 2)
          ).toFixed(2),
          waistline: this.editWaistline,
          fall_history: this.editFall,
          n_id: this.who_login.n_id,
        };
        this.editUser(payload)
          .then((res) => {
            console.log(res);
            histy.u_fname = this.editFname;
            histy.u_lname = this.editLname;
            histy.gender = this.editGender;
            histy.date_of_birth = this.editBirth;
            histy.weight = this.editWeight;
            histy.height = this.editHeight;
            histy.bmi = payload.bmi;
            histy.waistline = this.editWaistline;
            histy.fall_history = this.editFall;
            this.isEditResult = !this.isEditResult;
          })
          .catch((err) => {
            console.log(err);
            alert("ERROR");
          });
      } else {
        alert("โปรดกรอกข้อมูลให้ถูกต้องทุกช่อง");
      }
    },
    ...mapActions(["getUser", "editUser", "deleteUser"]),
  },
  computed: {
    dateResult() {
      return new Date(this.result.service_date).toLocaleDateString();
    },
    editDateResult() {
      return new Date(this.result.service_date);
    },
    ...mapState(["u_Data", "UserId", "result_id", "who_login"]),
  },
  beforeRouteEnter(to, from, next) {
    console.log("before");
    next((vm) => {
      vm.getUser();
    });
  },
  watch: {
    in_search: {
      handler(val) {
        this.debounceInput();
        console.log(val);
        console.log("The form has changed!");
      },
    },
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
.table td {
  padding: 0.45em 0.75em;
}
</style>