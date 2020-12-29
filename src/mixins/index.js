let PUBLIC = {
  data() {
    return {
      baseURL:
        process.env.NODE_ENV === 'production'
          ? 'http://api.xxxx.com/'
          : 'http://192.168.1.104/'
    }
  },
  methods: {}
}
export { PUBLIC }
