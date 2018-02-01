<template>
  <div>
    <ul>
      <li @click="homefunc">
        <a>Home view</a>
      </li>
      <li @click="firstfunc">
        <a >First view</a>
      </li>
      <li @click="viewsfunc">
        <a >Views view</a>
      </li>
      <li @click="storefunc">
        <a >Store view</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Nav',
    methods: {
      homefunc: function (e) {
        this.$router.push({name: 'Home'})
      },
      firstfunc: function () {
        this.$router.push({name: 'First', params: {name: 'vuestring'}})
      },
      viewsfunc: function () {
        this.$router.push({name: 'Views'})
      },
      storefunc: function () {
        this.$router.push({name: 'Store'})
      }
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  ul{
    display: block;
    li{
      list-style: none;
      height:100px;
      line-height: 100px;
      font-size: 32px;
      border-bottom: 1px solid #e6e6e6;
      a {
        display: block;
        height: 100px;
        line-height: 100px;
        color: #42b983;
        cursor: pointer;
        margin-left: 30px;
        text-align: left ;
      }
    }
  }
</style>
