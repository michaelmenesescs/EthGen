//Import Libraries and Dependencies 
var Web3 = require("web3")
const Infura = require(`./infura.json`)


//Web3 API Setup
let id = Infura.Infura['project-id']
let secret = Infura.Infura['project-secret']
let endpoint = Infura.Infura.mainnet
let url = `${endpoint}${id}`
var web3 = new Web3(url);

function getNewEthAccount() {
    let eth = web3.eth.accounts.create()
    return eth
}

export {getNewEthAccount};

