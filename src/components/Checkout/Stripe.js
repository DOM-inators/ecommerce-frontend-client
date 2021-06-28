import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'

export default class Checkout extends Component {
  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token)
    }).then(res => {
      res.json().then(data => {
        alert(`We are in business, ${data.email}`)
      })
    })
  }

  render () {
    return (
      <StripeCheckout
        token={this.onToken}
        stripeKey={'pk_test_51J6FY8B3vfOMXNO3v2s6ihzCGfLtVhNiEO74qYeRUEBT0f3QVdkMqgkeEGGt8pZGX7SfVlh8DFYAmYSAJLNx8rCb008hIxE0mi'}
        allowRememberMe
        shippingAddress
        amount={100000}
      />
    )
  }
}