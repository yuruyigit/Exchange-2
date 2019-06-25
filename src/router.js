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
            meta: { id: 1.2 },
            components: {
                default: () => import("views/Home/HotActive")
            }
        },
        {
            path: "/guide", //新手引导
            name: "NoviceGuide",
            meta: { id: 1.3 },
            components: {
                default: () => import("views/Home/NoviceGuide")
            }
        },
        {
            path: "/guide/swiper", //引导swiper
            name: "GuideSwiper",
            meta: { id: 1.31 },
            components: {
                default: () => import("views/Home/GuideSwiper")
            }
        },
        {
            path: "/asked", //新手引导子页面
            name: "Asked",
            meta: { id: 1.32 },
            components: {
                default: () => import("views/Home/Asked")
            }
        },
        {
            path: "/asked/:type",
            name: "Asked",
            meta: { id: 1.33 },
            components: {
                default: () => import("views/Home/Asked")
            }
        },
        {
            path: "/disciple", //我的徒弟
            name: "Disciple",
            meta: { id: 1.4 },
            components: {
                default: () => import("views/Home/Disciple")
            }
        },
        {
            path: "/otc", //充值OTC
            name: "Otc",
            meta: { id: 1.5 },
            component: () => import("views/Home/Otc"),
            children: [
                {
                    path: "/otc",
                    name: "Merchant",
                    meta: { id: 1.51 },
                    component: () => import("views/Home/Otc/Merchant")
                },
                {
                    path: "/otc/wallet",
                    name: "Wallet",
                    meta: { id: 1.52, type: "sub" },
                    component: () => import("views/Home/Otc/Wallet")
                }
            ]
        },
        {
            path: "/withdraw", //充值OTC
            name: "Withdraw",
            meta: { id: 1.5 },
            component: () => import("views/Home/Withdraw"),
            children: [
                {
                    path: "/Withdraw",
                    name: "Merchant",
                    meta: { id: 1.51 },
                    component: () => import("views/Home/Withdraw/Merchant")
                },
                {
                    path: "/Withdraw/wallet",
                    name: "Wallet",
                    meta: { id: 1.52, type: "sub" },
                    component: () => import("views/Home/Withdraw/Wallet")
                }
            ]
        },

        {
            path: "/news", //行业快讯
            name: "News",
            meta: { id: 1.6 },
            components: {
                default: () => import("views/Home/News")
            }
        },
        {
            path: "/recharge", //充币
            name: "Recharge",
            meta: { id: 1.9 },
            components: {
                default: () => import("views/Recharge")
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
            component: () => import("views/positions")
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
            component: () => import("views/Me/Fund"),
            children: [
                {
                    path: "/me/fund/", //OTC资金明细
                    name: "FundOtc",
                    meta: { id: 5.21 },
                    component: () => import("views/Me/Fund/Otc")
                },
                {
                    path: "/me/fund/wallet", //钱包资金明细
                    name: "FundWallet",
                    meta: { id: 5.22, type: "sub" },
                    component: () => import("views/Me/Fund/Wallet")
                }
            ]
        },
        {
            path: "/me/fund/:orderId", //账户设置
            name: "Detail",
            meta: { id: 5.23 },
            component: () => import("views/Me/Fund/Detail")
        },
        {
            path: "/me/msg", //消息中心
            name: "Msg",
            meta: { id: 5.3 },
            component: () => import("views/Me/Msg"),
            children: [
                {
                    path: "/me/msg", //系统消息
                    name: "SysMsg",
                    meta: { id: 5.31 },
                    component: () => import("views/Me/Msg/Sys")
                },
                {
                    path: "/me/msg/notic", //重置
                    name: "NoticMsg",
                    meta: { id: 5.32, type: "sub" },
                    component: () => import("views/Me/Msg/Notic")
                }
            ]
        },
        {
            path: "/me/setting", //账户设置
            name: "Setting",
            meta: { id: 5.4 },
            component: () => import("views/Me/Setting")
        },
        {
            path: "/me/setting/about", //关于我们
            name: "About",
            meta: { id: 5.44 },
            component: () => import("views/Me/Setting/About")
        },
        {
            path: "/me/security", //安全中心
            name: "Security",
            meta: { id: 5.5 },
            component: () => import("views/Me/Security")
        },
        {
            path: "/me/pwd", //修改登录密码
            name: "Pwd",
            meta: { id: 5.51 },
            component: () => import("views/Me/Security/Child/Pwd.vue"),
            children: [
                {
                    path: "/me/pwd",
                    name: "PwdEdit",
                    meta: { id: 5.52 },
                    component: () =>
                        import("views/Me/Security/Child/PwdEdit.vue")
                },
                {
                    path: "/me/pwd/reset", //重置
                    name: "PwdReset",
                    meta: { id: 5.53 },
                    component: () =>
                        import("views/Me/Security/Child/PwdReset.vue")
                }
            ]
        },
        {
            path: "/me/edit/:type", //修改手机||邮箱
            name: "Edit",
            meta: { id: 5.54 },
            component: () => import("views/Me/Security/Child/Edit.vue")
        },
        {
            path: "/me/edit1/:type", //修改手机||邮箱 step1
            name: "Edit1",
            meta: { id: 5.55 },
            component: () => import("views/Me/Security/Child/Edit1.vue")
        },
        {
            path: "/me/user", //我的
            name: "User",
            meta: { id: 5.6 },
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
