import { AUTHENTICATED_REQUEST } from 'middleware/AuthenticatedRequest'

import { getUpdateFeedComments, postFeedComment } from 'api/Services'

import { formatFeedComments } from 'utils/updatefeedutils'

export const FETCHING_COMMENTS = 'FETCHING_COMMENTS'

export const FETCHED_COMMENTS = 'FETCHED_COMMENTS'

export const FAILED_TO_FETCH_COMMENTS = 'FAILED_TO_FETCH_COMMENTS'

export const CLEAR_COMMENTS = 'CLEAR_COMMENTS'

export const POSTING_COMMENT = 'POSTING_COMMENT'

export const POSTED_COMMENT = 'POSTED_COMMENT'

export const FAILED_TO_POST_COMMENT = 'FAILED_TO_POST_COMMENT'

export const fetchingComments = () => ({
  type: FETCHING_COMMENTS
})

export const fetchedComments = (comments) => {
  const formattedComments = formatFeedComments(comments)

  return {
    type: FETCHED_COMMENTS,
    comments: formattedComments
  }
}

export const failedToFetchComments = (error) => ({
  type: FAILED_TO_FETCH_COMMENTS,
  error
})

export const clearComments = () => ({
  type: CLEAR_COMMENTS
})

export const postingComment = () => ({
  type: POSTING_COMMENT
})

export const postedComment = () => ({
  type: POSTED_COMMENT
})

export const failedToPostComment = (error) => ({
  type: FAILED_TO_POST_COMMENT,
  error
})

export const fetchComments = (messageId) => {
  return {
    type: AUTHENTICATED_REQUEST,
    types: [fetchingComments, fetchedComments, failedToFetchComments],
    endpoint: getUpdateFeedComments,
    payload: {
      messageId
    }
  }
}

export const postComment = (messageId, data) => {
  return (dispatch, getState) => {
    const {
      text
    } = data

    return dispatch({
      type: AUTHENTICATED_REQUEST,
      types: [postingComment, postedComment, failedToPostComment],
      endpoint: postFeedComment,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      payload: JSON.stringify({
        messageId,
        text
      })
    })
    .then(() => {
      dispatch(fetchComments(messageId))
      return Promise.resolve()
    })
  }
}
