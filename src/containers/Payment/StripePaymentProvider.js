import React, {Component} from 'react'

import {StripeProvider} from 'react-stripe-elements'



function StripePaymentProviderHOC (WrappedComponent) {
  return class StripePaymentProvider extends Component {
    constructor (props) {
      super(props)
    }

    render () {
      return (
        <StripeProvider apiKey="pk_live_Slxfv65wZPG0h05ovYXLCb4X">
          <WrappedComponent {...this.props} />
        </StripeProvider>
      )
    }
  }
}

export default StripePaymentProviderHOC
