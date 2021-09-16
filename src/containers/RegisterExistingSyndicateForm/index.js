import React, { PureComponent } from 'react'

import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom'

import RegisterExistingSyndicateForm from 'components/forms/RegisterExistingSyndicate'

import {
  updateForm,
  updateFormError,
  resetForm,
  submitFormData
} from 'actions/registerExistingSyndicate'

import { trim } from 'utils/stringutils'

import { registerExistingSyndicateValidators } from 'utils/validation/RegisterExistingSyndicate'

class RegisterExistingSyndicateFormContainer extends PureComponent {
  constructor (props) {
    super(props)
  }

  componentWillUnmount () {
    this.props.clearForm()
  }

  render () {
    return (
      <RegisterExistingSyndicateForm {...this.props} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  /**
   *  canProgress
   *  @const
   *  @description If all fields are met, allow user to progress
   *  @type {Boolean}
   */

  let canProgress = true

  // Items to ommit from form checking.
  const ommittedItems = ['isSubmitting', 'submitError', 'errors', 'firstname', 'surname', 'email', 'syndicatename', 'address1', 'address2', 'city']

  for (let key in state.registerExistingSyndicate) {
    if (!state.registerExistingSyndicate[key] && !~ommittedItems.indexOf(key)) {
      canProgress = false
    }
  }

  for (let errorKey in state.registerExistingSyndicate.errors) {
    if (state.registerExistingSyndicate.errors[errorKey].length > 0) {
      canProgress = false
    }
  }
  const {
    registerExistingSyndicate
  } = state

  const {
    firstname,
    surname,
    email,
    syndicatename,
    address1,
    address2,
    city,
    confirm,
    errors
  } = registerExistingSyndicate

  return {
    values: {
      firstname,
      surname,
      email,
      syndicatename,
      address1,
      address2,
      city,
      confirm
    },
    errors,
    validators: registerExistingSyndicateValidators,
    canProgress
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
    submitForm: (values) => {
      dispatch(submitFormData({
        firstname: values.firstname,
        surname: values.surname,
        email: trim(values.email),
        syndicatename: values.syndicatename,
        address1: values.address1,
        address2: values.address2,
        city: values.city
      }))
      .then((response) => {
        ownProps.history.push(`/user/verify/${response.token}`)
      })
    },
    clearForm: () => {
      dispatch(resetForm())
    }
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterExistingSyndicateFormContainer))
