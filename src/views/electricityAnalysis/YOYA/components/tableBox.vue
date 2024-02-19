<template>
  <div class="container">
    <el-table :data="tableData" style="width:100%;margin-top:10px" border>
      <el-table-column prop="month" label="月份" width="width" align="center">
      </el-table-column>
      <el-table-column prop="currentPer" label="本期" width="width" align="center">
      </el-table-column>
      <el-table-column prop="correspondPer" label="同期" width="width" align="center">
      </el-table-column>
      <el-table-column prop="ratio" label="同比(%)" width="width" align="center">
      </el-table-column>
      <el-table-column prop="accRatio" label="累积同比(%)" width="width" align="center">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          month: '11月',
          currentPer: '75712.00',
          correspondPer: '121758.00',
          ratio: '-37.82%',
          accRatio: '-37.82%',
        }, {
          month: '12月',
          currentPer: '33196.00',
          correspondPer: '88276.00',
          ratio: '-62.40%',
          accRatio: '-62.40%',
        }, {
          month: '1月',
          currentPer: '44848.00',
          correspondPer: '91608.00',
          ratio: '-51.01%',
          accRatio: '-49.02%',
        }, {
          month: '2月',
          currentPer: '25618.00',
          correspondPer: '28276.00',
          ratio: '-9.40%',
          accRatio: '-45.62%',
        }, {
          month: '3月',
          currentPer: '31204.00',
          correspondPer: '33250.00',
          ratio: '-6.15%',
          accRatio: '-42.01%',
        }, {
          month: '4月',
          currentPer: '69904.00',
          correspondPer: '58220.00',
          ratio: '20.07%',
          accRatio: '-33.43%',
        }, ]
      }
    },
  }

</script>

<style scoped>

</style>
