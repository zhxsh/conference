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
    <div class="content"></div>
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
</style>
