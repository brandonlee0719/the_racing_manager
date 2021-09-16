import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

import Input from 'components/input/Input'

import { Form, Field, Submit } from 'components/forms/BaseForm'

import TextButton from 'components/buttons/TextButton'

import {
  EMAIL_PLACEHOLDER,
  PHONE_PLACEHOLDER
} from 'texts/forms'

class ContactDetailsForm extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    const { submitForm, values } = this.props

    return (
      <div className='contact-details-form'>
        <Form
          handleSubmit={() => { submitForm(values) }}
          {...this.props}>

          <div className='form__group'>
            <Field
              component={Input}
              placeholder={EMAIL_PLACEHOLDER}
              validate={['email']}
              name='email' />
          </div>

          <div className='form__group'>
            <Field
              component={Input}
              placeholder={PHONE_PLACEHOLDER}
              validate={['phone']}
              name='phone' />
          </div>

          <Submit component={(props) => TextButton({
            ...props,
            text: 'save changes',
            isDisabled: false
          })} />
        </Form>
      </div>
    )
  }
}

ContactDetailsForm.propTypes = {
  submitForm: PropTypes.func,
  values: PropTypes.object
}

export default ContactDetailsForm
