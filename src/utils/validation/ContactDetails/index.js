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
export const contactDetailsValidators = (type, formValues = {}) => {
  /**
   *  @const
   */
  const {
    email,
    phone
  } = formValues

  switch (type) {
    case 'email':
      return VALIDATE.EMAIL(email) ? [] : [ERROR.EMAIL]

    case 'phone':
      return VALIDATE.PHONE(phone) ? [] : [ERROR.PHONE]

    default:
      return []
  }
}
