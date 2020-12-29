// vue.config.js
//postcss插件
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
const path = require('path')
const themePath = path.resolve(__dirname, 'src/assets/less/theme.less')

// gzip压缩插件
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  // 选项...
  publicPath: '/',
  outputDir: './www',
  filenameHashing: false, // 生成的静态文件名hash值,去掉以便代码SVN管理
  productionSourceMap: false, // 不需要生产环境的sourcemap
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // 定制主题 直接覆盖变量 样式
          // '@h1c': '#333333',
          // 'text-color': '#111',
          // 'border-color': '#eee'
          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
          hack: `true; @import "${themePath}";`
        }
      },
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 16, //16px/16 => 1rem  320px/16 => 20rem
            propList: ['*']
          })
        ]
      }
    }
  },
  devServer: {
    // 设置主机地址
    host: 'localhost',
    // 设置默认端口
    port: 8080,
    // 设置代理 如果部署在不同域名下 启用
    disableHostCheck: false,
    proxy: {
      '/api': {
        target: 'https://api.o8o8o8.com/Index', //api请求地址
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      return {
        // webpack配置入口
        performance: {
          hints: false // 取消打包时文件大于250KB的报错提示
        },
        externals: {
          // cdn文件配置
          vue: 'Vue',
          vuex: 'Vuex',
          'vue-router': 'VueRouter',
          axios: 'axios'
        },
        plugins: [
          // gzip压缩
          new CompressionPlugin({
            test: /\.(js|css|html|svg)$/,
            threshold: 10240,
            minRatio: 0.8,
            deleteOriginalAssets: false
          })
        ]
      }
    } else {
      // 为开发环境修改配置...
      return {
        // webpack配置入口
        externals: {
          // cdn文件配置
          vue: 'Vue',
          vuex: 'Vuex',
          'vue-router': 'VueRouter',
          axios: 'axios'
        }
      }
    }
  }
}
