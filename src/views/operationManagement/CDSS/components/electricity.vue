<template>
  <div class="survey">
    <div class="stitle">
      <i class="el-icon-position"></i>
      用电概况
    </div>
    <div class="date">
      年|月|日
    </div>
    <div class="t">
      <div class="left tod">
        当日用电
      </div>
      <div class="tdele">
        12056.45kW·h
      </div>
    </div>
    <div class="y">
      <div class="left yed">
        昨日同期
      </div>
      <div class="ydele">
        11357.99kW·h
      </div>
    </div>
    <div class="r">
      <div class="left rat">
        环比
      </div>
      <div class="ratio">
        6.15%
      </div>
    </div>
    <smallChart class="sCh" />

    <div class="maxTime">
      <div class="num">
        {{time}}
      </div>
      <div class="msg">
        最大用电时间
      </div>
    </div>

    <div class="avgele">
      <div class="num">
        1048.84kW
      </div>
      <div class="msg">
        平均功率
      </div>

    </div>
  </div>
</template>

<script>
  import smallChart from './sChart.vue'
  export default {
    name: 'Electricity',
    data() {
      return {
        time: '12:45-13:00'
      }
    },
    components: {
      smallChart
    }
  }

</script>

<style>
  .stitle {
    float: left;
  }

  .date {
    float: right;
  }

  .left {
    position: absolute;
    left: 30px;
    width: 100px;
    height: 40px;
    border: 2px aqua solid;
    border-radius: 10px;
    font-size: 18px;
    text-align: center;
    line-height: 40px;
  }

  .tdele,
  .ydele,
  .ratio {
    position: absolute;
    left: 180px;
    width: 150px;
    height: 40px;
    border: 2px rgb(32, 126, 126) solid;
    border-radius: 10px;
    font-size: 18px;
    text-align: center;
    line-height: 40px;
  }

  .tod,
  .tdele {
    top: 50px;
  }

  .yed,
  .ydele {
    top: 110px;
  }

  .rat,
  .ratio {
    top: 170px;
  }

  .sCh {
    position: absolute;
    left: 30px;
    top: 240px;
  }

  .maxTime,
  .avgele {
    position: absolute;
    left: 30px;
    top: 520px;
    width: 150px;
    height: 80px;
    border: 2px rgb(32, 126, 126) solid;
    text-align: center;
    line-height: 40px;
    font-size: 18px;
  }

  .avgele {
    left: 180px;
  }

</style>
