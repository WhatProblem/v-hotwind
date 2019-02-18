import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/view/home/home'
import Sorts from '@/view/sorts/sorts'
import Cart from '@/view/cart/cart'
import Profile from '@/view/profile/profile'
import GoodList from '@/view/goodList/goodList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/goodList',
      name: 'GoodList',
      component: GoodList
    },
    {
      path: '/sorts',
      name: 'Sorts',
      component: Sorts
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
