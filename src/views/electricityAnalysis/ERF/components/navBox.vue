<template>
  <div class="btn">
    <el-label style="margin-top:20px">变配电站名称:</el-label>
    <br>
    <el-input v-model="input" placeholder="请输入变配电站名称" style="width:50%; padding:10px"></el-input>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
    <br>
    <el-input v-model="input" placeholder="请输入检索内容" style="width:50%;margin:10px" suffix-icon="el-icon-search">
    </el-input>
    <el-checkbox v-model="checked1" label="级联选择" border></el-checkbox>
  </div>
</template>

<script>
  export default {
    name: 'navBox',
    data() {
      return {
        checked: true
      }
    },
  }

</script>

<style scoped>
  .btn {
    position: absolute;
    left: 10px;
    top: 20px;
  }

</style>
