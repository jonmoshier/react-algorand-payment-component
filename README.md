# react-algorand-payment-component

This is completely new, WIP, Draft, do not use this yet, you've been warned.

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

## License

MIT © [jonmoshier](https://github.com/jonmoshier)
