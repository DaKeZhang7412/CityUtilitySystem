<template>
  <div class="record">
    <div class="etitle">
      <i class="el-icon-files"></i>
      当日时间记录
    </div>
    <div class="msg">
      <div class="requests">
        请求次数
        <div class="rNum">0次</div>
      </div>
      <div class="communications">
        通信次数
        <div class="cNum">0次</div>
      </div>
      <div class="operations">
        操作次数
        <div class="oNum">0次</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "eventRecord"
  }

</script>

<style>
  .etitle {
    position: absolute;
  }

  .record {
    text-align: center;
    left: 10px;
    top: 100px;
  }

  .requests,
  .communications,
  .operations {
    position: absolute;
    margin: 10px;
    width: 110px;
    height: 80px;
    top: 40px;
    border: 2px aqua solid;
    border-radius: 10px;
  }

  .requests {
    left: 30px;
  }

  .communications {

    left: 140px;
  }

  .operations {
    left: 250px;
  }

</style>
