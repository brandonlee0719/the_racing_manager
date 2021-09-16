/**
*  @module validateTypes
*/
import * as VALIDATE from 'utils/validation/ValidationTypes'

/**
*  @module errorMessages
*/
import * as ERROR from 'texts/errormessages'

/**
 *  registerValidators
 *  @param  {String} type
 *  @param  {Object} formValues
 *  @return {Array}
 */
export const registerValidators = (type, formValues = {}) => {
  /**
   *  @const
   */
  const {
    firstname,
    surname,
    email,
    password,
    overEighteen,
    termsAndConditions,
    username
  } = formValues

  switch (type) {
    case 'firstname':
      return VALIDATE.NAME(firstname) ? [] : [ERROR.FIRST_NAME]

    case 'surname':
      return VALIDATE.NAME(surname) ? [] : [ERROR.SURNAME]

    case 'email':
      return VALIDATE.EMAIL(email) ? [] : [ERROR.EMAIL]

    case 'password':
      return VALIDATE.PASSWORD(password) ? [] : [ERROR.PASSWORD]

    case 'overEighteen':
      return overEighteen === true ? [] : [ERROR.UNDER_AGE_18]

    case 'termsAndConditions':
      return termsAndConditions === true ? [] : [ERROR.MUST_ACCEPT_T_AND_C]

    case 'username':
      return !VALIDATE.REQUIRED(username) || VALIDATE.USERNAME(username) ? [] : [ERROR.USERNAME]

    default:
      return []
  }
}
