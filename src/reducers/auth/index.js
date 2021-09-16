import {
  LOG_OUT,
  STORE_USER_CREDENTIALS,
  NO_AUTHENTICATION
} from 'actions/auth'

import update from 'immutability-helper'

/**
 * @name initialState
*  @type { object }
*  @description - Initial state
*/
const initialState = {
  token: '',
  details: {},
  isLoggedIn: false,
  isReady: false,
  error: {}
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
      return update(state, {
        token: {
          $set: ''
        },
        isLoggedIn: {
          $set: false
        },
        details: {
          $set: {}
        }
      })

    case STORE_USER_CREDENTIALS:
      return update(state, {
        details: {
          $set: action.user
        },
        isReady: {
          $set: true
        },
        isLoggedIn: {
          $set: true
        },
        token: {
          $set: action.token
        }
      })

    case NO_AUTHENTICATION:
      return update(state, {
        isReady: {
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
