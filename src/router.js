import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Footer from "./components/Footer";
import store from "./Store";

Vue.use(Router);

const router = new Router({
    // mode: "history",
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
            components: {
                default: Home,
                mainfooter: Footer
            }
        },
        {
            path: "/disciple",
            name: "Disciple",
            meta: { id: 1.1 },
            components: {
                default: () => import("views/Home/Disciple.vue")
            }
        },
        {
            path: "/login",
            name: "Login",
            meta: { id: -2 },
            component: () => import("views/Login")
        },
        {
            path: "/login/:type",
            name: "LoginType",
            meta: { id: -1 },
            component: () => import("views/Login/pwd")
        },
        {
            path: "/register",
            name: "Register",
            meta: { id: 0 },
            component: () => import("views/Register")
        },
        {
            path: "/register/email",
            name: "RegisterEmail",
            meta: { id: 0 },
            component: () => import("views/Register/email.vue")
        },
        {
            path: "/lever",
            name: "lever",
            meta: { id: 2 },
            components: {
                default: () => import("views/lever"),
                mainfooter: Footer
            }
        },
        {
            path: "/position",
            name: "position",
            meta: { id: 3 },
            components: {
                default: () => import("views/positions"),
                mainfooter: Footer
            }
        },
        {
            path: "/chat",
            name: "chat",
            meta: { id: 4 },
            components: {
                default: () => import("views/deal"),
                mainfooter: Footer
            }
        },
        {
            path: "/me",
            name: "Me",
            meta: { id: 5 },
            components: {
                default: () => import("views/Me"),
                mainfooter: Footer
            }
        }
    ]
});
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.id)) {
        store.commit("setTabNav", to.meta.id);
    }
    next();
});

export default router;
