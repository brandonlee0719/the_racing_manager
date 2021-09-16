import { AUTHENTICATED_REQUEST } from 'middleware/AuthenticatedRequest'
import { requestToJoin as requestToJoinService } from 'api/Services'

export const requesting = () => ({
  type: 'REQUESTING_TO_JOIN'
})

export const requested = () => ({
  type: 'REQUESTED_TO_JOIN'
})

export const failedToRequest = (error) => ({
  type: 'FAILED_TO_JOIN',
  error
})

export const requestToJoin = ({horseName, syndicateName} = {}) => {
  return (dispatch) => {
    return dispatch({
      type: AUTHENTICATED_REQUEST,
      types: [requesting, requested, failedToRequest],
      endpoint: requestToJoinService,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      payload: JSON.stringify({
        horseName,
        syndicateName
      })
    })
  }
}
