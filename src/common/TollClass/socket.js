import Vue from "vue";
const _comm = new Vue();
import ENV from "../Api/ENV";
var WBT = function(obj) {
    /*
    websocket接口地址
    1、http请求还是https请求 前缀不一样
	2、ip地址host
    3、端口号
    */
    const config = obj ? obj : {};
    // const protocol = window.location.protocol == "http:" ? "ws://" : "wss://";
    // const host = window.location.host;
    // const port = ":8087";
    //接口地址url
    // this.url = config.ip || protocol + host + port;
    this.url = ENV.getENV()[config.url];
    //socket对象
    this.socket;
    //心跳状态  为false时不能执行操作 等待重连
    this.isHeartflag = false;
    //重连状态  避免不间断的重连操作
    this.isReconnect = false;
    //自定义Ws连接函数：服务器连接成功
    this.onopen = e => {
        this.isHeartflag = true;
        console.log(e);
    };
    //自定义Ws消息接收函数：服务器向前端推送消息时触发
    this.onmessage = e => {
        //处理各种推送消息
        this.handleEvent(e);
    };
    //自定义Ws异常事件：Ws报错后触发
    this.onerror = e => {
        console.log("error");
        this.isHeartflag = false;
        this.reConnect();
    };
    //自定义Ws关闭事件：Ws连接关闭后触发
    this.onclose = e => {
        this.reConnect();
        console.log("close");
    };
    this.close = () => {
        //主动关闭  停止重连
        this.isReconnect = true;
        this.socket.close();
    };
    //初始化websocket连接
    // this.initWs();
};

//初始化websocket连接
WBT.prototype.initWs = function() {
    window.WebSocket = window.WebSocket || window.MozWebSocket;
    if (!window.WebSocket) {
        // 检测浏览器支持
        console.error("错误: 浏览器不支持websocket");
        return;
    }
    //每次初始化开启重连状态
    var that = this;
    this.socket = new WebSocket(this.url); // 创建连接并注册响应函数
    this.socket.onopen = function(e) {
        this.isReconnect = false;
        that.onopen(e);
    };
    this.socket.onmessage = function(e) {
        that.onmessage(e);
    };
    this.socket.onclose = function(e) {
        that.onclose(e);
        that.socket = null; // 清理
    };
    this.socket.onerror = function(e) {
        that.onerror(e);
    };

    return this;
};

// 断线重连 reConnect
WBT.prototype.reConnect = function() {
    if (this.isReconnect) return;
    console.log("666666666666666666666666666666");
    this.isReconnect = true;
    var _this = this;
    //没连接上会一直重连，设置延迟避免请求过多
    setTimeout(function() {
        _this.initWs();
        _this.isReconnect = false;
    }, 2000);
};

//处理消息
WBT.prototype.handleEvent = function(message) {
    if (message.data !== "连接成功") {
        let data = JSON.parse(message.data);
        //根据不同type处理不同逻辑
        if (this.handleAction[data.type]) {
            this.handleAction[data.type](data);
        }
    }

    // const action = message.action;
    // const retCode = message.params.retCode.id;
    // //根据action和retCode处理事件
    // // console.log(action,retCode)
    // if (this.handleAction[action][retCode])
    //     this.handleAction[action][retCode]();
};
//发送消息
WBT.prototype.Send = function(data) {
    if (this.socket) {
        this.socket.send(data);
    }
};
//事务处理 根据action
WBT.prototype.handleAction = {
    kline(data) {
        _comm.$EventListener.fire("TVkline", data);
    },
    detail(data) {
        _comm.$EventListener.fire("TVdetail", data);
    },
    depth(data) {
        _comm.$EventListener.fire("TVdepth", data);
    }
};

export default WBT;
