<template>
  <div class="TVChartContainer" :id="containerId"/>
</template>

<script>
import Datafeed from "./api/index";
function getLanguageFromURL() {
  const regex = new RegExp("[\\?&]lang=([^&#]*)");
  const results = regex.exec(window.location.search);
  return results === null
    ? null
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

export default {
  props: {
    symbol: {
      default: "Coinbase:BTC/USD",
      type: String
    },
    interval: {
      default: "1",
      type: String
    },
    containerId: {
      default: "tv_chart_container",
      type: String
    },
    libraryPath: {
      default: "/charting_library/",
      type: String
    },
    // chartsStorageUrl: {
    //   default: "https://saveload.tradingview.com",
    //   type: String
    // },
    // chartsStorageApiVersion: {
    //   default: "1.13",
    //   type: String
    // },
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
    this.buttons = [
      { title: "1分", resolution: "1", chartType: 1 },
      { title: "5分", resolution: "5", chartType: 1 },
      { title: "15分", resolution: "15", chartType: 1 },
      { title: "30分", resolution: "30", chartType: 1 },
      { title: "1时", resolution: "60", chartType: 1 }
    ];
    return {
      tvWidget: null
    };
  },

  mounted() {
    const widgetOptions = {
      debug: false,
      symbol: this.symbol,
      theme: "Dark",
      // BEWARE: no trailing slash is expected in feed URL
      datafeed: Datafeed,
      interval: this.interval,
      container_id: this.containerId,
      library_path: this.libraryPath,
      timezone: "Asia/Shanghai", //todo: ustawianie timezone'a po strefie usera
      locale: "zh",
      drawings_access: { type: "black", tools: [{ name: "Regression Trend" }] },
      disabled_features: [
        "use_localstorage_for_settings",
        "show_trading_notifications_history",
        //用户本地存储
        "dont_show_boolean_study_arguments",
        "use_localstorage_for_settings",
        //左边工具栏
        "left_toolbar",
        "header_widget",
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
        "edit_buttons_in_legend"
      ],
      enabled_features: [
        "dont_show_boolean_study_arguments",
        "hide_last_na_study_output",
        "fix_left_edge",
        "show_dom_first_time",
        "study_templates"
      ],
      client_id: this.clientId,
      user_id: this.userId,
      fullscreen: this.fullscreen,
      autosize: this.autosize,
      studies_overrides: {
        "volume.volume.color.0": "#F66464",
        "volume.volume.color.1": "#1DBC8C",
        "volume.volume.transparency": 255
      },
      overrides: {
        volumePaneSize: "medium", // 支持的值: large, medium, small, tiny
        "paneProperties.background": "#1b212d",
        //网格
        "paneProperties.vertGridProperties.color": "#1b212d",
        "paneProperties.horzGridProperties.color": "#1b212d",
        "scalesProperties.lineColor": "#1b212d",
        "scalesProperties.textColor": "#9BA0AC",
        "paneProperties.topMargin": 12,
        "scalesProperties.backgroundColor": "#262626",
        "symbolWatermarkProperties.color": "rgba(0, 0, 0, 0)",
        "mainSeriesProperties.candleStyle.upColor": "#1DBC8C",
        "mainSeriesProperties.candleStyle.borderUpColor": "#1DBC8C",
        "mainSeriesProperties.candleStyle.wickUpColor": "#1DBC8C",
        "mainSeriesProperties.candleStyle.downColor": "#F66464",
        "mainSeriesProperties.candleStyle.borderDownColor": "#F66464",
        "mainSeriesProperties.candleStyle.wickDownColor": "#F66464",
        "paneProperties.legendProperties.showLegend": false,
        "symbolWatermarkProperties.color": "rgba(0, 0, 0, 0)"
      },
      loading_screen: {
        backgroundColor: "#1b212d",
        foregroundColor: "#1b212d"
      },
      custom_css_url: "bundles/coustom.css"
    };

    const tvWidget = new TradingView.widget(widgetOptions);

    this.tvWidget = tvWidget;
    tvWidget.onChartReady(() => {
      this.createStudy(tvWidget);
    });
  },
  methods: {
    createStudy(tvWidget) {
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
    },
    clickBtn(resolution) {
      resolution = resolution.toString();
      this.tvWidget
        .chart()
        .setResolution(resolution, function onReadyCallback() {});
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
  height: 100%;
}
</style>
