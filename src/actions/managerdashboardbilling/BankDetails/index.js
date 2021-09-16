
// import {
//
// } from 'api/Services'

/*
 Action Types
 */
export const FORM_UPDATE = '@BANK_DETAILS/FORM_UPDATE'

export const FORM_RESET = '@BANK_DETAILS/FORM_RESET'

export const FORM_SUBMITTING = '@BANK_DETAILS/FORM_SUBMITTING'

export const FORM_ERROR = '@BANK_DETAILS/FORM_ERROR'

export const FORM_SUBMITTING_FAILED = '@BANK_DETAILS/FORM_SUBMITTING_FAILED'

export const FORM_SUBMITTED = '@BANK_DETAILS/FORM_SUBMITTED'

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
