import historyProvider from "./historyProvider";
import { dateFormat } from "common/TollClass/func";
// import stream from './stream'

const supportedResolutions = ["1", "5", "15", "30", "60", "1D", "1W", "1M"];

const config = {
    supported_resolutions: supportedResolutions,
    supports_search: false,
    supports_group_request: true,
    supports_marks: false,// 是否支持在K线上显示标记
    supports_timescale_marks: false,// 是否支持时间刻度标记
};

export default {
    onReady: cb => {
        console.log("=====onReady running");
        setTimeout(() => cb(config), 0);
    },
    searchSymbols: (userInput, exchange, symbolType, onResultReadyCallback) => {
        console.log("====Search Symbols running");
    },
    resolveSymbol: (
        symbolName,
        onSymbolResolvedCallback,
        onResolveErrorCallback
    ) => {
        // expects a symbolInfo object in response
        console.log("======resolveSymbol running", symbolName);
        // console.log('resolveSymbol:',{symbolName})
        var split_data = symbolName.split(/[:/]/);
        // console.log({split_data})
        var symbol_stub = {
            name: symbolName,
            description: "",
            type: "crypto",
            session: "24x7",
            timezone: "Asia/Shanghai",
            ticker: symbolName,
            exchange: "huobi",
            minmov: 1,
            pricescale: 100,
            has_intraday: true,
            has_weekly_and_monthly: false,
            intraday_multipliers: ["1", "5", "15", "30", "60"],
            // supported_resolution: supportedResolutions,
            volume_precision: 8,
            data_status: "streaming"
        };

        if (symbolName.match(/USD|EUR|JPY|AUD|GBP|KRW|CNY/)) {
            symbol_stub.pricescale = 100;
        }
        setTimeout(function() {
            onSymbolResolvedCallback(symbol_stub);
            console.log("Resolving that symbol....", symbol_stub);
        }, 0);

        // onResolveErrorCallback('Not feeling it today')
    },
    getBars: function(
        symbolInfo,
        resolution,
        from,
        to,
        onHistoryCallback,
        onErrorCallback,
        firstDataRequest
    ) {
        let bar = [
            {
                time: 1560387480000,
                low: 8168.68,
                high: 8178.07,
                open: 8178.07,
                close: 8169.91,
                volume: 2.892
            },
            {
                time: 1560387540000,
                low: 8166.96,
                high: 8171.3,
                open: 8169.91,
                close: 8167.97,
                volume: 3.274
            },
            {
                time: 1560387600000,
                low: 8161.68,
                high: 8171.46,
                open: 8167.97,
                close: 8165.93,
                volume: 1.289
            },
            {
                time: 1560387660000,
                low: 8161.62,
                high: 8172,
                open: 8165.93,
                close: 8171.95,
                volume: 2.754
            },
            {
                time: 1560387720000,
                low: 8166.01,
                high: 8171.95,
                open: 8171.95,
                close: 8166.75,
                volume: 3.923
            },
            {
                time: 1560387780000,
                low: 8166.37,
                high: 8167,
                open: 8166.75,
                close: 8167,
                volume: 2.771
            },
            {
                time: 1560387840000,
                low: 8166.99,
                high: 8169,
                open: 8167,
                close: 8169,
                volume: 2.343
            },
            {
                time: 1560387900000,
                low: 8169,
                high: 8179.28,
                open: 8169,
                close: 8176.59,
                volume: 2.457
            },
            {
                time: 1560387960000,
                low: 8172.01,
                high: 8179.22,
                open: 8176.59,
                close: 8174.74,
                volume: 0.9488
            },
            {
                time: 1560388020000,
                low: 8167.49,
                high: 8174.74,
                open: 8174.74,
                close: 8169.19,
                volume: 0.907
            },
            {
                time: 1560388080000,
                low: 8166,
                high: 8170,
                open: 8169.19,
                close: 8166.17,
                volume: 3.441
            },
            {
                time: 1560388140000,
                low: 8160,
                high: 8168.02,
                open: 8166.17,
                close: 8160.55,
                volume: 10.36
            },
            {
                time: 1560388200000,
                low: 8160,
                high: 8162.46,
                open: 8160.55,
                close: 8160.17,
                volume: 1.112
            },
            {
                time: 1560388260000,
                low: 8160.02,
                high: 8163.71,
                open: 8160.17,
                close: 8162.25,
                volume: 3.865
            },
            {
                time: 1560388320000,
                low: 8155,
                high: 8164.94,
                open: 8162.25,
                close: 8156.38,
                volume: 3.475
            },
            {
                time: 1560388380000,
                low: 8155,
                high: 8157.12,
                open: 8156.38,
                close: 8156.7,
                volume: 1.051
            },
            {
                time: 1560388440000,
                low: 8155,
                high: 8156.7,
                open: 8156.7,
                close: 8155,
                volume: 1.846
            },
            {
                time: 1560388500000,
                low: 8155,
                high: 8158.26,
                open: 8155,
                close: 8157.43,
                volume: 5.9
            },
            {
                time: 1560388560000,
                low: 8157.43,
                high: 8159.21,
                open: 8157.43,
                close: 8159.21,
                volume: 2.292
            },
            {
                time: 1560388620000,
                low: 8159.05,
                high: 8160.47,
                open: 8159.21,
                close: 8160.01,
                volume: 4.121
            },
            {
                time: 1560388680000,
                low: 8157.42,
                high: 8160.01,
                open: 8160.01,
                close: 8157.42,
                volume: 2.76
            },
            {
                time: 1560388740000,
                low: 8150.75,
                high: 8157.43,
                open: 8157.42,
                close: 8151.65,
                volume: 8.322
            },
            {
                time: 1560388800000,
                low: 8151.65,
                high: 8155.47,
                open: 8151.65,
                close: 8155.43,
                volume: 1.735
            },
            {
                time: 1560388860000,
                low: 8153.73,
                high: 8157.11,
                open: 8155.43,
                close: 8157.11,
                volume: 0.5591
            },
            {
                time: 1560388920000,
                low: 8153.73,
                high: 8157.11,
                open: 8157.11,
                close: 8153.73,
                volume: 1.733
            },
            {
                time: 1560388980000,
                low: 8153.03,
                high: 8153.73,
                open: 8153.73,
                close: 8153.04,
                volume: 1.025
            },
            {
                time: 1560389040000,
                low: 8150.01,
                high: 8153.04,
                open: 8153.04,
                close: 8150.15,
                volume: 1.757
            },
            {
                time: 1560389100000,
                low: 8150.01,
                high: 8153.45,
                open: 8150.15,
                close: 8153.45,
                volume: 4.645
            },
            {
                time: 1560389160000,
                low: 8150.53,
                high: 8153.45,
                open: 8153.45,
                close: 8153,
                volume: 0.477
            },
            {
                time: 1560389220000,
                low: 8150,
                high: 8153,
                open: 8153,
                close: 8150.01,
                volume: 1.499
            },
            {
                time: 1560389280000,
                low: 8146.64,
                high: 8150.01,
                open: 8150.01,
                close: 8148.2,
                volume: 2.351
            },
            {
                time: 1560389340000,
                low: 8136.82,
                high: 8148.2,
                open: 8148.2,
                close: 8136.84,
                volume: 6.106
            },
            {
                time: 1560389400000,
                low: 8136.51,
                high: 8139.2,
                open: 8136.84,
                close: 8137.95,
                volume: 6.228
            },
            {
                time: 1560389460000,
                low: 8137.94,
                high: 8139.02,
                open: 8137.95,
                close: 8139.02,
                volume: 2.396
            },
            {
                time: 1560389520000,
                low: 8139.01,
                high: 8143.43,
                open: 8139.02,
                close: 8142.98,
                volume: 6.307
            },
            {
                time: 1560389580000,
                low: 8141.76,
                high: 8142.99,
                open: 8142.98,
                close: 8142.4,
                volume: 0.761
            },
            {
                time: 1560389640000,
                low: 8141.84,
                high: 8145.12,
                open: 8142.4,
                close: 8145.12,
                volume: 7.413
            },
            {
                time: 1560389700000,
                low: 8145.12,
                high: 8148.43,
                open: 8145.12,
                close: 8148.08,
                volume: 4.077
            },
            {
                time: 1560389760000,
                low: 8145.8,
                high: 8149.87,
                open: 8148.08,
                close: 8149.87,
                volume: 1.25
            },
            {
                time: 1560389820000,
                low: 8149.87,
                high: 8155,
                open: 8149.87,
                close: 8154.94,
                volume: 1.281
            },
            {
                time: 1560389880000,
                low: 8152.12,
                high: 8154.99,
                open: 8154.94,
                close: 8154.98,
                volume: 1.491
            },
            {
                time: 1560389940000,
                low: 8154.69,
                high: 8155,
                open: 8154.98,
                close: 8155,
                volume: 1.158
            },
            {
                time: 1560390000000,
                low: 8152.52,
                high: 8155,
                open: 8155,
                close: 8154.99,
                volume: 0.5546
            },
            {
                time: 1560390060000,
                low: 8154.89,
                high: 8155,
                open: 8154.99,
                close: 8154.99,
                volume: 1.944
            },
            {
                time: 1560390120000,
                low: 8154.99,
                high: 8156.56,
                open: 8154.99,
                close: 8156,
                volume: 1.039
            },
            {
                time: 1560390180000,
                low: 8153.98,
                high: 8156.86,
                open: 8156,
                close: 8156.44,
                volume: 5.413
            },
            {
                time: 1560390240000,
                low: 8153.56,
                high: 8156.44,
                open: 8156.44,
                close: 8153.57,
                volume: 1.376
            },
            {
                time: 1560390300000,
                low: 8147.84,
                high: 8153.57,
                open: 8153.57,
                close: 8152.14,
                volume: 1.503
            },
            {
                time: 1560390360000,
                low: 8148.43,
                high: 8152.2,
                open: 8152.14,
                close: 8152.04,
                volume: 1.55
            },
            {
                time: 1560390420000,
                low: 8147.85,
                high: 8152.04,
                open: 8152.04,
                close: 8148.41,
                volume: 1.084
            },
            {
                time: 1560390480000,
                low: 8145.02,
                high: 8150.94,
                open: 8148.41,
                close: 8146.96,
                volume: 1.209
            },
            {
                time: 1560390540000,
                low: 8145.06,
                high: 8148.4,
                open: 8146.96,
                close: 8148.33,
                volume: 0.6102
            },
            {
                time: 1560390600000,
                low: 8145.13,
                high: 8150.93,
                open: 8148.33,
                close: 8149.48,
                volume: 2.377
            },
            {
                time: 1560390660000,
                low: 8146.81,
                high: 8149.77,
                open: 8149.48,
                close: 8148.97,
                volume: 3.996
            },
            {
                time: 1560390720000,
                low: 8145,
                high: 8148.97,
                open: 8148.97,
                close: 8145.59,
                volume: 2.149
            },
            {
                time: 1560390780000,
                low: 8145,
                high: 8146.58,
                open: 8145.59,
                close: 8145.01,
                volume: 1.791
            },
            {
                time: 1560390840000,
                low: 8140.57,
                high: 8146.21,
                open: 8145.01,
                close: 8140.58,
                volume: 12.28
            },
            {
                time: 1560390900000,
                low: 8136.51,
                high: 8140.58,
                open: 8140.58,
                close: 8136.52,
                volume: 2.604
            },
            {
                time: 1560390960000,
                low: 8136.51,
                high: 8137.03,
                open: 8136.52,
                close: 8137.02,
                volume: 5.339
            },
            {
                time: 1560391020000,
                low: 8136.52,
                high: 8137.03,
                open: 8137.02,
                close: 8136.96,
                volume: 1.542
            },
            {
                time: 1560391080000,
                low: 8135,
                high: 8137.02,
                open: 8136.96,
                close: 8135.61,
                volume: 2.277
            },
            {
                time: 1560391140000,
                low: 8135,
                high: 8142.25,
                open: 8135.61,
                close: 8142.22,
                volume: 3.666
            },
            {
                time: 1560391200000,
                low: 8136,
                high: 8142.22,
                open: 8142.22,
                close: 8136.75,
                volume: 3.847
            },
            {
                time: 1560391260000,
                low: 8136,
                high: 8136.75,
                open: 8136.75,
                close: 8136.71,
                volume: 1.224
            },
            {
                time: 1560391320000,
                low: 8136,
                high: 8136.71,
                open: 8136.71,
                close: 8136,
                volume: 5.248
            },
            {
                time: 1560391380000,
                low: 8136,
                high: 8136.19,
                open: 8136,
                close: 8136,
                volume: 2.885
            },
            {
                time: 1560391440000,
                low: 8135,
                high: 8136.27,
                open: 8136,
                close: 8135.52,
                volume: 3.532
            },
            {
                time: 1560391500000,
                low: 8135,
                high: 8135.52,
                open: 8135.52,
                close: 8135.52,
                volume: 0.9308
            },
            {
                time: 1560391560000,
                low: 8130,
                high: 8135.55,
                open: 8135.52,
                close: 8130,
                volume: 32.07
            },
            {
                time: 1560391620000,
                low: 8110.35,
                high: 8130.01,
                open: 8130,
                close: 8121.59,
                volume: 25.55
            },
            {
                time: 1560391680000,
                low: 8120.05,
                high: 8125.09,
                open: 8121.59,
                close: 8124.99,
                volume: 1.189
            },
            {
                time: 1560391740000,
                low: 8124.58,
                high: 8130.11,
                open: 8124.99,
                close: 8130.11,
                volume: 3.297
            },
            {
                time: 1560391800000,
                low: 8128.82,
                high: 8133.94,
                open: 8130.11,
                close: 8133.94,
                volume: 3.543
            },
            {
                time: 1560391860000,
                low: 8133.94,
                high: 8139.43,
                open: 8133.94,
                close: 8137.96,
                volume: 4.061
            },
            {
                time: 1560391920000,
                low: 8137,
                high: 8139.59,
                open: 8137.96,
                close: 8137.01,
                volume: 2.468
            },
            {
                time: 1560391980000,
                low: 8137,
                high: 8138.88,
                open: 8137.01,
                close: 8137.33,
                volume: 2.697
            },
            {
                time: 1560392040000,
                low: 8137.33,
                high: 8137.34,
                open: 8137.33,
                close: 8137.33,
                volume: 8.752
            },
            {
                time: 1560392100000,
                low: 8125.86,
                high: 8137.33,
                open: 8137.33,
                close: 8125.91,
                volume: 10.69
            },
            {
                time: 1560392160000,
                low: 8125.56,
                high: 8125.91,
                open: 8125.91,
                close: 8125.91,
                volume: 2.185
            },
            {
                time: 1560392220000,
                low: 8125.9,
                high: 8130.58,
                open: 8125.91,
                close: 8130.58,
                volume: 1.32
            },
            {
                time: 1560392280000,
                low: 8126.92,
                high: 8131.32,
                open: 8130.58,
                close: 8127.48,
                volume: 1.778
            },
            {
                time: 1560392340000,
                low: 8122.71,
                high: 8129.53,
                open: 8127.48,
                close: 8125.81,
                volume: 3.238
            },
            {
                time: 1560392400000,
                low: 8122.28,
                high: 8127.43,
                open: 8125.81,
                close: 8126.03,
                volume: 1.08
            },
            {
                time: 1560392460000,
                low: 8120.69,
                high: 8127.76,
                open: 8126.03,
                close: 8121.47,
                volume: 13.11
            },
            {
                time: 1560392520000,
                low: 8120.79,
                high: 8124.58,
                open: 8121.47,
                close: 8121,
                volume: 0.9649
            },
            {
                time: 1560392580000,
                low: 8120.11,
                high: 8121,
                open: 8121,
                close: 8120.12,
                volume: 1.767
            },
            {
                time: 1560392640000,
                low: 8120.11,
                high: 8127.04,
                open: 8120.12,
                close: 8127.04,
                volume: 2.451
            },
            {
                time: 1560392700000,
                low: 8127.04,
                high: 8129.87,
                open: 8127.04,
                close: 8129.59,
                volume: 2.396
            },
            {
                time: 1560392760000,
                low: 8125,
                high: 8130,
                open: 8129.59,
                close: 8129.99,
                volume: 18.84
            },
            {
                time: 1560392820000,
                low: 8128.82,
                high: 8130,
                open: 8129.99,
                close: 8129.94,
                volume: 0.808
            },
            {
                time: 1560392880000,
                low: 8126,
                high: 8130,
                open: 8129.94,
                close: 8126.01,
                volume: 4.819
            },
            {
                time: 1560392940000,
                low: 8120,
                high: 8128.71,
                open: 8126.01,
                close: 8128.25,
                volume: 5.44
            },
            {
                time: 1560393000000,
                low: 8126.41,
                high: 8128.7,
                open: 8128.25,
                close: 8128.54,
                volume: 0.5609
            },
            {
                time: 1560393060000,
                low: 8128.54,
                high: 8134.6,
                open: 8128.54,
                close: 8134.4,
                volume: 10.2
            },
            {
                time: 1560393120000,
                low: 8134.4,
                high: 8135,
                open: 8134.4,
                close: 8134.98,
                volume: 1.916
            },
            {
                time: 1560393180000,
                low: 8134.98,
                high: 8136,
                open: 8134.98,
                close: 8135.99,
                volume: 2.099
            },
            {
                time: 1560393240000,
                low: 8135.99,
                high: 8136,
                open: 8135.99,
                close: 8136,
                volume: 2.072
            },
            {
                time: 1560393300000,
                low: 8135.99,
                high: 8136,
                open: 8136,
                close: 8136,
                volume: 0.8516
            },
            {
                time: 1560393360000,
                low: 8128.71,
                high: 8138.54,
                open: 8136,
                close: 8128.71,
                volume: 3.201
            },
            {
                time: 1560393420000,
                low: 8122.52,
                high: 8128.71,
                open: 8128.71,
                close: 8127.99,
                volume: 4.723
            },
            {
                time: 1560393480000,
                low: 8127.98,
                high: 8127.99,
                open: 8127.99,
                close: 8127.98,
                volume: 0
            }
        ];
        // onHistoryCallback(bar, { noData: false });
        console.log(dateFormat(from * 1000), dateFormat(to * 1000));
        // console.log(`Requesting bars between ${new Date(from * 1000).toISOString()} and ${new Date(to * 1000).toISOString()}`)
        historyProvider
            .getBars(symbolInfo, resolution, from, to, firstDataRequest)
            .then(bars => {
                if (bars.length) {
                    onHistoryCallback(bars, { noData: false });
                } else {
                    onHistoryCallback(bars, { noData: true });
                }
            })
            .catch(err => {
                console.log({ err });
                onErrorCallback(err);
            });
    },
    subscribeBars: (
        symbolInfo,
        resolution,
        onRealtimeCallback,
        subscribeUID,
        onResetCacheNeededCallback
    ) => {
        console.log("=====subscribeBars runnning");
        // stream.subscribeBars(symbolInfo, resolution, onRealtimeCallback, subscribeUID, onResetCacheNeededCallback)
    },
    unsubscribeBars: subscriberUID => {
        console.log("=====unsubscribeBars running");

        // stream.unsubscribeBars(subscriberUID)
    },
    calculateHistoryDepth: (resolution, resolutionBack, intervalBack) => {
        //optional
        console.log("=====calculateHistoryDepth running", resolution);
        // while optional, this makes sure we request 24 hours of minute data at a time
        // CryptoCompare's minute data endpoint will throw an error if we request data beyond 7 days in the past, and return no data
        return resolution < 60
            ? { resolutionBack: "D", intervalBack: "1" }
            : undefined;
    },
    getMarks: (symbolInfo, startDate, endDate, onDataCallback, resolution) => {
        //optional
        console.log("=====getMarks running");
    },
    getTimeScaleMarks: (
        symbolInfo,
        startDate,
        endDate,
        onDataCallback,
        resolution
    ) => {
        //optional
        console.log("=====getTimeScaleMarks running");
    },
    getServerTime: cb => {
        console.log("=====getServerTime running");
    }
};
