/*
*  @author Nick de Rozarieux
*  @description - Validation functions for forms
*/

/*
*  @module moment
*  @usage - Uses moment for date of birth validation
*/
import moment from 'moment'

/**
 *  REMOVE_SPACES
 *  @description Removes spaces
 *  @type {RegExp}
 */
const REMOVE_SPACES = /\s/g

/**
 * Positive lookahead assertion to assert that the string has atleast one non-whitespace character
 * @constant
 * @type { Regex }
 */
const REQUIRED_REG = /^(?=\s*\S).*$/

/*
*  @name MIN_AGE
*  @type { integer }
*/
const MIN_AGE = 18

/*
*  @name EMAIL_REG
*  @type { REGEX }
*  @private
*/
const EMAIL_REG = /^[_a-zA-Z0-9-]+(\.[_a-z0-9-]+)*(\+[a-z0-9-]+)?@[a-z0-9-]+(\.[a-z0-9-]{2,})+$/

/*
*  @name NAME_REG
*  @type { REGEX }
*  @private
*/
const NAME_REG = /^(?=[a-zA-Z-\s]{2,}$)^[a-zA-Z\s]+(-[a-zA-Z\s]+)*$/

/**
 *  @name USERNAME_REG
 *  @type {RegExp}
 */
const USERNAME_REG = /^[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*$/

/*
*  @name PHONE_REG
*  @type { REGEX }
*  @private
*/
const PHONE_REG = /^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{5}\)?[\s-]?\d{4,5}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s)\d+)?)$/

/*
*  @name PASSWORD_REG
*  @type { REGEX }
*  @private
*/
const PASSWORD_REG = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/

/*
*  @name DOB_REG
*  @type { REGEX }
*  @private
*/
const DOB_REG = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/

/**
 *  DOB_FORMAT_REG
 *  @type {RegExp}
 */
const DOB_FORMAT_REG = /\d{2,8}/g

/*
*  @name SPACES_REG
*  @type { REGEX }
*  @private
*/
const SPACES_REG = /^\S*$/

/**
 *  ONE_OR_MORE_NUMBER_REG
 *  @type {RegExp}
 */
const ONE_OR_MORE_NUMBER_REG = /[^\d]+/g

/*
*  @name DOUBLE_SPACES_REG
*  @type { REGEX }
*  @private
*/
const DOUBLE_SPACES_REG = /^((?!\s{2}).)*$/

/*
*  @name TRAILING_SPACES_REG
*  @type { REGEX }
*  @private
*/
export const TRAILING_SPACES_REG = /^[ \s]+|[ \s]+$/g

/**
 * @type { RegExp }
 */
const NUMBER_REG = /^[0-9]{0,}$/

/**
 *  CARD_EXPIRY_DATE_REG
 *  @description Only allow two numbers, one slash (/) and 2 numbers
 *  @type {RegExp}
 */
const CARD_DATE_REG = /^[0-9]{2}\/[0-9]{2}$/

/**
 *  CARD_CVV_AMEX_REG
 *  @type {RegExp}
 */
const CARD_CVV_AMEX_REG = /^[0-9]{4}$/

/**
 *  CARD_CVV_REG
 *  @type {RegExp}
 */
const CARD_CVV_REG = /^[0-9]{3}$/

/**
 *  LUHN_ARR
 *  @description Sequence for checking a credit card
 *  @type {Array}
 */
const LUHN_ARR = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]

/**
 *  CREDIT_CARD_FORMAT_REG
 *  @type {RegExp}
 */
const CREDIT_CARD_FORMAT_REG = /\d{4,16}/g

/**
 *  CREDIT_CARD_DATE_FORMAT_REG
 *  @type {RegExp}
 */
const CREDIT_CARD_DATE_FORMAT_REG = /\d{2,4}/g

/**
 *  VISA_REG
 *  @type {RegExp}
 */
const VISA_REG = /^4/

/**
 *  [MASTERCARD_REG
 *  @type {RegExp}
 */
const MASTERCARD_REG = /^5[1-5]/

/**
 *  AMEX_REG
 *  @type {RegExp}
 */
const AMEX_REG = /^3[47]/

/**
 *  DISCOVER_REG
 *  @type {RegExp}
 */
const DISCOVER_REG = /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/

/**
 *  VISA_ELECTRON_REG
 *  @type {RegExp}
 */
const VISA_ELECTRON_REG = /^(4026|417500|4508|4844|491(3|7))/

/**
 *  VISA
 *  @type {String}
 */
const VISA = 'visa'

/**
 *  MASTERCARD
 *  @type {String}
 */
const MASTERCARD = 'mastercard'

/**
 *  AMEX
 *  @type {String}
 */
const AMEX = 'amex'

/**
 *  DISCOVER
 *  @type {String}
 */
const DISCOVER = 'discover'

