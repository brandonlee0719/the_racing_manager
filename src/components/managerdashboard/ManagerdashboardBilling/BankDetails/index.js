import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

import Input from 'components/input/Input'

import { Form, Field, Submit } from 'components/forms/BaseForm'

import TextButton from 'components/buttons/TextButton'

import {
  HOLDER_NAME,
  ACCOUNT_NUMBER,
  SORT_CODE
} from 'texts/forms'

class BankDetailsForm extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    const { submitForm, values } = this.props

    return (
      <div className='container bank-details-form'>
        <Form
          handleSubmit={() => { submitForm(values) }}
          {...this.props}>

          <div className="form-group-header">
            <h2 className="uppercase">
              Bank details
            </h2>
            <div className="small">
              The account which membership fees will
              automatically transfer to.
            </div>
          </div>

          <div className='form__group'>
            <Field
              component={Input}
              placeholder={HOLDER_NAME}
              validate={['holdername']}
              name='holdername' />
          </div>

          <div className='form__group'>
            <Field
              component={Input}
              placeholder={ACCOUNT_NUMBER}
              validate={['accountnumber']}
              name='accountnumber' />
          </div>

          <div className='form__group'>
            <Field
              component={Input}
              placeholder={SORT_CODE}
              validate={['sortcode']}
              name='sortcode' />
          </div>

          <div className="form__group button">
            <Submit component={(props) => TextButton({
              ...props,
              text: 'UPDATE',
              isDisabled: false
            })} />
          </div>
        </Form>
      </div>
    )
  }
}

BankDetailsForm.propTypes = {
  submitForm: PropTypes.func,
  values: PropTypes.object
}

export default BankDetailsForm
