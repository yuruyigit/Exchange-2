var count = 0;
function TVjsApi() {
    //                var urls = 'ws://*****';
    //                var urls = 'ws://****/trade_market/websocket/btc_usdt'
    var urls = "wss://api.fcoin.com/v2/ws";
    this.widgets = null;
    this.socket = new socket(urls);
    //                this.socket = new socket();
    this.datafeeds = new datafeeds(this);
    (this.symbol = null),
        (this.interval = null),
        (this.cacheData = {}),
        (this.lastTime = null),
        (this.getBarTimer = null),
        (this.isLoading = true);
    var that = this;
    this.socket.doOpen();
    this.socket.on("open", function() {
        that.socket.send({
            cmd: "req",
            args: ["candle.M5.ethusdt", 150, parseInt(Date.now() / 1000)]
        });
    });
    this.socket.on("message", that.onMessage);
}
TVjsApi.prototype.init = function() {
    //设置默认symbol，interval的默认值
    var symbol =
        arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : "ethusdt";
    var interval =
        arguments.length > 0 && arguments[1] !== undefined ? arguments[1] : 5;
    if (!this.widgets) {
        this.widgets = window.tvWidget = new TradingView.widget({
            //默认商品设置
            symbol: symbol,
            //默认请求间隔
            interval: interval,
            //默认是否全屏
            // fullscreen: true,
            //默认是否自适应
            // autosize:true,
            //设置容器
            container_id: "trade-view",
            datafeed: this.datafeeds,
            library_path: "./static/tradeview/charting_library/",
            enabled_features: [],
            timezone: "Asia/Shanghai",
            locale: "zh",
            debug: false,
            //设置默认工具条背景颜色
            toolbar_bg: "#121A2E",
            //设置默认不显示组件
            disabled_features: [
                "header_symbol_search",
                "use_localstorage_for_settings",
                "left_toolbar",
                "legend_context_menu",
                "border_around_the_chart",
                "timeframes_toolbar",
                "volume_force_overlay",
                "pane_context_menu",
                "header_symbol_search",
                "symbol_search_hot_key",
                "header_undo_redo",
                "header_compare",
                "header_chart_type",
                "header_screenshot",
                "header_resolutions"
                // "header_settings",
                // "header_indicators"
            ],
            //设置初始化样式配置
            overrides: {
                "mainSeriesProperties.candleStyle.upColor": "#589065",
                "mainSeriesProperties.candleStyle.downColor": "#AE4E54",
                "mainSeriesProperties.candleStyle.drawWick": true,
                "mainSeriesProperties.candleStyle.wickUpColor:": "#AE4E54",
                "mainSeriesProperties.candleStyle.wickDownColor": "#AE4E54",
                "mainSeriesProperties.candleStyle.drawBorder": true,
                "mainSeriesProperties.candleStyle.borderUpColor": "#589065",
                "mainSeriesProperties.candleStyle.borderDownColor": "#AE4E54",
                //-----------------------------------------------------------------------
                "paneProperties.background": "#121a2e",
                "paneProperties.vertGridProperties.color": "#1e273c",
                "paneProperties.vertGridProperties.style": 0,
                "paneProperties.horzGridProperties.color": "#1e273c",
                "paneProperties.horzGridProperties.style": 0,
                "scalesProperties.lineColor": "#505d7b",
                "scalesProperties.textColor": "#333e58",

                "paneProperties.legendProperties.showLegend": false,
                //"scalesProperties.showLeftScale":false,

                volumePaneSize: "medium",
                MACDPaneSize: "tiny"
            },

            //设置初始化加载条样式

            loading_screen: {
                backgroundColor: "#1e222d",
                foregroundColor: "#5d7d93"
            },
            studies_overrides: {
                //设置成交量默认样式
                "volume.volume.color.0": "rgba(174,78,84,0.7)",
                "volume.volume.color.1": "rgba(88,144,101,0.7)"
            }
        });
        this.symbol = symbol;
        this.interval = interval;
        var thats = this.widgets;
        this.widgets.onChartReady(function() {
            //设置均线种类 均线样式
            thats
                .chart()
                .createStudy("Moving Average", false, false, [5], null, {
                    "Plot.color": "rgb(150, 95, 196)"
                });
            thats
                .chart()
                .createStudy("Moving Average", false, false, [10], null, {
                    "Plot.color": "rgb(116,149,187)"
                });
            thats
                .chart()
                .createStudy("Moving Average", false, false, [20], null, {
                    "plot.color": "rgb(58,113,74)"
                });
            thats
                .chart()
                .createStudy("Moving Average", false, false, [30], null, {
                    "plot.color": "rgb(118,32,99)"
                });
            //设置自定义按钮种类 样式  事件
            thats
                .createButton()
                .attr("title", "1min")
                .addClass("mydate")
                .text("1min")
                .on("click", function(e) {
                    $(this)
                        .parent()
                        .siblings()
                        .children()
                        .removeClass("clickBtn");
                    $(this)
                        .parent()
                        .siblings()
                        .children()
                        .addClass("mydate");
                    $(this).removeClass("mydate");
                    $(this).addClass("clickBtn");
                    thats
                        .chart()
                        .setResolution("1", function onReadyCallback() {});
                });
            thats
                .createButton()
                .addClass("clickBtn")
                .attr("title", "5min")
                .text("5min")
                .on("click", function(e) {
                    $(this)
                        .parent()
                        .siblings()
                        .children()
                        .removeClass("clickBtn");
                    $(this)
                        .parent()
                        .siblings()
                        .children()
                        .addClass("mydate");
                    $(this).removeClass("mydate");
                    $(this).addClass("clickBtn");
                    thats
                        .chart()
                        .setResolution("5", function onReadyCallback() {});
                });
            thats
                .createButton()
                .addClass("mydate")
                .attr("title", "15min")
                .text("15min")
                .on("click", function(e) {
                    $(this)
                        .parent()
                        .siblings()
                        .children()
                        .removeClass("clickBtn");
                    $(this)
                        .parent()
                        .siblings()
                        .children()
                        .addClass("mydate");
                    $(this).removeClass("mydate");
                    $(this).addClass("clickBtn");
                    thats
                        .chart()
                        .setResolution("15", function onReadyCallback() {});
                });
            thats
                .createButton()
                .addClass("mydate")
                .attr("title", "30min")
                .text("30min")
                .css("background-color", "#4e5b85")
                .on("click", function(e) {
                    $(this)
                        .parent()
                        .siblings()
                        .children()
                        .removeClass("clickBtn");
                    $(this)
                        .parent()
                        .siblings()
                        .children()
                        .addClass("mydate");
                    $(this).removeClass("mydate");
                    $(this).addClass("clickBtn");
                    thats
                        .chart()
                        .setResolution("30", function onReadyCallback() {});
                });
            thats
                .createButton()
                .addClass("mydate")
                .attr("title", "1hour")
                .text("1hour")
                .on("click", function(e) {
                    $(this)
                        .parent()
                        .siblings()
                        .children()
                        .removeClass("clickBtn");
                    $(this)
                        .parent()
                        .siblings()
                        .children()
                        .addClass("mydate");
                    $(this).removeClass("mydate");
                    $(this).addClass("clickBtn");
                    thats
                        .chart()
                        .setResolution("60", function onReadyCallback() {});
                });
            thats
                .createButton()
                .addClass("mydate")
                .attr("title", "4hour")
                .text("4hour")
                .on("click", function(e) {
                    $(this)
                        .parent()
                        .siblings()
                        .children()
                        .removeClass("clickBtn");
                    $(this)
                        .parent()
                        .siblings()
                        .children()
                        .addClass("mydate");
                    $(this).removeClass("mydate");
                    $(this).addClass("clickBtn");
                    thats
                        .chart()
                        .setResolution("240", function onReadyCallback() {});
                });

            thats
                .createButton()
                .addClass("mydate")
                .attr("title", "1day")
                .text("1day")
                .on("click", function(e) {
                    $(this)
                        .parent()
                        .siblings()
                        .children()
                        .removeClass("clickBtn");
                    $(this)
                        .parent()
                        .siblings()
                        .children()
                        .addClass("mydate");
                    $(this).removeClass("mydate");
                    $(this).addClass("clickBtn");
                    thats
                        .chart()
                        .setResolution("1D", function onReadyCallback() {});
                });
            thats
                .createButton()
                .addClass("mydate")
                .attr("title", "5day")
                .text("5day")
                .on("click", function(e) {
                    $(this)
                        .parent()
                        .siblings()
                        .children()
                        .removeClass("clickBtn");
                    $(this)
                        .parent()
                        .siblings()
                        .children()
                        .addClass("mydate");
                    $(this).removeClass("mydate");
                    $(this).addClass("clickBtn");
                    thats
                        .chart()
                        .setResolution("5D", function onReadyCallback() {});
                });
            thats
                .createButton()
                .addClass("mydate")
                .attr("title", "1week")
                .text("1week")
                .on("click", function(e) {
                    $(this)
                        .parent()
                        .siblings()
                        .children()
                        .removeClass("clickBtn");
                    $(this)
                        .parent()
                        .siblings()
                        .children()
                        .addClass("mydate");
                    $(this).removeClass("mydate");
                    $(this).addClass("clickBtn");
                    thats
                        .chart()
                        .setResolution("1W", function onReadyCallback() {});
                });
            thats
                .createButton()
                .addClass("mydate")
                .attr("title", "1mon")
                .text("1mon")
                .on("click", function(e) {
                    $(this)
                        .parent()
                        .siblings()
                        .children()
                        .removeClass("clickBtn");
                    $(this)
                        .parent()
                        .siblings()
                        .children()
                        .addClass("mydate");
                    $(this).removeClass("mydate");
                    $(this).addClass("clickBtn");
                    thats
                        .chart()
                        .setResolution("1M", function onReadyCallback() {});
                });
        });
    }
};
TVjsApi.prototype.sendMessage = function(data) {
    var that = this;
    console.log("这是要发送的数据：" + JSON.stringify(data));
    if (this.socket.checkOpen()) {
        this.socket.send(data);
    } else {
        this.socket.on("open", function() {
            that.socket.send(data);
        });
    }
};
TVjsApi.prototype.unSubscribe = function(interval) {
    if (interval < 60) {
        this.sendMessage({
            cmd: "unsub",
            args: [
                "candle.M" + interval + "." + this.symbol.toLowerCase(),
                1440,
                parseInt(Date.now() / 1000)
            ]
        });
    } else if (interval >= 60) {
        this.sendMessage({
            cmd: "unsub",
            args: [
                "candle.H" + interval / 60 + "." + this.symbol.toLowerCase(),
                1440,
                parseInt(Date.now() / 1000)
            ]
        });
    } else {
        this.sendMessage({
            cmd: "unsub",
            args: [
                "candle.D1." + this.symbol.toLowerCase(),
                207,
                parseInt(Date.now() / 1000)
            ]
        });
    }
};
TVjsApi.prototype.subscribe = function() {
    if (this.interval < 60) {
        this.sendMessage({
            cmd: "sub",
            args: ["candle.M" + this.interval + "." + this.symbol.toLowerCase()]
        });
    } else if (this.interval >= 60) {
        this.sendMessage({
            cmd: "sub",
            args: [
                "candle.H" +
                    this.interval / 60 +
                    "." +
                    this.symbol.toLowerCase()
            ]
        });
    } else {
        this.sendMessage({
            cmd: "sub",
            args: ["candle.D1." + this.symbol.toLowerCase()]
        });
    }
};
TVjsApi.prototype.onMessage = function(data) {
    var thats = this.TVjsApi;
    count++;
    if (count < 15) {
        console.log("这是后台返回的数据" + count + "：" + JSON.stringify(data));
    }

    if (data.data && data.data.length) {
        var list = [];
        var ticker = thats.symbol + "-" + thats.interval;
        var that = thats;
        data.data.forEach(function(element) {
            list.push({
                time:
                    that.interval !== "D" || that.interval !== "1D"
                        ? element.id * 1000
                        : element.id,
                open: element.open,
                high: element.high,
                low: element.low,
                close: element.close,
                volume: element.quote_vol
            });
        }, that);
        thats.cacheData[ticker] = list;
        thats.lastTime = list[list.length - 1].time;
        thats.subscribe();
    }
    if (data.type && data.type.indexOf(thats.symbol.toLowerCase()) !== -1) {
        // console.log(' >> sub:', data.type)
        thats.datafeeds.barsUpdater.updateData();
        var ticker = thats.symbol + "-" + thats.interval;
        var barsData = {
            time: data.id * 1000,
            open: data.open,
            high: data.high,
            low: data.low,
            close: data.close,
            volume: data.quote_vol
        };
        if (
            barsData.time >= thats.lastTime &&
            thats.cacheData[ticker] &&
            thats.cacheData[ticker].length
        ) {
            thats.cacheData[ticker][
                thats.cacheData[ticker].length - 1
            ] = barsData;
        }
    }
};
TVjsApi.prototype.getBars = function(
    symbolInfo,
    resolution,
    rangeStartDate,
    rangeEndDate,
    onLoadedCallback
) {
    // console.log(' >> :', rangeStartDate, rangeEndDate)
    if (this.interval !== resolution) {
        this.unSubscribe(this.interval);
        this.interval = resolution;
        if (resolution < 60) {
            this.sendMessage({
                cmd: "req",
                args: [
                    "candle.M" +
                        this.interval +
                        "." +
                        this.symbol.toLowerCase(),
                    1440,
                    parseInt(Date.now() / 1000)
                ]
            });
        } else if (resolution >= 60) {
            this.sendMessage({
                cmd: "req",
                args: [
                    "candle.H" +
                        this.interval / 60 +
                        "." +
                        this.symbol.toLowerCase(),
                    1440,
                    parseInt(Date.now() / 1000)
                ]
            });
        } else {
            this.sendMessage({
                cmd: "req",
                args: [
                    "candle.D1." + this.symbol.toLowerCase(),
                    800,
                    parseInt(Date.now() / 1000)
                ]
            });
        }
    }
    var ticker = this.symbol + "-" + this.interval;
    if (this.cacheData[ticker] && this.cacheData[ticker].length) {
        this.isLoading = false;
        var newBars = [];
        this.cacheData[ticker].forEach(item => {
            if (
                item.time >= rangeStartDate * 1000 &&
                item.time <= rangeEndDate * 1000
            ) {
                newBars.push(item);
            }
        });
        onLoadedCallback(newBars);
    } else {
        var self = this;
        this.getBarTimer = setTimeout(function() {
            self.getBars(
                symbolInfo,
                resolution,
                rangeStartDate,
                rangeEndDate,
                onLoadedCallback
            );
        }, 10);
    }
};
var TVjsApi = new TVjsApi();
TVjsApi.init();
