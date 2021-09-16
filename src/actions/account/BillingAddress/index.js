export const FORM_UPDATE = '@BILLING_ADDRESS/FORM_UPDATE'

export const FORM_RESET = '@BILLING_ADDRESS/FORM_RESET'

export const FORM_SUBMITTING = '@BILLING_ADDRESS/FORM_SUBMITTING'

export const FORM_ERROR = '@BILLING_ADDRESS/FORM_ERROR'

export const FORM_SUBMITTING_FAILED = '@BILLING_ADDRESS/FORM_SUBMITTING_FAILED'

export const FORM_SUBMITTED = '@BILLING_ADDRESS/FORM_SUBMITTED'

export const updateForm = (name, value, reducerName) => ({
  type: FORM_UPDATE,
  name,
  value,
  reducerName
})

export const resetForm = (reducerName) => ({
  type: FORM_RESET,
  reducerName
})

export const submitForm = (reducerName) => ({
  type: FORM_SUBMITTING,
  reducerName
})

export const submittedForm = (reducerName) => ({
  type: FORM_SUBMITTED,
  reducerName
})

export const failedToSubmitForm = (error, reducerName) => ({
  type: FORM_SUBMITTING_FAILED,
  error,
  reducerName
})

export const updateFormError = (errors, name, reducerName) => ({
  type: FORM_ERROR,
  errors,
  name,
  reducerName
})

export const submitFormData = (data, reducerName) => {
  return (dispatch, getState) => {
    return dispatch(submitForm())
  }
}
