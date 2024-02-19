<template>
  <div>
    <div class="first_video">
      <div class="videos">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span><i class="el-icon-camera-solid"></i>电力控制室</span>
            <el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button>
          </div>
          <div class="video_group">
            <video src="" controls style="width: 400px; height: 200px"></video>
          </div>
        </el-card>
      </div>
      <div class="videos">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span><i class="el-icon-camera-solid"></i>1号控温室</span>
            <el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button>
          </div>
          <div class="video_group">
            <video src="" controls style="width: 400px; height: 200px"></video>
          </div>
        </el-card>
      </div>
    </div>
    <div class="second_video">
      <div class="videos">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span><i class="el-icon-camera-solid"></i>外厂</span>
            <el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button>
          </div>
          <div class="video_group">
            <video src="" controls style="width: 400px; height: 200px"></video>
          </div>
        </el-card>
      </div>
      <div class="videos">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span><i class="el-icon-camera-solid"></i>监控室</span>
            <el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button>
          </div>
          <div class="video_group">
            <video src="" controls style="width: 400px; height: 200px"></video>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "VM",
  };

</script>

<style scoped>
  .video_group {
    margin: 20px;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both;
  }

  .box-card {
    width: 540px;
    height: 300px;
    margin: 20px;
  }

  .first_video {
    display: flex;
  }

  .second_video {
    display: flex;
  }

</style>
