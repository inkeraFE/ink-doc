<template>
  <ink-page class="slideItem-demo-wrapper">
    <top-bar slot="header" :title="'SlideItem'"></top-bar>
    <div slot="content">
      <demo-title>右边按钮</demo-title>
      <ink-slide>
        <div class="slide-demo">向左拖拽</div>
        <div class="slide-action" slot="action">
          <div class="action edit" @click="show">编辑</div>
          <div class="action delete" @click="show">删除</div>
        </div>
      </ink-slide>
    </div>
  </ink-page>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'
import demoTitle from '@/components/demoTitle.vue'

export default {
  data () {
    return {
      isClose: false
    }
  },
  components: {
    topBar,
    demoTitle
  },
  methods: {
    show () {
      this.$toast(event.target.innerHTML)
      this.isClose = true
    }
  }
}
</script>

<style lang="less" scoped>
.slideItem-demo-wrapper {
  .slide-demo {
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    text-align: center;
    background: white;
  }
  .slide-action {
    display: flex;
    font-size: 0;
    .action {
      width: 80px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      font-size: 18px;
      color: white;
    }
    .info {
      background: #333;
    }
    .edit {
      background: #108ee9;
    }
    .delete {
      background: #dd2622;
    }
  }
}
</style>
