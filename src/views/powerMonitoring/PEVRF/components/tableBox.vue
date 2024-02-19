<template>
  <div class="container">
    <el-table :data="tableData" style="width:100%;margin-top:10px" border>
      <el-table-column prop="loop" label="回路名称" width="width" align="center">
      </el-table-column>
      <el-table-column prop="date" label="日期" width="width" align="center">
      </el-table-column>
      <el-table-column prop="maxNum" label="最大值数值" width="width" align="center">
      </el-table-column>
      <el-table-column prop="maxTime" label="最大值发生时间" width="width" align="center">
      </el-table-column>
      <el-table-column prop="minNum" label="最小值数值" width="width" align="center">
      </el-table-column>
      <el-table-column prop="minTime" label="最小值发生时间" width="width" align="center">
      </el-table-column>
      <el-table-column prop="avg" label="平均值" width="80px" align="center">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          loop: '高压1#电源进线',
          date: '2022-04-08',
          maxNum: '492',
          maxTime: '07:28',
          minNum: '168',
          minTime: '13:41',
          avg: '275.2',
        }, {
          loop: '高压1#电源进线',
          date: '2022-04-08',
          maxNum: '492',
          maxTime: '07:28',
          minNum: '168',
          minTime: '13:41',
          avg: '275.2',
        }, {
          loop: '高压1#电源进线',
          date: '2022-04-08',
          maxNum: '492',
          maxTime: '07:28',
          minNum: '168',
          minTime: '13:41',
          avg: '275.2',
        }, {
          loop: '高压1#电源进线',
          date: '2022-04-08',
          maxNum: '492',
          maxTime: '07:28',
          minNum: '168',
          minTime: '13:41',
          avg: '275.2',
        }, {
          loop: '高压1#电源进线',
          date: '2022-04-08',
          maxNum: '492',
          maxTime: '07:28',
          minNum: '168',
          minTime: '13:41',
          avg: '275.2',
        }, {
          loop: '高压1#电源进线',
          date: '2022-04-08',
          maxNum: '492',
          maxTime: '07:28',
          minNum: '168',
          minTime: '13:41',
          avg: '275.2',
        }, {
          loop: '高压1#电源进线',
          date: '2022-04-08',
          maxNum: '492',
          maxTime: '07:28',
          minNum: '168',
          minTime: '13:41',
          avg: '275.2',
        }, ]
      }
    },
  }

</script>

<style scoped>

</style>
