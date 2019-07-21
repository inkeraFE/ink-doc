<template>
  <ink-page>
    <top-bar slot="header" :title="'Carousel'"></top-bar>
    <div slot="content" class="carousel-content-demo">
      <demo-title>默认</demo-title>
      <ink-carousel v-model="carouselVal1">
        <div class="carousel-item-demo item1">item1</div>
        <div class="carousel-item-demo item2">item2</div>
        <div class="carousel-item-demo item3">item3</div>
      </ink-carousel>
      <demo-title>分页</demo-title>
      <ink-carousel :pagination="true" :loop="true" v-model="carouselVal2">
        <div class="carousel-item-demo item1">item1</div>
        <div class="carousel-item-demo item2">item2</div>
        <div class="carousel-item-demo item3">item3</div>
      </ink-carousel>
      <demo-title>无手势</demo-title>
      <ink-carousel :isLock="true" :auto="true" :loop="true">
        <div class="carousel-item-demo item1">item1</div>
        <div class="carousel-item-demo item2">item2</div>
        <div class="carousel-item-demo item3">item3</div>
      </ink-carousel>
    </div>
  </ink-page>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'
import demoTitle from '@/components/demoTitle.vue'
export default {
  data () {
    return {
      carouselVal1: 0,
      carouselVal2: 1
    }
  },
  components: {
    topBar,
    demoTitle
  }
}
</script>

<style lang="less" scoped>
.carousel-content-demo {
  overflow: auto;
  .carousel-item-demo {
    width: 100%;
    height: 200px;
    font-size: 28px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item1 {
    background: #108ee9;
  }
  .item2 {
    background: #dd2622;
  }
  .item3 {
    background: #ff9900;
  }
}
</style>
