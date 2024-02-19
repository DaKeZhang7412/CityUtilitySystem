<template>
  <div id="chart" style="width:1000px;height:580px"></div>
</template>

<script>
  import * as echarts from 'echarts';
  export default {
    name: 'chart',
    data() {
      return {

      }
    },
    computed: {

    },
    mounted() {
      var EChartsOption = echarts.EChartsOption;

      var chartDom = document.getElementById('chart');
      var myChart = echarts.init(chartDom);
      var option = EChartsOption;

      let base = +new Date(2000, 9, 3);
      let oneDay = 24 * 3600 * 1000;

      // define the chart width.
      let data = [
        [base, Math.random() * 300]
      ];

      //Fetching Data from source 这里插入数据
      // for (let i = 1; i < 20000; i++) {
      //   let now = new Date((base += oneDay));
      //   data.push([+now, Math.round((Math.random() - 0.5) * 20 + data[i - 1][1])]);
      // }

      option = {
        tooltip: {
          trigger: 'axis',
          position: function (pt) {
            return [pt[0], '10%'];
          }
        },
        title: {
          left: 'center',
          text: '有功功率'
        },
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'time',
          boundaryGap: false
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%']
        },
        dataZoom: [{
            type: 'inside',
            start: 0,
            end: 20
          },
          {
            start: 0,
            end: 20
          }
        ],
        series: [{
          name: 'Fake Data',
          type: 'line',
          smooth: true,
          symbol: 'none',
          areaStyle: {},
          data: data
        }]
      };

      option && myChart.setOption(option);

    },
  }

</script>

<style scoped>
  .chart {
    position: absolute;
    top: 50px;
  }

</style>
