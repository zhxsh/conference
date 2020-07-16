<template>
  <div class="main">
    <div class="head">
      <h1>Event Booking Platform</h1>
      <!-- <button>Login</button> -->
      <div style="line-height:100px">
        <el-button>Login</el-button>
      </div>
    </div>
    <div class="content">
      <ul>
        <li>
          <h2>会议1</h2>
          <div>
            <span>组织者1</span>
            <span>,2020-10-10</span>
          </div>
        </li>
        <li>
          <h2>会议1</h2>
          <div>
            <span>组织者1</span>
            <span>,2020-10-10</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
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

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  width: 100%;
  margin: 0;
  padding: 20px;
  /* height: 100%; */
  border: 1px solid;
  text-align: left;
  font-size: 20px;
}
ul li {
  padding: 15px;
  border: 1px solid;
  cursor: pointer;
}
ul li:hover {
  background: #d3d3d375;
}
ul li + li {
  margin-top: 10px;
}
h2 {
  font-size: 30px;
  margin: 0;
  line-height: 40px;
}
</style>
