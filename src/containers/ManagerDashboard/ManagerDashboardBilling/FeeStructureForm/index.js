import React, { Component } from 'react'

/**
 *  @module connect
 */
import { connect } from 'react-redux'

/**
 *  @module FeeStructureForm
 */
import FeeStructureForm from 'components/managerdashboard/ManagerDashboardBilling/FeeStructure'

/**
 *  @module updateRegisterForm, submitRegisterForm, updateRegisterFormError
 */
import {
  updateForm,
  resetForm,
  updateFormError,
  submitFormData
} from 'actions/managerdashboardbilling/FeeStructure'

/**
 *  @module signUpFormValidators
 */
import { feeStructureValidators } from 'utils/validation/ManagerDashboardBilling/FeeStructure'

class FeeStructureFormContainer extends Component {
  constructor (props) {
    super(props)
  }

  componentWillUnmount () {
    this.props.clearForm()
  }

  render () {
    return (
      <FeeStructureForm
        {...this.props} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    managerDashboardBilling
  } = state

  const {
    ownershipType,
    feeStructure,
    initialfee,
    monthlyfee,
    perioddate,
    errors
  } = managerDashboardBilling.feeStructure

  return {
    values: {
      ownershipType,
      feeStructure,
      initialfee,
      monthlyfee,
      perioddate,
    },
    errors,
    validators: feeStructureValidators
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
    },
    submitForm: (data) => {
      dispatch(submitFormData(data))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeeStructureFormContainer)