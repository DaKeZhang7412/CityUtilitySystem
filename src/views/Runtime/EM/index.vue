<template>
  <div>
    <div class="header0">
      <div class="header01">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>水浸</span>
            <el-button style="float: right; padding: 3px 0" type="text"
              >更多</el-button
            >
          </div>
          <div class="text item">水浸：-</div>
        </el-card>
      </div>

      <div class="header02">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>烟雾</span>
          </div>
          <div class="text item">
            <span class="door_text">高压室南烟雾：无烟</span
            ><span class="door_text">低压室南烟雾：无烟</span>
          </div>
          <div class="text item">
            <span class="door_text">高压室北烟雾：无烟</span
            ><span class="door_text">高压室北烟雾：无烟</span>
          </div>
        </el-card>
      </div>
      <div class="header03">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>门状态</span>
            <el-button style="float: right; padding: 3px 0" type="text"
              >更多</el-button
            >
          </div>
          <div class="text item">
            <span class="door_text">直流屏室南门 ： 关门</span
            ><span class="door_text">高压室东北门 ： 关门</span>
          </div>
          <div class="text item">
            <span class="door_text">高压室东南门 ： 关门</span
            ><span class="door_text">低压室西门 ： 关门</span>
          </div>
        </el-card>
      </div>
    </div>
    <div class="center_body1">
      <el-card class="box-card2">
        <div slot="header" class="clearfix">
          <span>温湿度</span>
          <el-button style="float: right; padding: 3px 0" type="text"
            >更多</el-button
          >
        </div>
        <div class="text item">
          <span>高压室南温湿度</span>
          <span style="float:right;margin-right:20px;color:red">当日实时数据</span>
          <div class="t">
            <chart-1 class="chart" /><chart-2 class="chart" /><chart-3 class="chart" />
          </div>
        </div>
      </el-card>
    </div>


  </div>
</template>
<script>
import chart1 from "./chart1.vue";
import chart2 from "./chart2.vue";
import chart3 from "./chart3.vue";
export default {
  components: { chart1, chart2,chart3 },
  name: "EM",
  data() {
    return {};
  },
};
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  content: "";
}
.door_text {
  margin: 15px;
}
.clearfix:after {
  clear: both;
}
.header0 {
  width: 180px;
  display: flex;
  margin-left: 5px;
}
.box-card {
  width: 400px;
  height: 160px;
  margin: 10px;
}
.box-card2 {
  height: 500px;
  width: 1250px;
  margin: 10px;
}
.t {
  display: flex;
}
</style>
