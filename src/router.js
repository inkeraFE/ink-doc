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
    },
    {
      path: '/switch',
      name: '',
      component: () => import('@/views/switch'),
      children: [{
        path: '',
        name: 'switch',
        component: () => import('@/views/switch/main.vue'),
        meta: {
          name: 'switch'
        }
      }]
    },
    {
      path: '/radio',
      name: '',
      component: () => import('@/views/radio'),
      children: [{
        path: '',
        name: 'radio',
        component: () => import('@/views/radio/main.vue'),
        meta: {
          name: 'radio'
        }
      }]
    },
    {
      path: '/loading',
      name: '',
      component: () => import('@/views/loading'),
      children: [{
        path: '',
        name: 'loading',
        component: () => import('@/views/loading/main.vue'),
        meta: {
          name: 'loading'
        }
      }]
    },
    {
      path: '/progress',
      name: '',
      component: () => import('@/views/progress'),
      children: [{
        path: '',
        name: 'progress',
        component: () => import('@/views/progress/main.vue'),
        meta: {
          name: 'progress'
        }
      }]
    },
    {
      path: '/dialog',
      name: '',
      component: () => import('@/views/dialog'),
      children: [{
        path: '',
        name: 'dialog',
        component: () => import('@/views/dialog/main.vue'),
        meta: {
          name: 'dialog'
        }
      }]
    }
  ]
})
