export default {
  methods: {
    jump (to) {
      if (this.$router) {
        this.$router.push(to)
      }
    },
    back () {
        if (this.$router) {
            this.$router.back()
        }
    },
    seek (tel,isno) {
      if (!/^1[3|4|5|7|8]\d{9}$/.test(tel)) {
        this.$dialog.notify({
            mes: '手机号码有误～请修改',
            timeout: 4000,
            // callback: () => {}
        })
        return false
      }

      return true
    }
  }
}
