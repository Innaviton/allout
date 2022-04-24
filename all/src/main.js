<<<<<<< Updated upstream
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueCountdownTimer from 'vuejs-countdown-timer';
Vue.use(VueCountdownTimer);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
=======
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueCountdownTimer from 'vuejs-countdown-timer';
Vue.use(VueCountdownTimer);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
>>>>>>> Stashed changes
