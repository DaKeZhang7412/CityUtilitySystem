<template>
  <div class="container">
    <div class="nav">
      <navCom />
    </div>
    <div class="content">
      <btnGroup />
      <chart class="chart" />
    </div>
  </div>
</template>

<script>
  import btnGroup from './components/btnGroup.vue'
  import chart from './components/chart.vue'
  import navCom from './components/navCom.vue'
  export default {
    name: 'ED',
    components: {
      navCom,
      btnGroup,
      chart,
    },
    data() {
      return {

      }
    },
    mounted() {

    },
  }

</script>

<style scoped>
  .nav {
    position: absolute;
    top: 10px;
    left: 20px;
    width: 300px;
    height: 640px;
    margin: 10px;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    border-radius: 10px;
  }

  .content {
    position: absolute;
    top: 10px;
    left: 360px;
    width: 1100px;
    height: 640px;
    margin: 10px;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    border-radius: 10px;
  }

  .chart {
    position: absolute;
    top: 50px;
  }

</style>
