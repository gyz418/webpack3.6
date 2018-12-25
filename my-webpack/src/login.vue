<template>
    <div>
        this is a.vue how
        <router-link to="/bar">bar</router-link>
        <router-link to="/foo">foo</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    created () {
      document.title = '首页'
    },
    methods: {}
  }

</script>
<style lang="less" scoped>

</style>