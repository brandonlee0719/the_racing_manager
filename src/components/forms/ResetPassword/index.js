import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

import Input from 'components/input/Input'

import { Form, Field, Submit } from 'components/forms/BaseForm'

import TextButton from 'components/buttons/TextButton'

import {
  CURRENT_PASSWORD,
  NEW_PASSWORD,
  NEW_PASSWORD_CONFIRM
} from 'texts/forms'

class ResetPasswordForm extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    const { submitForm, values, onCancel, canProgress } = this.props

    return (
      <div className='reset-password-form'>
        <Form
          handleSubmit={() => { submitForm(values) }}
          {...this.props}>

          <div className='form__group'>
            <Field
              component={Input}
              placeholder={CURRENT_PASSWORD}
              validate={['currentPassword']}
              type='password'
              name='currentPassword' />
          </div>

          <div className='form__group'>
            <Field
              component={Input}
              placeholder={NEW_PASSWORD}
              validate={['newPassword']}
              type='password'
              name='newPassword' />
          </div>

          <div className='form__group'>
            <Field
              component={Input}
              placeholder={NEW_PASSWORD_CONFIRM}
              validate={['confirmPassword']}
              type='password'
              name='confirmPassword' />
          </div>

          <div className='form__group'>
            <Submit component={(props) => TextButton({
              ...props,
              text: 'confirm',
              isDisabled: !canProgress
            })} />
          </div>

          <h6 className='italic uppercase link cursor--pointer reset-password-form__cta-text' onClick={onCancel}>
            cancel
          </h6>
        </Form>
      </div>
    )
  }
}

ResetPasswordForm.propTypes = {
  submitForm: PropTypes.func,
  values: PropTypes.object
}

export default ResetPasswordForm
