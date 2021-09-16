/**
 *  @module timestampToFeedTimestamp
 */
import { timestampToFeedTimestamp } from 'utils/dateutils'

/**
 *  @module update
 */
import update from 'immutability-helper'

export const formatFeedComments = (comments) => {
  return comments.map((obj) => {
    const { createdAt } = obj

    const comment = update(obj, {
      timeStamp: {
        $set: timestampToFeedTimestamp(createdAt)
      }
    })

    return comment
  })
}
