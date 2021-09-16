import {
  UPDATE_FEED_TEXT,
  ADD_FEED_MEDIA_FILES,
  CLEAR_FEED_DATA,
  DELETE_FEED_MEDIA
} from 'actions/submitfeedpost'

import update from 'immutability-helper'

const initialState = {
  text: '',
  maxCharCount: 400,
  files: [],
  charCount: 400
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FEED_TEXT:
      const text = action.text
      const charCount = (state.maxCharCount - text.length)

      return update(state, {
        text: {
          $set: text
        },
        charCount: {
          $set: charCount
        }
      })

    case ADD_FEED_MEDIA_FILES:
      return update(state, {
        files: {
          $set: action.files
        }
      })

    case CLEAR_FEED_DATA:
      return update(state, {
        text: {
          $set: ''
        },
        files: {
          $set: []
        },
        charCount: {
          $set: state.maxCharCount
        }
      })

    case DELETE_FEED_MEDIA:
      return update(state, {
        files: {
          $set: []
        }
      })

    default:
      return state
  }
}

export default reducer
