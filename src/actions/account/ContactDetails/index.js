export const FORM_UPDATE = '@CONTACT_DETAILS/FORM_UPDATE'

export const FORM_RESET = '@CONTACT_DETAILS/FORM_RESET'

export const FORM_SUBMITTING = '@CONTACT_DETAILS/FORM_SUBMITTING'

export const FORM_ERROR = '@CONTACT_DETAILS/FORM_ERROR'

export const FORM_SUBMITTING_FAILED = '@CONTACT_DETAILS/FORM_SUBMITTING_FAILED'

export const FORM_SUBMITTED = '@CONTACT_DETAILS/FORM_SUBMITTED'

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
