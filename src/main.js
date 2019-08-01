import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/common.css'
import '@/assets/css/iconfont.css'
import inkUi from 'ink-ui'
import './registerServiceWorker'

Vue.use(inkUi)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
