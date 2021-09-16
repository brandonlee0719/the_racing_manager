import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

import Input from 'components/input/Input'

import { Form, Field, Submit } from 'components/forms/BaseForm'

import TextButton from 'components/buttons/TextButton'

import Radio from 'components/input/Radio'

class FeeStructureForm extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    const { submitForm, values, errors } = this.props

    return (
      <div className='fee-structure-form'>
        <Form
          handleSubmit={() => { submitForm(values) }}
          {...this.props}>

          <div className="form-group-header">
            <h2 className="uppercase">
              FEE STRUCTURE
            </h2>
          </div>

          <div className="form-group-ownership">
            <div className="form-group-ownership-header">
              <span>What type of ownership do you offer?</span>
            </div>

            <div className='form__group'>
              <Field
                component={Radio}
                name="ownershipType"
                value="fixed_period"
                checked={values.ownershipType === 'fixed_period'}
                label={<p>Fixed period</p>} />
            </div>

            <div className='form__group'>
              <Field
                component={Radio}
                validate={['ownershipType']}
                name="ownershipType"
                value="open_ended"
                checked={values.ownershipType === 'open_ended'}
                label={<p>Open ended</p>} />
            </div>
          </div>

          <div className="form-group-feestructure">
            <div className="form-group-feestructure-header">
              <span>How do you structure fees?</span>
            </div>

            <div className='form__group'>
              <Field
                component={Radio}
                name="feeStructure"
                value="all_inclusive"
                checked={values.feeStructure === 'all_inclusive'}
                label={<p>One off all inclusive</p>} />
            </div>

            <div className='form__group'>
              <Field
                component={Radio}
                name="feeStructure"
                value="ongoing"
                checked={values.feeStructure === 'ongoing'}
                label={<p>Ongoing</p>} />
            </div>

            <div className='form__group'>
              <Field
                component={Radio}
                validate={['feeStructure']}
                name="feeStructure"
                value="initial_joining_fee"
                checked={values.feeStructure === 'initial_joining_fee'}
                label={<p>Initial joining fee and ongoing</p>} />
            </div>
          </div>

          <div className="fee">
            <div className="small">
              <p>We require an initial fee of £ </p>
            </div>

            <div className='form__group'>
              <Field
                component={Input}
                hideError={true}
                validate={['initialfee']}
                name='initialfee' />
            </div>

            <div className="small">
              <p>and an ongoing Monthly fee of £ </p>
            </div>

            <div className='form__group'>
              <Field
                component={Input}
                hideError={true}
                validate={['monthlyfee']}
                name='monthlyfee' />
            </div>

            <br />

            <div className="small">
              <p>This is for a period of </p>
            </div>

            <div className='form__group'>
              <Field
                component={Input}
                validate={['perioddate']}
                hideError={true}
                name='perioddate' />
            </div>

            <div className="small1">
              <p>(ending 00/00/0000)</p>
            </div>

            <br />

            <div className="small">
              <p>The total is inclusive of VAT.</p>
            </div>
            <div className="error-messages">
              {errors.initialfee.length ? <p>Please enter the initial fee.</p> : null}<br />
              {errors.monthlyfee.length ? <p>Please enter the monthly fee.</p> : null}<br />
              {errors.perioddate.length ? <p>Please enter the period date.</p> : null}
            </div>
          </div>
          <div className="form-submit-button">
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

FeeStructureForm.propTypes = {
  submitForm: PropTypes.func,
  values: PropTypes.object
}

export default FeeStructureForm
