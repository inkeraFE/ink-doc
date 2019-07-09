import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: () => import('@/views/home'),
      children: [{
        path: '',
        name: 'home',
        component: () => import('@/views/home/main.vue'),
        meta: {
          name: '首页'
        }
      }]
    },
    {
      path: '/button',
      name: '',
      component: () => import('@/views/button'),
      children: [{
        path: '',
        name: 'button',
        component: () => import('@/views/button/main.vue'),
        meta: {
          name: 'button'
        }
      }]
    },
    {
      path: '/flex',
      name: '',
      component: () => import('@/views/flex'),
      children: [{
        path: '',
        name: 'flex',
        component: () => import('@/views/flex/main.vue'),
        meta: {
          name: 'flex'
        }
      }]
    }
  ]
})
