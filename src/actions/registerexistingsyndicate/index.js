import { performRegisterExistingSyndicate } from 'api/Services'

export const FORM_UPDATE = '@REGISTER_EXISTING_SYNDICATE/FORM_UPDATE'

export const FORM_RESET = '@REGISTER_EXISTING_SYNDICATE/FORM_RESET'

export const FORM_SUBMITTING = '@REGISTER_EXISTING_SYNDICATE/FORM_SUBMITTING'

export const FORM_ERROR = '@REGISTER_EXISTING_SYNDICATE/FORM_ERROR'

export const FORM_SUBMITTING_FAILED = '@REGISTER_EXISTING_SYNDICATE/FORM_SUBMITTING_FAILED'

export const FORM_SUBMITTED = '@REGISTER_EXISTING_SYNDICATE/FORM_SUBMITTED'

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
    dispatch(submitForm())

    return performRegisterExistingSyndicate(data)
    .then((data) => {
      dispatch(submittedForm(data))
      return Promise.resolve(data)
    })
    .catch((error) => {
      dispatch(failedToSubmitForm(error))
      return Promise.reject(error)
    })
  }
}
