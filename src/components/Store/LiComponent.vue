<template>
  <li>
   {{item}}
    <a @click="deletefunc">删除</a>
  </li>
</template>

<script>
export default {
  name: 'LiComponent',
  props: ['item'],
  methods: {
    deletefunc () {
      this.$store.dispatch('updateSoure', this.item)
    }
  }
}
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  li{
    text-align: left;
    padding-left: 30px;
    height: 88px;
    line-height: 88px;
    font-size: 32px;
    position: relative;
    border-bottom: 1px solid #e6e6e6;
    a{
      display: block;
      position: absolute;
      right: 30px;
      top: 0px;
      bottom: 0px;
      width: 120px;
      text-align: center;
      height: 88px;
      line-height: 88px;
      font-size: 24px;
      &:hover{
        color: red;
        font-size: 30px;
        cursor: pointer;
      }
    }
  }
</style>
