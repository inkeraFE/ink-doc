
<template>
  <div class="wrapper">
    <top-bar :title="'Popup'"></top-bar>
    <ink-flex>
      <ink-btn
        style="box-shadow: 0 0 5px 1px #ccc; width: 90%; margin: 20px auto;"
        @click.native.prevent="popupShow()"
      >Popup</ink-btn>
    </ink-flex>
  </div>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'
import content from './content.vue'

export default {
  components: {
    topBar
  },
  methods: {
    popupShow () {
      this.$popup.render({
        height: '30%',
        bottom: true,
        clickMaskClose: true,
        children: h => h(content)
      })
    }
  }
}
</script>
