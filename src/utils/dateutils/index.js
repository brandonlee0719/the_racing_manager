/**
 *  @module moment
 */
import moment from 'moment'

/**
 *  timestampToFeedTimestamp
 *  @description Will take in a timestamp and compare the difference in days and return a string of
 *               the formatted timestamp
 *  @param  {String} ts
 *  @return {String}
 */
export const timestampToFeedTimestamp = (ts) => {
  if (Math.abs(moment().diff(ts)) < 25000) { // 25 seconds before or after now
    return 'Just now'
  }

  const mm = moment(ts)

  return `${mm.fromNow(ts)} ago`
}

export const timestampToDate = (ts, format = 'DD/MM/YYYY') => {
  if (!ts) return
  return moment(ts).format(format)
}
