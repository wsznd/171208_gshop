// 路由配置文件
import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'



// 使用插件 
Vue.use(VueRouter)

// 暴露路由
export default new VueRouter({
  routes:[
    {
        path:'/msite',
        component:Msite,
        meta:{
          showFooter:true
        }
    },
    {
        path:'/order',
        component:Order,
        meta:{
          showFooter:true
        }
    },
    {
        path:'/profile',
        component:Profile,
        meta:{
          showFooter:true
        }
    },
    {
        path:'/search',
        component:Search,
        meta:{
          showFooter:true
        }
    },
    { 
      path:'/login',
      component:Login
    }   
  ]
})