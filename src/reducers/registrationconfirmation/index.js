import {
  REQUEST_CONFIRMATION,
  SUCCESSFULLY_CONFIRMED_REGISTRATION,
  FAILED_TO_CONFIRM_REGISTRATION
} from 'actions/registrationconfirmation'

import update from 'immutability-helper'

/**
 * @name initialState
*  @type { object }
*  @description - Initial state
*/
const initialState = {
  requesting: false,
  error: false,
  errorPayload: {}
}

/**
*  @name reducer
*  @type { function }
*  @param { object } state
*  @param { object } action
*  @return { object }
*/
const reducer = (state = initialState, action) => {
  /**
  *  @type { switch }
  *  @return { object }
  */
  switch (action.type) {
    case REQUEST_CONFIRMATION:
      return update(state, {
        requesting: {
          $set: true
        },
        error: {
          $set: false
        },
        errorPayload: {
          $set: {}
        }
      })

    case SUCCESSFULLY_CONFIRMED_REGISTRATION:
      return update(state, {
        requesting: {
          $set: false
        }
      })

    case FAILED_TO_CONFIRM_REGISTRATION:
      return update(state, {
        requesting: {
          $set: false
        },
        errorPayload: {
          $set: action.error
        },
        error: {
          $set: true
        }
      })

    default:
      return state
  }
}

/**
 *  @name reducer
*/
export default reducer
