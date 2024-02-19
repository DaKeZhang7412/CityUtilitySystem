<template>
  <div class="container">
    <div class="group">
      <div class="searchGroup">
        <el-label>变配电站名称:</el-label>
        <el-input v-model="input" placeholder="搜索全部" style="width:120px;padding:0 10px"></el-input>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </div>
      <div class="select">
        <el-select v-model="value" placeholder="全选" style="width:120px;padding:0 10px">
          <el-option v-for="item in states" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </div>
      <el-row class="btnGroup">
        <el-button type="info" icon="el-icon-plus" plain>全屏</el-button>
        <el-button type="info" icon="el-icon-zoom-in" plain>放大</el-button>
        <el-button type="info" icon="el-icon-zoom-out" plain>缩小</el-button>
      </el-row>
    </div>
    <div class="distributionChart">
      <img src="../../../assets/dc.jpg" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PDC',
    data() {
      return {
        states: [{
            value: '选项1',
            label: '变电所1'
          }, {
            value: '选项2',
            label: '变电所2'
          },
          {
            value: '选项3',
            label: '变电所3'
          },
        ]
      }
    },
  }

</script>

<style scoped>
  .group {
    position: absolute;
    top: 10px;
    width: 1440px;
    height: 80px;
    margin: 10px;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    border-radius: 10px;
  }

  .searchGroup {
    position: absolute;
    top: 20px;
    left: 20px;
  }

  .select {
    position: absolute;
    top: 20px;
    left: 340px;
  }

  .btnGroup {
    position: absolute;
    top: 20px;
    left: 480px;
  }

  .distributionChart {
    position: absolute;
    top: 120px;
    width: 1440px;
    height: 520px;
    margin: 10px;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    border-radius: 10px;
  }

  .distributionChart img {
    position: absolute;
    top: 10px;
    left: 20px;
    width: 1400px;
    height: 500px;
  }

</style>
