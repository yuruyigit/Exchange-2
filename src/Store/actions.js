import * as types from "./mutation-types";
import { Toast } from "vant";
export default {
    updatedLang({ commit }, lang) {
        i18n.locale = "zh";
        commit(types.SET_LANG, lang);
    }
};
