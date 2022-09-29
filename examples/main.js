import Vue from 'vue'
import App from './App.vue'


import '../components/css/popup.scss'
import popup from '../components/lib/popup/index'


Vue.use(popup);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
