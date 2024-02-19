<template>
  <div class="dashboard-container">
    <div class="dashboard-text"> {{ msg }}</div>
    <br />
    <div class="dashboard-text2">{{title}}</div>
    <div class="chart-container">
      <div id="myChart" :style="{width: '1400px', height: '300px' , align:'center'}"></div>
    </div>
  </div>
</template>
<script>
  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图组件
  require('echarts/lib/chart/bar')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  import {
    mapGetters
  } from 'vuex'
  export default {
    name: 'Dashboard',
    computed: {
      ...mapGetters([
        'name'
      ])
    },
    data() {
      return {
        msg: '欢迎使用电力运维云平台!',
        title: '有实力的企业都在用的云平台'
      }
    },
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          tooltip: {},
          xAxis: {
            data: ["xx厂", "xx厂", "xx厂", "xx厂", "xx厂", "xx厂"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        });
      }
    }
  }

</script>

<style scoped>
  .dashboard-text {
    text-align: center;
    margin-top: 200px;
    font-size: 65px;
  }

  .chart-container {
    display: flex;
  }

  .dashboard-text2 {
    text-align: center;
    font-size: 30px;
  }

</style>
