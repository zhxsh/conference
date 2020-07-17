<template>
  <div class="main">
    <div class="head">
      <h1>Event Booking Platform</h1>
      <!-- <button>Login</button> -->
      <div style="line-height:100px">
        <router-link to="/login">
          <button>Login</button>
        </router-link>
      </div>
    </div>
    <div class="content">
      <ul>
        <router-link to="/agenda">
          <li>
            <h2>会议1</h2>
            <div>
              <span>组织者1</span>
              <span>,2020-10-10</span>
            </div>
          </li>
        </router-link>
        <li>
          <h2>会议1</h2>
          <div>
            <span>组织者2</span>
            <span>,2020-10-10</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import pdata from "../assets/json/platform.json";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
    ddd: String
  }
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
  border-radius: 5px;
}
ul li {
  padding: 15px;
  border: 1px solid;
  cursor: pointer;
  border-radius: 3px;
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

button {
  /* width: 100px; */
  padding: 0 20px;
  height: 30px;
  border-radius: 4px;
  border: 0;
  border: 1px solid #dcdfe6;
  cursor: pointer;
}
</style>
