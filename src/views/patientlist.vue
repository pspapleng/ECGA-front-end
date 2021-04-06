<template>
  <div>
    <section>
      <div>
        <Sidebar />
      </div>
      <div style="position: relative; left: 100px; width: 1400px">
        <div>
          <h1>รายชื่อผู้ทำแบบประเมิน</h1>
        </div>
        <div style="padding: 20px 0px 30px">
          <b-field grouped >
            <b-input placeholder="Search..." type="search" icon="magnify">
            </b-input>
            <b-button type="is-success"
                icon-left="user-plus"
                icon-pack="fas"
                style="position: absolute; right: 50px;">
                 เพิ่ม
            </b-button>
          </b-field>
        </div>
        <div>
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
              sortable
              v-slot="props"
            >
              {{ props.row.user.first_name }}
            </b-table-column>

            <b-table-column
              field="user.last_name"
              label="นามสกุล"
              sortable
              v-slot="props"
            >
              {{ props.row.user.last_name }}
            </b-table-column>

            <b-table-column
              field="date"
              label="สถานะ"
              sortable
              centered
              v-slot="props"
            >
              <span class="tag is-success is-light">
                ประเมินเมื่อ {{ new Date(props.row.date).toLocaleDateString() }}
              </span>
            </b-table-column>

            <b-table-column label="Gender" v-slot="props">
              <span>
                <b-icon
                  pack="fas"
                  :icon="props.row.gender === 'Male' ? 'mars' : 'venus'"
                >
                </b-icon>
                {{ props.row.gender }}
              </span>
            </b-table-column>
          </b-table>
        </div>
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
    };
  },
};
</script>