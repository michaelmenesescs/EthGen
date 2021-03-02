
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This React application uses the Web3 npm package, which is a npm module that allows us to interact with the Ethereum Blockchain. We then use the Infura API to make calls on their endpoints, which then return us information off the blockchain. Then, when our client requests a new wallet, the back end makes the call out to the Infura API in order to create a new Ethereum account. We then use the power of React to save this in a Hook and we use state to manage it and retrieve a new account everytime the button is pressed.

Tech Stack Used:
Node.js
React
Web3 API
Infura API
