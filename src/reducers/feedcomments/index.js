import {
  FETCHING_COMMENTS,
  FETCHED_COMMENTS,
  FAILED_TO_FETCH_COMMENTS,
  CLEAR_COMMENTS,
  POSTING_COMMENT,
  POSTED_COMMENT,
  FAILED_TO_POST_COMMENT
} from 'actions/feedcomments'

import { LOG_OUT } from 'actions/auth'

import update from 'immutability-helper'

const initialState = {
  fetchingComments: false,
  comments: [],
  commentsError: null,
  postingComment: false,
  commentPostingError: null,
  commentPosted: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_COMMENTS:
      return update(state, {
        fetchingComments: {
          $set: true
        }
      })

    case FETCHED_COMMENTS:
      return update(state, {
        fetchingComments: {
          $set: false
        },
        comments: {
          $set: action.comments
        }
      })

    case FAILED_TO_FETCH_COMMENTS:
      return update(state, {
        fetchingComments: {
          $set: false
        },
        commentsError: {
          $set: action.error
        }
      })

    case POSTING_COMMENT:
      return update(state, {
        postingComment: {
          $set: true
        },
        commentPosted: {
          $set: false
        }
      })

    case POSTED_COMMENT:
      return update(state, {
        postingComment: {
          $set: false
        },
        commentPosted: {
          $set: true
        }
      })

    case FAILED_TO_POST_COMMENT:
      return update(state, {
        postingComment: {
          $set: false
        },
        commentPostingError: {
          $set: action.error
        },
        commentPosted: {
          $set: false
        }
      })

    case CLEAR_COMMENTS:
    case LOG_OUT:
      return initialState

    default:
      return state
  }
}

export default reducer