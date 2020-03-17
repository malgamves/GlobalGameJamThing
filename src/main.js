import Vue from 'vue'
import App from './App.vue'
import '@/assets/styles/index.css';
import store from './store'

Vue.config.productionTip = false
Vue.config.performance = true;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
