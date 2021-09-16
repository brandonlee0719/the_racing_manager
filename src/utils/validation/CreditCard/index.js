/**
*  @module validateTypes
*/
import * as VALIDATE from 'utils/validation/ValidationTypes'

/**
*  @module errorMessages
*/
import * as ERROR from 'texts/errormessages'

export const creditCardValidators = (type, formValues = {}) => {
  const {
    cardType,
    cardName,
    cardNumber,
    cardExpiry
  } = formValues

  switch (type) {
    case 'cardType':
      return VALIDATE.REQUIRED(cardType) ? [] : [ERROR.CARD_TYPE]

    case 'cardName':
      return VALIDATE.NAME(cardName) ? [] : [ERROR.FIRST_NAME]

    case 'cardNumber':
      return VALIDATE.CARD_NUMBER(cardNumber) ? [] : [ERROR.CARD_NUMBER]

    case 'cardExpiry':
      return VALIDATE.CARD_EXPIRY(cardExpiry) ? [] : [ERROR.CARD_EXPIRY]

    default:
      return []
  }
}
