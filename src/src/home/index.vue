<template>
  <div>
    <div>
      <mt-header title="主页">
        <router-link slot="left">
          <mt-button icon="back">返回</mt-button>
          <mt-button @click="handleClose">关闭</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>
    <div>
        <ul>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
        </ul>
    </div>

    <div>
          <mt-tabbar v-model="selected">
        <mt-tab-item id="外卖">
          外卖
        </mt-tab-item>
        <mt-tab-item id="订单">
          订单
        </mt-tab-item>
        <mt-tab-item id="发现">
          发现
        </mt-tab-item>
        <mt-tab-item id="我的">
          我的
        </mt-tab-item>
      </mt-tabbar>
    </div>

  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem,Header,Button,Tabbar,TabItem} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

export default {
  data () {
    return {
      msg: 'Hello Vuedfdf22!',
    }
  }
}
</script>

<style>
</style>
