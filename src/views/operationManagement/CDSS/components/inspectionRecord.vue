<template>
  <div class="inspection">
    <div class="ititle">
      <i class="el-icon-edit"></i>
      近期巡检记录
    </div>
    <div class="info">
      <div class="time">巡检时间： --</div>
      <div class="ied">巡 检 项: --项 </div>
      <div class="ned">缺 检 项： --项 </div>
      <div class="staff">巡检人员： ---</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'inspectionRecord'
  }

</script>

<style>
  .ititle {
    position: absolute;
    left: 10px;
    top: 150px;
  }

  .info {
    position: absolute;
    left: 10px;
    top: 180px;
  }

</style>
