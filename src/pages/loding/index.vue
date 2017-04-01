<style lang="less" scoped>
	
</style>
<template>
	<div class="jump-cover">
    <div class="loading visible">
        <span class="loading-ring"> </span>
    </div>
  </div>
</template>
<script>
  import XHR from '../../api/service'
  export default {
    data() {
      return {
        toastShow: false,
        toastTxt:'',
        alertShow: false,
        alertTxt:'',
      }
    },
    mounted () {
      let self = this
      XHR.getWxConfig()
      .then(function (res) {
        // self.showToast('')
        // console.log(res)
        if (res.data.status === 1) {
          localStorage.setItem('WX_CONFIGXS',JSON.stringify(res.data.data))
          self.$router.push('home')
        } else {
          alert('微信SDK获取失败，可能无法上传图片')
          self.$router.push('home')
        }
      })
      .catch(function (err) {
        // self.showAlert('')
        
      })
    },
    methods:{
        showToast(txt) {
          let self = this
          self.toastShow = true
          self.toastTxt = txt
          setTimeout(function() {
            self.toastShow = false
            self.toastTxt = ''
          },3000)
        },
        showAlert(txt) {
          let self = this
          self.alertShow = true
          self.alertTxt = txt
          setTimeout(function() {
            self.alertShow = false
            self.alertTxt = ''
          },3000)
        },
    }
  }
</script>
