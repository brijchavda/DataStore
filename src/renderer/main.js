import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import faker from 'faker'

import App from './App'
import router from './router'
import store from './store'
import ipcRendererInitial from './renderIpc'
if (!process.env.IS_WEB) {
}
Vue.prototype.$faker = faker
Vue.prototype.$electron = require('electron')
Vue.config.productionTip = false
Vue.use(Vuetify)
ipcRendererInitial(store)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
