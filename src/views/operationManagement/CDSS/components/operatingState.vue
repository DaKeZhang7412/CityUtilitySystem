<template>
  <div class="operate">
    <div class="runtime">
      <div class="run"><i class="el-icon-data-line"></i>运行状态</div>
      <div class="time">更新时间：{{now}}</div>
    </div>
    <div class="up">
      <div class="upbox"><img src="../../../../../public/icon/功率白.png"><br>
        <span class="msg">有功功率</span><span>811.6kw</span>
      </div>
      <div class="upbox"><img src="../../../../../public/icon/功率@2x.png"><br>
        <span class="msg">无功功率</span><span>151.8kw</span>
      </div>
      <div class="upbox"><img src="../../../../../public/icon/温度白.png"><br>
        <span class="msg">环境温度</span><span>35.1℃</span>
      </div>
      <div class="upbox"><img src="../../../../../public/icon/温湿度传感器.png"><br>
        <span class="msg">环境湿度</span><span>67.5%</span>
      </div>
    </div>
    <div class="down">
      <div class="downbox">
        <div class="icon"><img src="../../../../../public/icon/配电图.png" alt=""></div>
        <div class="msg">配电图</div>
      </div>
      <div class="downbox">
        <div class="icon"><img src="../../../../../public/icon//监控.png" alt=""></div>
        <div class="msg">监控</div>
      </div>
      <div class="downbox">
        <div class="icon"><img src="../../../../../public/icon/变压器单.png" alt=""></div>
        <div class="msg">变压器</div>
      </div>
      <div class="downbox">
        <div class="icon"><img src="../../../../../public/icon/分支.png" alt=""></div>
        <div class="msg">通讯</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'operatingState',
    data() {
      return {
        now: new Date()
      }
    },
  }

</script>

<style>
  .operate,
  .up,
  .down {
    text-align: center;
  }

  .upbox {
    float: left;
    width: 100px;
    height: 110px;
    border: 2px aqua solid;
    border-radius: 10px;
    margin: 10px 7px 0px 9px;
  }

  .downbox {
    float: left;
    width: 100px;
    height: 100px;
    border: 2px aqua solid;
    border-radius: 10px;
    margin: 5px;
    margin-top: 10px;
    margin-left: 10px;
  }

  img {
    height: 64px;
    width: 64px;
  }

  .msg {
    font-size: 20px;
  }

</style>
