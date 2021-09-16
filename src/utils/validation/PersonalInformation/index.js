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
export const personalInformationValidators = (type, formValues = {}) => {
  /**
   *  @const
   */
  const {
    firstname,
    surname,
    username,
    birthDate,
    location
  } = formValues

  switch (type) {
    case 'firstname':
      return VALIDATE.NAME(firstname) ? [] : [ERROR.FIRST_NAME]

    case 'surname':
      return VALIDATE.NAME(surname) ? [] : [ERROR.SURNAME]

    case 'username':
      return !VALIDATE.REQUIRED(username) || VALIDATE.USERNAME(username) ? [] : [ERROR.USERNAME]

    case 'birthday':
      return VALIDATE.DATE_OF_BIRTH(birthDate) ? [] : [ERROR.DATE_OF_BIRTH]

    case 'location':
      return VALIDATE.REQUIRED(location) ? [] : [ERROR.LOCATION]

    default:
      return []
  }
}
