import {
  REGISTER_UPDATE,
  REGISTER_RESET,
  REGISTER_SUBMITTING,
  REGISTER_ERROR,
  REGISTER_SUBMITTING_FAILED,
  REGISTER_SUBMITTED
} from 'actions/register'

import update from 'immutability-helper'

/**
 * @name initialState
*  @type { object }
*  @description - Initial state
*/
const initialState = {
  firstname: '',
  surname: '',
  email: '',
  password: '',
  username: '',
  overEighteen: false,
  termsAndConditions: false,
  isSubmitting: false,
  submitError: false,
  errors: {
    firstname: [],
    surname: [],
    username: [],
    email: [],
    password: [],
    overEighteen: [],
    termsAndConditions: []
  }
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
    case REGISTER_UPDATE:
      return update(state, {
        [action.name]: {
          $set: action.value
        }
      })

    case REGISTER_ERROR:
      return update(state, {
        errors: {
          $merge: {
            [action.name]: action.errors || []
          }
        }
      })

    case REGISTER_RESET:
      return initialState

    case REGISTER_SUBMITTING:
      return update(state, {
        isSubmitting: {
          $set: true
        },
        submitError: {
          $set: false
        }
      })

    case REGISTER_SUBMITTED:
      return update(state, {
        isSubmitting: {
          $set: false
        },
        submitError: {
          $set: false
        }
      })

    case REGISTER_SUBMITTING_FAILED:
      return update(state, {
        isSubmitting: {
          $set: false
        },
        submitError: {
          $set: true
        },
        errors: {
          $merge: action.error.errors || []
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
