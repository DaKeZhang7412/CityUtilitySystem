<template>
  <div class="panelBar">
    <h2><i class="el-icon-finished"></i>用电曲线</h2>
    <div id="myEcharts" style="width: 1000px; height: 600px">
    </div>
  </div>
</template>

<script>
  import * as echarts from 'echarts';

  export default {
    name: 'lineChart',
    data() {
      return {}
    },
    mounted() {
      let data = [];
      let now = new Date(2001, 1, 1);
      let oneDay = 24 * 3600 * 1000;
      let value = Math.random() * 1000;
      for (var i = 0; i < 1000; i++) {
        data.push(randomData());
      }

      function randomData() {
        now = new Date(+now + oneDay);
        value = value + Math.random() * 21 - 10;
        return {
          name: now.toString(),
          value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
            Math.round(value)
          ]
        };
      }
      let myChart = echarts.init(document.getElementById('myEcharts'));
      let option = {
        title: {
          text: '用电曲线'
        },
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return (
              date.getDate() +
              '/' +
              (date.getMonth() + 1) +
              '/' +
              date.getFullYear() +
              ' : ' +
              params.value[1]
            );
          },
          axisPointer: {
            animation: false
          }
        },
        xAxis: {
          type: 'time',
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%'],
          splitLine: {
            show: false
          }
        },
        series: [{
          name: 'Fake Data',
          type: 'line',
          showSymbol: false,
          data: data
        }]
      };


      setInterval(function () {
        for (var i = 0; i < 5; i++) {
          data.shift();
          data.push(randomData());
        }
        myChart.setOption({
          series: [{
            data: data
          }]
        });
      }, 1000);
      myChart.setOption(option);

      //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
      window.addEventListener('resize', function () {
        myChart.resize()
      });
    },
    methods: {},
    watch: {},
    created() {

    }
  }

</script>

<style>
  .panelBar {
    text-align: center;
  }

</style>
