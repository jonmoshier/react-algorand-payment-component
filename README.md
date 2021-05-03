# react-algorand-payment-component

This is completely new, WIP, Draft, do not use this yet, you've been warned.

Just want to see the code? Look at the [AlgoPayments component](https://github.com/jonmoshier/react-algorand-payment-component/blob/main/src/index.js)

> Component to integrate algorand payments

[![NPM](https://img.shields.io/npm/v/react-algorand-payment-component.svg)](https://www.npmjs.com/package/react-algorand-payment-component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Prerequisites
0. Setup an Algorand account and wallet
1. Get the [AlgoSigner Chrome Extension](https://www.purestake.com/technology/algosigner/)
2. Add your account to the AlgoSigner Chrome extension
3. Add your account information to the receivingAccount prop when you use this component.

## Usage

```jsx
import React, { Component } from 'react'

import AlgoPayment from 'react-algorand-payment-component'
import 'react-algorand-payment-component/dist/index.css'

class Example extends Component {
  render() {
  return <AlgoPayment receivingAccount="YOUR_ACCOUNT_HERE" />
  }
}
```

The component looks like this

![image](https://user-images.githubusercontent.com/763527/116831590-91c00e80-ab6d-11eb-8abc-8f04ca051d79.png)

and when you click the button, AlgoSigner will launch with a transaction, ready to be signed and sent.

![image](https://user-images.githubusercontent.com/763527/116831657-e6fc2000-ab6d-11eb-9e09-7320dae8f3f2.png)

## License

MIT © [jonmoshier](https://github.com/jonmoshier)
