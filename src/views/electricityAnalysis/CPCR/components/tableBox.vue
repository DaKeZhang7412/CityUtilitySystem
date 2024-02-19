<template>
  <div class="container">
    <el-table :data="tableData" style="width:100%;margin-top:10px" border>
      <el-table-column prop="hz" label="汇总项" width="width" align="center">
      </el-table-column>
      <el-table-column prop="zero" label="00时" width="width" align="center">
      </el-table-column>
      <el-table-column prop="one" label="01时" width="width" align="center">
      </el-table-column>
      <el-table-column prop="two" label="02时" width="width" align="center">
      </el-table-column>
      <el-table-column prop="three" label="03时" width="width" align="center">
      </el-table-column>
      <el-table-column prop="total" label="合计" width="width" align="center">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          hz: '西区总用电',
          zero: '40.15',
          one: '35.93',
          two: '33.94',
          three: '33.94',
          total:'164.31'
        }, {
          hz: '空调用电',
          zero: '2.15',
          one: '2.93',
          two: '2.94',
          three: '2.94',
          total:'9.31'
        },{
          hz: '照明插座用电',
          zero: '30.15',
          one: '25.93',
          two: '23.94',
          three: '23.94',
          total:'124.31'
        }, {
          hz: '动力用电',
          zero: '20.15',
          one: '15.93',
          two: '13.94',
          three: '13.94',
          total:'84.31'
        },{
          hz: '变压器用电',
          zero: '120.15',
          one: '135.93',
          two: '133.94',
          three: '133.94',
          total:'564.31'
        },{
          hz: '仪表用电',
          zero: '80.15',
          one: '75.93',
          two: '73.94',
          three: '73.94',
          total:'244.31'
        } ]
      }
    },
  }

</script>

<style scoped>

</style>
