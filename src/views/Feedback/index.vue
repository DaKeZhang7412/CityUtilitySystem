<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="问题名称">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="问题发生位置">
        <el-select v-model="form.region" placeholder="请填写问题发生的位置">
          <el-option label="Zone one" value="Zone one" />
          <el-option label="Zone two" value="Zone two" />
        </el-select>
      </el-form-item>
      <el-form-item label="问题发生时间">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="请填写问题发生的具体日期" style="width: 100%;" />
        </el-col>
        <el-col :span="2" class="line">-</el-col>
        <el-col :span="11">
          <el-time-picker v-model="form.date2" type="fixed-time" placeholder="请填写问题发生的具体时间" style="width: 100%;" />
        </el-col>
      </el-form-item>
      <el-form-item label="是否已解决">
        <el-switch v-model="form.delivery" />
      </el-form-item>
      <el-form-item label="问题种类">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="设备问题" name="type" />
          <el-checkbox label="环境问题" name="type" />
          <el-checkbox label="电力问题" name="type" />
          <el-checkbox label="人为问题" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="问题来源">
        <el-radio-group v-model="form.resource">
          <el-radio label="人员反馈" />
          <el-radio label="设备反馈" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="问题详细">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        this.$message('submit!')
      },
      onCancel() {
        this.$message({
          message: 'cancel!',
          type: 'warning'
        })
      }
    }
  }

</script>

<style scoped>
  .line {
    text-align: center;
  }

</style>
