<template>
  <div class="btn">
    <div class="date">
      <span class="demonstration">日期：</span>
      <el-date-picker v-model="value2" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions"
        style="width:120px">
      </el-date-picker>
    </div>
    <div class="select">
      <span>电力类别：</span>
      <el-select v-model="value" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="cbx">
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="A组"></el-checkbox>
        <el-checkbox label="B组"></el-checkbox>
        <el-checkbox label="C组"></el-checkbox>
        <el-checkbox label="总有功功率" disabled></el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="search">
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '有功功率'
        }, {
          value: '选项2',
          label: '电流'
        }, {
          value: '选项3',
          label: '相电压'
        }, {
          value: '选项4',
          label: '线电压'
        }, {
          value: '选项5',
          label: '频率'
        }],
        value: '',
        checkList: ['A组', 'B组', 'C组'],

        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
              text: '今天',
              onClick(picker) {
                picker.$emit('pick', new Date());
              }
            }, {
              text: '昨天',
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24);
                picker.$emit('pick', date);
              }
            }, {
              text: '一周前',
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', date);
              }
            },
            {
              text: '一个月前',
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 30);
                picker.$emit('pick', date);
              }
            },
          ]
        },
        value1: '',
        value2: '',
      };
    }
  };

</script>

<style>
  .date {
    position: absolute;
    left: 10px;
    top: 10px;
  }

  .select {
    position: absolute;
    left: 200px;
    top: 10px;
  }

  .cbx {
    position: absolute;
    left: 520px;
    top: 20px;
  }

  .search {
    position: absolute;
    left: 880px;
    top: 10px;
  }

</style>
