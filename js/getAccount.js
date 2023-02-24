// For testing
const myAddress = "0x73875fF3f7e6dB627EB9f26604540d43A836001A"

//contract.methods.addTask("Learn React").send({from: myAddress}).then(receipt => {console.log(receipt)})
//contract.methods.getTask(0).call({from: myAddress}).then(receipt => {console.log(receipt)})
//---------------------------------------------------------

// importing config.js pararmeters
const {contractABI, contractAddress} = require("./config.js")
// Adding web3.js into project
const Web3 = require('web3')
// To connect to other blockchain network, replace network provider HERE
let networkProvider = "HTTP://127.0.0.1:7545"
// Create web3 instance and set provider to local Ganache node
let web3 = new Web3(networkProvider);

// Crate a contract instance by passing the ABI and contract address as parameter
const contract = new web3.eth.Contract(contractABI, contractAddress);

/*
---------------- Start to declare event handling functions ----------------
*/

function jsAddTask(_task) {
    contract.methods.addTask(_task).send({from: myAddress}).then(receipt => {console.log(receipt)})
}

function jsUpdateStatus(_taskIndex, _status) {
    contract.methods.updateStatus(_taskIndex, _status).send({from: myAddress}).then(receipt => {console.log(receipt)})
}

function jsGetTask(_taskIndex) {
    contract.methods.getTask(_taskIndex).call({from: myAddress}).then(receipt => {console.log(receipt)})
}

module.exports = {
    jsAddTask,
    jsUpdateStatus,
    jsGetTask
}