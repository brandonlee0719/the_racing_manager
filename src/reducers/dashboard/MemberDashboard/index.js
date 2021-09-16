import {
  FETCH_MEMBER_DASHBOARD_DATA,
  RECEIVED_MEMBER_DASHBOARD_DATA,
  FAILED_TO_FETCH_MEMBER_DASHBOARD_DATA
} from 'actions/dashboard'

import {
  LOG_OUT
} from 'actions/auth'

import update from 'immutability-helper'

/**
 * @name initialState
*  @type { object }
*  @description - Initial state
*/
const initialState = {
  fetching: false,
  data: {},
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

    case FETCH_MEMBER_DASHBOARD_DATA:
      return update(state, {
        fetching: {
          $set: true
        }
      })

    case RECEIVED_MEMBER_DASHBOARD_DATA:
      return update(state, {
        fetching: {
          $set: false
        },
        error: {
          $set: false
        },
        data: {
          $set: action.data
        }
      })

    case FAILED_TO_FETCH_MEMBER_DASHBOARD_DATA:
      return update(state, {
        fetching: {
          $set: false
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
