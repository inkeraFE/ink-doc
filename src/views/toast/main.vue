
<template>
  <div class="wrapper">
    <top-bar :title="'Toast'"></top-bar>
    <ink-btn
      style="box-shadow: 0 0 5px 1px #ccc; width: 90%; margin: 20px auto;"
      v-for="(item, index) in list"
      :key="index"
      size="large"
      v-text="item.text"
      @click="toastShow(item.type)"
    />
  </div>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'

export default {
  data () {
    return {
      list: [{
        text: 'top',
        type: 0
      },
      {
        text: 'middle',
        type: 1
      },
      {
        text: 'bottom',
        type: 2
      }]
    }
  },
  components: {
    topBar
  },
  methods: {
    toastShow (type) {
      switch (type) {
        case 0:
          this.$toast({
            message: 'top',
            duration: 1000,
            position: 'top'
          })
          break
        case 1:
          this.$toast({
            message: 'middle',
            position: 'middle'
          })
          break
        case 2:
          this.$toast({
            message: 'bottom',
            duration: 500,
            position: 'bottom'
          })
          break
      }
    }
  }
}
</script>
