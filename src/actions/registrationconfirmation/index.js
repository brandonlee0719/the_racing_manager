import { confirmRegistration } from 'api/Services'

import { storeUserCredentials } from 'actions/auth'

export const REQUEST_CONFIRMATION = 'CONFIRM_REGISTRATION_REQUEST'

export const SUCCESSFULLY_CONFIRMED_REGISTRATION = 'SUCCESSFULLY_CONFIRMED_REGISTRATION'

export const FAILED_TO_CONFIRM_REGISTRATION = 'FAILED_TO_CONFIRM_REGISTRATION'

export const isRequestingConfirmation = () => ({
  type: REQUEST_CONFIRMATION
})

export const successfullyRequestedConfirmation = () => ({
  type: SUCCESSFULLY_CONFIRMED_REGISTRATION
})

export const failedToRequestConfirmation = (error) => ({
  type: FAILED_TO_CONFIRM_REGISTRATION,
  error
})

export const performRequestToConfirmRegistration = (token) => {
  return (dispatch, getState) => {
    dispatch(isRequestingConfirmation())

    return confirmRegistration({token})
    .then((response) => dispatch(storeUserCredentials(response)))
    .then((response) => {
      dispatch(successfullyRequestedConfirmation())
      return Promise.resolve(response)
    })
    .catch((error) => {
      dispatch(failedToRequestConfirmation(error))
      return Promise.reject(error)
    })
  }
}
