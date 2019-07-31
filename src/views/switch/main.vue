<template>
  <ink-page class="switch-demo-wrapper">
    <top-bar slot="header" :title="'Switch'"></top-bar>
    <div slot="content" class="switch-content">
      <div class="switch-item">
        <span class="switch-title">默认</span>
        <div class="switch-demo">
          <ink-switch v-model="switch0"></ink-switch>
          <span v-text="switch0"></span>
        </div>
      </div>
      <div class="switch-item">
        <span class="switch-title">默认</span>
        <div class="switch-demo">
          <ink-switch v-model="switch1" @change="handleChange"></ink-switch>
          <span v-text="switch1"></span>
        </div>
      </div>
      <div class="switch-item">
        <span class="switch-title">自定义</span>
        <div class="switch-demo">
          <ink-switch v-model="switch3" :color="'#ff9933'"></ink-switch>
          <span v-text="switch3"></span>
        </div>
      </div>
    </div>
  </ink-page>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'
export default {
  data () {
    return {
      switch0: false,
      switch1: true,
      switch3: true
    }
  },
  methods: {
    handleChange (val) {
      console.log(val)
    }
  },
  components: {
    topBar
  }
}
</script>

<style lang="less" scoped>
.switch-content {
  overflow: auto;
  .switch-item {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    border-bottom: 1px solid #f0f1f2;
    white-space: 10px;
    .switch-title {
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 18px;
      text-align: left;
      margin-right: 24px;
    }
    .switch-demo {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100px;
    }
  }
}
</style>
