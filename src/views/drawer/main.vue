
<template>
  <ink-page class="wrapper">
    <top-bar slot="header" :title="'Drawer'"></top-bar>
    <div slot="content">
      <ink-header style="background: #108ee9; color: white" class="header">
        <i class="icon iconfont" slot="left" @click="isShow = !isShow">&#xe790;</i>
        <span class="title" slot="center">drawer</span>
        <i class="icon iconfont" slot="right">&#xe646;</i>
      </ink-header>
      <ink-drawer dHeight="calc(100vh - 100px)" class="drawer" v-model="isShow">
        <ul class="menu" slot="navbar">
          <li class="item">item1</li>
          <li class="item">item2</li>
          <li class="item">item3</li>
          <li class="item">item4</li>
          <li class="item">item5</li>
          <li class="item">item6</li>
        </ul>
        <ink-flex :flex="1" :justifyCenter="true" :alignCenter="true" slot="content" class="content">content page</ink-flex>
      </ink-drawer>
    </div>
  </ink-page>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'

export default {
  data () {
    return {
      isShow: false
    }
  },
  components: {
    topBar
  }
}
</script>
<style lang="less" scoped>
.header {
  .icon {
    font-size: 20px;
  }
  .title {
    font-size: 18px;
  }
}
.drawer {
  .content {
    width: 100%;
    height: 100%;
    font-size: 16px
  }
  .menu {
    list-style: none;
    margin: 0;
    padding: 0;
    .item {
      color: black;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 18px;
      border-bottom: 1px solid #f0f1f2;
      box-sizing: border-box;
    }
  }
}
</style>
