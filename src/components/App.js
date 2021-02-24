import network from '../icons/network.svg';
import {getNewEthAccount} from '../api/eth'
import './App.css'
import Wallet from './Wallet'

this.state = {
  walletinfo: {
    pubkey: '',
    privkey: ''
  },
}

function handleClick(){
    let wallet = getNewEthAccount()
    console.log(wallet)
}

function App() {
  return (
    <div className="App">
      <header className="ethgen">
        <img src={network} className="App-logo" alt="logo" />
         EthGen, an ethereum wallet maker
      </header>
     <button onClick = {handleClick}>
       Get a new Ethereum Wallet
     </button>
     

    
     
     
    </div>
  );
}

export default App;
