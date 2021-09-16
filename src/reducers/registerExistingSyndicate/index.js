import {
  FORM_UPDATE,
  FORM_RESET,
  FORM_SUBMITTING,
  FORM_ERROR,
  FORM_SUBMITTING_FAILED,
  FORM_SUBMITTED
} from 'actions/registerExistingSyndicate'

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
  syndicatename: '',
  address1: '',
  address2: '',
  city: '',
  confirm: false,
  isSubmitting: false,
  submitError: false,
  errors: {
    firstname: [],
    surname: [],
    email: [],
    syndicatename: [],
    address1: [],
    address2: [],
    city: [],
    confirm: []
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
    case FORM_UPDATE:
      return update(state, {
        [action.name]: {
          $set: action.value
        }
      })

    case FORM_ERROR:
      return update(state, {
        errors: {
          $merge: {
            [action.name]: action.errors || []
          }
        }
      })

    case FORM_SUBMITTING:
      return update(state, {
        isSubmitting: {
          $set: true
        },
        submitError: {
          $set: false
        }
      })

    case FORM_SUBMITTED:
      return update(state, {
        isSubmitting: {
          $set: false
        },
        submitError: {
          $set: false
        }
      })

    case FORM_SUBMITTING_FAILED:
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

    case FORM_RESET:
      return initialState

    default:
      return state
  }
}

/**
 *  @name reducer
 */
export default reducer
