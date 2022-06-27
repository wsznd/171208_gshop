//  入口文件
//  引入App
import Vue from 'vue'
import App from './App'
// 映射路由器
import router from './router'
import stylus from './common/stylus/mixins.styl'


new Vue({
  el: '#app',
  render: h => h(App),
  // 配置路由器
  router,
})

