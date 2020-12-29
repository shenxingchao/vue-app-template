import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from '@/axios'
import scrollPosition from '@/lib/scrollPosition'
import { Toast } from 'vant'
Vue.use(VueRouter)

// 定义路由规则
const RouterCopy = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: resolve => require(['@/views/Index'], resolve),
      meta: { requireAuth: false, index: 1 }
    },
    {
      path: '/Page',
      name: 'Page',
      component: resolve => require(['@/views/Page'], resolve),
      children: [
        {
          path: 'Page1',
          name: 'Page1',
          component: resolve => require(['@/views/Page/Page1'], resolve),
          meta: { requireAuth: true, index: 2 }
        }
      ]
    },
    {
      // 404重定向
      path: '*',
      redirect: '/'
    }
  ]
})
// 路由前置钩子
RouterCopy.beforeEach(function(to, from, next) {
  //保存滚动条位置
  scrollPosition.save(from.path)
  for (let key in axios.list) {
    axios.list[key].cancel('取消请求')
    delete axios.list[key]
  }
  next()
})
// 路由前置钩子
RouterCopy.beforeEach(function(to, from, next) {
  if (!to.meta.requireAuth) {
    //不需要验证登录的路由
    next()
  } else {
    //需要验证登录 此处省略代码
    /*  if (typeof to.query.token !== 'undefined') {
      //第三方登录返回token 截取并存储
      //设置登录状态
      localStorage.setItem('token', JSON.stringify(to.query.token))
    }
    if (!JSON.parse(localStorage.getItem('token'))) {
      //跳转授权页
      let ua = window.navigator.userAgent.toLowerCase()
      let baseURL = window.location.href.split('#')[0]
      if (!baseURL) return false
      //回调页面
      let redirect_url = baseURL + '#' + to.fullPath
      if (
        ua.match(/MicroMessenger/i) &&
        ua.match(/MicroMessenger/i)[0] === 'micromessenger'
      ) {
        window.location.href =
          'http://www.lyqqgzh.com/index.php/wechat/oauth/wechat_login?redirect_url=' +
          encodeURIComponent(redirect_url)
        return false
      } else {
        Toast.fail({ message: '请在微信客户端打开链接', duration: 0 })
        return false
      }
    } */
    next()
  }
})
// 路由后置钩子
RouterCopy.afterEach(function() {})
//路由返回方法
VueRouter.prototype.goBack = function() {
  this.isBack = true
  this.go(-1)
}
export default RouterCopy
