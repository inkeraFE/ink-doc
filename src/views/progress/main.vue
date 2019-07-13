<template>
  <div class="wrapper">
    <top-bar :title="'Progress'"></top-bar>
    <ink-flex :column="true" class="content">
      <div class="title">默认</div>
      <div class="item">
        <ink-progress v-model="range0"></ink-progress>
        <div class="value" v-text="range0 + '%'"></div>
      </div>
      <div class="item">
        <ink-progress v-model="range1"></ink-progress>
        <div class="value" v-text="range1 + '%'"></div>
      </div>
    </ink-flex>
   <ink-flex :column="true" class="content">
      <div class="title">自定义</div>
      <div class="item">
        <ink-progress color="#6cbcd2" v-model="range0"></ink-progress>
        <div class="value" v-text="range0 + '%'"></div>
      </div>
      <div class="item">
        <ink-progress color="#6cd298" lineHeight="3px" v-model="range1"></ink-progress>
        <div class="value" v-text="range1 + '%'"></div>
      </div>
     </ink-flex>
  </div>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'
export default {
  data () {
    return {
      range0: 25,
      range1: 50
    }
  },
  components: {
    topBar
  }
}
</script>

<style lang="less" scoped>
.content {
  padding-top: 20px;
  overflow: auto;
  .title {
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 18px;
    text-align: left;
    padding-left: 20px;
  }
  .item {
    width: 80%;
    font-size: 28px;
    margin: 0 auto;
    .value {
      text-align: center;
      color: black;
      font-size: 15px;
    }
  }
}
</style>
