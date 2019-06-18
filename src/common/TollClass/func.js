//判断数据类型的方法（对typeof的增强，7种常用类型的判断，返回小写字符串）
function dataType(obj) {
    if (obj === null) {
        return "null";
    }
    if (obj !== obj) {
        return "nan";
    }
    if (typeof Array.isArray === "function") {
        if (Array.isArray(obj)) {
            //浏览器支持则使用isArray()方法
            return "array";
        }
    } else {
        //否则使用toString方法
        if (Object.prototype.toString.call(obj) === "[object Array]") {
            return "array";
        }
    }
    return (typeof obj).toLowerCase();
}
var Store = function() {
    this.name = "Store";
};
Store.prototype = {
    init: function(options) {
        this.store = function() {
            return options.type;
        };
        return this;
    },
    set: function(key, value) {
        var type = dataType(value);

        switch (type) {
            case "object":
            case "array":
                this.store().setItem(key, JSON.stringify(value));
                break;
            // case 'array':
            //             this.store().setItem(key,'['+value+']');
            //             break;
            case "function": //如果是函数先用eval()计算执行js代码
                this.store().setItem(key, value);
                break;
            default:
                this.store().setItem(key, value);
        }
    },
    get: function(key) {
        var value = this.store().getItem(key);

        try {
            value = JSON.parse(value);
        } catch (e) {}
        return value;
    },
    getAll: function() {
        var json = {};
        var value = "";

        for (var attr in this.store()) {
            try {
                value = JSON.parse(this.store()[attr]);
            } catch (e) {}
            json[attr] = value;
        }
        return json;
    },
    remove: function(key) {
        this.store().removeItem(key);
    },
    clear: function() {
        this.store().clear();
    }
};
const lStore = new Store().init({
    type: window.localStorage
});
const sStore = new Store().init({
    type: window.sessionStorage
});

