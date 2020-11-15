import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueScrollactive from 'vue-scrollactive';
import 'material-design-icons/iconfont/material-icons.css'
import Vuetify from "vuetify";
import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(VueScrollactive);
Vue.config.productionTip = false;

// Filters
Vue.filter('snippet', function (value) {
    return value.length > 190 ? `${value.slice(0, 190)}...` : value
})

let app

firebase.auth().onAuthStateChanged(user => {
    if (!app) {
        app = new Vue({
            router,
            vuetify,
            render: h => h(App)
        }).$mount('#app');
    }
})

