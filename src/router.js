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
    },
    {
      path: '/popup',
      name: '',
      component: () => import('@/views/popup'),
      children: [{
        path: '',
        name: 'popup',
        component: () => import('@/views/popup/main.vue'),
        meta: {
          name: 'popup'
        }
      }]
    },
    {
      path: '/action-sheet',
      name: '',
      component: () => import('@/views/action-sheet'),
      children: [{
        path: '',
        name: 'action-sheet',
        component: () => import('@/views/action-sheet/main.vue'),
        meta: {
          name: 'action-sheet'
        }
      }]
    },
    {
      path: '/toast',
      name: '',
      component: () => import('@/views/toast'),
      children: [{
        path: '',
        name: 'toast',
        component: () => import('@/views/toast/main.vue'),
        meta: {
          name: 'toast'
        }
      }]
    },
    {
      path: '/picker',
      name: '',
      component: () => import('@/views/picker'),
      children: [{
        path: '',
        name: 'picker',
        component: () => import('@/views/picker/main.vue'),
        meta: {
          name: 'picker'
        }
      }]
    },
    {
      path: '/header',
      name: '',
      component: () => import('@/views/header'),
      children: [{
        path: '',
        name: 'header',
        component: () => import('@/views/header/main.vue'),
        meta: {
          name: 'header'
        }
      }]
    },
    {
      path: '/carousel',
      name: '',
      component: () => import('@/views/carousel'),
      children: [{
        path: '',
        name: 'carousel',
        component: () => import('@/views/carousel/main.vue'),
        meta: {
          name: 'carousel'
        }
      }]
    },
    {
      path: '/tabs',
      name: '',
      component: () => import('@/views/tabs'),
      children: [{
        path: '',
        name: 'tabs',
        component: () => import('@/views/tabs/main.vue'),
        meta: {
          name: 'tabs'
        }
      }]
    },
    {
      path: '/drawer',
      name: '',
      component: () => import('@/views/drawer'),
      children: [{
        path: '',
        name: 'drawer',
        component: () => import('@/views/drawer/main.vue'),
        meta: {
          name: 'drawer'
        }
      }]
    },
    {
      path: '/pull-down',
      name: '',
      component: () => import('@/views/pull-down'),
      children: [{
        path: '',
        name: 'pull-down',
        component: () => import('@/views/pull-down/main.vue'),
        meta: {
          name: 'pull-down'
        }
      }]
    }
  ]
})
