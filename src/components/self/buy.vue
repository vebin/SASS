<template>
  <div class="cl-box flex-wrap col-flex">
      <div class="ms-g-box">
          <div class="ms-g-item flex-wrap row-flex ms-g-nobor">
              <div class="ms-gx-lft ico-sell"></div>
              <div class="page ms-g-rit flex-wrap row-flex ms-cell-arrow"
                  @click="jump('/self/buy/record')">充值记录</div>
          </div>
      </div>
      <div class="sn-title">选择卡豆充值数量</div>
      <div class="sn-fl-box flex-wrap row-flex">
          <div class="sn-item snactive">300</div>
          <div class="sn-item">300</div>
          <div class="sn-item">300</div>
          <div class="sn-item">300</div>
          <div class="sn-item">300</div>
      </div>
      <div class="ms-g-box">
          <div class="ms-g-item flex-wrap row-flex ms-g-nobor">
              <div>支付金额</div>
              <div class="page ms-gxs-rit flex-wrap row-flex"><i>100.00</i>元</div>
          </div>
      </div>
      <div class="ms-g-box">
          <yd-button size="large" type="primary">立即充值</yd-button>
          <div class="flex-wrap row-flex so-swif">
            <yd-switch v-model="switchs"></yd-switch>
            <div class="mb-xie" @click.native="showMsg = true">我同意《<i>卡豆充值协议</i>》</div>
          </div>
      </div>
      <yd-popup v-model="showMsg" position="center" width="80%">
        
        <yd-button size="large" type="hollow" @click.native="showMsg = false">关闭</yd-button>
      </yd-popup>
  </div>
</template>
<script>
    export default {
      data(){
        return {
          switchs: false,
          showMsg: false,
        }
      },
      methods: {
        hideMsg () { this.showMsg = !this.showMsg},
      }
    }
</script>

<style lang="less" scoped>
.cl-box{width: 100%; height: 100%;}

    .fl-btns{ height: 0.9rem;line-height: 0.9rem; font-size: 0.28rem; color: #333; text-align: center;background-color: #eee;}
    .fl-btn-rt{ background-color:#00b800;color: #fff; }
    .sn-title{font-size: 0.3rem;padding-left: 0.3rem; height: 0.8rem;line-height: 0.8rem;color: #333; background-color: #fff; margin-top: 0.2rem;}
    .sn-fl-box{padding-left: 0.3rem; border-bottom: 0.02rem solid #eee; background-color: #fff;}
    .sn-item{width: 30%; height: 0.7rem; line-height: 0.7rem; text-align: center;font-size: 0.32rem; color: #666;border:0.02rem solid #999; border-radius: 4px; margin-right: 3%; margin-bottom: 0.3rem;overflow: hidden; text-overflow:ellipsis; white-space: nowrap;}

.sn-item:before{ content: '\e602'; font-family:'iconfont'; margin-right: 0.1rem; color: #ff9800;}

.ms-gxs-rit{justify-content:flex-end; i{color: red; padding-right: 0.2rem;}}
    .snactive{border-color: #00b800; color: #fff; background-color: #00b800;}
    .snactive:before{color: #fff;}

.so-swif{justify-content:flex-end; height: 1rem; align-items:center;}
.mb-xie{ color: #666; font-size: 0.24rem;  i{color: red;}}
    .m-switch:after{
      width: 0.3rem;
      height: 0.3rem;
    }
    .m-switch{width: 0.6rem;height: 0.34rem;margin-right:0.34rem;}
    .m-switch:before{
      height: 0.3rem;
      width: 0.6rem;
    }
    .m-switch:checked:after{
      -webkit-transform: translateX(0.29rem);
      transform: translateX(0.29rem);
    }
</style>
