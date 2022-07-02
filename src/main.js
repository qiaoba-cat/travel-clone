// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 移动端click事件300毫秒延迟的问题
import fastclick from 'fastclick'

import App from './App.vue'
import router from './router'

// 重置像素
import './assets/styles/reset.css'
// 移动端解决1像素边框的问题
import './assets/styles/border.css'
// 引入iconfont
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastclick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
