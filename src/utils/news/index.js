import update from 'immutability-helper'

import { constructStaticUrl } from 'utils/horseutils'

import { timestampToFeedTimestamp } from 'utils/dateutils'

export const formatNews = (news) => {
  return news.map((item, index) => {
    return update(item, {
      thumbnailImage: {
        $set: constructStaticUrl(encodeURI(item.thumbnailImage))
      },
      timeStamp: {
        $set: timestampToFeedTimestamp(item.date)
      }
    })
  })
}

export const formatNewsById = (news) => {
  return update(news, {
    thumbnailImage: {
      $set: constructStaticUrl(encodeURI(news.thumbnailImage))
    },
    timeStamp: {
      $set: timestampToFeedTimestamp(news.date)
    }
  })
}
