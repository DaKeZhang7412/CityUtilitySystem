<template>
  <div id="main" style="width: 1120px; height: 400px"></div>
</template>

<script>
  import * as echarts from 'echarts';
  export default {
    name: 'barChart',
    mounted() {
      var chartDom = document.getElementById('main');
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          left: 'center',
          text: '同比分析'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: {
          feature: {
            dataView: {
              show: true,
              readOnly: false
            },
            magicType: {
              show: true,
              type: ['line', 'bar']
            },
            restore: {
              show: true
            },
            saveAsImage: {
              show: true
            }
          }
        },
        legend: {
          data: ['Evaporation', 'Precipitation', 'Temperature']
        },
        xAxis: [{
          type: 'category',
          data: ['11月', '12月', '1月', '2月', '3月', '4月',
            '2022-04-07'
          ],
          axisPointer: {
            type: 'shadow'
          }
        }],
        yAxis: [{
            type: 'value',
            name: '本期/同期',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: '{value} kW·h'
            }
          },
          {
            type: 'value',
            name: '同比',
            min: 0,
            max: 1,
            interval: 5,
            axisLabel: {
              formatter: '{value} %'
            }
          }
        ],
        series: [{
            name: '本期',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kW·h';
              }
            },
            data: [
              20, 49, 70, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
            ]
          },
          {
            name: '同期',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kW·h';
              }
            },
            data: [
              26, 59, 90, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
            ]
          },
          {
            name: '同比',
            type: 'line',
            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value) {
                return value + ' %';
              }
            },
            data: [0.2, 0.49, 0.7, 0.23, 0.25, 0.7, 0.13, 0.16, 0.32, 0.2, 0.64, 0.33]
          }
        ]
      };

      option && myChart.setOption(option);

    },
  }

</script>

<style>

</style>
