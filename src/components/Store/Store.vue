<template>
    <div>
      <ul>
        <LiComponent v-for="(item, index) in list" :item="item" :key="index"></LiComponent>
      </ul>
    </div>
</template>

<script>
import LiComponent from './LiComponent.vue'
export default {
  name: 'Store',
  computed: {
    list () {
      return this.$store.state.list
    }
  },
  components: {
    LiComponent
  }
}
</script>
<style scoped lang="scss" rel="stylesheet/scss">

</style>
