import React, { useState } from 'react'

export const AlgoPayment = ({ receivingAccount }) => {
  const NETWORK = 'MainNet' // could be TestNet or BetaNet
  const [amount, setAmount] = useState(); // default to 

  const connect = async () => {    
    if (typeof AlgoSigner !== 'undefined') {
      await AlgoSigner.connect();
      console.log(AlgoSigner);
      const account = await AlgoSigner.accounts({ ledger: NETWORK });
      const txParams = await  AlgoSigner.algod({ ledger: NETWORK, path: '/v2/transactions/params'});
      console.log(txParams);
      let txn = {
        from: account[0].address,
        to: receivingAccount,
        fee: txParams['min-fee'],
        flatFee: txParams['min-fee'],
        type: 'pay',
        amount: amount * 1000000 || 500000,
        firstRound: txParams['last-round'],
        lastRound: txParams['last-round'] + 1000,
        genesisID: txParams['genesis-id'],
        genesisHash: txParams['genesis-hash'],
        note: 'NOTE is a string', // This could be an input value
      };
      
      AlgoSigner.sign(txn).then((txn) => {
        AlgoSigner.send({
          ledger: NETWORK,
          tx: txn.blob,
        });
      }).catch((err) => console.log(err));

    } else {
      console.log('AlgoSigner is NOT installed.');
    };
  }

  const updateAmount = (amt) => {
    console.log(amt.target.value);
    setAmount(amt.target.value);

  }
  return (
    <div>
      <button onClick={connect}>Tip via Algorand</button>
      <input type='number' onChange={updateAmount} placeholder='Amount' />
    </div>
  )
}
