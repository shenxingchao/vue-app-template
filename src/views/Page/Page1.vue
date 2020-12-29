<template>
  <div class="Page1">
    <div class="Page1Box">
      页面1
      <div @click="$router.push('/')">返回首页</div>
    </div>
  </div>
</template>
<script>
import {} from 'vant'
export default {
  name: 'Page1',
  metaInfo() {
    return {
      title: 'Page1' // set a title
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
@theme: #108ee9;
@h1c: #333333;
@h2c: #555555;
@h3c: #777777;
@h4c: #aaaaaa;
@h5c: #cccccc;
@red: #ff0000;
@orange: #ff8d1a;
@redDeep: #ba0707;
.Page1 {
  min-height: 100vh;
  background: #f3f3f3;
  .Page1Box {
    padding: 1rem;
  }
}
</style>
