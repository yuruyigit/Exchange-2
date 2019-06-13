var rp = require("request-promise").defaults({ json: true });

const api_root = "http://192.168.50.71:8080/v1/kline/findList";
const history = {};

export default {
    history: history,
    getBars: function(symbolInfo, resolution, from, to, first, limit) {
        var split_symbol = symbolInfo.name.split(/[:/]/);
        to = to * 1000;
        console.log(resolution)
        if(resolution<60){
            resolution = resolution + "m"
        }else if(resolution == 60){
            resolution ="1h"
        }else if(resolution == 'D'){
            resolution ="1d"
        }else if(resolution == 'W'){
            resolution ="1w"
        }else if(resolution == 'M'){
            resolution ="1M"
        }
        const qs = {
            currency: split_symbol[0],
            base: split_symbol[1],
            openTime: from ? from : "",
            interval: resolution,
            pageSize: limit ? limit : 500
            // aggregate: 1//resolution
        };
        // console.log({qs})

        return rp({
            url: `${api_root}`,
            qs
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
                        volume: el.volume
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
