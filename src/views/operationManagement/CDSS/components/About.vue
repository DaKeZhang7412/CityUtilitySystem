<template>
  <div>
    <div class="box">
      <div class="voltage">
        <div class="icon1"><img src="../../../../../public/icon/仪表盘.png" alt=""></div>
        <div class="msg1">电压等级</div>
        <div class="test">10/0.4KW</div>
      </div>
    </div>
    <div class="box">
      <div class="transformer">
        <div class="icon2"><img src="../../../../../public/icon/变压器.png" alt=""></div>
        <div class="msg2">变压器台数</div>
        <div class="test">6台</div>
      </div>
    </div>
    <div class="box">
      <div class="load">
        <div class="icon3"><img src="../../../../../public/icon/实时负荷.png" alt=""></div>
        <div class="msg3">负荷率</div>
        <div class="test">10.13%</div>
      </div>
    </div>
    <div class="box">
      <div class="capacity">
        <div class="icon4"><img src="../../../../../public/icon/装机容量.png" alt=""></div>
        <div class="msg4">装机容量</div>
        <div class="test">8200KVA</div>
      </div>
    </div>
    <div class="box">
      <div class="demand">
        <div class="icon5"><img src="../../../../../public/icon/需量.png" alt=""></div>
        <div class="msg5">申报需量</div>
        <div class="test">8200kW</div>
      </div>
    </div>
    <div class="box">
      <div class="monitor">
        <div class="icon6"><img src="../../../../../public/icon/实时监控.png" alt=""></div>
        <div class="msg6">监控装置</div>
        <div class="test">350个</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'About'
  }

</script>

<style>
  .box {
    float: left;
    width: 140px;
    height: 120px;
    border: 2px aqua solid;
    border-radius: 10px;
    text-align: center;
    margin: 10px;
  }

  .vol {
    margin: 10px;
  }

  img {
    width: 60px;
    height: 60px;
  }

  .test {
    font-size: 20px;
    list-style: 25px;
  }

</style>
