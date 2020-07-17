<template>
  <div class="main">
    <div class="head">
      <h1>WorldSkills Conference 2019</h1>
      <!-- <button>Login</button> -->
      <div style="line-height:100px">
        <router-link to="/login">
          <el-button>Redister for this event</el-button>
        </router-link>
      </div>
    </div>
    <div class="content">
      <el-table
        :data="tableData"
        :span-method="objectSpanMethod"
        border
        style="width: 100%"
      >
        <el-table-column prop="name" label=""> </el-table-column>
        <el-table-column prop="room" label="" width="180"> </el-table-column>
        <el-table-column prop="time9" label="9:00">
          <template slot-scope="scope">
            <span style="" v-if="scope.row.time9.name">
              <el-button>
                {{ scope.row.time9.name }}
              </el-button>
            </span>
          </template>
        </el-table-column>
        <!-- <el-table-column prop="time10" label=""> </el-table-column> -->
        <el-table-column prop="time11" label="11:00"
          ><template slot-scope="scope">
            <span style="">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="time13" label="13:00">
          <template slot-scope="scope">
            <span style="" v-if="scope.row.time13.name"
              ><el-button type="success">
                {{ scope.row.time13.name }}
              </el-button></span
            >
          </template>
        </el-table-column>
        <el-table-column prop="time15" label="15:00"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      tableData: [
        {
          id: 1,
          name: "会议1",
          room: "Hall 1",
          time9: {
            name: "Diffasdlpo pllsda901",
            isTalk: false,
            isWorkshop: true,
          },
          time11: "Diffasdlpo pllsd",
          time13: "Diffasdlpo pllsd",
          time15: "Diffasdlpo pllsd",
        },
        {
          id: 2,
          name: "会议2",
          room: "Hall 1",
          time9: "Diffasdlpo pllsd",
          time11: "",
          time13: "Diffasdlpo pllsd",
          time15: "Diffasdlpo pllsd",
        },
        {
          id: 3,
          name: "会议4",
          room: "Hall 1",
          time9: "Diffasdlpo pllsd",
          time11: "Diffasdlpo pllsd",
          time13: {
            name: "Diffasdlpo pllsda901",
            isTalk: false,
            isWorkshop: true,
          },
          time15: "Diffasdlpo pllsd",
        },
        {
          id: 4,
          name: "会议3",
          room: "Hall 1",
          time9: "Diffasdlpo pllsd",
          time11: "Diffasdlpo pllsd",
          time13: "Diffasdlpo pllsd",
          time15: "Diffasdlpo pllsd",
        },
      ],
    };
  },
  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 2];
        } else if (columnIndex === 1) {
          return [0, 0];
        }
      }
    },

    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1,
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0,
          };
        }
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* background-color: blanchedalmond; */

  padding: 0 100px;
  box-sizing: border-box;
}
.head {
  /* color: red; */
  display: flex;
  justify-content: space-between;
}
.head h1 {
  padding: 0;
  margin: 0;
  line-height: 100px;
}
.content {
  flex: 1;
}
</style>
