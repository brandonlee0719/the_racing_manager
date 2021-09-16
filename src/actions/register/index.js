import { performRegistration } from 'api/Services'

/**
 *  @name REGISTER_UPDATE
 *  @type {String}
 */
export const REGISTER_UPDATE = 'REGISTER_UPDATE'

/**
 *  @name REGISTER_RESET
 *  @type {String}
 */
export const REGISTER_RESET = 'REGISTER_RESET'

/**
 *  @name REGISTER_SUBMITTING
 *  @type {String}
 */
export const REGISTER_SUBMITTING = 'REGISTER_SUBMITTING'

/**
 *  @name REGISTER_ERROR
 *  @type {String}
 */
export const REGISTER_ERROR = 'REGISTER_ERROR'

/**
 *  @name REGISTER_SUBMITTING_FAILED
 *  @type {String}
 */
export const REGISTER_SUBMITTING_FAILED = 'REGISTER_SUBMITTING_FAILED'

/**
 *  @name REGISTER_SUBMITTED
 *  @type {String}
 */
export const REGISTER_SUBMITTED = 'REGISTER_SUBMITTED'

/**
 *  @name updateRegisterForm
 *  @param  {String} name
 *  @param  {Any} value
 *  @return {Object}
 */
export const updateRegisterForm = (name, value) => ({
  type: REGISTER_UPDATE,
  name,
  value
})

/**
 *  @name resetRegisterForm
 *  @return {Object}
 */
export const resetRegisterForm = () => ({
  type: REGISTER_RESET
})

/**
 *  @name submitRegisterForm
 *  @return {Object}
 */
export const submitRegisterForm = () => ({
  type: REGISTER_SUBMITTING
})

/**
 *  @name submittedRegisterForm
 *  @return {Object}
 */
export const submittedRegisterForm = () => ({
  type: REGISTER_SUBMITTED
})

/**
 *  @name failedToSubmitRegisterForm
 *  @return {Object}
 */
export const failedToSubmitRegisterForm = (error) => ({
  type: REGISTER_SUBMITTING_FAILED,
  error
})

/**
 *  @name updateRegisterFormError
 *  @param  {Array} errors
 *  @param  {String} name
 *  @return {Object}
 */
export const updateRegisterFormError = (errors, name) => ({
  type: REGISTER_ERROR,
  errors,
  name
})

/**
 * @function submitFormData
 * @param {object} data
 * @description Async action that routes data to the API service and handle the response.
 */
export const submitFormData = data => {
  return (dispatch, getState) => {
    dispatch(submitRegisterForm())

    return performRegistration(data)
    .then((data) => {
      dispatch(submittedRegisterForm(data))
      return Promise.resolve(data)
    })
    .catch((error) => {
      dispatch(failedToSubmitRegisterForm(error))
      return Promise.reject(error)
    })
  }
}
