<template>
  <ink-page>
    <top-bar slot="header" :title="'SearchBar'"></top-bar>
    <div slot="content">
      <demo-title>默认</demo-title>
      <ink-search-bar placeholder="Please Input" v-model="value" @submit="onSubmit"></ink-search-bar>
      <demo-title>无清空</demo-title>
      <ink-search-bar placeholder="Please Input" :canClear="false" @submit="onSubmit"></ink-search-bar>
    </div>
  </ink-page>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'
import demoTitle from '@/components/demoTitle.vue'
export default {
  data () {
    return {
      value: null
    }
  },
  components: {
    topBar,
    demoTitle
  },
  methods: {
    onSubmit (event) {
      this.$toast('submit')
    }
  }
}
</script>
