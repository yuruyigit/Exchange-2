export default {
    // 测试地址
    testENV: {
        name: "test",
        httpApi1: "http://114.55.209.191:8183",
        httpApi: "http://192.168.50.71:8080",
        TVsocket: "ws://192.168.50.71:8800/ws",
        testSocket: "wss://real.okex.com:10442/ws/v3"
    },
    //生产地址
    proENV: {
        name: "prod",
        httpApi: "https://api.pk123.app"
    },
    getENV: function() {
        return this.testENV;
    }
};
