import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vant);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
