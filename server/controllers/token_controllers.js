const DTU = require('../../client/contracts/contractService')
const sha3 = require('../sha3')
const request = require('request');
let myAPI = 'NQNPZCN9E9X3BX5WEGISP84158T55AMW21';

module.exports = {
    viewToken: async function (req, res) {
        let tokenAddress = req.body.address;
        let dtu = new DTU(tokenAddress);

        let _name = await dtu.getName();
        let _symbol = await dtu.getSymbol();
        let _decimals = parseInt(await dtu.getDecimals());
        let _rating = parseInt(await dtu.getRating());
        let _cashier = await dtu.getCashier();

        let topicBuyToken = sha3.topicBuyToken();
        // let topicFundTransfer = sha3.topicFundTransfer();
        // let topicDeposit = sha3.topicDeposit();

        let option = {
            url: `https://api-rinkeby.etherscan.io/api?module=logs&action=getLogs&fromBlock=0&toBlock=latest&address=${tokenAddress}&topic0=0x${topicBuyToken}&apikey=${myAPI}`
        }
        function callback(error, response, body) {
            if (!error && response.statusCode == 200) {
                let info = JSON.parse(body);
                let results = info.result;
                results.forEach(data => {
                    let tp = data.topics;
                    let _from = tp[1];
                    let _valueSend = tp[2];
                    let _exchange = tp[3];

                });
                
            }
        }
        request(option,callback);
        res.send({ name: _name, symbol: _symbol, decimals: _decimals, rating: _rating, cashier: _cashier });
    }
}