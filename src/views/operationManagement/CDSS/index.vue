<template>
  <div>
    <div class="about">
      <about />
    </div>
    <div class="state">
      <operatingState />
    </div>
    <div class="curve">
      <lineChart />
    </div>
    <div class="event">
      <eventRecord />
      <inspectionRecord />
    </div>
    <div class="electricity">
      <electricity />
    </div>
  </div>
</template>

<script scoped>
  import lineChart from "./components/lineChart.vue"
  import operatingState from "./components/operatingState.vue"
  import eventRecord from "./components/eventRecord.vue"
  import About from "./components/About.vue"
  import inspectionRecord from './components/inspectionRecord.vue'
  import Electricity from './components/electricity.vue'

  export default {
    name: 'CDSS',
    components: {
      lineChart,
      operatingState,
      eventRecord,
      About,
      Electricity,
      inspectionRecord
    }
  }

</script>

<style>
  .about {
    float: left;
    width: 485px;
    height: 290px;
    margin: 10px;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    border-radius: 10px;
  }

  .state {
    float: left;
    width: 470px;
    height: 290px;
    margin: 10px;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    border-radius: 10px;
  }

  .curve {
    float: left;
    width: 980px;
    height: 640px;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    border-radius: 10px;
    margin: 10px;
  }

  .event {
    position: absolute;
    left: 1020px;
    top: 30px;
    width: 400px;
    height: 290px;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    border-radius: 10px;
  }

  .electricity {
    position: absolute;
    left: 1020px;
    top: 340px;
    width: 400px;
    height: 640px;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    border-radius: 10px;
  }

  .app-main {
    width: 1000px;
  }

</style>
