<template>
  <ink-page class="button-demo-wrapper">
    <top-bar slot="header" :title="'Button'"></top-bar>
    <div slot="content" class="demo-wrapper">
      <ink-btn type="primary" size="large" @click="handleClick">Primary</ink-btn>
      <ink-btn type="danger" size="large">Danger</ink-btn>
      <ink-btn type="warning" size="large">Warning</ink-btn>
      <ink-btn size="large">Default</ink-btn>
      <ink-btn type="primary">Primary</ink-btn>
      <ink-btn type="danger">Danger</ink-btn>
      <ink-btn type="warning">Warning</ink-btn>
      <ink-btn>Default</ink-btn>
      <ink-btn style="border: 1px solid blue; color: blue;" :disabled="true">disabled</ink-btn>
    </div>
  </ink-page>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'
export default {
  components: {
    topBar
  },
  methods: {
    handleClick (evt) {
      console.log(evt)
    }
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
