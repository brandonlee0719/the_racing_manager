import React, { PureComponent } from 'react'

import AccountAddCreditCardForm from 'containers/Payment/StripeAddCard'

import StripeCards from 'containers/Payment/StripeCards'

import AccountCreditCard from 'components/account/AccountCreditCard'

import AccountAddPaymentMethodCard from 'components/account/AccountAddPaymentMethodCard'

class AccountPaymentMethods extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='account-payment-methods'>
        <div className='account-payment-methods__container'>
          <div className='row'>
            <div className='col-lg-6 col-md-8 col-sm-10 col-xs-12'>
              <h2 className='uppercase'>
                payment methods
              </h2>
              <div className='account-payment-methods__section'>
                <h4 className='capitalize'>
                  Add a new card
                </h4>
              </div>

              <div className='account-payment-methods__section'>
                <p className='small'>
                  Your card details for paying are held anonymously and securely and cannot be accessed by any third party.
                </p>
              </div>
            </div>
          </div>

          <div className='account-payment-methods__section'>
            <div className='row'>
              <div className='col-md-6 col-sm-12 col-xs-12 account-payment-methods__section--bottom'>
                <AccountAddCreditCardForm />
              </div>
              <div className='col-md-6 col-sm-12 col-xs-12 account-payment-methods__section--bottom'>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-6 col-md-8 col-sm-10 col-xs-12'>
              <div className='account-payment-methods__section'>
                <h4 className='capitalize'>
                  Cards linked to your account
                </h4>
              </div>
            </div>
          </div>

          <StripeCards />
        </div>
      </div>
    )
  }
}

export default AccountPaymentMethods
