/**
*  @module validateTypes
*/
import * as VALIDATE from 'utils/validation/ValidationTypes'

/**
*  @module errorMessages
*/
import * as ERROR from 'texts/errormessages'

export const addMemberFormValidators = (type, formValues = {}) => {
  const {
    firstname,
    surname,
    email,
    addressline1,
    addressline2,
    postcode
  } = formValues

  switch (type) {
    case 'firstname':
      return VALIDATE.NAME(firstname) ? [] : [ERROR.FIRST_NAME]

    case 'surname':
      return VALIDATE.NAME(surname) ? [] : [ERROR.SURNAME]

    case 'email':
      return VALIDATE.EMAIL(email) ? [] : [ERROR.EMAIL]

    case 'addressline1':
      return VALIDATE.NAME(addressline1) ? [] : [ERROR.ADDRESS]

    case 'addressline2':
      return VALIDATE.NAME(addressline2) ? [] : [ERROR.ADDRESS]

    case 'postcode':
      return VALIDATE.NAME(postcode) ? [] : [ERROR.SURNAME]

    default:
      return []
  }
}
