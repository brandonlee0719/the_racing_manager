import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

import Input from 'components/input/Input'

import Checkbox from 'components/input/Checkbox'

import { Form, Field, Submit } from 'components/forms/BaseForm'

import TextButton from 'components/buttons/TextButton'

import {
  FIRST_NAME,
  SURNAME,
  EMAIL_ADDRESS,
  SYNDICATE_NAME,
  ADDRESS_LINE_ONE,
  ADDRESS_LINE_TWO,
  CITY
} from 'texts/forms'

class RegisterExistingSyndicateForm extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    const { submitForm, values, canProgress } = this.props
    return (
      <div className="register-existing-syndicate-form">
        <Form
          handleSubmit={() => { submitForm(values) }}
          {...this.props}>
          <div className="row">
            <div className="col-lg-6 col-md-8 col-sm-10 col-xs-12">
              <h2 className="uppercase">
                Syndicator details
              </h2>
              <div className="underline" />
              <div className="small1">
                Please supply the details of the registered syndicator. These details must match
                those on your BHA application in order for it to be accepted.
              </div>
            </div>
          </div>
          <div className="form__group">
            <Field
              component={Input}
              placeholder={FIRST_NAME}
              validate={['firstname']}
              name='firstname' />
          </div>

          <div className="form__group">
            <Field
              component={Input}
              placeholder={SURNAME}
              validate={['surname']}
              name='surname' />
          </div>

          <div className="form__group">
            <Field
              component={Input}
              placeholder={EMAIL_ADDRESS}
              validate={['email']}
              name='email' />
          </div>
          <div className="small-group">
            <p className="small2">
              PLEASE ENSURE THAT THIS EMAIL ADDRESS MATCHES YOUR BHA REGISTERED EMAIL ADDRESS
            </p>
          </div>

          <div className="col-lg-6 col-md-8 col-sm-10 col-xs-12">
            <h2 className="uppercase">
              Syndicate details
            </h2>
            <div className="underline" />
          </div>

          <div className="form__group">
            <Field
              component={Input}
              placeholder={SYNDICATE_NAME}
              validate={['syndicatename']}
              name='syndicatename' />
          </div>

          <div className="form__group">
            <Field
              component={Input}
              placeholder={ADDRESS_LINE_ONE}
              validate={['address1']}
              name='address1' />
          </div>

          <div className="form__group">
            <Field
              component={Input}
              placeholder={ADDRESS_LINE_TWO}
              validate={['address2']}
              name='address2' />
          </div>

          <div className="form__group">
            <Field
              component={Input}
              placeholder={CITY}
              validate={['city']}
              name='city' />
          </div>

          <div className="form__group">
            <div className="register-existing-syndicate-form__checkbox">
              <Field
                component={Checkbox}
                label={<span>I confirm that I am the registered owner with the BHA</span>}
                name='confirm' />
            </div>
          </div>

          <Submit component={(props) => TextButton({
            ...props,
            text: 'REGISTER SYNDICATE',
            isDisabled: !canProgress
          })} />
        </Form>
      </div>
    )
  }
}

RegisterExistingSyndicateForm.propTypes = {
  submitForm: PropTypes.func,
  values: PropTypes.object
}

export default RegisterExistingSyndicateForm
