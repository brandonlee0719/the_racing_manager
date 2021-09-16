/**
*  @module validateTypes
*/
import * as VALIDATE from 'utils/validation/ValidationTypes'

/**
*  @module errorMessages
*/
import * as ERROR from 'texts/errormessages'

/**
 *  personalInformationValidators
 *  @param  {String} type
 *  @param  {Object} formValues
 *  @return {Array}
 */
export const resetPasswordValidators = (type, formValues = {}) => {
  /**
   *  @const
   */
  const {
    currentPassword,
    newPassword,
    confirmPassword
  } = formValues

  switch (type) {
    case 'currentPassword':
      return VALIDATE.PASSWORD(currentPassword) ? [] : [ERROR.PASSWORD]

    case 'newPassword':
      return VALIDATE.PASSWORD(newPassword) ? [] : [ERROR.PASSWORD]

    case 'confirmPassword':
      return (
        !VALIDATE.PASSWORD(confirmPassword)
        ? [ERROR.PASSWORD]
        : !(newPassword === confirmPassword)
        ? [ERROR.WRONG_CONFIRM_PASSWORD]
        : []
      )

    default:
      return []
  }
}
