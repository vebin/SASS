<template>
    <div class="welcome">
        <img :src="welcomeImg" alt="">
    </div>
</template>
<script>
import welcomeImg from '../../assets/welcome.jpg'
import XHR from '../../api/service'
import axios from 'axios'
export default {
    data() {
        return {
            welcomeImg:welcomeImg,
            hide: false
        }
    },
    created () {
        let ADDRS = JSON.parse(localStorage.getItem('WX_ADDRS')) || ''
        let ADDRSALL = JSON.parse(localStorage.getItem('WX_ADDRSALL')) || ''
        let CARTYPE = JSON.parse(localStorage.getItem('WX_CARTYPE')) || ''
        if (ADDRS !== '' && CARTYPE !== '' && ADDRSALL !== '') {
            setTimeout(() => {
                this.initView()
            }, 800)
        } else {
            this.getDATA()
        }
    },
    methods: {
        QueryStringByName(name){
           let result=window.location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"))
           if(result == null || result.length < 0)
             {
                return ''
             }
            return result[1]
        },
        initView(){
            if(this.QueryStringByName('vc').length > 0){
                let sts = this.QueryStringByName('st')
                if(sts > 0){
                    if(sts == '4004'){
                        this.jump({path:'/m/app/step3',query:{id:2}})
                        return false
                    } else {
                        this.jump({path:'/m/app/step3',query:{id:3}})
                        return false
                    }
                }
                this.jump('/m/app/welcome')
                return false
            }
            if(this.QueryStringByName('uc').length > 0){
                this.jump('/clue')
            }
        },
        getDATA(){
            let self = this
            XHR.getAST()
            .then(axios.spread(function (ADDRS, CARTYPE, ADDR ) {
                if (ADDRS.data.state == '1') {
                    localStorage.setItem('WX_ADDRS',JSON.stringify(ADDRS.data))
                } else {
                    self.toastError(ADDRS.data.errmsg)
                    return false
                }
                if (CARTYPE.data.state == '1') {
                    localStorage.setItem('WX_CARTYPE',JSON.stringify(CARTYPE.data))
                } else {
                    self.toastError(CARTYPE.data.errmsg)
                    return false
                }
                
                localStorage.setItem('WX_ADDRSALL',JSON.stringify(ADDR.data))
                
                setTimeout(() => {
                    self.initView()
                }, 800)
            }))
            .catch(function (err, errs,aderr) {
                // console.log(err)
                // self.isNull = false
            })
        },
        toastError(txt) {
            this.$dialog.toast({
                mes: txt,
                timeout: 3000,
                icon: 'error',
                callback: () => {
                    this.$dialog.alert({mes: '请检查网络'})
                }
            })
        },
    }
}
</script>
<style>
.welcome {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 6;
    background: #000b17;
    animation: welcome 0.5s;
    transition: 0.3s;
    -webkit-transition: 0.3s;
}

.welcome img {
    width: 100%;
}
.welcome.hide{
    opacity: 0;
    visibility: hidden;
}
</style>
