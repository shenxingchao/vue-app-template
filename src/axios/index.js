import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from '@/router'
import store from '@/store'
//配置axios
const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://api.o8o8o8.com/index/api'
    : '/api'

const request = axios.create({
  baseURL: baseURL, //使用代理
  timeout: 5000,
  headers: {
    post: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  },
  showLoading: true //是否显示全局加载中状态
})

request.list = []
//全局加载中显示隐藏方法 以及用计数来使请求合并
let requestCount = 0
let showLoading = function() {
  if (requestCount == 0) {
    store.commit('updateShowLoading', true)
  }
  requestCount++
}
let hideLoading = function() {
  setTimeout(() => {
    //原作者的BUG修复
    if (requestCount <= 0) {
      requestCount = 0
      return
    }
    requestCount--
    if (requestCount == 0) {
      setTimeout(() => {
        store.commit('updateShowLoading', false)
      }, 200)
    }
  }, 0)
}

/* 请求拦截器 */
request.interceptors.request.use(
  function(config) {
    // 每次请求时会从localStorage中获取token
    if (router.currentRoute.meta.requireAuth) {
      // 登录权限才附加header token
      let token = JSON.parse(localStorage.getItem('token'))
      if (token) {
        config.headers.common['Authorization'] = `t${token}`
      }
    }
    if (config.showLoading) {
      showLoading()
    }
    // 记录该条请求
    const url = config.url
    // 把cancel放在request.list[url]下面
    config.cancelToken = new axios.CancelToken(
      cancel => (request.list[url] = { cancel })
    )
    return config
  },
  function(error) {
    hideLoading()
    return Promise.reject(error)
  }
)
request.interceptors.response.use(
  function(response) {
    if (response.headers.code === '40001') {
      localStorage.clear()
      //刷新重新授权
      window.location.reload()
    }
    if (response.headers.token) {
      localStorage.setItem('token', JSON.stringify(response.headers.token))
    }
    hideLoading()
    return response
  },
  function(error) {
    hideLoading()
    return Promise.reject(error)
  }
)

Vue.use(VueAxios, request)
export default request
