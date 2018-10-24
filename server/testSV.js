const request = require('request');
// const Web3 = require('web3');
// let web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/'));

let optionBuy = {
    url: `https://api-rinkeby.etherscan.io/api?module=logs&action=getLogs&fromBlock=0&toBlock=latest&address=0x3c8f9771be54e26b4e8977c9c8ad4c5c8867f5e4&topic0=0xf6f342132c7de5e5a1e99c8efae544c94731f3ff093f5c3c97c6973d9415cdfb&apikey=NQNPZCN9E9X3BX5WEGISP84158T55AMW21`
}
function callBackBuy(error, response, body) {
    if (!error && response.statusCode == 200) {
        let info = JSON.parse(body);
        let results = info.result;
        results.forEach(data => {
            let tp = data.topics;
            let _from = tp[1];
            let _valueSend = tp[2];
            let _exchange = tp[3];
            console.log("from : ", `0x${_from.substring(26)}`);
            console.log("valueSend : ", parseInt(_valueSend));
            console.log("exchange : ", parseInt(_exchange));
            console.log("****************");

        });

    }
}
let optionDe = {
    url: `https://api-rinkeby.etherscan.io/api?module=logs&action=getLogs&fromBlock=0&toBlock=latest&address=0x3c8f9771be54e26b4e8977c9c8ad4c5c8867f5e4&topic0=0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c&apikey=NQNPZCN9E9X3BX5WEGISP84158T55AMW21`
}
function callbackDe(error, response, body) {
    if (!error && response.statusCode == 200) {
        let info = JSON.parse(body);
        let results = info.result;
        results.forEach(data => {
            let tp = data.topics;
            let _from = tp[1];
            let _value = tp[2];
            console.log("from : ", `0x${_from.substring(26)}`);
            console.log("value : ", parseInt(_value));
            console.log("****************");
        });
    }
}
let optionFu = {
    url: `https://api-rinkeby.etherscan.io/api?module=logs&action=getLogs&fromBlock=0&toBlock=latest&address=0x3c8f9771be54e26b4e8977c9c8ad4c5c8867f5e4&topic0=0x97c35397cb6acebd9df368c206404479fc4c80dd6034d1b28943aaf582631870&apikey=NQNPZCN9E9X3BX5WEGISP84158T55AMW21`
}
function callbackFu(error, response, body) {
    if (!error && response.statusCode == 200) {
        let info = JSON.parse(body);
        let results = info.result;
        results.forEach(data => {
            let tp = data.topics;
            let _from = tp[1];
            let _valueSend = tp[2];
            console.log("from : ", `0x${_from.substring(26)}`);
            console.log("valueSend : ", parseInt(_valueSend));
            console.log("****************");

        });

    }
}
request(optionBuy, callBackBuy);