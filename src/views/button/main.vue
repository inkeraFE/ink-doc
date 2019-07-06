<template>
  <div class="button-demo-wrapper">
    <top-bar :title="'Button'"></top-bar>
    <div class="demo-wrapper">
      <ink-btn type="primary" size="large">Primary</ink-btn>
      <ink-btn type="danger" size="large">Danger</ink-btn>
      <ink-btn type="warning" size="large">Warning</ink-btn>
      <ink-btn size="large">Default</ink-btn>
      <ink-btn type="primary">Primary</ink-btn>
      <ink-btn type="danger">Danger</ink-btn>
      <ink-btn type="warning">Warning</ink-btn>
      <ink-btn>Default</ink-btn>
      <ink-btn style="border: 1px solid blue; color: blue;" :actionStyle="{background: 'blue', color: 'white'}">Custom button</ink-btn>
    </div>
  </div>
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
      button {
        margin-bottom: 15px;
      }
    }
  }
</style>
