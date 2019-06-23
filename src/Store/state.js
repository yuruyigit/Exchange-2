import { lStore } from "../common/TollClass/func";
export default {
    lang: lStore.get("lang") || "zh",
    tabNav: lStore.get("tabNav") || 1,
    TVInterval: lStore.get("TVInterval") || 5,
    userInfo: lStore.get("userInfo") || ""
};
