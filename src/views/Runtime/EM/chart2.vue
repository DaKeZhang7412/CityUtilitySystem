<template>
  <div ref="myChart" id="myChart" style="width: 300px; height: 300px"></div>
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
        series: [
          {
            type: "gauge",
            center: ["50%", "60%"],
            startAngle: 200,
            endAngle: -20,
            min: 0,
            max: 60,
            splitNumber: 12,
            itemStyle: {
              color: "#FFAB91",
            },
            progress: {
              show: true,
              width: 10,
            },
            pointer: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                width: 20,
              },
            },
            axisTick: {
              distance: 50,
              splitNumber: 5,
              lineStyle: {
                width: 1,
                color: "#999",
              },
            },
            splitLine: {
              distance: 20,
              length: 5,
              lineStyle: {
                width: 6,
                color: "#999",
              },
            },
            axisLabel: {
              distance: -20,
              color: "black",
              fontSize: 10,
            },
            anchor: {
              show: false,
            },
            title: {
              show: false,
            },
            detail: {
              valueAnimation: true,
              width: "60%",
              lineHeight: 40,
              borderRadius: 8,
              offsetCenter: [0, "-15%"],
              fontSize: 30,
              fontWeight: "bolder",
              formatter: "{value}%",
              color: "auto",
            },
            data: [
              {
                value: 20,
                danwei1: "°C",
                danwei2: "%",
              },
            ],
          },
          {
            type: "gauge",
            center: ["50%", "60%"],
            startAngle: 100,
            endAngle: -20,
            min: 0,
            max: 60,
            itemStyle: {
              color: "#FD7347",
            },
            progress: {
              show: true,
              width: 8,
            },
            pointer: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            detail: {
              show: false,
            },
            data: [
              {
                value: 20,
              },
            ],
          },
        ],
      };
      setInterval(function () {
        const random = +(Math.random() * 60).toFixed(2);
        myEcharts.setOption({
          series: [
            {
              data: [
                {
                  value: random,
                },
              ],
            },
            {
              data: [
                {
                  value: random,
                },
              ],
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