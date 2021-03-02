
import React from 'react'
import './Wallet.css'
class Wallet extends React.Component {



    render() {
        return (
            <div className="wallet">
                <div >Your public key: {this.props.pub} </div>
                <div>Your private key: {this.props.priv} </div>
                <div className="warning">
                    <div>Please keep note of your <b>private key</b>! If you don't own your keys, you don't own the wallet! Private key is for your eyes only! </div>
                </div>
            </div>

        )
    };
}

export default Wallet