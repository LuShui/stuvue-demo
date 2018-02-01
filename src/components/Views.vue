<template>
    <div id="warp">
      <div class="header">
        <a @click="backfunc">返回</a>
        <a>left</a>
        <a>right</a>
      </div>
      <div class="content">
        <router-view class="leftview"></router-view>
        <router-view class="rightview" name="right"></router-view>
      </div>

    </div>
</template>

<script>
export default {
  name: 'Views',
  methods: {
    backfunc: function () {
      this.$router.back()
    }
  }
}
</script>
<style scoped lang="scss" rel="stylesheet/scss">

.header{
  height: 88px;
  line-height: 88px;
  display: -webkit-box;
  background-color: #42b983;
  a{
    display: block;
    height: 88px;
    line-height: 88px;
    text-align: center;
    font-size: 32px;
    color: white;
  }
  a:nth-of-type(1){
    width: 88px;
    font-size: 24px;
  }
  a:nth-of-type(2){
    width: 300px;
  }
  a:nth-of-type(3){
    -webkit-box-flex: 1;
  }
}
.content{
  display: block;
  height: 800px;
  top: 88px;
  display: -webkit-box;
  .leftview,.rightview{
    -webkit-box-flex: 1;
  }
}
</style>
