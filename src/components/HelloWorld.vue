<template>
  <div class="hello">
    <header>
      <a @click="backfunc">返回</a>
      <h4>{{title}}</h4>
    </header>
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    backfunc: function () {
      this.$router.back()
    }
  },
  computed: {
    title () {
      return this.$store.state.name
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to{
    transform: translateX(10px);
    opacity: 0;
  }
  header{
    height: 88px;
    background-color: #42b983;
    position: relative;
    a{
      position: absolute;
      left: 0;
      top: 0;
      bottom:0;
      width: 88px;
      line-height: 88px;
      font-size: 24px;
      text-align: center;
      color: white;
    }
    h4{
      font-size: 36px;
      line-height: 88px;
      height: 88px;
      text-align: center;
      color: white;
    }
  }
</style>
