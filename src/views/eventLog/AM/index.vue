<template>
  <div>
    <el-label>变配电站名称:</el-label>
    <el-input v-model="input" placeholder="搜索全部" style="width:8%;padding:0 10px"></el-input>
    <el-label>确认状态:</el-label>
    <el-select v-model="value" placeholder="未确定" style="width:8%;padding:0 10px">
      <el-option v-for="item in states" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
    <el-label>报警类型分类:</el-label>
    <el-select v-model="value" placeholder="全部" style="width:8%;padding:0 10px">
      <el-option v-for="item in kinds" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
    <el-label>事件类型:</el-label>
    <el-select v-model="value" placeholder="全部" style="width:8%;padding:0 10px">
      <el-option v-for="item in types" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
    <el-label>时间选择:</el-label>
    <el-select v-model="value" placeholder="全部" style="width:15%;padding:0 10px">
      <el-option v-for="item in times" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
    <el-table :data="tableData" style="width:100%;margin-top:10px" border>
      <el-table-column prop="substation" label="变配电站名称" width="width" align="center">
      </el-table-column>
      <el-table-column prop="equipment" label="设备名称" width="width" align="center">
      </el-table-column>
      <el-table-column prop="classify" label="报警类型分类" width="width" align="center">
      </el-table-column>
      <el-table-column prop="type" label="事件类型" width="width" align="center">
      </el-table-column>
      <el-table-column prop="time" label="发生时间" width="width" align="center">
      </el-table-column>
      <el-table-column prop="description" label="报警描述" width="width" align="center">
      </el-table-column>
      <el-table-column prop="state" label="确认状态" width="80px" align="center">
      </el-table-column>
      <el-table-column prop="operation" label="操作" width="width" align="center">
      </el-table-column>
      <el-table-column prop="detail" label="详情" width="80px" align="center">
      </el-table-column>
    </el-table>
    <el-pagination style="margin-top:20px;textAlign:right" :current-page="1" :total="99" :page-size="10"
      :page-sizes="[10,20,50]" :pager-count="0" @size-change="handleSizeChange" @current-change="handleCurrentChange"
      layout="total,sizes,prev,pager,next,jumper">

    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: 'AM',
    data() {
      return {
        states: [{
          value: '选项1',
          label: '未确认'
        }, {
          value: '选项2',
          label: '已确认'
        }, ],
        kinds: [{
            value: '选项1',
            label: '全部'
          }, {
            value: '选项2',
            label: '通讯状态'
          },
          {
            value: '选项3',
            label: '现场报警'
          },
        ],
        types: [{
            value: '选项1',
            label: '选项1'
          }, {
            value: '选项2',
            label: '选项2'
          },
          {
            value: '选项3',
            label: '选项3'
          },
        ],
        times: [{
          value: '选项1',
          label: '时间1'
        }],
        tableData: [{
            substation: '8号连铸机',
            equipment: 'C8PCC211-F',
            classify: '通讯状态',
            type: '仪表离线',
            time: '2022-03-02 08:05:55',
            description: '仪表[T103116]离线',
            state: '未确定',
            operation: '增删改查',
            detail: '详情'
          },
          {
            substation: '8号连铸机',
            equipment: 'C8PCC111-8',
            classify: '通讯状态',
            type: '仪表离线',
            time: '2022-03-02 08:05:55',
            description: '仪表[T103116]离线',
            state: '未确定',
            operation: '增删改查',
            detail: '详情'
          }, {
            substation: '8号连铸机',
            equipment: 'C8PCC111-8',
            classify: '通讯状态',
            type: '仪表离线',
            time: '2022-03-02 08:05:55',
            description: '仪表[T103116]离线',
            state: '未确定',
            operation: '增删改查',
            detail: '详情'
          }, {
            substation: '8号连铸机',
            equipment: 'C8PCC111-8',
            classify: '通讯状态',
            type: '仪表离线',
            time: '2022-03-02 08:05:55',
            description: '仪表[T103116]离线',
            state: '未确定',
            operation: '增删改查',
            detail: '详情'
          }, {
            substation: '8号连铸机',
            equipment: 'C8PCC209-F',
            classify: '通讯状态',
            type: 'A相电流报警恢复',
            time: '2022-03-01 21:05:55',
            description: 'T103096标签A相电流报警恢复',
            state: '未确定',
            operation: '增删改查',
            detail: '详情'
          }, {
            substation: '8号连铸机',
            equipment: 'C8PCC211-F',
            classify: '通讯状态',
            type: 'B相电流报警恢复',
            time: '2022-03-02 08:05:55',
            description: 'T103096标签B相电流报警恢复',
            state: '未确定',
            operation: '增删改查',
            detail: '详情'
          }, {
            substation: '8号连铸机',
            equipment: 'C8PCC211-F',
            classify: '通讯状态',
            type: 'C相电流报警恢复',
            time: '2022-03-02 08:05:55',
            description: 'T103096标签C相电流报警恢复',
            state: '未确定',
            operation: '增删改查',
            detail: '详情'
          }, {
            substation: '8号连铸机',
            equipment: 'C8PCC211-F',
            classify: '通讯状态',
            type: '仪表离线',
            time: '2022-03-02 08:05:55',
            description: '仪表[T103116]离线',
            state: '未确定',
            operation: '增删改查',
            detail: '详情'
          },
        ]
      }
    },
  }

</script>

<style>

</style>
