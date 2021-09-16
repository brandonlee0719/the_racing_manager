import React, {Component} from 'react'

import { connect } from 'react-redux'

import {fetchCards, deleteCard} from 'actions/account/CreditCard'

import AccountCreditCard from 'components/account/AccountCreditCard'

import AjaxLoader from 'components/gui/Loaders/Ajaxloader'

class StripeCards extends Component {
  render () {
    const {
      cards = [],
      deleteCard,
      submitting
    } = this.props

    return (
      <div className='account-payment-methods__section'>
        <div className='row'>
          {cards
            ? (
              cards.map((card, index) => (
                <div key={`cc_${index}`} className='col-lg-4 col-md-6 col-sm-12 col-xs-12 account-payment-methods__section--bottom'>
                  <AccountCreditCard
                    cardType={card.brand}
                    cardNumber={card.cardNumber}
                    expiry={`${card.expiryMonth}/${card.expiryYear}`}
                    postCode={card.postcode}
                    onDelete={() => deleteCard(card.id)}/>
                </div>
              )))
            : (
              <div className='col-lg-6 col-md-8 col-sm-10 col-xs-12'>
                <p><i>It looks like no cards are linked to your account</i></p>
              </div>
            )
          }
        </div>
        <AjaxLoader isVisible={submitting} />
      </div>
    )
  }

  componentDidMount () {
    this.props.fetchCards()
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCards: () => {
      dispatch(fetchCards())
    },
    deleteCard: (id) => {
      dispatch(deleteCard(id))
    }
  }
}

const mapStateToProps = ({account}, ownProps) => {
  const {
    creditCard
  } = account.addCreditCard

  return {
    cards: creditCard.cards,
    submitting: creditCard.submitting
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StripeCards)
