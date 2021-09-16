import {
  FETCHING_NEWS,
  FETCHED_NEWS,
  FAILED_TO_FETCH_NEWS,
  FETCHING_NEWS_BY_ID,
  FETCHED_NEWS_BY_ID
} from 'actions/news'

import {
  LOG_OUT
} from 'actions/auth'

import update from 'immutability-helper'

const initialState = {
  data: [],
  fetching: false,
  error: null,
  dataById: {},
  fetchingById: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_NEWS:
      return update(state, {
        fetching: {
          $set: true
        }
      })

    case FETCHED_NEWS:
      return update(state, {
        fetching: {
          $set: false
        },
        data: {
          $set: action.news
        },
        error: {
          $set: null
        }
      })

    case FETCHING_NEWS_BY_ID:
      return update(state, {
        fetchingById: {
          $set: true
        }
      })

    case FETCHED_NEWS_BY_ID:
      return update(state, {
        fetchingById: {
          $set: false
        },
        dataById: {
          $set: action.news
        },
        error: {
          $set: null
        }
      })

    case FAILED_TO_FETCH_NEWS:
      return update(state, {
        fetching: {
          $set: false
        },
        error: {
          $set: action.error
        }
      })

    case LOG_OUT:
      return initialState

    default:
      return state
  }
}

/**
 *  @name reducer
*/
export default reducer
