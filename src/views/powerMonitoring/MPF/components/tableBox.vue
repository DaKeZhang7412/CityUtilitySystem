<template>
  <div class="container">
    <el-table :data="tableData" style="width:100%;margin-top:10px" border>
      <el-table-column prop="loop" label="回路名称" width="width" align="center">
      </el-table-column>
      <el-table-column prop="date" label="日期" width="width" align="center">
      </el-table-column>
      <el-table-column prop="Positive" label="正向有功电度" width="width" align="center">
      </el-table-column>
      <el-table-column prop="Inverse" label="反向有功电度" width="width" align="center">
      </el-table-column>
      <el-table-column prop="Forward" label="正向无功电度" width="width" align="center">
      </el-table-column>
      <el-table-column prop="Reverse" label="反向无功电度" width="width" align="center">
      </el-table-column>
      <el-table-column prop="avg" label="平均功率因数" width="80px" align="center">
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
          date: '2022-04-01',
          Positive: '5640.5',
          Inverse: '0',
          Forward: '1200.26',
          Reverse: '0',
          avg: '0.97',
        }, {
          loop: '高压1#电源进线',
          date: '2022-04-02',
          Positive: '5880',
          Inverse: '0',
          Forward: '1320.02',
          Reverse: '0',
          avg: '0.97',
        }, {
          loop: '高压1#电源进线',
          date: '2022-04-03',
          Positive: '7199.5',
          Inverse: '0',
          Forward: '9119.84',
          Reverse: '0',
          avg: '0.61',
        }, {
          loop: '高压1#电源进线',
          date: '2022-04-04',
          Positive: '5999.5',
          Inverse: '0',
          Forward: '4560.3',
          Reverse: '0',
          avg: '0.79',
        }, {
          loop: '高压1#电源进线',
          date: '2022-04-05',
          Positive: '5760.5',
          Inverse: '0',
          Forward: '3599.93',
          Reverse: '0',
          avg: '0.84',
        }, {
          loop: '高压1#电源进线',
          date: '2022-04-06',
          Positive: '6720',
          Inverse: '0',
          Forward: '7080.22',
          Reverse: '0',
          avg: '0.68',
        }, {
          loop: '高压1#电源进线',
          date: '2022-04-07',
          Positive: '6000',
          Inverse: '0',
          Forward: '5040.07',
          Reverse: '0',
          avg: '0.67',
        }, {
          loop: '高压1#电源进线',
          date: '2022-04-08',
          Positive: '4760.5',
          Inverse: '0',
          Forward: '3456.26',
          Reverse: '0',
          avg: '0.81',
        }, ]
      }
    },
  }

</script>

<style scoped>

</style>
