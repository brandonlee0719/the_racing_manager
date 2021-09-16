import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

import Input from 'components/input/Input'

import Select from 'components/input/FormSelect'

import { Form, Field } from 'components/forms/BaseForm'

import {
  ADDRESS_ONE,
  ADDRESS_TWO,
  TOWN_CITY,
  COUNTRY,
  POSTCODE
} from 'texts/forms'

class BillingAddressForm extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    const { submitForm, values } = this.props

    return (
      <div className='billing-address-form'>
        <Form
          handleSubmit={() => { submitForm(values) }}
          {...this.props}>

          <div className='form__group'>
            <Field
              component={Input}
              placeholder={ADDRESS_ONE}
              validate={['addressOne']}
              name='addressOne' />
          </div>

          <div className='form__group'>
            <Field
              component={Input}
              placeholder={ADDRESS_TWO}
              validate={['addressTwo']}
              name='addressTwo' />
          </div>

          <div className='form__group'>
            <Field
              component={Input}
              placeholder={TOWN_CITY}
              validate={['townCity']}
              name='townCity' />
          </div>

          <div className='form__group'>
            <Field
              defaultValue={COUNTRY}
              component={Select}
              validate={['country']}
              name='country'>
                <option value={COUNTRY} disabled hidden>{COUNTRY}</option>
                <option value={'United Kingdom'}>United Kingdom</option>
                <option value={'France'}>France</option>
                <option value={'United States Of America'}>United States Of America</option>
            </Field>
          </div>

          <div className='form__group'>
            <Field
              component={Input}
              placeholder={POSTCODE}
              validate={['postCode']}
              name='postCode' />
          </div>

        </Form>
      </div>
    )
  }
}

BillingAddressForm.propTypes = {
  submitForm: PropTypes.func,
  values: PropTypes.object
}

export default BillingAddressForm
