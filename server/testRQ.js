const sha3 = require('./sha3')
const request = require('request');
let myAPI = 'NQNPZCN9E9X3BX5WEGISP84158T55AMW21';
let _topic = sha3.topicBuyToken();
// console.log(_topic);

let tokenAddress = '0x3c8f9771be54e26b4e8977c9c8ad4c5c8867f5e4';
let _from = [];
let _to = [];
let _valueSend = [];
let _exchange = [];

let _option = { url: `https://api-rinkeby.etherscan.io/api?module=logs&action=getLogs&fromBlock=0&toBlock=latest&address=${tokenAddress}&topic0=${_topic}&apikey=${myAPI}` }
function callbackBuyToken(error, response, body) {
    if (!error && response.statusCode == 200) {
        let info = JSON.parse(body);
        let results = info.result;
        results.forEach(data => {
            let tp = data.topics;
            // console.log(`0x${tp[1].substring(26)}`);
            // console.log(parseInt(tp[2]));
            // console.log(parseInt(tp[3]));
            
            _from.push(`0x${tp[1].substring(26)}`);
            _valueSend.push(parseInt(tp[2]));
            _exchange.push(parseInt(tp[3]));
        });
    }
    console.log({ _from: _from, _valueSend: _valueSend, _exchange: _exchange });
}
async function abc() {
    await request(_option, callbackBuyToken);
}
abc();