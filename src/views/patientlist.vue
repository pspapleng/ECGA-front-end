<template>
  <div>
    <section>
      <div class="columns is-gapless">
        <div class="column is-1">
          <Sidebar />
        </div>
        <div class="column is-11">
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
              <b-input v-model="in_search"
              placeholder="Search..." type="search" icon="magnify">
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
              default-sort-direction="asc"
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
                field="id"
                label="HN"
                width="40"
                sortable
                numeric
                v-slot="props"
              >
                {{ props.row.id }}
              </b-table-column>

              <b-table-column
                field="user.first_name"
                label="ชื่อ"
                @click="isActive = true"
                sortable
                v-slot="props"
              >
                <span @click="isActive = true">{{
                  props.row.user.first_name
                }}</span>
              </b-table-column>

              <b-table-column
                field="user.last_name"
                label="นามสกุล"
                sortable
                v-slot="props"
              >
                {{ props.row.user.last_name }}
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
                <span class="tag is-success is-light">
                  ประเมินเมื่อ
                  {{ new Date(props.row.date).toLocaleDateString() }}
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

              <b-table-column width="40">
                <b-button
                  type="is-light"
                  icon-right="pen"
                  icon-pack="fas"
                  size="is-small"
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
        <b-modal v-model="isActive">
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
                      <b-input id="info" value="ธิดาพร" disabled></b-input>
                    </b-field>
                    <b-field id="tx" label="นามสกุล">
                      <b-input id="info" value="ชาวคูเวียง" disabled></b-input>
                    </b-field>
                  </b-field>
                  <b-field grouped>
                    <b-field id="tx" label="เพศ">
                      <b-input id="info" value="หญิง" disabled></b-input>
                    </b-field>
                  </b-field>
                  <b-field grouped>
                    <b-field id="tx" label="วัน เดือน ปีเกิด">
                      <b-field class="column is-2">
                        <b-input id="info" value="9" disabled></b-input>
                      </b-field>
                      <b-field class="column is-2">
                        <b-input id="info" value="กันยายน" disabled></b-input>
                      </b-field>
                      <b-field class="column is-2">
                        <b-input id="info" value="1994" disabled></b-input>
                      </b-field>
                    </b-field>
                  </b-field>
                  <b-field grouped>
                    <b-field id="tx" label="อายุ" class="column is-4">
                      <b-input id="info" value="27" disabled></b-input>
                    </b-field>
                  </b-field>
                </div>
                <div class="bl column is-6">
                  <b-field grouped>
                    <b-field id="tx" label="วันที่เข้ารับบริการ">
                      <b-field class="column is-2">
                        <b-input id="info" value="19" disabled></b-input>
                      </b-field>
                      <b-field class="column is-2">
                        <b-input id="info" value="มีนาคม" disabled></b-input>
                      </b-field>
                      <b-field class="column is-2">
                        <b-input id="info" value="2021" disabled></b-input>
                      </b-field>
                    </b-field>
                  </b-field>
                  <b-field grouped>
                    <b-field id="tx" label="น้ำหนัก" class="column is-3">
                      <b-input id="info" value="50" disabled></b-input>
                    </b-field>
                    <b-field id="tx" label="ส่วนสูง" class="column is-3">
                      <b-input id="info" value="145" disabled></b-input>
                    </b-field>
                    <b-field id="tx" label="BMI" class="column is-3">
                      <b-input id="info" value="23.78" disabled></b-input>
                    </b-field>
                  </b-field>
                  <b-field grouped>
                    <b-field id="tx" label="รอบเอว" class="column is-4">
                      <b-input id="info" value="32" disabled></b-input>
                    </b-field>
                  </b-field>
                  <b-field grouped>
                    <b-field
                      id="tx"
                      label="ประวัติการล้มใน 1 ปี"
                      class="column is-5"
                    >
                      <b-input id="info" value="365" disabled></b-input>
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
import data1 from "../assets/data.json";
export default {
  components: {
    Sidebar,
  },
  name: "Patientlist",
  data() {
    return {
      data1,
      isActive: false,
      in_search: "A"
    };
  },
  methods: {
    doc() {
      return data1.filter(item => {
        console.log(item.user.first_name === this.in_search);
        return item.user.first_name == this.in_search
      })
    }
  },
};
</script>