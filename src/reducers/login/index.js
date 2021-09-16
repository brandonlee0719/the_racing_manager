import {
  LOGIN_UPDATE,
  LOGIN_RESET,
  LOGIN_SUBMITTING,
  LOGIN_ERROR,
  LOGIN_SUBMITTING_FAILED,
  LOGIN_SUBMITTED,
  TOGGLE_KEEP_LOGGED_IN
} from 'actions/login'

import update from 'immutability-helper'

/**
 * @name initialState
*  @type { object }
*  @description - Initial state
*/
const initialState = {
  email: '',
  password: '',
  keepLoggedIn: false,
  isSubmitting: false,
  submitError: false,
  errorMessage: '',
  errors: {}
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
    case LOGIN_UPDATE:
      return update(state, {
        [action.name]: {
          $set: action.value
        }
      })

    case LOGIN_ERROR:
      return update(state, {
        errors: {
          $merge: {
            [action.name]: action.errors || []
          }
        }
      })

    case TOGGLE_KEEP_LOGGED_IN:
      return update(state, {
        keepLoggedIn: {
          $set: !state.keepLoggedIn
        }
      })

    case LOGIN_SUBMITTING:
      return update(state, {
        isSubmitting: {
          $set: true
        },
        submitError: {
          $set: false
        }
      })

    case LOGIN_RESET:
    case LOGIN_SUBMITTED:
      return initialState

    case LOGIN_SUBMITTING_FAILED:
      return update(state, {
        isSubmitting: {
          $set: false
        },
        submitError: {
          $set: true
        },
        errorMessage: {
          $set: action.error.message || []
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
