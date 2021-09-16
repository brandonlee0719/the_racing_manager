import {
  SET_STEP_STATUS,
  SET_MEMBERS_COUNT,
  SET_MEMBERS_DATA,
  UPDATE_MEMBERS_DATA,
  DELETE_MEMBERS_DATA,
  RESET_MEMBER_INFO

} from 'actions/registerSyndicate/syndicateMember'

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
  step: 1,
  membersCount: 0
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
    case RESET_MEMBER_INFO:
      return initialState

    case SET_STEP_STATUS:
      return update(state, {
        step: {
          $set: action.step
        }
      })

    case SET_MEMBERS_COUNT:
      return update(state, {
        membersCount: {
          $set: action.count
        }
      })

    /*case SET_MEMBERS_DATA:
      return update(state, {
        membersData: {
          $set: action.data
        }
      })

    case UPDATE_MEMBERS_DATA:
      return update(state, {
        membersData: {
          $set: action.data
        }
      })

    case DELETE_MEMBERS_DATA:
      return update(state, {
        membersData: {
          $set: action.data
        }
      })*/

    default:
      return state
  }
}

/**
 *  @name reducer
*/
export default reducer
