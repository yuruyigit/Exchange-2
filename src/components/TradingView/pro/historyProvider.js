import { Get } from "common/Api";
const history = {};

export default {
    history: history,
    getBars: function(symbolInfo, resolution, from, to, first, limit) {
        var split_symbol = symbolInfo.name.split(/[:/]/);
        // to = to * 1000;
        // console.log(resolution)
        if (resolution < 60) {
            resolution = resolution + "m";
        } else if (resolution == 60) {
            resolution = "1h";
        } else if (resolution == "1D") {
            resolution = "1d";
        } else if (resolution == "1W") {
            resolution = "1w";
        } else if (resolution == "1M") {
            resolution = "1M";
        } else {
            resolution = "5m";
        }
        const qs = {
            currency: split_symbol[0],
            base: split_symbol[1],
            openTime: to ? to : "",
            interval: resolution, //resolution
            pageSize: limit ? limit : 200
        };
        return Get({
            url: "/v1/kline/findList",
            data: qs,
            name: "K线数据源"
        }).then(data => {
            if (data.Response && data.Response === "Error") {
                console.log("CryptoCompare API error:", data.Message);
                return [];
            }
            if (data.data.length) {
                var bars = data.data.map(el => {
                    return {
                        time: el.openTime, //TradingView requires bar time in ms
                        low: el.low,
                        high: el.high,
                        open: el.open,
                        close: el.close,
                        volume: el.volume,
                    };
                });
                if (first) {
                    var lastBar = bars[bars.length - 1];
                    history[symbolInfo.name] = { lastBar: lastBar };
                }
                return bars;
            } else {
                return [];
            }
        });
    }
};
