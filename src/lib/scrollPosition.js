const doc = document
let cache = {}
export default {
  //保存滚动条位置
  save(path) {
    cache[path] = doc.documentElement.scrollTop || doc.body.scrollTop
  },
  //重置滚动条位置
  get() {
    const path = this.$route.path
    this.$nextTick(() => {
      doc.documentElement.scrollTop = doc.body.scrollTop = cache[path] || 0
    })
  },
  //返回顶部
  goTop() {
    this.$nextTick(() => {
      doc.documentElement.scrollTop = doc.body.scrollTop = 0
    })
  }
}
