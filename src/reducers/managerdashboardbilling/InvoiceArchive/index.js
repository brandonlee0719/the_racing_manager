import {
  FETCH_UPLOADED_FILES
} from 'actions/managerdashboardbilling/InvoiceArchive'

import update from 'immutability-helper'

/**
 * @name initialState
 *  @type { object }
 *  @description - Initial state
 */
const initialState = {
  data: []
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
    case FETCH_UPLOADED_FILES:
      return update(state, {
        data: {
          $merge: action.data || []
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