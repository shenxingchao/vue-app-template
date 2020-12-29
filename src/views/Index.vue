<template>
  <div class="Index">
    <div @click="$router.push('/Page/Page1')">{{ test }}</div>
    <div class="row" v-for="(item, index) in doc" :key="index">
      <div class="cat_name">{{ item.cat_name }}</div>
      <div class="son">
        <div
          v-for="val in item.son"
          :key="val.id"
          @click="clickItem(val.url)"
          class="doc_name"
        >
          {{ val.doc_name }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getDocLst, getPost } from '@/api/index'
export default {
  name: 'Index',
  metaInfo() {
    return {
      title: 'vueAppTeamplate' // set a title
    }
  },
  data() {
    return {
      test: 'Template',
      doc: []
    }
  },
  mounted() {
    this.getDoc()
    this.getPostData()
    // setTimeout(() => {
    //   this.$store.commit('updateShowLoading', false)
    // }, 1500)
  },
  methods: {
    getDoc: function() {
      getDocLst({})
        .then(res => {
          if (res.data.code === 0) {
            this.doc = res.data.data
          }
        })
        .catch(() => {})
    },
    /**
     * 文档链接
     */
    clickItem: function(url) {
      window.open(url)
    },
    getPostData: function() {
      getPost({})
        .then(res => {
          console.log(res)
        })
        .catch(() => {})
    }
  }
}
</script>
<style lang="less" scoped>
.Index {
  font-size: 1rem;
  .row {
    margin-top: 2rem;
    .cat_name {
      font-size: 1.2rem;
      font-weight: bold;
    }
    .son {
      display: flex;
      flex-wrap: wrap;
      .doc_name {
        font-size: 1rem;
        color: @h3c;
        padding: 0.2rem;
        border: @border;
        border-radius: 0.2rem;
        margin: 0.2rem;
      }
    }
  }
}
</style>
