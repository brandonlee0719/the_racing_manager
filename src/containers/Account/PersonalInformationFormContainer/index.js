import React, { Component } from 'react'

import { connect } from 'react-redux'

import PersonalInformationForm from 'components/forms/PersonalInformation'

import {
  updateForm,
  updateFormError,
  resetForm,
  submitFormData
} from 'actions/account/PersonalInformation'

import { personalInformationValidators } from 'utils/validation/PersonalInformation'

import processMediaPayload from 'utils/mediapayload'

class PersonalInformationFormContainer extends Component {
  constructor (props) {
    super(props)
  }

  componentWillUnmount () {
    this.props.clearForm()
  }

  render () {
    return <PersonalInformationForm {...this.props} />
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    account,
    auth
  } = state

  const {
    firstname,
    surname,
    username,
    birthDate,
    location,
    avatarImage,
    errors
  } = account.personalInformation

  const {
    firstname: initialFirstname,
    surname: initialSurname,
    username: initialUsername,
    birthDate: initialBirthday,
    location: initialLocation,
    avatarImage: initialAvatarImage
  } = auth.details

  return {
    values: {
      firstname,
      surname,
      username,
      birthDate,
      location,
      avatarImage
    },
    errors,
    validators: personalInformationValidators,
    initialValues: {
      firstname: initialFirstname,
      surname: initialSurname,
      username: initialUsername,
      birthDate: initialBirthday,
      location: initialLocation,
      avatarImage: initialAvatarImage
    }
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
      // Constructs to FormData
      const {
        avatarImage,
        ...rest
      } = values

      let payload = {
        ...rest
      }

      // Only send avatarImage if it's an input file format and not a string
      if (typeof avatarImage !== 'string') {
        payload['avatarImage'] = avatarImage
      }

      const data = processMediaPayload({
        ...payload
      })

      return dispatch(submitFormData(data))
    },
    clearForm: () => {
      dispatch(resetForm())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalInformationFormContainer)
