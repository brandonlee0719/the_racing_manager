/**
 *  @module validateTypes
 */
import * as VALIDATE from 'utils/validation/ValidationTypes'

/**
 *  @module errorMessages
 */
import * as ERROR from 'texts/errormessages'

/**
 *  BankDetailsValidators
 *  @param  {String} type
 *  @param  {Object} formValues
 *  @return {Array}
 */
export const bankDetailsValidators = (type, formValues = {}) => {
  /**
   *  @const
   */
  const {
    holdername,
    accountnumber,
    sortcode
  } = formValues

  switch (type) {
    case 'holdername':
      return VALIDATE.NAME(holdername) ? [] : [ERROR.HOLDER_NAME]

    case 'accountnumber':
      return VALIDATE.REQUIRED(accountnumber) ? [] : [ERROR.REQUIRED]

    case 'sortcode':
      return VALIDATE.REQUIRED(sortcode) ? [] : [ERROR.REQUIRED]

    default:
      return []
  }
}