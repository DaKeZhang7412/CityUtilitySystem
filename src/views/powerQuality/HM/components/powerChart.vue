<template>
  <div ref="myChart" id="myChart" style="width: 1500px; height: 500px;margin: 30px"></div>
</template>

<script>
  import * as echarts from "echarts";
  export default {
    mounted() {
      this.setChart();
    },
    methods: {
      setChart() {
        const myEcharts = echarts.init(this.$refs.myChart);
        // 指定图表的配置项和数据
        var option = {
          color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
          title: {
            text: 'Quality of electric energy'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          legend: {
            data: ['1#', '2#', '3#', '4#', '5#']
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['Nov', 'Dec', 'Oct', 'Jan', 'Feb', 'Mar', 'Apr']
          }],
          yAxis: [{
            type: 'value'
          }],
          series: [{
              name: '1#',
              type: 'line',
              stack: 'Total',
              smooth: true,
              lineStyle: {
                width: 0
              },
              showSymbol: false,
              areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(128, 255, 165)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(1, 191, 236)'
                  }
                ])
              },
              emphasis: {
                focus: 'series'
              },
              data: [140, 232, 101, 264, 90, 340, 250]
            },
            {
              name: '2#',
              type: 'line',
              stack: 'Total',
              smooth: true,
              lineStyle: {
                width: 0
              },
              showSymbol: false,
              areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(0, 221, 255)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(77, 119, 255)'
                  }
                ])
              },
              emphasis: {
                focus: 'series'
              },
              data: [120, 282, 111, 234, 220, 340, 310]
            },
            {
              name: '3#',
              type: 'line',
              stack: 'Total',
              smooth: true,
              lineStyle: {
                width: 0
              },
              showSymbol: false,
              areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(55, 162, 255)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(116, 21, 219)'
                  }
                ])
              },
              emphasis: {
                focus: 'series'
              },
              data: [320, 132, 201, 334, 190, 130, 220]
            },
            {
              name: '4#',
              type: 'line',
              stack: 'Total',
              smooth: true,
              lineStyle: {
                width: 0
              },
              showSymbol: false,
              areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(255, 0, 135)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(135, 0, 157)'
                  }
                ])
              },
              emphasis: {
                focus: 'series'
              },
              data: [220, 402, 231, 134, 190, 230, 120]
            },
            {
              name: '5#',
              type: 'line',
              stack: 'Total',
              smooth: true,
              lineStyle: {
                width: 0
              },
              showSymbol: false,
              label: {
                show: true,
                position: 'top'
              },
              areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(255, 191, 0)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(224, 62, 76)'
                  }
                ])
              },
              emphasis: {
                focus: 'series'
              },
              data: [220, 302, 181, 234, 210, 290, 150]
            }
          ]
        };
        setInterval(function () {
          const random = +(Math.random() * 60).toFixed(2);
          myEcharts.setOption({
            series: [{
                data: [{
                  value: random,
                }, ],
              },
              {
                data: [{
                  value: random,
                }, ],
              },
            ],
          });
        }, 2000);
        // 使用刚指定的配置项和数据显示图表。
        myEcharts.setOption(option);
      },
    },
  };

</script>

<style>
</style>
