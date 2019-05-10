import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import store from "./Store";

Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    },
    routes: [
        {
            path: "/",
            name: "home",
            meta: { id: 1 },
            component: Home
        },
        {
            path: "/lever",
            name: "lever",
            meta: { id: 2 },
            component: () => import("views/lever")
        },
        {
            path: "/position",
            name: "position",
            meta: { id: 3 },
            component: () => import("views/positions")
        },
        {
            path: "/chat",
            name: "chat",
            meta: { id: 4 },
            component: () => import("views/deal")
        },
        {
            path: "/me",
            name: "me",
            meta: { id: 5 },
            component: () => import("views/mySelf")
        }
    ]
});
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.id)) {
        store.commit("setTabNav", to.meta.id);
    }
    console.log(to,to.meta.id)
    next();
});

export default router;
