import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./Store";
import {
    Button,
    Cell,
    CellGroup,
    Tab,
    Tabs,
    NavBar,
    List,
    PullRefresh,
    Icon,
    Collapse,
    CollapseItem,
    Uploader,
    Toast,
    Swipe,
    SwipeItem
} from "vant";
import VueI18n from "vue-i18n";
import FastClick from "fastclick";
import "./common/TollClass/resize";
import "./assets/stylus/reset.styl";
FastClick.prototype.onTouchEnd = function(event) {};
if ("addEventListener" in document) {
    document.addEventListener(
        "DOMContentLoaded",
        () => {
            FastClick.attach(document.body);
        },
        false
    );
}

Vue.use(VueI18n)
    .use(Button)
    .use(Cell)
    .use(CellGroup)
    .use(Tab)
    .use(Tabs)
    .use(Icon)
    .use(NavBar)
    .use(List)
    .use(PullRefresh)
    .use(Collapse)
    .use(CollapseItem)
    .use(Uploader)
    .use(Toast)
    .use(Swipe)
    .use(SwipeItem);
const i18n = new VueI18n({
    locale: store.state.lang,
    messages: {
        zh: require("./lang/zh"),
        en: require("./lang/en")
    }
});
window.i18n = i18n;
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount("#app");
