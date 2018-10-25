const Web3 = require('web3');
let web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/"));

// console.log( web3.sha3('Deposit(address,uint256)'));

module.exports = {
    topicBuyToken : ()=>{
        return web3.sha3('BuyToken(address,uint256,uint256)');
    },
    topicFundTransfer : ()=>{
        return web3.sha3('FundTransfer(address,uint256)');
    },
    topicDeposit : ()=>{
        return web3.sha3('Deposit(address,uint256)');
    }
}

