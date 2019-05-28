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
            path: "/", //首页
            name: "home",
            meta: { id: 1 },
            components: {
                default: Home,
                mainfooter: Footer
            }
        },
        {
            path: "/hot", //热门活动
            name: "Hot",
            meta: { id: 1.1 },
            components: {
                default: () => import("views/Home/HotActive")
            }
        },
        {
            path: "/guide", //新手引导
            name: "NoviceGuide",
            meta: { id: 1.2 },
            components: {
                default: () => import("views/Home/NoviceGuide")
            }
        },
        {
            path: "/guide/swiper", //引导swiper
            name: "GuideSwiper",
            meta: { id: 1.21 },
            components: {
                default: () => import("views/Home/GuideSwiper")
            }
        },
        {
            path: "/asked", //新手引导子页面
            name: "Asked",
            meta: { id: 1.22},
            components: {
                default: () => import("views/Home/Asked")
            }
        },
        {
            path: "/asked/:type",
            name: "Asked",
            meta: { id: 1.23 },
            components: {
                default: () => import("views/Home/Asked")
            }
        },
        {
            path: "/disciple", //我的徒弟
            name: "Disciple",
            meta: { id: 1.3 },
            components: {
                default: () => import("views/Home/Disciple")
            }
        },
        {
            path: "/news", //行业快讯
            name: "News",
            meta: { id: 1.4 },
            components: {
                default: () => import("views/Home/News")
            }
        },

        {
            path: "/login", //登录
            name: "Login",
            meta: { id: 0.1 },
            component: () => import("views/Login")
        },
        {
            path: "/login/:type",
            name: "LoginType",
            meta: { id: 0.2 },
            component: () => import("views/Login/pwd")
        },
        {
            path: "/register", //注册
            name: "Register",
            meta: { id: 0.3 },
            component: () => import("views/Register")
        },
        {
            path: "/register/email",
            name: "RegisterEmail",
            meta: { id: 0.4 },
            component: () => import("views/Register/email.vue")
        },
        {
            path: "/lever", //杠杆
            name: "Lever",
            meta: { id: 2 },
            components: {
                default: () => import("views/Lever"),
                mainfooter: Footer
            }
        },
        {
            path: "/position", //交易
            name: "position",
            meta: { id: 3 },
            components: {
                default: () => import("views/positions"),
                mainfooter: Footer
            }
        },
        {
            path: "/chat", //持仓
            name: "Chat",
            meta: { id: 4 },
            components: {
                default: () => import("views/Chat"),
                mainfooter: Footer
            },
            children: [
                {
                    path: "/chat",
                    name: "ChatHold",
                    meta: { id: 4 },
                    component: () => import("views/Chat/Hold")
                },
                {
                    path: "/chat/list",
                    name: "ChatList",
                    meta: { id: 4.1 },
                    component: () => import("views/Chat/List")
                }
            ]
        },

        {
            path: "/chat/history", //持仓历史
            name: "ChatHistory",
            meta: { id: 4.2 },
            component: () => import("views/Chat/History")
        },
        {
            path: "/me", //我的
            name: "Me",
            meta: { id: 5 },
            components: {
                default: () => import("views/Me"),
                mainfooter: Footer
            }
        },
        {
            path: "/me/user", //我的
            name: "User",
            meta: { id: 5.1 },
            components: {
                default: () => import("views/Me/User"),
                mainfooter: Footer
            }
        }
    ]
});
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.id)) {
        console.log(to.meta.id);
        let Id;
        if (to.meta.id == 4.1) {
            Id = 4;
        } else {
            Id = to.meta.id;
        }
        store.commit("setTabNav", Id);
    }
    next();
});

export default router;
