import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueScrollactive from 'vue-scrollactive';
import 'material-design-icons/iconfont/material-icons.css'

Vue.use(VueScrollactive);
Vue.config.productionTip = false;

// Filters
Vue.filter('snippet', function (value) {
  return value.length > 200 ? `${value.slice(0, 200)}...` : value
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');
