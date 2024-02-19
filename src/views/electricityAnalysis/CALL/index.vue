<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="变压器名">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="线路ID">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="进线事件">
            <span>{{ props.row.onLine }}</span>
          </el-form-item>
          <el-form-item label="出线事件">
            <span>{{ props.row.outLine }}</span>
          </el-form-item>
          <el-form-item label="损耗耗值">
            <span>{{ props.row.num }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column label="变压器分类" prop="cla">
    </el-table-column>
    <el-table-column label="线程" prop="thr">
    </el-table-column>
    <el-table-column label="描述" prop="desc">
    </el-table-column>
    <el-table-column label="数值" prop="rat">
    </el-table-column>
  </el-table>
</template>

<style>
  .demo-table-expand {
    font-size: 0;
  }

  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }

  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }

</style>

<script>
  export default {
    data() {
      return {
        tableData: [{
          cla: '10KV变压器',
          thr: '进线/出线',
          desc: '10KV变压器线路消耗事件',
          rat: '-1.09%',
          id: '12987120',
          name: '10KV变压器',
          onLine: '主进线柜',
          outLine: '地源热泵空调总表、电容柜、ADW测试',
          num: '-175.51',
        }, {
          cla: '浸润式变压器',
          thr: '进线/出线',
          desc: '浸润式变压器线路消耗事件',
          rat: '-1.81%',
          id: '12987121',
          name: '浸润式变压器',
          onLine: '主进线柜',
          outLine: '地源热泵空调总表、电容柜、ADW测试',
          num: '-156.51',
        }, {
          cla: '12KV变压器',
          thr: '进线/出线',
          desc: '12KV变压器线路消耗事件',
          rat: '-2.18%',
          id: '12987122',
          name: '12KV变压器',
          onLine: '主进线柜',
          outLine: '地源热泵空调总表、',
          num: '-225.31',
        }, {
          cla: '15KV变压器',
          thr: '进线/出线',
          desc: '15KV变压器线路消耗事件',
          rat: '-3.01%',
          id: '12987122',
          name: '15KV变压器',
          onLine: '主进线柜',
          outLine: '地源热泵空调总表',
          num: '-115.51',
        }, ]
      }
    }
  }

</script>
