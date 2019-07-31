<template>
  <ink-page class="loading-demo-wrapper">
    <top-bar slot="header" :title="'Loading'"></top-bar>
    <template slot="content">
      <ink-flex class="demo-item" :justifyBetween="true" :alignCenter="true">
        <div class="title">默认：</div>
        <ink-loading></ink-loading>
      </ink-flex>
      <ink-flex class="demo-item" :justifyBetween="true" :alignCenter="true">
        <div class="title">自定义颜色：</div>
        <ink-loading color="#48D1CC"></ink-loading>
      </ink-flex>
     </template>
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
.loading-demo-wrapper {
  .title {
    font-size: 18px;
  }
  .demo-item {
    height: 60px;
    padding: 0 24px;
    border-bottom: 1px solid #f0f1f2;
  }
}
</style>
