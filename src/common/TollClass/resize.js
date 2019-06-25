import { throttle } from "common/TollClass/func";
(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt =
            "orientationchange" in window ? "orientationchange" : "resize",
        recalc =  throttle(function() {
            console.log("resize");
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= 750) {
                docEl.style.fontSize = "100px";
            } else {
                docEl.style.fontSize =
                    Math.floor(100 * (clientWidth / 750)) + "px";
            }
        });
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);
