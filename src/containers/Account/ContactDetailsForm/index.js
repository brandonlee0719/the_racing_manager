import React, { PureComponent } from 'react'

import { connect } from 'react-redux'

import ContactDetailsForm from 'components/forms/ContactDetails'

import {
  updateForm,
  updateFormError,
  resetForm
} from 'actions/account/ContactDetails'

import { contactDetailsValidators } from 'utils/validation/ContactDetails'

class ContactDetailsFormContainer extends PureComponent {
  constructor (props) {
    super(props)
  }

  componentWillUnmount () {
    this.props.clearForm()
  }

  render () {
    return <ContactDetailsForm {...this.props} />
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    account
  } = state

  const {
    email,
    phone,
    errors
  } = account.contactDetails

  return {
    values: {
      email,
      phone
    },
    errors,
    validators: contactDetailsValidators
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
    },
    clearForm: () => {
      dispatch(resetForm())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactDetailsFormContainer)
