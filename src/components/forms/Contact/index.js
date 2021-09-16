import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

import Input from 'components/input/Input'

import TextArea from 'components/input/TextArea'

import { Form, Field, Submit } from 'components/forms/BaseForm'

import TextButton from 'components/buttons/TextButton'

import TitleDescriptionSection from 'components/common/TitleDescriptionSection'

import {
  FIRSTNAME_PLACEHOLDER,
  SURNAME_PLACEHOLDER,
  EMAIL_PLACEHOLDER,
  SUBJECT_PLACEHOLDER,
  MESSAGE_PLACEHOLDER
} from 'texts/forms'

class ContactForm extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      submitForm,
      values,
      description
    } = this.props

    return (
      <div className='contact-form'>
        <Form
          handleSubmit={() => { submitForm(values) }}
          {...this.props}
          className='contact-form__form'>

          <div className='form__group'>
            <TitleDescriptionSection
              title='get in touch'
              colorModifier='blue'
              titleModifier='h2'
              description={description} />
          </div>

          <div className='row-sm'>
            <div className='form__group col-md-6 col-xs-12 align-middle'>
              <Field
                component={Input}
                placeholder={FIRSTNAME_PLACEHOLDER}
                validate={['firstname']}
                name='firstname' />
            </div>

            <div className='form__group col-md-6 col-xs-12 align-middle'>
              <Field
                component={Input}
                placeholder={SURNAME_PLACEHOLDER}
                validate={['surname']}
                name='surname' />
            </div>
          </div>

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
              placeholder={SUBJECT_PLACEHOLDER}
              validate={['subject']}
              name='subject' />
          </div>

          <div className='form__group'>
            <Field
              component={TextArea}
              minHeight={90}
              showBar
              placeholder={MESSAGE_PLACEHOLDER}
              validate={['message']}
              name='message' />
          </div>

          <Submit component={(props) => TextButton({
            ...props,
            modifier: ['secondary', 'fluid'],
            text: 'Send message',
            className: 'contact-form__submit',
            isDisabled: false
          })} />
        </Form>
      </div>
    )
  }
}

ContactForm.propTypes = {
  submitForm: PropTypes.func,
  values: PropTypes.object
}

export default ContactForm
