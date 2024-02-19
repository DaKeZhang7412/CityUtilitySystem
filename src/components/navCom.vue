<template>
  <div class="con">
    <el-label style="margin-left:10px">变配电站名称:</el-label>
    <br>
    <el-input v-model="input" placeholder="请输入变配电站名称" style="width:60%; padding:5px"></el-input>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
    <br>
    <el-input v-model="input" placeholder="请输入检索内容" style="width:90%;margin:5px" suffix-icon="el-icon-search">
    </el-input>
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="主进线柜" name="1">
        <div>电容柜</div>
        <div>地源热泵空调总表</div>
        <div>ADW测试</div>
        <div>ARCM无线表测试</div>
        <div>温湿度回路</div>
      </el-collapse-item>
      <el-collapse-item title="高压1#电源进线" name="2">
        <div>C8MVP102柜_备用</div>
        <div>电磁搅拌变压器1+C8TR005</div>
        <div>检修照明变压器1+C8TR003</div>
        <div>8号连铸机本体变压器1+C8TR001</div>
      </el-collapse-item>
      <el-collapse-item title="高压2#电源进线" name="3">
        <div>C8MVP202柜_备用</div>
        <div>电磁搅拌变压器2+C8TR005</div>
        <div>检修照明变压器2+C8TR003</div>
        <div>8号连铸机本体变压器2+C8TR001</div>
      </el-collapse-item>
      <el-collapse-item title="母线联络" name="4">
        <div>C8MVP102柜_备用</div>
        <div>电磁搅拌变压器1+C8TR005</div>
        <div>检修照明变压器1+C8TR003</div>
        <div>8号连铸机本体变压器1+C8TR001</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
  export default {
    name: 'navCom',
    data() {
      return {
        input: '',
        activeName: '1'
      }
    },
  }

</script>

<style scoped>
  .con {
    position: absolute;
    left: 20px;
    top: 20px;
  }

</style>
