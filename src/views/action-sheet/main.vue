
<template>
  <div class="wrapper">
    <top-bar :title="'Action Sheet'"></top-bar>
    <ink-flex>
      <ink-btn
        style="box-shadow: 0 0 5px 1px #ccc; width: 90%; margin: 20px auto;"
        @click.native.prevent="actionSheetShow()"
      >Action Sheet</ink-btn>
    </ink-flex>
  </div>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'

export default {
  components: {
    topBar
  },
  methods: {
    actionSheetShow () {
      console.log(this.$actionSheet)
      this.$actionSheet.render({
        list: [
          { text: '在新标签页打开', id: 1 },
          { text: '加入阅读列表', id: 2 },
          { text: '拷贝', id: 3 }
        ],
        cancelBtn: { text: '取消' },
        onCancel: () => console.log('cancel'),
        onSelect: (el, index) => console.log(el, index)
      })
    }
  }
}
</script>
