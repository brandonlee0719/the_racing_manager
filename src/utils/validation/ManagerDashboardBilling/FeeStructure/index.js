/**
 *  @module validateTypes
 */
import * as VALIDATE from 'utils/validation/ValidationTypes'

/**
 *  @module errorMessages
 */
import * as ERROR from 'texts/errormessages'

/**
 *  FeeStructureValidators
 *  @param  {String} type
 *  @param  {Object} formValues
 *  @return {Array}
 */
export const feeStructureValidators = (type, formValues = {}) => {
  /**
   *  @const
   */
  const {
    ownershipType,
    feeStructure,
    initialfee,
    monthlyfee,
    perioddate
  } = formValues

  switch (type) {
    case 'ownershipType':
      return VALIDATE.REQUIRED(ownershipType) ? [] : [ERROR.REQUIRED_RADIO]

    case 'feeStructure':
      return VALIDATE.REQUIRED(feeStructure) ? [] : [ERROR.REQUIRED_RADIO]
    case 'initialfee':
      return VALIDATE.REQUIRED(initialfee) ? [] : [ERROR.REQUIRED]

    case 'monthlyfee':
      return VALIDATE.REQUIRED(monthlyfee) ? [] : [ERROR.REQUIRED]

    case 'perioddate':
      return VALIDATE.DATE(perioddate) ? [] : [ERROR.PERIOD_DATE]

    default:
      return []
  }
}