<template>
  <ink-page class="pulldown-demo-wrapper">
    <top-bar slot="header" :title="'Pulldown'"></top-bar>
    <div slot="content" class="pulldown-wrapper">
      <ink-pull-down
        @promptDisplay="prompt = '松开立即刷新'"
        @touchEnd="handleRefresh"
        @pullEnd="prompt = '下拉刷新'; isLoading = false"
      >
        <div slot="pull">
          <div v-text="prompt" v-if="!isLoading"></div>
          <ink-loading v-else-if="isLoading" style="margin: 0 auto"></ink-loading>
        </div>
        <ul slot="box">
          <li v-for="(item, index) in list" v-text="index" :key="index"></li>
        </ul>
      </ink-pull-down>
    </div>
  </ink-page>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'
export default {
  data () {
    return {
      isLoading: false,
      prompt: '下拉刷新',
      list: Array(15)
    }
  },
  components: {
    topBar
  },
  methods: {
    handleRefresh () {
      this.isLoading = true
      this.$forceUpdate()
    }
  }
}
</script>

<style lang="less" scoped>
.pulldown-demo-wrapper {
  .pulldown-wrapper {
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 16px;
      }
    }
  }
}
</style>
