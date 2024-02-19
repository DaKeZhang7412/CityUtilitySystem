<template>
  <div class="block">
    <div class="cards_group">
      <div class="cards">
        <el-card class="box-card">
          1#进线线缆温度
          <div class="pic">
            <img src="../../../../public/icon/温湿度_湿度过高.png" style="width: 100px; height: 100px" alt="" />
            <div class="temperature_regulation">
              <el-slider v-model="value" vertical height="100px"> </el-slider>
            </div>
          </div>
          <div class="time">
            {{ date }}
          </div>
          <br />
          <div class="button_main">
            <el-button type="primary">查询</el-button>
          </div>
        </el-card>
      </div>
      <div class="cards">
        <el-card class="box-card">
          2#进线线缆温度
          <div class="pic">
            <img src="../../../../public/icon/温湿度_湿度过高.png" style="width: 100px; height: 100px" alt="" />
            <div class="temperature_regulation">
              <el-slider v-model="value" vertical height="100px"> </el-slider>
            </div>
          </div>
          <div class="time">
            {{ date }}
          </div>
          <br />
          <div class="button_main">
            <el-button type="primary">查询</el-button>
          </div>
        </el-card>
      </div>
      <div class="cards">
        <el-card class="box-card">
          C8MVP102柜进线温度
          <div class="pic">
            <img src="../../../../public/icon/温湿度_湿度过高.png" style="width: 100px; height: 100px" alt="" />
            <div class="temperature_regulation">
              <el-slider v-model="value" vertical height="100px"> </el-slider>
            </div>
          </div>
          <div class="time">
            {{ date }}
          </div>
          <br />
          <div class="button_main">
            <el-button type="primary">查询</el-button>
          </div>
        </el-card>
      </div>
      <div class="cards">
        <el-card class="box-card">
          C8MVP102柜出线温度
          <div class="pic">
            <img src="../../../../public/icon/温湿度_湿度过高.png" style="width: 100px; height: 100px" alt="" />
            <div class="temperature_regulation">
              <el-slider v-model="value" vertical height="100px"> </el-slider>
            </div>
          </div>
          <div class="time">
            {{ date }}
          </div>
          <br />
          <div class="button_main">
            <el-button type="primary">查询</el-button>
          </div>
        </el-card>
      </div>
    </div>
    <div class="cards_group">
      <div class="cards">
        <el-card class="box-card">
          C8MVP103柜进线温度
          <div class="pic">
            <img src="../../../../public/icon/温湿度_湿度过高.png" style="width: 100px; height: 100px" alt="" />
            <div class="temperature_regulation">
              <el-slider v-model="value" vertical height="100px"> </el-slider>
            </div>
          </div>
          <div class="time">
            {{ date }}
          </div>
          <br />
          <div class="button_main">
            <el-button type="primary">查询</el-button>
          </div>
        </el-card>
      </div>
      <div class="cards">
        <el-card class="box-card">
          C8MVP103柜出线温度
          <div class="pic">
            <img src="../../../../public/icon/温湿度_湿度过高.png" style="width: 100px; height: 100px" alt="" />
            <div class="temperature_regulation">
              <el-slider v-model="value" vertical height="100px"> </el-slider>
            </div>
          </div>
          <div class="time">
            {{ date }}
          </div>
          <br />
          <div class="button_main">
            <el-button type="primary">查询</el-button>
          </div>
        </el-card>
      </div>
      <div class="cards">
        <el-card class="box-card">
          C8MVP105柜进线温度
          <div class="pic">
            <img src="../../../../public/icon/温湿度_湿度过高.png" style="width: 100px; height: 100px" alt="" />
            <div class="temperature_regulation">
              <el-slider v-model="value" vertical height="100px"> </el-slider>
            </div>
          </div>
          <div class="time">
            {{ date }}
          </div>
          <br />
          <div class="button_main">
            <el-button type="primary">查询</el-button>
          </div>
        </el-card>
      </div>
      <div class="cards">
        <el-card class="box-card">
          C8MVP105柜出线温度
          <div class="pic">
            <img src="../../../../public/icon/温湿度_湿度过高.png" style="width: 100px; height: 100px" alt="" />
            <div class="temperature_regulation">
              <el-slider v-model="value" vertical height="100px"> </el-slider>
            </div>
          </div>
          <div class="time">
            {{ date }}
          </div>
          <br />
          <div class="button_main">
            <el-button type="primary">查询</el-button>
          </div>
        </el-card>
      </div>
    </div>
    <div class="cards_group">
      <div class="cards">
        <el-card class="box-card">
          C8MVP106柜进线温度
          <div class="pic">
            <img src="../../../../public/icon/温湿度_湿度过高.png" style="width: 100px; height: 100px" alt="" />
            <div class="temperature_regulation">
              <el-slider v-model="value" vertical height="100px"> </el-slider>
            </div>
          </div>
          <div class="time">
            {{ date }}
          </div>
          <br />
          <div class="button_main">
            <el-button type="primary">查询</el-button>
          </div>
        </el-card>
      </div>
      <div class="cards">
        <el-card class="box-card">
          C8MVP106柜出线温度
          <div class="pic">
            <img src="../../../../public/icon/温湿度_湿度过高.png" style="width: 100px; height: 100px" alt="" />
            <div class="temperature_regulation">
              <el-slider v-model="value" vertical height="100px"> </el-slider>
            </div>
          </div>
          <div class="time">
            {{ date }}
          </div>
          <br />
          <div class="button_main">
            <el-button type="primary">查询</el-button>
          </div>
        </el-card>
      </div>
      <div class="cards">
        <el-card class="box-card">
          C8MVP107柜进线温度
          <div class="pic">
            <img src="../../../../public/icon/温湿度_湿度过高.png" style="width: 100px; height: 100px" alt="" />
            <div class="temperature_regulation">
              <el-slider v-model="value" vertical height="100px"> </el-slider>
            </div>
          </div>
          <div class="time">
            {{ date }}
          </div>
          <br />
          <div class="button_main">
            <el-button type="primary">查询</el-button>
          </div>
        </el-card>
      </div>
      <div class="cards">
        <el-card class="box-card">
          C8MVP107柜出线温度
          <div class="pic">
            <img src="../../../../public/icon/温湿度_湿度过高.png" style="width: 100px; height: 100px" alt="" />
            <div class="temperature_regulation">
              <el-slider v-model="value" vertical height="100px"> </el-slider>
            </div>
          </div>
          <div class="time">
            {{ date }}
          </div>
          <br />
          <div class="button_main">
            <el-button type="primary">查询</el-button>
          </div>
        </el-card>
      </div>
    </div>
    <div class="cards_group">
      <div class="cards">
        <el-card class="box-card">
          C8MVP109柜进线温度
          <div class="pic">
            <img src="../../../../public/icon/温湿度_湿度过高.png" style="width: 100px; height: 100px" alt="" />
            <div class="temperature_regulation">
              <el-slider v-model="value" vertical height="100px"> </el-slider>
            </div>
          </div>
          <div class="time">
            {{ date }}
          </div>
          <br />
          <div class="button_main">
            <el-button type="primary">查询</el-button>
          </div>
        </el-card>
      </div>
      <div class="cards">
        <el-card class="box-card">
          C8MVP109柜出线温度
          <div class="pic">
            <img src="../../../../public/icon/温湿度_湿度过高.png" style="width: 100px; height: 100px" alt="" />
            <div class="temperature_regulation">
              <el-slider v-model="value" vertical height="100px"> </el-slider>
            </div>
          </div>
          <div class="time">
            {{ date }}
          </div>
          <br />
          <div class="button_main">
            <el-button type="primary">查询</el-button>
          </div>
        </el-card>
      </div>
      <div class="cards">
        <el-card class="box-card">
          C8MVP110柜进线温度
          <div class="pic">
            <img src="../../../../public/icon/温湿度_湿度过高.png" style="width: 100px; height: 100px" alt="" />
            <div class="temperature_regulation">
              <el-slider v-model="value" vertical height="100px"> </el-slider>
            </div>
          </div>
          <div class="time">
            {{ date }}
          </div>
          <br />
          <div class="button_main">
            <el-button type="primary">查询</el-button>
          </div>
        </el-card>
      </div>
      <div class="cards">
        <el-card class="box-card">
          C8MVP110柜出线温度
          <div class="pic">
            <img src="../../../../public/icon/温湿度_湿度过高.png" style="width: 100px; height: 100px" alt="" />
            <div class="temperature_regulation">
              <el-slider v-model="value" vertical height="100px"> </el-slider>
            </div>
          </div>
          <div class="time">
            {{ date }}
          </div>
          <br />
          <div class="button_main">
            <el-button type="primary">查询</el-button>
          </div>
        </el-card>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        value: 0,
      };
    },
  };

</script>

<script>
  export default {
    name: "CABMT",
    data() {
      return {
        date: new Date().toISOString().slice(0, 10),
      };
    },
    methods: {
      change(e) {
        console.log(e);
        this.currentChoose = e.detail.data.value;
        console.log(this.currentChoose);
      },
    },
  };

</script>

<style scoped>
  .temperature_regulation {
    margin: 10px;
    float: left;
  }

  .text {
    font-size: 14px;
  }

  .block {
    display: flex;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 320px;
    height: 150px;
  }

  .cards {
    margin: 10px;
  }

  .pic {
    float: left;
  }

  .time {
    text-align: center;
  }

  .button_main {
    text-align: center;
  }

</style>
