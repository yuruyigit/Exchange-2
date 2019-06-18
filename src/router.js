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
            path: "/service", //联系客服
            name: "Service",
            meta: { id: 1.1 },
            components: {
                default: () => import("views/Home/Service")
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
            meta: { id: 1.22 },
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
            component: () => import("views/Register"),
            children: [
                {
                    path: "/register",
                    name: "Phone",
                    meta: { id: 0.4 },
                    component: () => import("views/Register/Phone")
                },
                {
                    path: "/register/email",
                    name: "Email",
                    meta: { id: 0.5 },
                    component: () => import("views/Register/Email")
                }
            ]
        },
        {
            path: "/register/pwd", //杠杆
            name: "Pwd",
            meta: { id: 0.6 },
            component: () => import("views/Register/Pwd")
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
            component: () => import("views/positions"),
            // children: [
            //     {
            //         path: "/position",
            //         name: "Capital",
            //         meta: { id: 3.1 },
            //         component: () => import("views/positions/Capital")
            //     },
            //     {
            //         path: "/position/intord",
            //         name: "Intord",
            //         meta: { id: 3.2 },
            //         component: () => import("views/positions/Intord")
            //     }
            // ]
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
            path: "/me/report", //投资报表
            name: "Report",
            meta: { id: 5.1 },
            component: () => import("views/Me/Report")
        },
        {
            path: "/me/fund", //资金明细
            name: "Fund",
            meta: { id: 5.2 },
            component: () => import("views/Me/Fund")
        },
        {
            path: "/me/setting", //账户设置
            name: "Setting",
            meta: { id: 5.3 },
            component: () => import("views/Me/Setting")
        },
        {
            path: "/me/setting/about", //关于我们
            name: "About",
            meta: { id: 5.34 },
            component: () => import("views/Me/Setting/About")
        },
        {
            path: "/me/security", //安全中心
            name: "Security",
            meta: { id: 5.4 },
            component: () => import("views/Me/Security")
        },
        {
            path: "/me/pwd", //修改登录密码
            name: "Pwd",
            meta: { id: 5.41 },
            component: () => import("views/Me/Security/Child/Pwd.vue"),
            children: [
                {
                    path: "/me/pwd",
                    name: "PwdEdit",
                    meta: { id: 5.42 },
                    component: () =>
                        import("views/Me/Security/Child/PwdEdit.vue")
                },
                {
                    path: "/me/pwd/reset", //重置
                    name: "PwdReset",
                    meta: { id: 5.43 },
                    component: () =>
                        import("views/Me/Security/Child/PwdReset.vue")
                }
            ]
        },
        {
            path: "/me/edit/:type", //修改手机||邮箱
            name: "Edit",
            meta: { id: 5.44 },
            component: () => import("views/Me/Security/Child/Edit.vue")
        },
        {
            path: "/me/edit1/:type", //修改手机||邮箱 step1
            name: "Edit1",
            meta: { id: 5.45 },
            component: () => import("views/Me/Security/Child/Edit1.vue")
        },
        {
            path: "/me/user", //我的
            name: "User",
            meta: { id: 5.1 },
            components: {
                default: () => import("views/Me/User"),
                mainfooter: Footer
            }
        },
        {
            path: "/intord/:type", //所有介绍
            name: "Intord",
            meta: { id: 11 },
            component: () => import("views/Intord")
        }
    ]
});
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.id)) {
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
