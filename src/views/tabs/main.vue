<template>
  <ink-page class="tabs-demo-wrapper">
    <top-bar slot="header" :title="'Tabs'"></top-bar>
    <template slot="content">
      <demo-title>默认</demo-title>
      <ink-tabs v-model="selIndex1">
        <ink-flex :justifyBetween="true" :alignCenter="true" class="tab-navigator" slot="navbar">
          <div class="nav" :class="{'active': selIndex1 === 0}" @click="selIndex1 = 0">first</div>
          <div class="nav" :class="{'active': selIndex1 === 1}" @click="selIndex1 = 1">second</div>
          <div class="nav" :class="{'active': selIndex1 === 2}" @click="selIndex1 = 2">third</div>
        </ink-flex>
        <ink-flex :justifyCenter="true" :alignCenter="true" class="content">first tab</ink-flex>
        <ink-flex :justifyCenter="true" :alignCenter="true" class="content">second tab</ink-flex>
        <ink-flex :justifyCenter="true" :alignCenter="true" class="content">third tab</ink-flex>
      </ink-tabs>
      <demo-title>无手势</demo-title>
      <ink-tabs v-model="selIndex2" :isGesture="false">
        <ink-flex :justifyBetween="true" :alignCenter="true" class="tab-navigator" slot="navbar">
          <div class="nav" :class="{'active': selIndex2 === 0}" @click="selIndex2 = 0">first</div>
          <div class="nav" :class="{'active': selIndex2 === 1}" @click="selIndex2 = 1">second</div>
          <div class="nav" :class="{'active': selIndex2 === 2}" @click="selIndex2 = 2">third</div>
        </ink-flex>
        <ink-flex :justifyCenter="true" :alignCenter="true" class="content">first tab</ink-flex>
        <ink-flex :justifyCenter="true" :alignCenter="true" class="content">second tab</ink-flex>
        <ink-flex :justifyCenter="true" :alignCenter="true" class="content">third tab</ink-flex>
      </ink-tabs>
    </template>
  </ink-page>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'
import demoTitle from '@/components/demoTitle.vue'
export default {
  data () {
    return {
      selIndex1: 0,
      selIndex2: 0,
      selIndex3: 0
    }
  },
  components: {
    topBar,
    demoTitle
  }
}
</script>

<style lang="less" scoped>
.tabs-demo-wrapper {
  .tab-navigator {
    width: 100%;
    border-bottom: 1px solid #ccc;
    padding: 0 15px;

    .nav {
      flex: '1 0 33%';
      text-align: center;
      height: 45px;
      line-height: 45px;
      font-size: 18px;
    }

    .active {
      color: #108ee9;
    }
  }

  .content {
    width: 100%;
    height: 200px;
    background: white;
    border: 1px solid #f0f1f2;
    border-top: unset;
    border-bottom: unset;
    font-size: 18px;
  }
}
</style>
