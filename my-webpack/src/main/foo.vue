<template>
    <div>
        <p>foo 包含两个子路由</p>
        <router-link to="/foo/a">a</router-link>
        <router-link to="/foo/b">b</router-link>
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