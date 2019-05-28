<template>
  <div class="TVChartContainer" :id="containerId"/>
</template>

<script>
function getLanguageFromURL() {
  const regex = new RegExp("[\\?&]lang=([^&#]*)");
  const results = regex.exec(window.location.search);
  return results === null
    ? null
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}
import { kLine } from "./data";
export default {
  name: "TVChartContainer",
  props: {
    symbol: {
      default: "AAPL",
      type: String
    },
    interval: {
      default: "60",
      type: String
    },
    containerId: {
      default: "tv_chart_container",
      type: String
    },
    datafeedUrl: {
      default: "https://demo_feed.tradingview.com",
      type: String
    },
    libraryPath: {
      default: "/charting_library/",
      type: String
    },
    chartsStorageUrl: {
      default: "https://saveload.tradingview.com",
      type: String
    },
    chartsStorageApiVersion: {
      default: "1.1",
      type: String
    },
    clientId: {
      default: "tradingview.com",
      type: String
    },
    userId: {
      default: "public_user_id",
      type: String
    },
    fullscreen: {
      default: false,
      type: Boolean
    },
    autosize: {
      default: true,
      type: Boolean
    },
    studiesOverrides: {
      type: Object
    }
  },
  data() {
    return {
      currency1: "USD",
      currency2: "BTC",
      saved_chart: null,
      chart: null,
      feed: null,
      last_price: 1234.2365,
      bars: []
    };
  },
  tvWidget: null,
  mounted() {
    this.resetData(kLine);
    const feed = this.createFeed();
    const widgetOptions = {
      symbol: this.symbol,
      // BEWARE: no trailing slash is expected in feed URL
      fullscreen: true,

      datafeed: feed,
      interval: this.interval,
      container_id: this.containerId,
      library_path: this.libraryPath,
      locale: getLanguageFromURL() || "zh",
      disabled_features: [
        // "use_localstorage_for_settings",
        // "left_toolbar",
        // "header_settings",
        // "header_undo_redo",
        "show_trading_notifications_history",
        //用户本地存储
        "dont_show_boolean_study_arguments",
        // "use_localstorage_for_settings",
        "adaptive_logo",
        //左边工具栏
        "left_toolbar",
        // 顶部工具栏
        // "header_widget_dom_node",
        //周围边框
        "border_around_the_chart",
        //底部时间栏目
        "timeframes_toolbar",
        //k线与销量分开
        "volume_force_overlay",
        //图表右键菜单
        "pane_context_menu",
        //搜索
        "header_symbol_search",
        "symbol_search_hot_key",
        //左右箭头
        "header_undo_redo",
        //compare
        "header_compare",
        //图表类型
        "header_chart_type",
        //照相机
        "header_screenshot",
        //设置按钮
        "header_settings",
        //技术指标线
        "header_indicators",
        //上传下载按钮
        "header_saveload",
        //分辨率
        "header_resolutions",
        //全屏
        "header_fullscreen_button",
        "property_pages",
        "chart_zoom",
        "control_bar",
        "legend_context_menu"
      ],
      enabled_features: [
        "hide_last_na_study_output",
        "study_templates",
        "fix_left_edge",
        "show_logo_on_all_charts"
      ],
      charts_storage_url: this.chartsStorageUrl,
      charts_storage_api_version: this.chartsStorageApiVersion,
      client_id: this.clientId,
      user_id: this.userId,
      fullscreen: this.fullscreen,
      autosize: this.autosize,
      studies_overrides: this.studiesOverrides
    };
    const tvWidget = new TradingView.widget(widgetOptions);
    console.log(tvWidget);
    this.tvWidget = tvWidget;

    tvWidget.onChartReady(() => {
      tvWidget
        .chart()
        .createStudy("Moving Average Exponential", false, false, [5], null, {
          "plot.color": "#989898",
          "plot.linewidth": 1
        });
      tvWidget
        .chart()
        .createStudy("Moving Average Exponential", false, false, [10], null, {
          "plot.color": "#bc8b32",
          "plot.linewidth": 1
        });
      tvWidget
        .chart()
        .createStudy("Moving Average Exponential", false, false, [30], null, {
          "plot.color": "#cf30af",
          "plot.linewidth": 1
        });
      tvWidget
        .createButton()
        .attr("title", "1m")
        .addClass("mydate button")
        .html("<span>1m</span>")
        .on("click", function(e) {
          //   showLine(widget, true);
          //   saveClass($(this));
          //   widget.chart().setChartType(1);
          tvWidget.chart().setResolution("1", function onReadyCallback() {});
        });
      tvWidget
        .createButton()
        .addClass("mydate")
        .attr("title", "5min")
        .html("<span>5m</span>")
        .on("click", function(e) {
          //   showLine(widget, true);
          //   saveClass($(this));
          //   widget.chart().setChartType(1);
          tvWidget.chart().setResolution("5", function onReadyCallback() {});
        });
      tvWidget
        .createButton()
        .addClass("mydate")
        .attr("title", "15min")
        .html("<span>15m</span>")
        .on("click", function(e) {
          //   showLine(widget, true);
          //   saveClass($(this));
          //   widget.chart().setChartType(1);
          tvWidget.chart().setResolution("15", function onReadyCallback() {});
        });
      tvWidget
        .createButton()
        .addClass("mydate")
        .attr("title", "30min")
        .addClass("mydate button active")
        .html("<span>30m</span>")
        .on("click", function(e) {
          //   showLine(widget, true);
          //   saveClass($(this));
          //   widget.chart().setChartType(1);
          tvWidget.chart().setResolution("30", function onReadyCallback() {});
        });
      tvWidget
        .createButton()
        .addClass("mydate")
        .attr("title", "1hour")
        .html("<span>1h</span>")
        .on("click", function(e) {
          //   showLine(widget, true);
          //   saveClass($(this));
          //   widget.chart().setChartType(1);
          tvWidget.chart().setResolution("60", function onReadyCallback() {});
        });
      tvWidget
        .createButton()
        .addClass("mydate")
        .attr("title", "4hour")
        .html("<span>4h</span>")
        .on("click", function(e) {
          //   showLine(widget, true);
          //   saveClass($(this));
          //   widget.chart().setChartType(1);
          tvWidget.chart().setResolution("240", function onReadyCallback() {});
        });
      tvWidget
        .createButton()
        .addClass("mydate")
        .attr("title", "1day")
        .html("<span>1D</span>")
        .on("click", function(e) {
          //   showLine(widget, true);
          //   saveClass($(this));
          //   widget.chart().setChartType(1);
          tvWidget.chart().setResolution("D", function onReadyCallback() {});
        });
      tvWidget
        .createButton()
        .addClass("mydate")
        .attr("title", "1week")
        .html("<span>1W</span>")
        .on("click", function(e) {
          //   showLine(widget, true);
          //   saveClass($(this));
          //   widget.chart().setChartType(1);
          tvWidget.chart().setResolution("W", function onReadyCallback() {});
        });
      tvWidget
        .createButton()
        .addClass("mydate")
        .attr("title", "1month")
        .html("<span>1M</span>")
        .on("click", function(e) {
          //   showLine(widget, true);
          //   saveClass($(this));
          //   widget.chart().setChartType(1);
          tvWidget.chart().setResolution("M", function onReadyCallback() {});
        });
    });
  },
  methods: {
    resetData(data) {
      data.forEach(item => {
        this.bars.push({
          close: Number(item[4]),
          open: Number(item[1]),
          high: Number(item[2]),
          low: Number(item[3]),
          volume: Number(item[5]),
          time: Number(item[0])
        });
      });
      console.log(this.bars);
    },
    createFeed() {
      let this_vue = this;
      let Datafeed = {};

      Datafeed.DataPulseUpdater = function(datafeed, updateFrequency) {
        this._datafeed = datafeed;
        this._subscribers = {};

        this._requestsPending = 0;
        var that = this;

        var update = function() {
          if (that._requestsPending > 0) {
            return;
          }

          for (var listenerGUID in that._subscribers) {
            var subscriptionRecord = that._subscribers[listenerGUID];
            var resolution = subscriptionRecord.resolution;

            var datesRangeRight = parseInt(new Date().valueOf() / 1000);

            //	BEWARE: please note we really need 2 bars, not the only last one
            //	see the explanation below. `10` is the `large enough` value to work around holidays
            var datesRangeLeft =
              datesRangeRight - that.periodLengthSeconds(resolution, 10);

            that._requestsPending++;

            (function(_subscriptionRecord) {
              // eslint-disable-line
              that._datafeed.getBars(
                _subscriptionRecord.symbolInfo,
                resolution,
                datesRangeLeft,
                datesRangeRight,
                function(bars) {
                  that._requestsPending--;

                  //	means the subscription was cancelled while waiting for data
                  if (!that._subscribers.hasOwnProperty(listenerGUID)) {
                    return;
                  }

                  if (bars.length === 0) {
                    return;
                  }

                  var lastBar = bars[bars.length - 1];
                  if (
                    !isNaN(_subscriptionRecord.lastBarTime) &&
                    lastBar.time < _subscriptionRecord.lastBarTime
                  ) {
                    return;
                  }

                  var subscribers = _subscriptionRecord.listeners;

                  //	BEWARE: this one isn't working when first update comes and this update makes a new bar. In this case
                  //	_subscriptionRecord.lastBarTime = NaN
                  var isNewBar =
                    !isNaN(_subscriptionRecord.lastBarTime) &&
                    lastBar.time > _subscriptionRecord.lastBarTime;

                  //	Pulse updating may miss some trades data (ie, if pulse period = 10 secods and new bar is started 5 seconds later after the last update, the
                  //	old bar's last 5 seconds trades will be lost). Thus, at fist we should broadcast old bar updates when it's ready.
                  if (isNewBar) {
                    if (bars.length < 2) {
                      throw new Error(
                        "Not enough bars in history for proper pulse update. Need at least 2."
                      );
                    }

                    var previousBar = bars[bars.length - 2];
                    for (var i = 0; i < subscribers.length; ++i) {
                      subscribers[i](previousBar);
                    }
                  }

                  _subscriptionRecord.lastBarTime = lastBar.time;

                  for (var i = 0; i < subscribers.length; ++i) {
                    subscribers[i](lastBar);
                  }
                },

                //	on error
                function() {
                  that._requestsPending--;
                }
              );
            })(subscriptionRecord);
          }
        };

        if (typeof updateFrequency != "undefined" && updateFrequency > 0) {
          setInterval(update, updateFrequency);
        }
      };

      Datafeed.DataPulseUpdater.prototype.periodLengthSeconds = function(
        resolution,
        requiredPeriodsCount
      ) {
        var daysCount = 0;

        if (resolution === "D") {
          daysCount = requiredPeriodsCount;
        } else if (resolution === "M") {
          daysCount = 31 * requiredPeriodsCount;
        } else if (resolution === "W") {
          daysCount = 7 * requiredPeriodsCount;
        } else {
          daysCount = (requiredPeriodsCount * resolution) / (24 * 60);
        }

        return daysCount * 24 * 60 * 60;
      };

      Datafeed.DataPulseUpdater.prototype.subscribeDataListener = function(
        symbolInfo,
        resolution,
        newDataCallback,
        listenerGUID
      ) {
        this._datafeed._logMessage("Subscribing " + listenerGUID);

        if (!this._subscribers.hasOwnProperty(listenerGUID)) {
          this._subscribers[listenerGUID] = {
            symbolInfo: symbolInfo,
            resolution: resolution,
            lastBarTime: NaN,
            listeners: []
          };
        }

        this._subscribers[listenerGUID].listeners.push(newDataCallback);
      };

      Datafeed.DataPulseUpdater.prototype.unsubscribeDataListener = function(
        listenerGUID
      ) {
        this._datafeed._logMessage("Unsubscribing " + listenerGUID);
        delete this._subscribers[listenerGUID];
      };

      Datafeed.Container = function(updateFrequency) {
        this._configuration = {
          supports_search: false,
          supports_group_request: false,
          supported_resolutions: [
            "1",
            "5",
            "15",
            "30",
            "60",
            "240",
            "1D",
            "1W",
            "1M"
          ],
          supports_marks: true,
          supports_timescale_marks: true,
          exchanges: ["myExchange"]
        };

        this._barsPulseUpdater = new Datafeed.DataPulseUpdater(
          this,
          updateFrequency || 10 * 1000
        );
        // this._quotesPulseUpdater = new Datafeed.QuotesPulseUpdater(this);

        this._enableLogging = true;
        this._callbacks = {};

        this._initializationFinished = true;
        this._fireEvent("initialized");
        this._fireEvent("configuration_ready");
      };

      Datafeed.Container.prototype._fireEvent = function(event, argument) {
        if (this._callbacks.hasOwnProperty(event)) {
          var callbacksChain = this._callbacks[event];
          for (var i = 0; i < callbacksChain.length; ++i) {
            callbacksChain[i](argument);
          }

          this._callbacks[event] = [];
        }
      };

      Datafeed.Container.prototype._logMessage = function(message) {
        if (this._enableLogging) {
          var now = new Date();
          console.log(
            "CHART LOGS: " +
              now.toLocaleTimeString() +
              "." +
              now.getMilliseconds() +
              "> " +
              message
          );
        }
      };

      Datafeed.Container.prototype.on = function(event, callback) {
        if (!this._callbacks.hasOwnProperty(event)) {
          this._callbacks[event] = [];
        }

        this._callbacks[event].push(callback);
        return this;
      };

      Datafeed.Container.prototype.onReady = function(callback) {
        let that = this;
        if (this._configuration) {
          setTimeout(function() {
            callback(that._configuration);
          }, 0);
        } else {
          this.on("configuration_ready", function() {
            callback(that._configuration);
          });
        }
      };

      Datafeed.Container.prototype.resolveSymbol = function(
        symbolName,
        onSymbolResolvedCallback,
        onResolveErrorCallback
      ) {
        this._logMessage("GOWNO :: resolve symbol " + symbolName);
        Promise.resolve().then(() => {
          function adjustScale() {
            if (this_vue.last_price > 1000) return 100;
            else return 100000000;
          }

          this._logMessage(
            "GOWNO :: " + this_vue.currency1 + ":" + this_vue.currency2
          );
          onSymbolResolvedCallback({
            name: "Ken:TradingView",
            timezone: "Asia/Shanghai",
            pricescale: adjustScale(),
            minmov: 1,
            minmov2: 0,
            ticker: "Ken:TradingView",
            description: "",
            session: "24x7",
            type: "bitcoin",
            "exchange-traded": "myExchange",
            "exchange-listed": "myExchange",
            has_intraday: true,
            intraday_multipliers: [
              "1",
              "3",
              "5",
              "15",
              "30",
              "60",
              "120",
              "240",
              "360",
              "720",
              "1D",
              "3D",
              "1W",
              "1M"
            ], //It is an array containing intraday resolutions (in minutes) the datafeed wants to build by itself. E.g., if the datafeed reported he supports resolutions ["1", "5", "15"], but in fact it has only 1 minute bars for symbol X, it should set intraday_multipliers of X = [1]. This will make Charting Library to build 5 and 15 resolutions by itself.
            has_weekly_and_monthly: false,
            has_no_volume: false,
            regular_session: "24x7"
          });
        });
      };

      Datafeed.Container.prototype.getBars = function(
        symbolInfo,
        resolution,
        rangeStartDate,
        rangeEndDate,
        onDataCallback,
        onErrorCallback
      ) {
        if (rangeStartDate > 0 && (rangeStartDate + "").length > 10) {
          throw new Error([
            "Got a JS time instead of Unix one.",
            rangeStartDate,
            rangeEndDate
          ]);
        }
        onDataCallback([], { noData: true });
        //onDataCallback(bars, { noData: true , nextTime: data.nb || data.nextTime });
      };

      Datafeed.Container.prototype.subscribeBars = function(
        symbolInfo,
        resolution,
        onRealtimeCallback,
        listenerGUID,
        onResetCacheNeededCallback
      ) {
        this_vue.bars.forEach(function(bar) {
          // in subscribeBars
          onRealtimeCallback(bar);
        });
        this.on("pair_change", function() {
          onResetCacheNeededCallback();
        });
        //this._barsPulseUpdater.subscribeDataListener(symbolInfo, resolution, onRealtimeCallback, listenerGUID, onResetCacheNeededCallback);
      };

      Datafeed.Container.prototype.unsubscribeBars = function(listenerGUID) {
        console.log(listenerGUID);
        this._barsPulseUpdater.unsubscribeDataListener(listenerGUID);
      };

      return new Datafeed.Container();
    }
  },
  destroyed() {
    if (this.tvWidget !== null) {
      this.tvWidget.remove();
      this.tvWidget = null;
    }
  }
};
</script>

<style lang="stylus" scoped>
.TVChartContainer {
  width: 100%;
  height: 400px;
}
</style>