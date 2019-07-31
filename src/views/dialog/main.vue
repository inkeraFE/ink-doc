
<template>
  <ink-page class="wrapper">
    <top-bar slot="content" :title="'Dialog'"></top-bar>
    <template slot="content">
      <ink-btn
        style="box-shadow: 0 0 5px 1px #ccc; width: 90%; margin: 20px auto;"
        v-for="(item, index) in list"
        :key="index"
        size="large"
        v-text="item.text"
        @click="dialogShow(item.type)"
      />
    </template>
  </ink-page>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'
import Content from './content.vue'

export default {
  data () {
    return {
      list: [{
        text: 'alert',
        type: 0
      },
      {
        text: 'confirm',
        type: 1
      },
      {
        text: 'prompt',
        type: 2
      }]
    }
  },
  components: {
    topBar
  },
  methods: {
    dialogShow (type) {
      switch (type) {
        case 0:
          this.$dialog.alert({
            isTitle: false,
            title: 'Title',
            children: h => h(Content),
            submit: {
              text: 'Ok',
              event: () => {
                console.log('alert submit')
              }
            }
          })
          break
        case 1:
          this.$dialog.confirm({
            title: 'Title',
            children: h => h(Content),
            clickMaskClose: true,
            cancel: {
              text: 'Cancel',
              event: () => {
                console.log('confirm cancel')
              }
            },
            submit: {
              text: 'Ok',
              event: () => {
                console.log('confirm submit')
              }
            }
          })
          break
        case 2:
          this.$dialog.prompt({
            title: 'Title',
            children: 'Description',
            cancel: {
              text: 'Cancel',
              event: () => {
                console.log('prompt cancel')
              }
            },
            submit: {
              text: 'Ok',
              event: (value) => {
                console.log('prompt submit', value)
              }
            }
          })
          break
      }
    }
  }
}
</script>
