import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './utils/rem.js'
import { Select, Option, Input, FormItem, Form, Message, Checkbox } from 'element-ui';
//在main.js中导入定义好的mockApi模块
require('./api/mock')

Vue.use(Select)
Vue.use(Option)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Checkbox)
Vue.prototype.$message = Message


Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
