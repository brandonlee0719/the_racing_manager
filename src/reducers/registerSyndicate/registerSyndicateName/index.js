import {
  SET_SYNDICATE_NAME,
  SUBMITTING_SYNDICATE_NAME,
  SUBMITTED_SYNDICATE_NAME,
  FAILED_TO_SUBMIT_SYNDICATE_NAME
} from 'actions/registerSyndicate/syndicateName'

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
  id: '5a05bf9f154e0438503cf1d3',
  name: 'BLACK STAR',
  slug: 'black-star',
  error: false,
  submitting: false,
  submitted: false
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

    case SET_SYNDICATE_NAME:
      return update(state, {
        name: {
          $set: action.name
        }
      })

    case SUBMITTING_SYNDICATE_NAME:
      return update(state, {
        submitting: {
          $set: true
        },
        submitted: {
          $set: false
        }
      })

    case SUBMITTED_SYNDICATE_NAME:
      return update(state, {
        submitting: {
          $set: false
        },
        error: {
          $set: false
        },
        submitted: {
          $set: true
        },
        id: {
          $set: action._id
        },
        name: {
          $set: action.name
        },
        slug: {
          $set: action.slug
        }
      })

    case FAILED_TO_SUBMIT_SYNDICATE_NAME:
      return update(state, {
        submitting: {
          $set: false
        },
        error: {
          $set: true
        },
        submitted: {
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
