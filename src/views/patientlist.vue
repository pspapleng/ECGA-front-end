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
                icon-left="user-plus"
                icon-pack="fas"
                style="position: absolute; right: 50px"
                @click="doc()"
              >
                เพิ่ม
              </b-button>
            </b-field>
          </div>
          <div
            class="column is-12"
            style="padding-right: 50px; padding-left: 0px"
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

              <b-table-column label="เพศ" centered width="140" v-slot="props">
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
                sortable
                centered
                width="200"
                v-slot="props"
              >
                <span class="tag is-success is-light" v-if="expire">
                  ประเมินเมื่อ
                  {{ new Date(props.row.service_date).toLocaleDateString() }}
                </span>

                <span class="tag is-warning is-light" v-if="expire">
                  ประเมินเมื่อ
                  {{ new Date(props.row.service_date).toLocaleDateString() }}
                </span>

                <span class="tag" v-if="expire" disabled>
                  ไม่มีข้อมูลผลประเมิน
                </span>
              </b-table-column>

              <b-table-column width="200" centered>
                <b-button
                  style="background-color: #1e3a8a; color: white"
                  size="is-small"
                >
                  ทำแบบประเมิน
                </b-button>
              </b-table-column>

              <b-table-column width="40" v-slot="props">
                <b-button
                  type="is-light"
                  icon-right="user"
                  icon-pack="fas"
                  size="is-small"
                  @click="open(props.row.u_id), (isResult = true)"
                />
              </b-table-column>

              <b-table-column width="40">
                <b-button
                  type="is-light"
                  icon-right="pen"
                  icon-pack="fas"
                  size="is-small"
                  @click="isEditResult = true"
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
            <section class="level" style="background-color: black">
              <div class="level-left">
                <div class="level-item">
                  <b-icon
                    pack="fas"
                    icon="user"
                    size="is-large"
                    type="is-primary"
                  >
                  </b-icon>
                </div>
                <div>
                  <div class="field has-addons">
                    <p class="control">
                      <input
                        class="input"
                        type="text"
                        placeholder="Find a post"
                      />
                    </p>
                    <p class="control">
                      <button class="button">Search</button>
                    </p>
                  </div>
                </div>
              </div>
              <div class="level-right">
                <p class="level-item"><strong>All</strong></p>
                <p class="level-item"><a>Published</a></p>
                <p class="level-item"><a>Drafts</a></p>
                <p class="level-item"><a>Deleted</a></p>
                <p class="level-item"><a class="button is-success">New</a></p>
              </div>
            </section>

            <div class="column is-full">
              <div class="columns">
                <div class="br column is-6">
                  <div class="level">
                    <p class="level-right">ชื่อ</p>
                    <p class="level-left">
                      <strong> {{ result.u_fname }} </strong>
                    </p>
                  </div>
                  <hr />
                  <div class="level">
                    <p class="level-right">นามสกุล</p>
                    <p class="level-left">
                      <strong> {{ result.u_lname }} </strong>
                    </p>
                  </div>
                </div>
                <div class="bl column is-6">
                  <div>
                    <p>
                      <strong> susu </strong>
                    </p>
                    <p>rai</p>
                  </div>
                  <hr />
                  <div>
                    <p>susu</p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </b-modal>
        <!-- แก้ไขประว้ติ -->
        <b-modal v-model="isEditResult">
          <form class="card">
            <div class="column is-full has-background-grey-light">
              <strong id="head">ประวัติผู้เข้ารับบริการ</strong>
            </div>
            <div class="name column is-full has-background-grey-light">
              <strong id="head-name">นางสาว ธิดาพร ชาวคูเวียง</strong>
            </div>
            <div class="column is-full">
              <div class="level">
                <div class="br column is-6">
                  <b-field grouped>
                    <b-field id="tx" label="ชื่อ">
                      <b-input id="info" value="ธิดาพร"></b-input>
                    </b-field>
                    <b-field id="tx" label="นามสกุล">
                      <b-input id="info" value="ชาวคูเวียง"></b-input>
                    </b-field>
                  </b-field>
                  <b-field grouped>
                    <b-field id="tx" label="เพศ">
                      <b-input id="info" value="หญิง"></b-input>
                    </b-field>
                  </b-field>
                  <b-field grouped>
                    <b-field id="tx" label="วัน เดือน ปีเกิด">
                      <b-field class="column is-2">
                        <b-input id="info" value="9"></b-input>
                      </b-field>
                      <b-field class="column is-2">
                        <b-input id="info" value="กันยายน"></b-input>
                      </b-field>
                      <b-field class="column is-2">
                        <b-input id="info" value="1994"></b-input>
                      </b-field>
                    </b-field>
                  </b-field>
                  <b-field grouped>
                    <b-field id="tx" label="อายุ" class="column is-4">
                      <b-input id="info" value="27"></b-input>
                    </b-field>
                  </b-field>
                </div>
                <div class="bl column is-6">
                  <b-field grouped>
                    <b-field id="tx" label="วันที่เข้ารับบริการ">
                      <b-field class="column is-2">
                        <b-input id="info" value="19"></b-input>
                      </b-field>
                      <b-field class="column is-2">
                        <b-input id="info" value="มีนาคม"></b-input>
                      </b-field>
                      <b-field class="column is-2">
                        <b-input id="info" value="2021"></b-input>
                      </b-field>
                    </b-field>
                  </b-field>
                  <b-field grouped>
                    <b-field id="tx" label="น้ำหนัก" class="column is-3">
                      <b-input id="info" value="50"></b-input>
                    </b-field>
                    <b-field id="tx" label="ส่วนสูง" class="column is-3">
                      <b-input id="info" value="145"></b-input>
                    </b-field>
                    <b-field id="tx" label="BMI" class="column is-3">
                      <b-input id="info" value="23.78"></b-input>
                    </b-field>
                  </b-field>
                  <b-field grouped>
                    <b-field id="tx" label="รอบเอว" class="column is-4">
                      <b-input id="info" value="32"></b-input>
                    </b-field>
                  </b-field>
                  <b-field grouped>
                    <b-field
                      id="tx"
                      label="ประวัติการล้มใน 1 ปี"
                      class="column is-5"
                    >
                      <b-input id="info" value="365"></b-input>
                    </b-field>
                  </b-field>
                </div>
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
import data1 from "../assets/forToey.json";
export default {
  components: {
    Sidebar,
  },
  name: "Patientlist",
  data() {
    return {
      data1,
      isResult: false,
      isEditResult: false,
      in_search: "",
      success: false,
      unsuccess: false,
      expire: true,
      result: {},
    };
  },
  methods: {
    doc() {
      data1.filter((item) => {
        console.log(item.user.first_name);
      });
    },
    open(id) {
      this.result = data1[id - 1];
      console.log(this.result);
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
</style>