import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

import Input from 'components/input/Input'

import { Form, Submit } from 'components/forms/BaseForm'

import MemberField from 'components/forms/BaseForm/MemberField'

import TextButton from 'components/buttons/TextButton'

import {
  FIRSTNAME_PLACEHOLDER,
  SURNAME_PLACEHOLDER,
  EMAIL_PLACEHOLDER,
  ADDRESS_LINE_ONE,
  ADDRESS_LINE_TWO,
  POSTCODE
} from 'texts/forms'

class MemberCardForm extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    const { dataKey, submitFormData, values, saveForm } = this.props

    const submitFunc = (dataKey, values) => {
      submitFormData(dataKey, values)
      saveForm()
    }

    return (
      <div className='credit-card-form'>
        <Form
          handleSubmit={() => { submitFunc(dataKey, values) }}
          {...this.props}>

          <div className='form__group'>
            <MemberField
              component={Input}
              placeholder={FIRSTNAME_PLACEHOLDER}
              validate={['firstname']}
              name='firstname'
              dataKey={dataKey} />
          </div>

          <div className='form__group'>
            <MemberField
              component={Input}
              placeholder={SURNAME_PLACEHOLDER}
              validate={['surname']}
              name='surname'
              dataKey={dataKey} />
          </div>

          <div className='form__group'>
            <MemberField
              component={Input}
              placeholder={EMAIL_PLACEHOLDER}
              validate={['email']}
              name='email'
              dataKey={dataKey} />
          </div>

          <div className='form__group'>
            <MemberField
              component={Input}
              placeholder={ADDRESS_LINE_ONE}
              validate={['addressline1']}
              name='addressline1'
              dataKey={dataKey} />
          </div>

          <div className='form__group'>
            <MemberField
              component={Input}
              placeholder={ADDRESS_LINE_TWO}
              validate={['addressline2']}
              name='addressline2'
              dataKey={dataKey} />
          </div>

          <div className="form__group">
            <MemberField
              component={Input}
              placeholder={POSTCODE}
              validate={['postcode']}
              name='postcode'
              dataKey={dataKey} />
          </div>

          <Submit component={(props) => TextButton({
            ...props,
            text: 'SAVE',
            isDisabled: false
          })} />
        </Form>
      </div>
    )
  }
}

MemberCardForm.propTypes = {
  submitFormData: PropTypes.func,
  values: PropTypes.object
}

export default MemberCardForm
