import {
  UPDATE_SNDICATE_COLOURS,
  REGISTERING_SNDICATE_COLOURS,
  REGISTERED_SNDICATE_COLOURS,
  FAILED_TO_REGISTER_SNDICATE_COLOURS
} from 'actions/registerSyndicate/syndicateColours'

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
  body:'bodytest',
  sleeves:'sleevestest',
  cap:'captest',
  error: false,
  registering: false,
  registered: false
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
    case UPDATE_SNDICATE_COLOURS:
      return update(state, {
        [action.name]: {
          $set: action.value
        }
      })

    case REGISTERING_SNDICATE_COLOURS:
      return update(state, {
        registering: {
          $set: true
        },
        registered: {
          $set: false
        }
      })

    case REGISTERED_SNDICATE_COLOURS:
      return update(state, {
        registering: {
          $set: false
        },
        error: {
          $set: false
        },
        registered: {
          $set: true
        }
      })

    case FAILED_TO_REGISTER_SNDICATE_COLOURS:
      return update(state, {
        registering: {
          $set: false
        },
        error: {
          $set: true
        },
        registered: {
          $set: false
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
