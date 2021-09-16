import React from 'react'

import classNames from 'utils/classnames'

import TextIconButton from 'components/buttons/TextIconButton'

import PropTypes from 'prop-types'

import {
  CardView,
  CardFrame,
  CardContent,
  CardFooter
} from 'components/cards/FeaturedCard'

import MediaQuery from 'react-responsive'

import {
  SM,
  SM_MAX
} from 'data/breakpoints'

const AccountAddPaymentMethodCard = (props) => {
  const {
    className,
    title
  } = props

  const modifiedClassNames = classNames('account-add-payment-method-card', className)

  return (
    <div className={modifiedClassNames}>
      <CardView>
        <MediaQuery minWidth={SM}>
          <CardFrame borderColor={'transparent'}>
            <CardContent>
              <div className='account-add-payment-method-card__container'>
                <div className='absolute-center'>
                  <TextIconButton
                    disabled={false}
                    title={title}
                    iconModifier='plus' />
                </div>
              </div>
            </CardContent>
          </CardFrame>
        </MediaQuery>
        <MediaQuery maxWidth={SM_MAX}>
          <CardFooter>
            <TextIconButton
              disabled={false}
              title={title}
              iconModifier='plus' />
          </CardFooter>
        </MediaQuery>
      </CardView>
    </div>
  )
}

AccountAddPaymentMethodCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string
}

AccountAddPaymentMethodCard.defaultProps = {
  title: 'add another'
}

export default AccountAddPaymentMethodCard
