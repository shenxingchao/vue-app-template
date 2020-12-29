import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './axios'
//引入mock.js 模拟数据
import './mock'
//引入rem 根字体设置
import './lib/rem.js'
//导入全局css
import './assets/less/common.less'
//引入懒加载
import { Lazyload } from 'vant'
Vue.use(Lazyload, {
  attempt: 1,
  error: require('./assets/images/default.png'),
  loading: require('./assets/images/default.png')
})
// 导入seo插件
import MetaInfo from 'vue-meta'
Vue.use(MetaInfo)
//取消提示
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//导入滚动条位置
import scrollPostion from '@/lib/scrollPosition'
Vue.prototype.scrollPostion = scrollPostion

//Vue全局方法
Vue.prototype.setLocalStorage = function(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}
Vue.prototype.getLocalStorage = function(key) {
  return JSON.parse(localStorage.getItem(key))
}
Vue.prototype.delLocalStorage = function(key) {
  localStorage.removeItem(key)
}
Vue.prototype.clearLocalStorage = function() {
  localStorage.clear()
}