/**
 *  VISA_ELECTRON
 *  @type {String}
 */
const VISA_ELECTRON = 'visaelectron'

/**
 *  LUHN_CHECK
 *  @param  {String} value
 *  @description Will check a card number to see if it matches the luhn sequence.
 *  @return {Boolean}
 */
export const LUHN_CHECK = value => {
  let len = value.length
  let bit = 1
  let sum = 0
  let val

  while (len) {
    val = parseInt(value.charAt(--len), 10)
    sum += (bit ^= 1) ? LUHN_ARR[val] : val
  }
  return sum && sum % 10 === 0
}

/**
 *  GET_CARD_TYPE
 *  @param  {String} value
 *  @description Depending on the card number, it will return the matching card type
 *  @return {Boolean | String}
 */
export const GET_CARD_TYPE = value => {
  let valueStrippedOfSpaces = value.toString().replace(REMOVE_SPACES, '')

  // visa
  if (valueStrippedOfSpaces.match(VISA_REG) != null) {
    return VISA
  }

  // Mastercard
  if (valueStrippedOfSpaces.match(MASTERCARD_REG) != null) {
    return MASTERCARD
  }

  // AMEX
  if (valueStrippedOfSpaces.match(AMEX_REG) != null) {
    return AMEX
  }

  // Discover
  if (valueStrippedOfSpaces.match(DISCOVER_REG) != null) {
    return DISCOVER
  }

  // Visa Electron
  if (valueStrippedOfSpaces.match(VISA_ELECTRON_REG) != null) {
    return VISA_ELECTRON
  }
  return false
}

/**
 *  CHECK_CARD_LENGTH
 *  @param  {String} value
 *  @description Check to see if the card number matches the correct length
 *  @return {Boolean}
 */
export const CHECK_CARD_LENGTH = value => {
  let cardType = GET_CARD_TYPE(value)

  switch (cardType) {
    case VISA:
    case VISA_ELECTRON:
    case MASTERCARD:
    case DISCOVER:
      return value.length === 16

    case AMEX:
      return value.length === 15

    default:
      return false
  }
}

/**
 *  CHECK_IF_CARD_IS_AVAILABLE
 *  @description Only allow cards accepted by the server
 *  @param  {String} value
 *  @return {Boolean}
 */
export const CHECK_IF_CARD_IS_AVAILABLE = value => {
  // let cardType = GET_CARD_TYPE(value)

  /*
  if (cardType === AMEX) {
    return false
  }
  */

  return true
}

/**
 * Checking if a value has atleast one non-whitespace character
 * @param { String } value
 * @returns { Boolean }
 */
export const REQUIRED = value => REQUIRED_REG.test(value)

/*
*  @name EMAIL
*  @param { string } email
*  @return { boolean }
*/
export const EMAIL = email => EMAIL_REG.test(email)

/*
*  @name NAME
*  @param { string } name
*  @return { boolean }
*/
export const NAME = name => REQUIRED(name) && NAME_REG.test(name) && DOUBLE_SPACES(name) && TRAILING_SPACES(name)

/**
 *  @name USERNAME
 *  @param  {String} name
 *  @return {Boolean}
 */
export const USERNAME = name => USERNAME_REG.test(name)

/*
*  @name DATE_OF_BIRTH
*  @param { }
*  @TODO - Add in date of birth
*/
export const DATE_OF_BIRTH = dob => {
  if (!DOB_REG.test(dob)) {
    return false
  }

  /*
  *  @private
  */
  const _age = moment(dob, 'DD/MM/YYYY')

  /*
  *  @private
  */
  const _now = moment()

  return _now.diff(_age, 'years') >= MIN_AGE
}

/*
*  @name PHONE
*  @param { string } mobile
*  @description - Validates any UK phone number
*  @todo - Make this universal
*  @return { boolean }
*/
export const PHONE = number => PHONE_REG.test(number)

/*
*  @name PASSWORD
*  @param { string } password
*  @return { boolean }
*/
export const PASSWORD = password => PASSWORD_REG.test(password) && SPACES(password)

/*
*  @name CONFIRM_PASSWORD
*  @param { string } password
*  @return { boolean }
*/
export const CONFIRM_PASSWORD = (password, confirmpassword) => {
  if (!PASSWORD(confirmpassword)) {
    return false
  }

  return password === confirmpassword
}

/*
*  @name SPACES
*  @param { string } value
*  @return { boolean }
*/
export const SPACES = (value) => SPACES_REG.test(value)

/*
*  @name DOUBLE_SPACES
*  @param { string } value
*  @return { boolean }
*/
export const DOUBLE_SPACES = (value) => DOUBLE_SPACES_REG.test(value)

/*
*  @name TRAILING_SPACES
*  @param { string } value
*  @return { boolean }
*/
export const TRAILING_SPACES = (value) => typeof value !== 'undefined' ? !value.match(TRAILING_SPACES_REG) : true

