<template>
  <div class="Temp">
    <div class="TempBox"></div>
  </div>
</template>
<script>
import { PUBLIC } from '@/mixins'
import { Toast, Swipe, SwipeItem, Popup } from 'vant'
export default {
  name: 'Temp',
  mixins: [PUBLIC],
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Popup.name]: Popup
  },
  metaInfo() {
    return {
      title: '' // set a title
    }
  },
  data() {
    return {}
  },
  mounted() {},
  activated() {
    this.scrollPostion.goTop.call(this)
  },
  methods: {}
}
</script>
<style lang="less" scoped>
.Temp {
  min-height: 100vh;
  background: #f3f3f3;
  .TempBox {
    padding: 1rem;
  }
}
</style>
