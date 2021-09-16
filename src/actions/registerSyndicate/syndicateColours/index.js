
import {
  updateSyndicateColours
} from 'api/Services'

import { REGISTER_SYNDICATE_COLOURS } from 'texts/successmessages'

import { addToastSuccess, addToastError } from 'actions/toast'

import { AUTHENTICATED_REQUEST } from 'middleware/AuthenticatedRequest'

export const UPDATE_SNDICATE_COLOURS = 'UPDATE_SNDICATE_COLOURS'

export const REGISTERING_SNDICATE_COLOURS = 'REGISTERING_SNDICATE_COLOURS'

export const REGISTERED_SNDICATE_COLOURS = 'REGISTERED_SNDICATE_COLOURS'

export const FAILED_TO_REGISTER_SNDICATE_COLOURS = 'FAILED_TO_REGISTER_SNDICATE_COLOURS'

export const setSyndicateColours = (name, value) => ({
  type: UPDATE_SNDICATE_COLOURS,
  name,
  value
})

export const registeringSyndicateColours = () => ({
  type: REGISTERING_SNDICATE_COLOURS
})

export const registeredSyndicateColours = () => ({
  type: REGISTERED_SNDICATE_COLOURS
})

export const failedToRegisterSyndicateColours = () => ({
  type: FAILED_TO_REGISTER_SNDICATE_COLOURS
})


export const registerSyndicateColours = (slug, payload) => {
  return (dispatch, getState) => {
    return dispatch({
      type: AUTHENTICATED_REQUEST,
      types: [registeringSyndicateColours, registeredSyndicateColours, failedToRegisterSyndicateColours],
      endpoint: updateSyndicateColours,
      headers: {'Content-Type': 'application/json'},
      payload,
      urlParams: {slug}
    })
      .then(() => {
        dispatch(addToastSuccess(REGISTER_SYNDICATE_COLOURS))
        return Promise.resolve()
      })
      .catch((error) => {
        if (error && error.message) {
          dispatch(addToastError(error.message))
        }
      })
  }
}