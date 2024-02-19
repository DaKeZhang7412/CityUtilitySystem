<template>
  <div>
    <div class="chart1">
      <powerChart class="chart" />
      <tableBox />
    </div>
  </div>
</template>

<script>
  import powerChart from "./HM/components/powerChart.vue"
  import tableBox from './HM/components/tableBox.vue'
  export default {
    components: {
      powerChart,
      tableBox
    },
    name: 'PowerQuality',
  }

</script>

<style scoped>
  .chart1 {
    position: absolute;
  }

</style>
