import { AUTHENTICATED_REQUEST } from 'middleware/AuthenticatedRequest'

import { updateUserInformation } from 'api/Services'

import { authenticateUserFromToken } from 'actions/auth'

import { addToastSuccess, addToastError } from 'actions/toast'

import { UPDATED_USER_DETAILS } from 'texts/successmessages'

export const FORM_UPDATE = '@PERSONAL_INFORMATION/FORM_UPDATE'

export const FORM_RESET = '@PERSONAL_INFORMATION/FORM_RESET'

export const FORM_SUBMITTING = '@PERSONAL_INFORMATION/FORM_SUBMITTING'

export const FORM_ERROR = '@PERSONAL_INFORMATION/FORM_ERROR'

export const FORM_SUBMITTING_FAILED = '@PERSONAL_INFORMATION/FORM_SUBMITTING_FAILED'

export const FORM_SUBMITTED = '@PERSONAL_INFORMATION/FORM_SUBMITTED'

export const updateForm = (name, value) => ({
  type: FORM_UPDATE,
  name,
  value
})

export const resetForm = () => ({
  type: FORM_RESET
})

export const submitForm = () => ({
  type: FORM_SUBMITTING
})

export const submittedForm = () => ({
  type: FORM_SUBMITTED
})

export const failedToSubmitForm = (error) => ({
  type: FORM_SUBMITTING_FAILED,
  error
})

export const updateFormError = (errors, name) => ({
  type: FORM_ERROR,
  errors,
  name
})

export const submitFormData = (data) => {
  return (dispatch, getState) => {
    const {
      token
    } = getState().auth

    return dispatch({
      type: AUTHENTICATED_REQUEST,
      types: [submitForm, submittedForm, failedToSubmitForm],
      endpoint: updateUserInformation,
      payload: data
    })
    .then(() => {
      dispatch(addToastSuccess(UPDATED_USER_DETAILS))
    })
    .then(() => {
      dispatch(authenticateUserFromToken(token))
      return Promise.resolve()
    })
    .catch((error) => {
      if (error && error.message) {
        dispatch(addToastError(error.message))
      }
    })
  }
}