//正常化日期
function normalDate(oDate) {
    var CurrentDate = oDate;
    var reg = /\-+/g;

    if (dataType(oDate) == "string") {
        oDate = oDate.split(".")[0]; //解决ie浏览器对yyyy-MM-dd HH:mm:ss.S格式的不兼容
        oDate = oDate.replace(reg, "/"); //解决苹果浏览器对yyyy-MM-dd格式的不兼容性
    }

    CurrentDate = new Date(oDate);
    return CurrentDate;
}
//日期格式化函数
//oDate（时间戳或字符串日期都支持）
//fmt（格式匹配）
//月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
//年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
//例子：
//dateFormat0(new Date(),'yyyy-MM-dd hh:mm:ss.S') ==> 2006-07-02 08:09:04.423
//dateFormat0(new Date(),'yyyy-M-d h:m:s.S')      ==> 2006-7-2 8:9:4.18
function dateFormat(mydate, ft) {
    if (!mydate) {
        return "--";
    }
    var fmt = ft || "MM-dd hh:mm:ss",
        reg = /\d/g;
    if (reg.test(mydate)) {
        mydate = mydate - 0;
    }
    var oDate = normalDate(mydate);
    var date = {
        "M+": oDate.getMonth() + 1, //月份
        "d+": oDate.getDate(), //日
        "h+": oDate.getHours(), //小时
        "m+": oDate.getMinutes(), //分
        "s+": oDate.getSeconds(), //秒
        "q+": Math.floor((oDate.getMonth() + 3) / 3), //季度，+3为了好取整
        S: oDate.getMilliseconds() //毫秒
    };

    if (/(y+)/.test(fmt)) {
        //RegExp.$1(正则表达式的第一个匹配，一共有99个匹配)
        fmt = fmt.replace(
            RegExp.$1,
            (oDate.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
    }

    for (var attr in date) {
        if (new RegExp("(" + attr + ")").test(fmt)) {
            fmt = fmt.replace(
                RegExp.$1,
                RegExp.$1.length == 1
                    ? date[attr]
                    : ("00" + date[attr]).substring((date[attr] + "").length)
            );
        }
    }
    return fmt;
}
// js获取日期：前天、昨天、今天、明天、后天
// GetDateStr(1);明天
// GetDateStr();今天
// GetDateStr(-1);昨天
function GetDateStr(AddDayCount) {
    AddDayCount = AddDayCount || 0;
    var dd = new Date();
    dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期
    var y = dd.getFullYear();
    var m = dd.getMonth() + 1; //获取当前月份的日期
    var d = dd.getDate();
    m = m < 10 ? "0" + m : m;
    d = d < 10 ? "0" + d : d;
    return y + "-" + m + "-" + d;
}
//功能：计算两个时间戳之间相差的日时分秒
//$begin_time  开始时间戳
//$end_time 结束时间戳
function timediff($end_time) {
    var date1 = new Date(); //开始时间
    var date3 = $end_time - new Date().getTime(); //时间差的毫秒数

    //计算出相差天数
    var days = Math.floor(date3 / (24 * 3600 * 1000));

    //计算出小时数

    var leave1 = date3 % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
    var hours =
        Math.floor(leave1 / (3600 * 1000)) < 10
            ? "0" + Math.floor(leave1 / (3600 * 1000))
            : Math.floor(leave1 / (3600 * 1000));
    //计算相差分钟数
    var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
    var minutes =
        Math.floor(leave2 / (60 * 1000)) < 10
            ? "0" + Math.floor(leave2 / (60 * 1000))
            : Math.floor(leave2 / (60 * 1000));

    //计算相差秒数
    var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
    var seconds =
        Math.round(leave3 / 1000) < 10
            ? "0" + Math.round(leave3 / 1000)
            : Math.round(leave3 / 1000);

    var $res = days + "天 " + hours + ":" + minutes + ":" + seconds;
    return $res;
}
//时间格式化(多长时间之前)
//oDate（时间戳或字符串日期都支持）
function dateFormat1(myDate) {
    var oDate = normalDate(myDate);

    if (+oDate >= +new Date()) {
        return "刚刚";
    }
    var lookTime = +new Date() - +oDate;
    var seconds = Math.floor(lookTime / 1000);
    var minutes = Math.floor(lookTime / (1000 * 60));
    var hours = Math.floor(lookTime / (1000 * 60 * 60));
    var days = Math.floor(lookTime / (1000 * 60 * 60 * 24));
    var months = Math.floor(lookTime / (1000 * 60 * 60 * 24 * 30));
    var years = Math.floor(lookTime / (1000 * 60 * 60 * 24 * 30 * 12));

    if (seconds < 60) {
        lookTime = seconds + "秒前";
    } else if (minutes < 60) {
        lookTime = minutes + "分钟前";
    } else if (hours < 24) {
        lookTime = hours + "小时前";
    } else if (days < 30) {
        lookTime = days + "天前";
    } else if (months < 12) {
        lookTime = months + "个月前";
    } else {
        lookTime = years + "年前";
    }
    return lookTime;
}

//转换json
function tryToParseJson(str) {
    try {
        return JSON.parse(str);
    } catch (e) {}
}
//科学技术法转化
function scientificToNumber(num) {
    if (!num) return num;
    let numStr = num.toString().toLocaleLowerCase();
    if (!/(e)|(E)/g.test(numStr)) {
        return num;
    }
    return Number(num)
        .toFixed(18)
        .replace(/\.0+$/, "")
        .replace(/(\.\d+[1-9])0+$/, "$1");
}
//科学计数法
function toFixeds(nums, len) {
    if (nums || nums === 0) {
        let re = `/([0-9]+\.?[0-9]{${len}})[0-9]*/`,
            regexp = /(?:\.0*|(\.\d+?)0+)$/;
        nums = scientificToNumber(nums).toString();
        nums =
            nums == 0
                ? nums
                : nums.replace(eval(re), "$1").replace(regexp, "$1");
        return Number(nums).toFixed(2);
    } else {
        return "--";
    }
}
//保留小数位数

function isAction(str, err) {
    //账号
    var reg = /[a-zA-Z0-9_]{4,16}/;
    let isTrue = reg.test(str);
    if (!isTrue) {
        return err ? err : "账号为4-14位数字，字母，下划线";
    }
    return false;
}

function isEmail(str, err) {
    //email
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    return reg.test(str);
}
function isPwd(str, err) {
    //密码
    var reg = /^\w{6,20}$/;
    let isTrue = reg.test(str);
    if (!isTrue) {
        return err ? err : "密码为6-20位数字，字母，下划线";
    }
    return false;
}
function isCode(str, err) {
    //验证码
    var reg = /^\d{6}$/;
    let isTrue = reg.test(str);
    if (!isTrue) {
        return err ? err : "验证码为6位数字";
    }
    return false;
}
function isBankCode(str, err) {
    //银行卡
    var reg = /^([1-9]{1})(\d{14,18})$/;
    let isTrue = reg.test(str);
    if (!isTrue) {
        return err ? err : "银行卡号为15-19位数字";
    }
    return false;
}
function isShenfenCard(str, err) {
    //身份证
    var reg = /(^\d{15,18}$)|(^\d{17}(\d|X|x)$)/;
    let isTrue = reg.test(str);
    if (!isTrue) {
        return err ? err : "身份证号为15-18位数字";
    }
    return false;
}
function isPhone(str, err) {
    //手机号
    var reg = /^1[23456789]\d{9}$/;
    let isTrue = reg.test(str);
    if (!isTrue) {
        return err ? err : "手机号码有误，请重填";
    }
    return false;
}
function isNum(str, err) {
    //全数字
    var reg = /^\d{1,}$/;
    let isTrue = reg.test(str);
    if (!isTrue) {
        return err ? err : "邀请码请输入数字";
    }
    return false;
}
function numFormat(num) {
    if (!num) return 0;
    var res = num.toString().replace(/\d+/, function(n) {
        // 先提取整数部分
        return n.replace(/(\d)(?=(\d{3})+$)/g, function($1) {
            return $1 + ",";
        });
    });
    return res;
}
function NumRes(num) {
    if (Number(num) < 10) {
        return "0" + num;
    } else {
        return num + "";
    }
}
//秒转分秒
function formatSeconds(value) {
    var secondTime = parseInt(value); // 秒
    var minuteTime = 0; // 分
    var hourTime = 0; // 小时
    if (secondTime > 60) {
        //如果秒数大于60，将秒数转换成整数
        //获取分钟，除以60取整数，得到整数分钟
        minuteTime = parseInt(secondTime / 60);
        //获取秒数，秒数取佘，得到整数秒数
        secondTime = parseInt(secondTime % 60);
        // //如果分钟大于60，将分钟转换成小时
        // if(minuteTime > 60) {
        //     //获取小时，获取分钟除以60，得到整数小时
        //     hourTime = parseInt(minuteTime / 60);
        //     //获取小时后取佘的分，获取分钟除以60取佘的分
        //     minuteTime = parseInt(minuteTime % 60);
        // }
    }
    var result = NumRes(parseInt(secondTime));

    if (minuteTime > 0) {
        result = NumRes(parseInt(minuteTime)) + ":" + result;
    }
    // if(hourTime > 0) {
    //   result = "" + parseInt(hourTime) + "小时" + result;
    // }
    return result;
}
//获取dom距离四周的边距
function getElementDL(element, direction) {
    let Length = parseInt(element.getBoundingClientRect()[direction]);
    return Length;
}
//生成从minNum到maxNum的随机数
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}
function ZhengFu(num) {
    if (num > 0) {
        return "+" + num;
    } else {
        return num;
    }
}

function formatSecondsToHM(value) {
    var secondTime = parseInt(value); // 秒
    var minuteTime = 0; // 分
    var hourTime = 0; // 小时
    if (secondTime > 60) {
        //如果秒数大于60，将秒数转换成整数
        //获取分钟，除以60取整数，得到整数分钟
        minuteTime = parseInt(secondTime / 60);
        //获取秒数，秒数取佘，得到整数秒数
        secondTime = parseInt(secondTime % 60);
        //如果分钟大于60，将分钟转换成小时
        if (minuteTime > 60) {
            //获取小时，获取分钟除以60，得到整数小时
            hourTime = parseInt(minuteTime / 60);
            //获取小时后取佘的分，获取分钟除以60取佘的分
            minuteTime = parseInt(minuteTime % 60);
        }
    }
    var result = (secondTime < 10 ? "0" : "") + parseInt(secondTime);

    if (minuteTime >= 0) {
        result =
            (minuteTime < 10 ? "0" : "") + parseInt(minuteTime) + ":" + result;
    }
    if (hourTime >= 0) {
        result = (hourTime < 10 ? "0" : "") + parseInt(hourTime) + ":" + result;
    }
    return result;
}

/*
 * 参数说明：
 * number：要格式化的数字
 * decimals：保留几位小数
 * dec_point：小数点符号
 * thousands_sep：千分位符号
 * */
function numberFormat(number, decimals, dec_point, thousands_sep) {
    number = (number + "").replace(/[^0-9+-Ee.]/g, "");
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = typeof thousands_sep === "undefined" ? "," : thousands_sep,
        dec = typeof dec_point === "undefined" ? "." : dec_point,
        s = "",
        toFixedFix = function(n, prec) {
            var k = Math.pow(10, prec);
            return "" + Math.ceil(n * k) / k;
        };

    s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
    var re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
        s[0] = s[0].replace(re, "$1" + sep + "$2");
    }

    if ((s[1] || "").length < prec) {
        s[1] = s[1] || "";
        s[1] += new Array(prec - s[1].length + 1).join("0");
    }
    return s.join(dec);
}

