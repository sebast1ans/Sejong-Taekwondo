import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Missing from '@/views/Error404'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {title: 'Sejong Taekwondo'},
        component: Home
    },
    {
        path: '/admin',
        name: 'Admin',
        meta: {title: `Administrace | Sejong Taekwondo`},
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Admin.vue'),
        children: [
            {
                path: 'news',
                name: 'News',
                component: () => import('@/components/admin/NewsAdmin'),
                children: [
                    {
                        path: 'edit',
                        name: 'EditArticle',
                        component: () => import('@/components/admin/EditArticle')
                    }
                ]
            },
            {
                path: 'members',
                name: 'Members',
                component: () => import('@/components/admin/Members')
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
