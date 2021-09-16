import React, { PureComponent } from 'react'

import CreditCardForm from 'components/forms/CreditCard'

import BillingAddressForm from 'components/forms/BillingAddress'

import TextButton from 'components/buttons/TextButton'

import Icon from 'components/icon'

import {
  CardView,
  CardFrame,
  CardHeading,
  CardContent
} from 'components/cards/FeaturedCard'

import {injectStripe} from 'react-stripe-elements'

class AccountAddCardForm extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      showBilling: false,
      cardElementComplete: false,
      _key: Math.random()
    }

    this.showBillingForm = this.showBillingForm.bind(this)
    this.hideBillingForm = this.hideBillingForm.bind(this)
    this.clearForms = this.clearForms.bind(this)
    this.handleCardElementChanged = this.handleCardElementChanged.bind(this)
    this.handleSubmitCard = this.handleSubmitCard.bind(this)
  }

  showBillingForm () {
    this.setState({
      showBilling: true,
      submitErrors: null
    })
  }

  hideBillingForm () {
    this.setState({
      showBilling: false
    })
  }

  clearForms () {
    this.props.clearForm()
    this.hideBillingForm()
  }

  handleCardElementChanged ({complete: cardElementComplete}) {
    this.setState({
      cardElementComplete,
      showBilling: this.state.showBilling ? true : cardElementComplete
    })
  }

  handleSubmitCard () {
    const {stripe, submitCardToServer, creditCardInfo, billingAddressInfo} = this.props
    const cardData = {
      name: creditCardInfo.values.cardName,
      address_line1: billingAddressInfo.values.addressOne,
      address_line2: billingAddressInfo.values.addressTwo,
      address_city: billingAddressInfo.values.townCity,
      address_country: billingAddressInfo.values.country,
      address_zip: billingAddressInfo.values.postCode
    }

    stripe.createToken({type: 'card', card: cardData})
      .then(submitCardToServer)
      .then(() => {
        this.setState({
          _key: Math.random(),
          showBilling: false,
          cardElementComplete: false
        })
      })
      .catch((e) => {
        console.log(e)
      })
  }

  render () {
    const {
      showBilling,
      cardElementComplete,
      _key
    } = this.state

    const {
      billingAddressInfo = {},
      billingAddressActions = {},
      creditCardInfo = {},
      creditCardActions = {}
    } = this.props

    const billingAddressInfoErrors = billingAddressInfo.errors

    const billingAddressInfoValues = billingAddressInfo.values

    const cardDetailsValid = (cardElementComplete && creditCardInfo.errors.cardName.length === 0)

    const billingDetailsValid = (
      billingAddressInfoErrors.addressOne.length === 0 &&
      billingAddressInfoErrors.country.length === 0 &&
      billingAddressInfoErrors.postCode.length === 0 &&
      billingAddressInfoErrors.townCity.length === 0 &&
      billingAddressInfoValues.addressOne.length > 0 &&
      billingAddressInfoValues.country.length > 0 &&
      billingAddressInfoValues.postCode.length > 0 &&
      billingAddressInfoValues.townCity.length > 0
    )

    return (
      <CardView className='account-card-form' key={`ADD_CC_${_key}`}>
        <CardFrame>
          <CardHeading>
            <div className='account-card-form__form-heading form__group'>
              <h4 className='capitalize'>
                {
                  !showBilling
                    ? 'Card Details'
                    : 'Billing Address'
                }
              </h4>
              <Icon
                onClick={showBilling ? this.hideBillingForm : this.clearForms}
                className='account-card-form__close tiny cursor--pointer'
                modifier='close' />
            </div>
            <CreditCardForm {...creditCardInfo} {...creditCardActions} onCardElementChanged={this.handleCardElementChanged} />
            {showBilling && <div className='account-card-form__grow'><BillingAddressForm {...billingAddressInfo} {...billingAddressActions} /></div>}
          </CardHeading>
          <CardContent>
            {showBilling ? (
              <TextButton
                onClick={this.handleSubmitCard}
                modifier={['fluid']}
                isDisabled={!billingDetailsValid}
                text='Save Card'
              />
            ) : (
              <TextButton
                onClick={this.showBillingForm}
                modifier={['fluid']}
                isDisabled={!cardDetailsValid}
                text='Add Billing Details'
              />
            )}
          </CardContent>
        </CardFrame>
      </CardView>
    )
  }
}

export default injectStripe(AccountAddCardForm)
