import {
  ADD_TOAST,
  REMOVE_TOAST
} from 'actions/toast'

import update from 'immutability-helper'

const initialState = {
  toasts: []
}

const reducer = (state = initialState, action) => {
  const {
    type,
    payload
  } = action

  switch (type) {
    case ADD_TOAST:
      return update(state, {
        toasts: {
          $push: [{ toastType: payload.toastType, text: payload.text, id: payload.id }]
        }
      })

    case REMOVE_TOAST:
      return update(state, {
        toasts: {
          $set: state.toasts.filter(({ id }) => id !== payload.removeId)
        }
      })

    default:
      return state
  }
}

export default reducer
