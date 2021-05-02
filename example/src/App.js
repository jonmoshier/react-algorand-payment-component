import React from 'react'

import { AlgoPayment } from 'react-algorand-payment-component'
import 'react-algorand-payment-component/dist/index.css'

const App = () => {
  return <AlgoPayment receivingAccount="YOUR_ACCOUNT_HERE" />
}

export default App
