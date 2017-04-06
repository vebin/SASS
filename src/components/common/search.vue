<template>
  <div id="search">
    <div class="weui-search-bar" id="search_bar">
      <form class="weui-search-bar__form">
        <div class="weui-search-bar__box">
          <input type="search" v-model="searchIpt" class="weui-search-bar__input" id="search_input" placeholder="搜索"/>
        </div>
        <label for="search_input" class="weui-search-bar__label" id="search_text">
            <i class="weui-icon-search"></i>
            <span>搜索</span>
        </label>
      </form>
    </div>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                searchIpt: ""
            }
        },
        methods: {
            searchClear() {
                this.searchIpt = ""
            }
        }
    }
</script>
<style>
.weui-search-bar {
    position: relative;
    padding: 0.16rem 0.2rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    box-sizing: border-box;
    background-color: #efeff4
}

.weui-search-bar:before {
    top: 0;
    border-top: 0.02rem solid #d7d6dc;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5)
}

.weui-search-bar:after,
.weui-search-bar:before {
    content: " ";
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    color: #d7d6dc
}

.weui-search-bar:after {
    bottom: 0;
    border-bottom: 0.02rem solid #d7d6dc;
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5)
}

.weui-search-bar.weui-search-bar_focusing .weui-search-bar__cancel-btn {
    display: block
}

.weui-search-bar.weui-search-bar_focusing .weui-search-bar__label {
    display: none
}

.weui-search-bar__form {
    position: relative;
    -webkit-box-flex: 1;
    -webkit-flex: auto;
    flex: auto;
    background-color: #efeff4
}

.weui-search-bar__form:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 200%;
    height: 200%;
    -webkit-transform: scale(.5);
    transform: scale(.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    border-radius: 10px;
    border: 1px solid #e6e6ea;
    box-sizing: border-box;
    background: #fff
}

.weui-search-bar__box {
    position: relative;
    padding-left: 30px;
    padding-right: 30px;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    z-index: 1
}

.weui-search-bar__box .weui-search-bar__input {
    padding: 4px 0;
    width: 100%;
    height: 1.42857143em;
    border: 0;
    font-size: 14px;
    line-height: 1.42857143em;
    box-sizing: content-box;
    background: transparent
}

.weui-search-bar__box .weui-search-bar__input:focus {
    outline: none
}

.weui-search-bar__box .weui-icon-search {
    position: absolute;
    left: 10px;
    top: 0;
    line-height: 28px
}

.weui-search-bar__box .weui-icon-clear {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 10px;
    line-height: 28px
}

.weui-search-bar__label {
    position: absolute;
    top: 1px;
    right: 1px;
    bottom: 1px;
    left: 1px;
    z-index: 2;
    border-radius: 3px;
    text-align: center;
    color: #9b9b9b;
    background: #fff;
    padding-top:0.08rem;
}

.weui-search-bar__label span {
    display: inline-block;
    font-size: 0.28rem;
    vertical-align: middle;
    
}

.weui-search-bar__label .weui-icon-search {
    margin-right: 0.1rem;
    position: relative;
    top: 0.04rem;
}

.weui-search-bar__cancel-btn {
    display: none;
    margin-left: 10px;
    line-height: 28px;
    color: #09bb07;
    white-space: nowrap
}

.weui-search-bar__input:not(:valid)~.weui-icon-clear {
    display: none
}
.weui-icon-search:before {
    content:'\e6d7'; font-family: 'iconfont'; font-size: 0.3rem;
}
</style>
