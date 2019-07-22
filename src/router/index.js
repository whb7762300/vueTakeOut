import Vue from 'vue'
import Router from 'vue-router'
//路由懒加载模式
const home = () => import ('@/pages/home/home.vue')
const search = () => import('@/pages/search/search.vue')
const order = () => import('../pages/order/order.vue')
const mine = () => import('../pages/mine/mine.vue')
import store from '../pages/home/Store.vue'
import login from '../pages/mine/Login.vue'
import comment from '../pages/home/store/Comment.vue'
import orderFood from '../pages/home/store/Order.vue'
import storeInfo from '../pages/home/store/StoreInfo.vue'

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
      path: '/store',
      name: 'store',
      component: store,
      children: [{
        path: 'orderfood',
        component: orderFood
      },
        {
          path: 'comment',
          component: comment
        },
        {
          path: 'storeinfo',
          component: storeInfo
        },]
    },
  ]
})
