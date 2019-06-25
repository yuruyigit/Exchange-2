import Vue from "vue";
import { Post, Get, http } from "./Api";
import { lStore, sStore, throttle } from "./TollClass/func";
import EventListener from "./event-listener";
import md5 from "md5";
function ScrollTop(anim = true) {
    if (anim) {
        let scrollToptimer = setInterval(function() {
            let top =
                document.body.scrollTop || document.documentElement.scrollTop;
            let speed = top / 4;
            if (document.body.scrollTop !== 0) {
                document.body.scrollTop -= speed;
            } else {
                document.documentElement.scrollTop -= speed;
            }
            if (top === 0) {
                clearInterval(scrollToptimer);
            }
        }, 30);
    } else {
        document.documentElement.scrollTop = 0;
    }
}
Vue.prototype.$ScrollTop = ScrollTop;
Vue.prototype.$lStore = lStore;
Vue.prototype.$sStore = sStore;
Vue.prototype.$throttle = throttle;
Vue.prototype.$Post = Post;
Vue.prototype.$Get = Get;
Vue.prototype.$http = http;
Vue.prototype.$EventListener = EventListener({});
Vue.prototype.$md5 = md5;
