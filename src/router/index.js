import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../views/auth/signIn.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/sign-in',
        name: 'Sign In',
        component: SignIn
    },
    {
        path: '/',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/layout/mainPages.vue'),
        children: [{
                path: '/',
                name: 'index',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/pages/indexPage.vue'),
            },
            {
                path: '/approved-transactions',
                name: 'approved',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/pages/approvedTransactions.vue'),
            },
            {
                path: '/declined-transactions',
                name: 'declined',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/pages/declinedTransactions.vue'),
            },
            {
                path: '/pending-transactions',
                name: 'pending',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/pages/pendingTransactions.vue'),
            }, {
                path: '/transactions/_id',
                name: 'id',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/pages/_id.vue'),
            }

        ]
    },
    {
        path: '/:catchAll(.*)',
        name: '',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/pages/errorPage.vue"),
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router