/**
 * @param value
 * @constructor
 */
export const LOCATION = value => REQUIRED_REG.test(value)

/**
 * @param value
 * @constructor
 */
export const CAPACITY = value => NUMBER_REG.test(value)

/**
 * @param value
 * @param [format = 'DD/MM/YYYY']
 * @constructor
 */
export const DATE = (value, format = 'DD/MM/YYYY') => moment(value, format, true).isValid()

/**
 *  CARD_NUMBER
 *  @param  {String} value
 *  @return {Boolean}
 */
export const CARD_NUMBER = value => {
  let valueStrippedOfSpaces = value.toString().replace(REMOVE_SPACES, '')

  return LUHN_CHECK(valueStrippedOfSpaces) &&
         CHECK_CARD_LENGTH(valueStrippedOfSpaces) &&
         CHECK_IF_CARD_IS_AVAILABLE(valueStrippedOfSpaces)
}

/**
 *  CARD_START
 *  @param  {String} value
 *  @return {Boolean}
 */
export const CARD_START = value => {
  if (!CARD_DATE_REG.test(value)) {
    return false
  }

   /*
  *  @private
  */
  const startNumber = moment(value, 'MM/YY')

  /*
  *  @private
  */
  const today = moment()

  // Check if the number is valid, check if it the start has already been
  return startNumber.isValid() && (startNumber <= today)
}

/**
 *  CARD_EXPIRY
 *  @param  {String} value
 *  @param {String} [format = 'MM/YY']
 *  @return {Boolean}
 */
export const CARD_EXPIRY = value => {
  if (!CARD_DATE_REG.test(value)) {
    return false
  }

   /*
  *  @private
  */
  const expiryNumber = moment(value, 'MM/YY')

  /*
  *  @private
  */
  const today = moment()

  // Check if the number is valid, check if it has already expired
  return expiryNumber.isValid() && (today < expiryNumber.add(1, 'months'))
}

/**
 *  CARD_CVV
 *  @param  {String} cardNum
 *  @param  {String} value
 *  @return {Boolean}
 */
export const CARD_CVV = (cardNum, value) => {
  let cardType = GET_CARD_TYPE(cardNum)

  if (cardType === AMEX) {
    return CARD_CVV_AMEX_REG.test(value)
  }

  return CARD_CVV_REG.test(value)
}

/**
 *  IS_NUMBER
 *  @param  {Number} num
 *  @return {Boolean}
 */
export const IS_NUMBER = (num) => {
  return NUMBER_REG.test(num)
}

/**
 *  baseFormatter
 *  @description Reuseable function to format as the user types
 *               will add in a character depending on the iterateCount
 *               there is also a custom fn option to add more complexity to the fn
 *               For example; if the value is 46585804 and the iterateCount is 4 and the join char is /
 *                            then the value will be 4658/5804
 */
const baseFormatter = (value, matchPattern, iterateCount = 2, joinChar, customFn) => {
  let v = value.replace(REMOVE_SPACES, '').replace(ONE_OR_MORE_NUMBER_REG, '')
  let matches = v.match(matchPattern)
  let match = (matches && matches[0]) || ''
  let parts = []

  for (let i = 0, len = match.length; i < len; i += iterateCount) {
    if (typeof customFn === 'function') {
      const result = customFn(parts, match, i)
      if (result === false) {
        break
      }
    }
    parts.push(match.substring(i, (i + iterateCount)))
  }

  if (parts.length) {
    return parts.join(joinChar)
  } else {
    return value
  }
}

/**
 *  FORMAT_CREDIT_CARD
 *  @param  {String} number
 *  @return {String}
 */
export const FORMAT_CREDIT_CARD = (value = '', joinChar = ' ') => {
  if (!value.length) {
    return value
  }
  return baseFormatter(value, CREDIT_CARD_FORMAT_REG, 4, joinChar)
}

/**
 *  FORMAT_CREDIT_CARD_DATE
 *  @param  {String} date
 *  @return {String}
 */
export const FORMAT_CREDIT_CARD_DATE = (value = '', joinChar = '/') => {
  if (!value.length) {
    return value
  }
  return baseFormatter(value, CREDIT_CARD_DATE_FORMAT_REG, 2, joinChar)
}

/**
 *  FORMAT_DATE_OF_BIRTH
 *  @param  {String} date
 *  @return {String}
 */
export const FORMAT_DATE_OF_BIRTH = (value = '', joinChar = '/') => {
  if (!value.length) {
    return value
  }
  return baseFormatter(value, DOB_FORMAT_REG, 2, joinChar, (parts, match, index) => {
    if (parts.length >= 2) {
      parts.push(match.substring(index, index + (match.length - index)))
      return false
    }
  })
}
