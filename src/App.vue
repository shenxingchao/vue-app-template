<template>
  <div id="app">
    <Loading :show="showLoading"></Loading>
    <transition :name="transitionName">
      <keep-alive include="">
        <router-view class="view" :key="$route.fullPath"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
import Loading from './components/Loading.vue'
export default {
  name: 'App',
  components: {
    Loading: Loading
  },
  data() {
    return {
      transitionName: 'slide-left'
    }
  },
  mounted() {},
  computed: {
    showLoading() {
      return this.$store.state.showLoading
    }
  },
  watch: {
    $route(to, from) {
      if (to.meta.index > from.meta.index) {
        this.transitionName = 'slide-left'
      } else {
        this.transitionName = 'slide-right'
      }
    }
  }
}
</script>
<style lang="less" scoped>
#app {
  width: 100%;
  height: 100%;
  position: absolute;
  .view {
    width: 100%;
    height: auto;
    position: absolute;
  }
}
</style>
