/**
*  @module validateTypes
*/
import * as VALIDATE from 'utils/validation/ValidationTypes'

/**
*  @module errorMessages
*/
import * as ERROR from 'texts/errormessages'

export const billingAddressValidators = (type, formValues = {}) => {
  const {
    addressOne,
    addressTwo,
    townCity,
    country,
    postCode
  } = formValues

  switch (type) {
    case 'addressOne':
      return VALIDATE.REQUIRED(addressOne) ? [] : [ERROR.ADDRESS]

    case 'addressTwo':
      return VALIDATE.REQUIRED(addressTwo) ? [] : [ERROR.ADDRESS]

    case 'townCity':
      return VALIDATE.REQUIRED(townCity) ? [] : [ERROR.TOWN_CITY]

    case 'country':
      return VALIDATE.REQUIRED(country) ? [] : [ERROR.COUNTRY]

    case 'postCode':
      return VALIDATE.REQUIRED(postCode) ? [] : [ERROR.POST_CODE]

    default:
      return []
  }
}
