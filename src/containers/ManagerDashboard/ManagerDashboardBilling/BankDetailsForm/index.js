import React, { Component } from 'react'

/**
 *  @module connect
 */
import { connect } from 'react-redux'

/**
 *  @module BankDetailsForm
 */
import BankDetailsForm from 'components/managerdashboard/ManagerDashboardBilling/BankDetails'

/**
 *  @module updateRegisterForm, submitRegisterForm, updateRegisterFormError
 */
import {
  updateForm,
  resetForm,
  updateFormError
} from 'actions/managerdashboardbilling/BankDetails'

/**
 *  @module signUpFormValidators
 */
import { bankDetailsValidators } from 'utils/validation/ManagerDashboardBilling/BankDetails'

class BankDetailsFormContainer extends Component {
  constructor (props) {
    super(props)
  }

  componentWillUnmount () {
    this.props.clearForm()
  }

  render () {
    return (
      <BankDetailsForm
        {...this.props} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    managerDashboardBilling
  } = state

  const {
    holdername,
    accountnumber,
    sortcode,
    errors
  } = managerDashboardBilling.bankDetails

  return {
    values: {
      holdername,
      accountnumber,
      sortcode
    },
    errors,
    validators: bankDetailsValidators
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    update: (name, value) => {
      dispatch(updateForm(name, value))
    },
    updateErrors: (errors, name) => {
      dispatch(updateFormError(errors, name))
    },
    clearForm: () => {
      dispatch(resetForm())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BankDetailsFormContainer)