import {
  CARD_SUBMITTING,
  CARD_SUBMITTED,
  CARD_SUBMITTING_FAILED
} from 'actions/account/CreditCard'

import update from 'immutability-helper'

const {
  LOG_OUT
} = 'actions/auth'

/**
 * @name initialState
*  @type { object }
*  @description - Initial state
*/
const initialState = {
  submitting: false,
  error: false
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
    case LOG_OUT:
      return initialState

    case CARD_SUBMITTING:
      return update(state, {
        submitting: {
          $set: true
        }
      })

    case CARD_SUBMITTED:
      return update(state, {
        cardName: {
          $set: ''
        }
      })

    case CARD_SUBMITTING_FAILED:
      return update(state, {
        error: {
          $set: action.error
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
