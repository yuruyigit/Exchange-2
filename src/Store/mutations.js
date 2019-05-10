import * as types from "./mutation-types";
import { lStore } from "../common/TollClass/func";
export default {
    [types.SET_LANG](state, lang) {
        lStore.set("lang", lang);
        state.lang = lang;
    },
    setTabNav(state, val) {
        lStore.set("tabNav", val);
        state.tabNav = val;
    }
};
