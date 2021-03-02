import network from '../icons/network.svg';
import { getNewEthAccount } from '../api/eth'
import './App.css'
import Wallet from './Wallet.js'
import React, { useState } from 'react'


function App() {
  
   const [pub, setPublicKey] = useState();
   const [priv, setPrivateKey] = useState();

  
  function handleClick() {
    let cred = getNewEthAccount()
    let add = cred.address
    let key = cred.privateKey

    setPublicKey(add)
    setPrivateKey(key)

  }

  return (
    <div className="top">
      <header className="ethgen">
        <img src={network} className="App-logo" alt="logo" />
         EthGen, an ethereum wallet maker
      </header>
      <button onClick={handleClick}>
        Get a new Ethereum Wallet
     </button>
      <Wallet pub = {pub}  priv= {priv} />
      <a href = "https://www.linkedin.com/in/michaelmenesestcs/"> Built by </a>

    </div>
  );
}

export default App;
