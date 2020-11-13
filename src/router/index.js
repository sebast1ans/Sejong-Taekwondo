import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Missing from '@/views/Error404'
import Admin from "@/views/Admin"
import AllNews from "@/components/news/AllNews"
import Article from "@/components/news/Article"

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {title: 'Sejong Taekwondo'},
        component: Home
    },
    {
        path: '/news',
        name: 'AllNews',
        meta: {title: 'Aktuality | Sejong Taekwondo'},
        component: AllNews
    },
    {
        path: '/news/:article',
        name: 'Article',
        component: Article
    },
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
                meta: {title: `Aktuality - administrace | Sejong Taekwondo`}
            },
            {
                path: 'members',
                name: 'Members',
                component: () => import('@/components/admin/Members'),
                meta: {title: `Členové | Sejong Taekwondo`}
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
    next()
});

export default router
