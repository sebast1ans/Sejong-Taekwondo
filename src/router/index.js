import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase/app'
import 'firebase/auth'
import Home from '@/views/Home'
import Missing from '@/views/Error404'
import Admin from "@/views/Admin"
// import NewsView from "@/components/articles/NewsView"
// import AllNews from "@/components/news/AllNews";
import Article from "@/components/news/Article"
import NewsView from "@/components/news/NewsView";

Vue.use(VueRouter);

const routes = [
    // Public zone
    {
        path: '/',
        name: 'Home',
        meta: {title: 'Sejong Taekwondo'},
        component: Home
    },
    {
        path: '/articles',
        name: 'NewsView',
        meta: {title: 'Aktuality | Sejong Taekwondo'},
        component: NewsView
    },
    {
        path: '/articles/:article',
        name: 'Article',
        meta: {title: 'Sejong Taekwondo'},
        component: Article
    },

    // Admin zone
    {
        path: '/admin',
        name: 'Admin',
        meta: {title: `Administrace | Sejong Taekwondo`},
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Admin,
        children: [
            {
                path: 'news',
                name: 'News',
                component: () => import('@/components/admin/NewsAdmin'),
                meta: {title: `Aktuality - administrace | Sejong Taekwondo`, requiresAuth: true}
            },
            {
                path: 'members',
                name: 'Members',
                component: () => import('@/components/admin/Members'),
                meta: {title: `Členové | Sejong Taekwondo`, requiresAuth: true}
            }
        ]
    },
    {
        path: '*',
        component: Missing
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    const isAuthenticated = firebase.auth().currentUser

    if (requiresAuth && !isAuthenticated) {
        next('/admin')
    } else {
        next()
    }

    if (to.name === 'Admin' && isAuthenticated) {
        next('/admin/news')
    } else {
        next()
    }
    next()
});

// console.log(Article)
export default router
