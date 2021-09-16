import {
  FORM_UPDATE,
  FORM_RESET,
  FORM_SUBMITTING,
  FORM_ERROR,
  FORM_SUBMITTING_FAILED,
  FORM_SUBMITTED,
  FORM_SUBMITDATA,
  RESET_MEMBERS_DATA,
  SAVE_DB_MEMBERS_DATA,
  REGISTERING_SNDICATE_MEMBERS,
  REGISTERED_SNDICATE_MEMBERS,
  FAILED_TO_REGISTER_SNDICATE_MEMBERS
} from 'actions/registerSyndicate/AddMemberForm'

import update from 'immutability-helper'

/**
 * @name initialState
*  @type { object }
*  @description - Initial state
*/
const initialState = {
  isSubmitting: false,
  submitError: false,
  data: {},
  db: [],
  errors: {
    firstname: [],
    surname: [],
    email: [],
    addressLine1: [],
    addressLine2: [],
    postcode: []
  },
  fetching: false,
  error: false,
  posting: false,
  posted: false
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
      return {...state,
        data: {
          ...state.data,
          [action.key]: {
            ...state.data[action.key],
            [action.name]: action.value
          }
        }
      }

    case FORM_ERROR:
      return update(state, {
        errors: {
          $merge: {
            [action.name]: action.errors || []
          }
        }
      })

    case FORM_RESET:
      let newMembersData = state.data
      delete newMembersData[action.key]
      return {
        ...state,
        data: newMembersData
      }

    case FORM_SUBMITDATA:
      return {
        ...state,
        isSubmitting: {
          $set: false
        },
        data: {
          ...state.data,
          [action.key]: {
            ...action.data,
            'password': 'Test1234'
          }
        }
      }

    case SAVE_DB_MEMBERS_DATA:
      return {
        ...state,
        db: action.data
      }

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

    case RESET_MEMBERS_DATA:
      return {
        ...state,
        data: {}
      }

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

    case REGISTERING_SNDICATE_MEMBERS:
      return update(state, {
        posting: {
          $set: true
        },
        posted: {
          $set: false
        }
      })

    case REGISTERED_SNDICATE_MEMBERS:
      return update(state, {
        posting: {
          $set: false
        },
        error: {
          $set: false
        },
        posted: {
          $set: true
        }
      })

    case FAILED_TO_REGISTER_SNDICATE_MEMBERS:
      return update(state, {
        posting: {
          $set: false
        },
        error: {
          $set: true
        },
        posted: {
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
