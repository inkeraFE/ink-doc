import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const components = [
  'button',
  'flex',
  'switch',
  'radio',
  'progress',
  'dialog',
  'popup',
  'action-sheet',
  'toast',
  'picker',
  'header',
  'carousel',
  'tabs',
  'drawer',
  'pull-down',
  'slide',
  'search-bar',
  'loading'
]

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: () => import('@/views/home'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/home/main.vue'),
          meta: {
            name: '首页'
          }
        }
      ]
    },
    ...components.map(item => ({
      path: `/${item}`,
      name: '',
      component: () => import('@/components/layout.vue'),
      children: [{
        path: '',
        name: item,
        component: () => import(`@/views/${item}/main.vue`),
        meta: {
          name: item
        }
      }]
    }))
  ]
})
