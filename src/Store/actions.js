import * as types from "./mutation-types";
import { Toast } from "vant";
import { http } from "common/Api";
const getUserInfo = function(commit) {
    http({
        url: "/v1/user/user_info",
        method: "get"
    }).then(res => {
        if (res.status == 200) {
            commit(types.SET_USERINFO, res.data);
        }
    });
};
export default {
    updatedLang({ commit }, lang) {
        i18n.locale = "zh";
        commit(types.SET_LANG, lang);
    },
    updatedUserInfo({ commit }, userInfo) {
        commit(types.SET_USERINFO, userInfo);
    },
    getUserInfo({ commit }) {
        getUserInfo(commit);
    }
};
