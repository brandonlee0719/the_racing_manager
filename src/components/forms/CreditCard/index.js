import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

import Input from 'components/input/Input'

import Select from 'components/input/FormSelect'

import { Form, Field } from 'components/forms/BaseForm'

import {
  FORMAT_CREDIT_CARD,
  FORMAT_CREDIT_CARD_DATE
  } from 'utils/validation/ValidationTypes'

import {
  CARD_TYPE,
  CARD_NAME,
  CARD_NUMBER,
  CARD_EXPIRY
} from 'texts/forms'

import {CardElement} from 'react-stripe-elements'

const formStyle = {
  base: {
    iconColor: '#000',
    color: '#000',
    lineHeight: '32px',
    fontWeight: 'light',
    fontFamily: '"Gill Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: '14px',
    '::placeholder': {
      color: 'rgb(138, 138, 138)',
      fontWeight: '100'
    },
  },
  invalid: {
    iconColor: '#e56a6a',
    color: '#e56a6a',
  }
}

class CreditCardForm extends PureComponent {

  render () {
    const { submitForm, values, onCardElementChanged } = this.props

    return (
      <div className='credit-card-form'>
        <Form
          handleSubmit={() => { submitForm(values) }}
          {...this.props}>

          <div className='form__group'>
            <Field
              component={Input}
              placeholder={CARD_NAME}
              validate={['cardName']}
              name='cardName' />
          </div>

          <div className='form__group'>
            <CardElement style={formStyle} onChange={onCardElementChanged} onCardElementChanged={onCardElementChanged}/>
          </div>
        </Form>
      </div>
    )
  }
}

CreditCardForm.propTypes = {
  submitForm: PropTypes.func,
  values: PropTypes.object
}

export default CreditCardForm
