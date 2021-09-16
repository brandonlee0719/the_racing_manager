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
export const registerExistingSyndicateValidators = (type, formValues = {}) => {
  /**
   *  @const
   */
  const {
    firstname,
    surname,
    email,
    syndicatename,
    address1,
    address2,
    city
  } = formValues

  switch (type) {
    case 'firstname':
      return VALIDATE.NAME(firstname) ? [] : [ERROR.FIRST_NAME]

    case 'surname':
      return VALIDATE.NAME(surname) ? [] : [ERROR.SURNAME]

    case 'email':
      return VALIDATE.EMAIL(email) ? [] : [ERROR.EMAIL]

    case 'syndicatename':
      return VALIDATE.NAME(syndicatename) ? [] : [ERROR.FIRST_NAME]

    case 'address1':
      return VALIDATE.REQUIRED(address1) ? [] : [ERROR.REQUIRED]

    case 'address2':
      return VALIDATE.REQUIRED(address2) ? [] : [ERROR.REQUIRED]

    case 'city':
      return VALIDATE.REQUIRED(city) ? [] : [ERROR.REQUIRED]

    default:
      return []
  }
}
