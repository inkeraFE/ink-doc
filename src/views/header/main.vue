
<template>
  <ink-page class="header-demo-wrapper">
    <top-bar slot="header" :title="'Header'"></top-bar>
    <div slot="content" style="padding: 20px 0">
      <ink-header>
        <i class="icon iconfont" slot="left">&#xe790;</i>
        <span class="title" slot="center">标题</span>
        <i class="icon iconfont" slot="right">&#xe646;</i>
      </ink-header>
    </div>
  </ink-page>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'
export default {
  components: {
    topBar
  }
}
</script>

<style lang="less" scoped>
.header-demo-wrapper {
  .icon {
    font-size: 20px;
  }
  .title {
    font-size: 16px;
  }
}
</style>
