<template>
  <div class="container">
    <div class="nav">
      <navCom />
    </div>
    <div class="content">
      <tableBox />
    </div>
  </div>
</template>

<script>
  import navCom from '../../../components/navCom.vue'
  import tableBox from './components/tableBox.vue'
  export default {
    name: 'PEVRF',
    components: {
      navCom,
      tableBox
    },
    data() {
      return {

      }
    },
    mounted() {

    },
  }

</script>

<style scoped>
  .nav {
    position: absolute;
    top: 10px;
    left: 20px;
    width: 300px;
    height: 640px;
    margin: 10px;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    border-radius: 10px;
  }

  .content {
    position: absolute;
    top: 10px;
    left: 360px;
    width: 1100px;
    height: 640px;
    margin: 10px;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    border-radius: 10px;
  }

</style>
