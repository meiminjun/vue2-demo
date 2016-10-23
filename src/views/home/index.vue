<template>
  <div class="page-home">
    <mt-header title="平安银行">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <router-link to="/login" slot="right">
        <mt-button>登录</mt-button>
      </router-link>
    </mt-header>
    <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="外卖">
          <div>
          <mt-swipe :auto="4000">
            <mt-swipe-item>
              <img src="http://img2.pingan.com/app_images/pingan/pa_2016/v2/rmhd_01.jpg" width="100%" height="360" alt="活期盈">
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="http://img2.pingan.com/app_images/pingan/pa_2016/v2/rmhd_03.jpg" width="100%" height="360" alt="平安寿险">
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="http://img2.pingan.com/app_images/pingan/pa_2016/v2/rmhd_02.jpg" width="100%" height="360" alt="平安车险">
            </mt-swipe-item>
          </mt-swipe>
        </div>

          <mt-cell v-for="article in articles" :title=article.title />
        </mt-tab-container-item>
        <mt-tab-container-item id="订单">
          <mt-cell v-for="n in 5" :title="'订单 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="发现">
          <mt-cell v-for="n in 7" :title="'发现 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="我的">
          <div class="page-part">
            <mt-cell v-for="n in 12" :title="'我的 ' + n" />
          </div>
          <router-link to="/">
            <mt-button type="danger" size="large">退出</mt-button>
          </router-link>
        </mt-tab-container-item>
      </mt-tab-container>

      <mt-tabbar v-model="selected" fixed>

      <mt-tab-item id="外卖">
        <img slot="icon" src="../../assets/image/home-selected.png">
        推荐
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="../../assets/image/find-selected.png">
        发现
      </mt-tab-item>

      <mt-tab-item id="我的">
        <img slot="icon" src="../../assets/image/me-selected.png">
        我的
      </mt-tab-item>
    </mt-tabbar>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        articles: [],
        selected:'外卖',
         wrapperHeight: 0
      };
    },
    created() {

    },
    mounted: function() {
        this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=30', {}, {
            headers: {
            },
            emulateJSON: true
        }).then(function(response) {
            // 这里是处理正确的回调
            this.articles = response.data.subjects
            // this.articles = response.data["subjects"] 也可以
        }, function(response) {
            // 这里是处理错误的回调
            console.log(response)
        });
    }
  };
</script>

<style lang="stylus">
.page-home
  .mint-tab-container
    margin-bottom 55px
  .mint-swipe
    height 200px
    color #fff
    font-size 30px
    text-align center
  .mint-swipe-item
    line-height 200px
  .slide1
    background-color #0089dc
    color #fff
  .slide2
    background-color #ffd705
    color #000
  .slide3
    background-color #ff2d4b
    color #fff
</style>
