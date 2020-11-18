import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import 'material-design-icons/iconfont/material-icons.css'
// import Vuetify from "vuetify";
import firebase from 'firebase/app'
import 'firebase/auth'
import {TiptapVuetifyPlugin} from 'tiptap-vuetify'
import 'tiptap-vuetify/dist/main.css'

Vue.config.productionTip = false;

Vue.use(TiptapVuetifyPlugin, {
    vuetify,
    iconsGroup: 'mdi'
})
// Filters
Vue.filter('snippet', function (value) {
    return value.length > 222 ? `${value.slice(0, 222)}...` : value
})

Vue.filter('titleSnippet', function (value) {
    return value.length > 42 ? `${value.slice(0, 42)}...` : value
})

Vue.filter('stripHTML', function (content) {
    return content.replace(/<\/?[^>]+>/ig, " ");
})

//Mixins
Vue.mixin({
    methods: {
        formattedDateTime(timestamp) {
            return `${
                new Date(timestamp).toLocaleDateString(
                    'cs',
                    {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    }
                )
            }, ${
                new Date(timestamp).toLocaleTimeString(
                    'cs',
                    {
                        hour: '2-digit',
                        minute: '2-digit'
                    }
                )
            }`
        },

        formattedDate(timestamp) {
            return `${
                new Date(timestamp).toLocaleDateString(
                    'cs',
                    {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    }
                )
            }`
        }
    }
})
let app

firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            router,
            vuetify,
            render: h => h(App)
        }).$mount('#app');
    }
})

