import React from 'react'

import PropTypes from 'prop-types'

import {
  CardView,
  CardFrame,
  CardHeading,
  CardContent,
  CardFooter
} from 'components/cards/FeaturedCard'

import TextButton from 'components/buttons/TextButton'

const AccountCreditCard = (props) => {
  const {
    cardType,
    holderName,
    horseCount,
    cardNumber,
    expiry,
    postCode,
    onDelete
  } = props

  return (
    <CardView className='account-credit-card'>
      <CardFrame>
        <CardHeading>
          <h3 className='uppercase regular'>
            {cardType}
          </h3>
          {/*
          <h6 className='semi-bold account-credit-card__header'>
            {holderName}
          </h6>
          <h6 className='semi-bold account-credit-card__text-primary account-credit-card__section-small'>
            Used for <span className='link'>{horseCount} horses</span>
          </h6>*/}
        </CardHeading>
        <CardContent>
          <div className='account-credit-card__content'>
            <div className='account-credit-card__section'>
              <h6 className='secondary-font col-xs-6 semi-bold account-credit-card__text-secondary'>
                Card number
              </h6>
              <p className='micro col-xs-6 semi-bold account-credit-card__text-secondary'>
                {cardNumber}
              </p>
            </div>

            <div className='account-credit-card__section'>
              <h6 className='secondary-font col-xs-6 semi-bold account-credit-card__text-secondary'>
                Expires on
              </h6>
              <p className='micro col-xs-6 semi-bold account-credit-card__text-secondary'>
                {expiry}
              </p>
            </div>

            <div className='account-credit-card__section'>
              <h6 className='secondary-font col-xs-6 semi-bold account-credit-card__text-secondary'>
                Billing address
              </h6>
              <p className='micro col-xs-6 semi-bold account-credit-card__text-secondary'>
                {postCode}
              </p>
            </div>
          </div>
        </CardContent>
        {/*}
        <CardContent>
          <TextButton
            text='update details'
            modifier={['secondary', 'fluid']} />
        </CardContent>*/}
      </CardFrame>
      <CardFooter>
        <h6 className='italic link uppercase cursor--pointer' onClick={onDelete}>
          delete card
        </h6>
      </CardFooter>
    </CardView>
  )
}

AccountCreditCard.propTypes = {
  cardType: PropTypes.string,
  holderName: PropTypes.string,
  horseCount: PropTypes.number,
  cardNumber: PropTypes.string,
  expiry: PropTypes.string,
  postCode: PropTypes.string
}

AccountCreditCard.defaultProps = {
  cardType: '',
  holderName: '',
  horseCount: 0,
  cardNumber: '',
  expiry: '',
  postCode: ''
}

export default AccountCreditCard
