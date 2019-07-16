import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home.vue'
import search from '@/pages/search/search.vue'
import order from '../pages/order/order.vue'
import mine from '../pages/mine/mine.vue'
import goodsDetail from '../pages/home/goodsDetail.vue'
import login from '../pages/mine/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      name: 'search',
      component: search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      name: 'order',
      component: order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/goodsdetail',
      name: 'goodsDetail',
      component: goodsDetail
    },
  ]
})
