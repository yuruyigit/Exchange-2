import Vue from "vue";
import { toFixeds,numberFormat } from "./TollClass/func";

Vue.filter("numberFormat", numberFormat); //数字格式化
Vue.filter("toFixeds", toFixeds); //保留小数
