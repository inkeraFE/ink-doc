<template>
  <ink-page class="button-demo-wrapper">
    <top-bar slot="header" :title="'Flex'"></top-bar>
    <div slot="content" class="demo-wrapper">
      <ink-flex :row="true" style="padding: 10px 0;">
        <ink-flex :flex="1" style="background: #b9b9c3; height: 20px" />
        <ink-flex :flex="2" style="background: #a09898; height: 20px" />
        <ink-flex :flex="1" style="background: grey; height: 20px" />
      </ink-flex>
      <ink-flex :column="true" class="ink-test" style="height: 80px; margin: 10px 0;">
        <ink-flex :flex="1" style="background: #b9b9c3;" />
        <ink-flex :flex="2" style="background: #a09898;" />
        <ink-flex :flex="1" style="background: grey;" />
      </ink-flex>
      <ink-flex
        :justifyCenter="true"
        :alignCenter="true"
        style="background: #b9b9c3; height: 120px;"
      >justifyCenter alignCenter</ink-flex>
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
.button-demo-wrapper {
  .demo-wrapper {
    padding: 24px;
  }
}
</style>
