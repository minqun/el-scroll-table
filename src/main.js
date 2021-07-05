import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue'
import Table from '../dist/index'
// import sTable from '../table/index'
// console.log(Table, sTable)
Vue.use(ElementUI)
Vue.use(Table)
// Vue.use(sTable)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
