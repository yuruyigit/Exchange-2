// api/stream.js
import historyProvider from "./historyProvider.js";
import { dateFormat } from "common/TollClass/func";
import Vue from "vue";
const _comm = new Vue();
// keep track of subscriptions
var _subs = [];

export default {
    subscribeBars: function(symbolInfo, resolution, updateCb, uid, resetCache) {
        _comm.$EventListener.on("TVkline", klineLastBar);
        var newSub = {
            uid,
            resolution,
            symbolInfo,
            lastBar: historyProvider.history[symbolInfo.name].lastBar,
            listener: updateCb
        };
        _subs.push(newSub);
    },
    unsubscribeBars: function(uid) {
        var subIndex = _subs.findIndex(e => e.uid === uid);
        if (subIndex === -1) {
            //console.log("No subscription found for ",uid)
            return;
        }
        _subs.splice(subIndex, 1);
    }
};

const klineLastBar = data => {
    if (_subs.length) {
        // disregard the initial catchup snapshot of trades for already closed candles
        let sub = _subs[0];
        if (data.ts < sub.lastBar.time) {
            return;
        }
        var _lastBar = updateBar(data, sub);

        // send the most recent bar back to TV's realtimeUpdate callback
        sub.listener(_lastBar);
        // update our own record of lastBar
        sub.lastBar = _lastBar;
    }
};

// Take a single trade, and subscription record, return updated bar
function updateBar(data, sub) {
    var lastBar = sub.lastBar;
    let resolution = sub.resolution;

    if (resolution.includes("D")) {
        // 1 day in minutes === 1440
        resolution = 1440;
    } else if (resolution.includes("W")) {
        // 1 week in minutes === 10080
        resolution = 10080;
    } else if (resolution.includes("M")) {
        resolution = 43200;
    }
    var rounded = data.ts;
    var lastBarSec = Number(lastBar.time) + resolution * 60000;
    var _lastBar;
    // return;
    if (rounded > lastBarSec) {
        // create a new candle, use last close as open **PERSONAL CHOICE**
        _lastBar = {
            close: data.close,
            high: data.high,
            low: data.low,
            open: data.open,
            time: data.ts,
            volume: data.volume
        };
    } else {
        // update lastBar candle!
        if (data.low < lastBar.low) {
            lastBar.low = data.low;
        } else if (data.high > lastBar.high) {
            lastBar.high = data.high;
        }
        lastBar.volume = data.amount;
        lastBar.close = data.close;
        _lastBar = lastBar;
    }
    return _lastBar;
}

// takes symbolInfo object as input and creates the subscription string to send to CryptoCompare
function createChannelString(symbolInfo) {
    var channel = symbolInfo.name.split(/[:/]/);
    const exchange = channel[0] === "GDAX" ? "Coinbase" : channel[0];
    const to = channel[2];
    const from = channel[1];
    // subscribe to the CryptoCompare trade channel for the pair and exchange
    return `0~${exchange}~${from}~${to}`;
}
