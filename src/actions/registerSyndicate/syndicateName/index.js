
import {
  registerSyndicateName
} from 'api/Services'

/**
 *  @module CALL_ACTION_TYPE
 */
import { AUTHENTICATED_REQUEST } from 'middleware/AuthenticatedRequest'

export const SET_SYNDICATE_NAME = 'SET_SYNDICATE_NAME'

export const SUBMITTING_SYNDICATE_NAME = 'SUBMITTING_SYNDICATE_NAME'

export const SUBMITTED_SYNDICATE_NAME = 'SUBMITTED_SYNDICATE_NAME'

export const FAILED_TO_SUBMIT_SYNDICATE_NAME = 'FAILED_TO_SUBMIT_SYNDICATE_NAME'

export const setSyndicateName = (name) => ({
  type: SET_SYNDICATE_NAME,
  name
})

export const submittingSyndicateName = () => ({
  type: SUBMITTING_SYNDICATE_NAME
})

export const submittedSyndicateName = (data) => ({
  type: SUBMITTED_SYNDICATE_NAME,
  ...data
})

export const failedToSubmitSyndicateName = () => ({
  type: FAILED_TO_SUBMIT_SYNDICATE_NAME
})


export const submitSyndicateName = (token, name) => {
  return (dispatch, getState) => {
    return registerSyndicateName(token, name)
      .then((data) => {
        dispatch(submittedSyndicateName(data))
        return Promise.resolve(data)
      })
      .catch((error) => {
        dispatch(failedToSubmitSyndicateName(error))
        return Promise.reject(error)
      })
  }
}
