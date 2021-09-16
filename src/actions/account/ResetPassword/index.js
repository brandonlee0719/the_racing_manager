import { AUTHENTICATED_REQUEST } from 'middleware/AuthenticatedRequest'

import { changePassword as changePasswordService } from 'api/Services'

export const FORM_UPDATE = '@RESET_PASSWORD/FORM_UPDATE'

export const FORM_RESET = '@RESET_PASSWORD/FORM_RESET'

export const FORM_SUBMITTING = '@RESET_PASSWORD/FORM_SUBMITTING'

export const FORM_ERROR = '@RESET_PASSWORD/FORM_ERROR'

export const FORM_SUBMITTING_FAILED = '@RESET_PASSWORD/FORM_SUBMITTING_FAILED'

export const FORM_SUBMITTED = '@RESET_PASSWORD/FORM_SUBMITTED'

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

export const submitFormData = data => {
  return (dispatch, getState) => {
    return dispatch(submitForm())
  }
}

export const changePassword = ({oldPassword, newPassword} = {}) => {
  return (dispatch) => {
    return dispatch({
      type: AUTHENTICATED_REQUEST,
      types: [submitForm, submittedForm, failedToSubmitForm],
      endpoint: changePasswordService,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      payload: JSON.stringify({
        oldPassword,
        newPassword
      })
    })
  }
}