function isIos() {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isAndroid) {
        return false;
    }
    if (isiOS) {
        return true;
    }
}
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = [
        "Android",
        "iPhone",
        "SymbianOS",
        "Windows Phone",
        "iPad",
        "iPod"
    ];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
// 判断是不是客户端
function getAppType() {
    if (isIos()) {
        window.webkit.messageHandlers.NativeMethod.postMessage("checkINApp");
    } else {
        window.openApp.getTypeApp("");
    }
}

function isNormal(type) {
    //股票是否正常可以
    if (type) {
        return "不可以";
    } else {
        return "正常";
    }
}
//颜色判断
function IsColor(val) {
    if (parseFloat(val) > 0) {
        return "text_green";
    } else if (parseFloat(val) == 0) {
        return "text_gray";
    } else {
        return "text_red";
    }
}
//获取时间间隔
function getDataSingle() {
    var date = new Date(),
        week = date.getDay(),
        Hours = date.getHours(),
        Min = date.getMinutes();
    if (0 < week < 6) {
        if (11 >= Hours && Hours >= 9) {
            if ((Hours == 9 && Min < 30) || (Hours == 11 && Min > 30)) {
                return false;
            } else {
                return true;
            }
        } else if (15 >= Hours && Hours >= 13) {
            if ((Hours == 13 && Min < 0) || (Hours == 15 && Min > 0)) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}

//千分符
function toThousands(num) {
    var re = /\d{1,3}(?=(\d{3})+$)/g;
    var n1 = num.toString().replace(/^(\d+)((\.\d+)?)$/, function(s, s1, s2) {
        return s1.replace(re, "$&,") + s2;
    });
    return n1;
}
//浮点数转换成小数
function toFixedsPic(num, extent = 2) {
    if (num == 0) {
        return 0;
    } else if (!num) {
        return "--";
    }
    return toThousands(num.toFixed(extent));
}

export {
    getDataSingle,
    Store,
    lStore,
    sStore,
    isAction,
    isEmail,
    isPwd,
    isCode,
    isBankCode,
    isShenfenCard,
    isPhone,
    isNum,
    dateFormat,
    GetDateStr,
    tryToParseJson,
    toFixeds,
    numFormat,
    formatSeconds,
    formatSecondsToHM,
    getElementDL,
    randomNum,
    ZhengFu,
    numberFormat,
    isIos,
    IsPC,
    getAppType,
    isNormal,
    IsColor,
    toThousands,
    toFixedsPic
};
