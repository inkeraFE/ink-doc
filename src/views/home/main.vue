<template>
  <div id="home-wrapper" class="clearfix">
    <div class="content-wrapper">
      <item-bar v-for="(item, index) in compList" :key="index" :info="item" :index="index"></item-bar>
    </div>
  </div>
</template>

<script type="text/javascript">
import itemBar from './itemBar.vue'
export default {
  name: 'home',
  data () {
    return {
      compList: [{
        title: 'Common',
        childs: [{
          text: 'Button',
          routeName: 'button'
        }]
      }]
    }
  },
  components: {
    itemBar
  },
  mounted () {
    if (localStorage.showCtrl === void 0) {
      const ctrlArr = '0'.repeat(this.compList.length).split('').map(function (el, index) {
        return !!~~el
      })
      localStorage.showCtrl = JSON.stringify(ctrlArr)
    }
  }
}
</script>

<style lang="less" scoped>
  #home-wrapper {
    .content-wrapper {
      margin: 20px;
    }
  }
</style>
