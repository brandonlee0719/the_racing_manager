import enhanceWithClickOutside from 'react-click-outside'

import LoginForm from 'components/forms/Login'

import { connect } from 'react-redux'

import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

import _ from 'lodash'

import {
  submitFormData,
  updateLoginForm,
  updateLoginFormError,
  toggleKeepLoggedInForm
} from 'actions/login'

import { trim } from 'utils/stringutils'

class LoginFormContainer extends Component {
  constructor (props) {
    super(props)
  }

  handleClickOutside (e) {
    if (this.props.closeLogin) {
      if (e) {
        e.stopPropagation()
      }

      this.props.closeLogin()
    }
  }

  render () {
    return (
      <LoginForm
        {...this.props} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    values: state.login,
    errors: state.login.errors,
    validators: () => {},
    isSubmitting: state.login.isSubmitting
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const redirectedFrom = _.get(ownProps, 'location.state.from.pathname') || '/dashboard'
  const queryParam = _.get(ownProps, 'location.state.from.search') || ''
  return {
    update: (name, value) => {
      dispatch(updateLoginForm(name, value))
    },
    updateErrors: (errors, name) => {
      dispatch(updateLoginFormError(errors, name))
    },
    submitForm: (values) => {
      const {
        onSubmitSuccess,
        onSubmitFail
        } = ownProps

      dispatch(submitFormData({
        email: trim(values.email.toLowerCase()),
        password: values.password
      }))
      .then(() => {
        ownProps.history.push(`${redirectedFrom}${queryParam}`)
        return Promise.resolve()
      })
      .then(onSubmitSuccess)
      .catch(onSubmitFail)
    },
    toggleLoggedIn: () => {
      dispatch(toggleKeepLoggedInForm())
    }
  }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(enhanceWithClickOutside(LoginFormContainer)))
