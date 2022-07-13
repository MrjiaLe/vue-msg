import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './permissions'
import './styles/reset.scss'
import { install } from '@/utils/components'

import Fragment from 'vue-fragment'

Vue.use(ElementUI)
Vue.use(Fragment.Plugin)
Vue.config.productionTip = false
install(Vue)
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
