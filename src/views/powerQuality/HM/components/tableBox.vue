<template>
  <div class="container">
    <el-table :data="tableData" style="width:100%;margin-top:10px" border>
      <el-table-column prop="loop" label="回路名称" width="width" align="center">
      </el-table-column>
      <el-table-column prop="JanuaryNum" label="01月数值" width="width" align="center">
      </el-table-column>
      <el-table-column prop="JanuaryTime" label="01月时间" width="width" align="center">
      </el-table-column>
      <el-table-column prop="FebruaryNum" label="02月数值" width="width" align="center">
      </el-table-column>
      <el-table-column prop="FebruaryTime" label="02月时间" width="width" align="center">
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
          JanuaryNum: '1056.00',
          JanuaryTime: '01日23:59',
          FebruaryNum: '1056.00',
          FebruaryTime: '01日23:59',
        }, {
          loop: 'C8MVP102柜_备用',
          JanuaryNum: '0.00',
          JanuaryTime: '01日23:59',
          FebruaryNum: '0.00',
          FebruaryTime: '01日23:59',
        }, {
          loop: '电磁视拌变压器1+C8TR005',
          JanuaryNum: '1056.00',
          JanuaryTime: '01日23:59',
          FebruaryNum: '1056.00',
          FebruaryTime: '01日23:59',
        }, {
          loop: '301柜_电磁搅拌电源进线',
          JanuaryNum: '0.00',
          JanuaryTime: '01日23:59',
          FebruaryNum: '0.00',
          FebruaryTime: '01日23:59',
        }, {
          loop: '302柜_电磁搅拌成套柜',
          JanuaryNum: '106.50',
          JanuaryTime: '01日23:59',
          FebruaryNum: '106.50',
          FebruaryTime: '01日23:59',
        }, {
          loop: '检修照明变压器1+C8TR003',
          JanuaryNum: '226.00',
          JanuaryTime: '01日23:59',
          FebruaryNum: '226.00',
          FebruaryTime: '01日23:59',
        }, {
          loop: '206_1号电源进线(检修照明)(2500)',
          JanuaryNum: '450.00',
          JanuaryTime: '01日23:59',
          FebruaryNum: '450.00',
          FebruaryTime: '01日23:59',
        }, {
          loop: '205-A_C8LP8301管廊照明配电箱(63)',
          JanuaryNum: '0.00',
          JanuaryTime: '01日23:59',
          FebruaryNum: '0.00',
          FebruaryTime: '01日23:59',
        }, {
          loop: '205-B_备用(100)',
          JanuaryNum: '0.00',
          JanuaryTime: '01日23:59',
          FebruaryNum: '0.00',
          FebruaryTime: '01日23:59',
        }, {
          loop: '205-C_备用(160)',
          JanuaryNum: '0.00',
          JanuaryTime: '01日23:59',
          FebruaryNum: '0.00',
          FebruaryTime: '01日23:59',
        }, {
          loop: '205-D_备用(250)',
          JanuaryNum: '21.20',
          JanuaryTime: '01日23:59',
          FebruaryNum: '21.20',
          FebruaryTime: '01日23:59',
        }, {
          loop: '206-E_切割跨吊车电源1(南侧)(800)',
          JanuaryNum: '0.00',
          JanuaryTime: '01日23:59',
          FebruaryNum: '0.00',
          FebruaryTime: '01日23:59',
        }, {
          loop: '207_母联(1600)',
          JanuaryNum: '247.20',
          JanuaryTime: '01日23:59',
          FebruaryNum: '247.20',
          FebruaryTime: '01日23:59',
        }, {
          loop: '8号连铸机本体变压器1+C8TR001',
          JanuaryNum: '484.00',
          JanuaryTime: '01日23:59',
          FebruaryNum: '484.00',
          FebruaryTime: '01日23:59',
        }, {
          loop: '105_1号电源进线(铸机本机1)(3200)',
          JanuaryNum: '481.00',
          JanuaryTime: '01日23:59',
          FebruaryNum: '481.00',
          FebruaryTime: '01日23:59',
        }, {
          loop: 'C8DR101电容柜',
          JanuaryNum: '3332.80',
          JanuaryTime: '01日23:59',
          FebruaryNum: '3332.80',
          FebruaryTime: '01日23:59',
        }, {
          loop: '101-A_WvF4电源(630)',
          JanuaryNum: '0.00',
          JanuaryTime: '01日23:59',
          FebruaryNum: '0.00',
          FebruaryTime: '01日23:59',
        }, {
          loop: '101-B_+C8MCC电源(630)',
          JanuaryNum: '0.00',
          JanuaryTime: '01日23:59',
          FebruaryNum: '0.00',
          FebruaryTime: '01日23:59',
        }, {
          loop: '101-C_横移跨吊车电源1(北)(630)',
          JanuaryNum: '0.32',
          JanuaryTime: '01日23:59',
          FebruaryNum: '0.32',
          FebruaryTime: '01日23:59',
        }, {
          loop: '102A_备用',
          JanuaryNum: '0.00',
          JanuaryTime: '01日23:59',
          FebruaryNum: '0.00',
          FebruaryTime: '01日23:59',
        }, {
          loop: '102-B 直流屏1(100)',
          JanuaryNum: '0.72',
          JanuaryTime: '01日23:59',
          FebruaryNum: '0.72',
          FebruaryTime: '01日23:59',
        }]
      }
    },
  }

</script>

<style scoped>

</style>
