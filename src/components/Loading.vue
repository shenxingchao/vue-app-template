<style lang="less" scoped>
.loading_mask {
  width: 100%;
  height: 100vh;
  background: #ffffff;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99999999;
  .sk-spinner-three-bounce.sk-spinner {
    width: 3.9rem;
    height: 3.9rem;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    text-align: center;
  }

  .sk-spinner-three-bounce div {
    width: 1rem;
    height: 1rem;
    background-color: @theme;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-threeBounceDelay 1.4s infinite ease-in-out;
    animation: sk-threeBounceDelay 1.4s infinite ease-in-out;
    /* Prevent first frame from flickering when animation starts */
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .sk-spinner-three-bounce .sk-bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .sk-spinner-three-bounce .sk-bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-threeBounceDelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @keyframes sk-threeBounceDelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
}
</style>
<template>
  <div class="loading_mask" v-if="show">
    <div class="sk-spinner sk-spinner-three-bounce">
      <div class="sk-bounce1"></div>
      <div class="sk-bounce2"></div>
      <div class="sk-bounce3"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Loading',
  data() {
    return {}
  },
  props: {
    show: {
      //是否显示控件 默认不显示
      type: Boolean,
      default: false
    }
  },
  mounted() {},
  methods: {}
}
</script>
