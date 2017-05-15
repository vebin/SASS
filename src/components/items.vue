<template>
  <transition name="custom-classes-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
    <all-clue v-if="clueNav == '1' ? true : false"></all-clue>
    <my-clue v-if="clueNav == '0' ? true : false"></my-clue>
  </transition>
</template>
<script>
    import AllClue from './clues/items.vue'
    import MyClue from './clues/myitems.vue'
    import XHR from '../api/service'
    export default {
        components: {
            AllClue,
            MyClue,
        },
        computed: {
            clueNav () {return this.$store.state.clueNav}
        },
        created (){
            this.newMsg()
            setTimeout(() => {
                    this.noticeHots()
            }, 4000)
        },
        methods: {
            noticeHots() {
                let self = this
                let json = {}
                let WX_N_MSG = localStorage.getItem('WX_N_MSG') || 0
                json.pg = 1
                XHR.noticeHot(json)
                .then(function (res) {
                    // console.log(res)
                    if (res.data.state == '1') {
                        if(res.data.body.msgid > WX_N_MSG){
                            localStorage.setItem('WX_N_MSG', res.data.body.msgid)
                            self.$dialog.notify({
                                mes: res.data.body.msgcontent,
                                timeout: 5000
                            })
                        }
                    } else {
                        XHR.isErr(res,self)
                    }
                })
                .catch(function (err) {
                    
                })
            },
            newMsg(){
                let self = this
                let json = {}
                let WX_NEW_MSG = localStorage.getItem('WX_NEW_MSG') || 0
                json.pg = 1
                XHR.lastNot(json)
                .then(function (res) {
                    if (res.data.state == '1') {
                        if(res.data.body > WX_NEW_MSG){
                            self.$store.commit('isRED',true)
                            localStorage.setItem('WX_NEW_MSG', res.data.body)
                        }
                    } else {
                        XHR.isErr(res,self)
                    }
                })
                .catch(function (err) {
                    
                })
            }
        }
    }
</script>
<style>
    
</style>
