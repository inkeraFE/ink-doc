<template>
  <ink-page class="radio-demo-wrapper">
    <top-bar slot="header" :title="'Radio'"></top-bar>
    <div slot="content" class="radio-content">
      <div class="radio-item">
        <span class="radio-title">默认：</span>
        <div class="radio-demo">
          <ink-radio :name="'name'" :val="'选项1'" v-model="radio0"/>
          <ink-radio :name="'name'" :val="'选项2'" v-model="radio0"/>
        </div>
      </div>
      <div class="radio-item">
        <span class="radio-title">自定义颜色：</span>
        <div class="radio-demo">
          <ink-radio :name="'name1'" :val="'选项1'" v-model="radio1" color="#ff9933"/>
          <ink-radio :name="'name1'" :val="'选项2'" v-model="radio1" color="#ff9933"/>
        </div>
      </div>
      <div class="radio-item">
        <span class="radio-title">禁用：</span>
        <div class="radio-demo">
          <ink-radio :name="'name2'" :disabled="radio2 === 'true'" :val="'选项1'" v-model="radio2"/>
          <ink-radio :name="'name2'" val="true" v-model="radio2"/>
          <ink-radio :name="'name2'" val="false" v-model="radio2"/>
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
      radio0: '选项1',
      radio1: '选项2',
      radio2: 'true'
    }
  },
  components: {
    topBar
  },
  watch: {
    radio0 (val) {
      console.log(0, val)
    },
    radio1 (val) {
      console.log(1, val)
    },
    radio2 (val) {
      console.log(2, val)
    }
  }
}
</script>

<style lang="less" scoped>
.radio-content {
  overflow: auto;
  .radio-item {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    border-bottom: 1px solid #f0f1f2;
    white-space: 10px;
    .radio-title {
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 18px;
      text-align: left;
      margin-right: 24px;
    }
    .radio-demo {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100px;
    }
  }
}
</style>
