import React, { PureComponent } from 'react'

import { connect } from 'react-redux'

import ResetPasswordForm from 'components/forms/ResetPassword'

import {
  updateForm,
  updateFormError,
  resetForm,
  changePassword
} from 'actions/account/ResetPassword'

import { resetPasswordValidators } from 'utils/validation/ResetPassword'
import { addToastSuccess, addToastError } from 'actions/toast'
import { UPDATED_USER_DETAILS } from 'texts/successmessages'

class ResetPasswordFormContainer extends PureComponent {
  constructor (props) {
    super(props)
  }

  componentWillUnmount () {
    this.props.clearForm()
  }

  render () {
    return <ResetPasswordForm {...this.props} />
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    account
  } = state

  const {
    currentPassword,
    newPassword,
    confirmPassword,
    errors
  } = account.resetPassword

  let canProgress = true

  for (let key in errors) {
    let error = errors[key]
    if (error.length > 0) {
      canProgress = false
    }
  }

  console.log(errors)
  return {
    values: {
      currentPassword,
      newPassword,
      confirmPassword
    },
    errors,
    canProgress,
    validators: resetPasswordValidators
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
      let {currentPassword, newPassword} = values
      dispatch(changePassword({oldPassword: currentPassword, newPassword}))
        .then(() => {
          dispatch(addToastSuccess(UPDATED_USER_DETAILS))
          dispatch(resetForm())
          ownProps.onFormCancel && ownProps.onFormCancel()
          return Promise.resolve()
        })
        .catch(error => {
          if (error.message === 'Login failed') {
            dispatch(addToastError('Please check your password'))
          }
          else if (error && error.errors && error.errors.password) {
            dispatch(addToastError(error.errors.password))
          }
          else if (error && error.message) {
            dispatch(addToastError(error.message))
          }
        })
    },
    clearForm: () => {
      dispatch(resetForm())
    },
    onCancel: () => {
      dispatch(resetForm())
      ownProps.onFormCancel && ownProps.onFormCancel()
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPasswordFormContainer)
