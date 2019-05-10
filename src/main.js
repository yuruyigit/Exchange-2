import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./Store";
import { Button, Cell, Tabbar, TabbarItem } from "vant";
import VueI18n from "vue-i18n";
import FastClick from "fastclick";
import "./common/TollClass/resize";
import "./assets/stylus/reset.styl";
FastClick.prototype.onTouchEnd = function(event) {
    if (
        event.target.hasAttribute("type") &&
        event.target.getAttribute("type") == "text"
    ) {
        event.preventDefault();
        return false;
    }
};
if ("addEventListener" in document) {
    document.addEventListener(
        "DOMContentLoaded",
        () => {
            FastClick.attach(document.body);
        },
        false
    );
}

Vue.use(VueI18n);
Vue.use(Button);
Vue.use(Cell);
Vue.use(Tabbar);
Vue.use(TabbarItem);
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
