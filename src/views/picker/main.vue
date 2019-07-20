
<template>
  <div class="wrapper">
    <top-bar :title="'Picker'"></top-bar>
    <ink-flex>
      <ink-btn
        style="box-shadow: 0 0 5px 1px #ccc; width: 90%; margin: 20px auto;"
        @click.native.prevent="pickerShow()"
      >Picker</ink-btn>
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
    pickerShow () {
      const options = {
        data: [{
          text: 1996,
          id: 1,
          childrens: [
            {
              text: 1,
              id: 11
            },
            {
              text: 2,
              id: 12
            }
          ]
        },
        {
          text: 1997,
          id: 2,
          childrens: [
            {
              text: 1,
              id: 21
            },
            {
              text: 2,
              id: 22
            }
          ]
        },
        {
          text: 1998,
          id: 3,
          childrens: [
            {
              text: 1,
              id: 31
            },
            {
              text: 2,
              id: 32
            }
          ]
        }],
        selected: [{
          text: 1997,
          id: 2,
          childrens: [
            {
              text: 1,
              id: 21
            },
            {
              text: 2,
              id: 22
            }
          ]
        },
        {
          text: 1,
          id: 21
        }],
        onSubmit: val => { console.log(val) }
      }
      this.$picker.render(options)
    }
  }
}
</script>
