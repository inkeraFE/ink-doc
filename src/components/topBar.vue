<template>
  <ink-header class="topbar-wrapper">
    <i class="icon iconfont" slot="left" @click="$router.replace({name: 'home'})">&#xe645;</i>
    <span class="title" slot="center" v-text="this.title"></span>
  </ink-header>
</template>

<script type="text/javascript">
export default {
  props: ['title']
}
</script>

<style lang="less" scoped>
.topbar-wrapper {
  .icon {
    font-size: 20px;
  }
  .title {
    font-size: 18px;
  }
}
</style>
