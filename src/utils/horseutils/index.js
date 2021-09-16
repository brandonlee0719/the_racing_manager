/**
 *  @module timestampToFeedTimestamp
 */
import { timestampToFeedTimestamp } from 'utils/dateutils'
import moment from 'moment'

/**
 * @module is-number
 */
import isNumber from 'is-number'

import update from 'immutability-helper'

import { ROOT_PATH } from 'api/ServiceTypes'

/**
 *  @name horsePostType
 *  @description Will determine the post type. For instance 'text', 'video', 'multiplemedia'
 *  @param  {Array} attachment
 *  @param  {String} text
 *  @return {String}
 */
const horsePostType = (attachment) => {
  if (attachment.length <= 0) {
    return 'text'
  }

  // Render multiple media's
  if (attachment.length >= 2) {
    return 'multiplemedia'
  }

  // Render image tile.
  if (attachment.length && attachment[0].type === 'image') {
    return 'image'
  }

  // Render video tile.
  if (attachment.length && attachment[0].type === 'video') {
    return 'video'
  }
}

/**
 *  formatMessagesDate
 *  @description Utility for modifying the created at.
 *  @param  {Object} data
 *  @return {Object}
 */
export const formatMessagesDate = (data = {}) => {
  const { messages } = data

  return Promise.resolve({
    ...data,
    messages: messages && messages.map(obj => {
      const { createdAt, attachment } = obj

      const message = update(obj, {
        timeStamp: {
          $set: timestampToFeedTimestamp(createdAt)
        },
        postType: {
          $set: horsePostType(attachment)
        }
      })

      return message
    })
  })
}

export const formatHorseStatisticsData = (response = {}) => {
  let titles = []
  let data = []

  response.forEach(obj => {
    titles = Object.keys(obj)
    data.push(Object.values(obj))
  })

  return {
    titles,
    data
  }
}

export const formatHorseStatisticsResultsData = (response = {}) => {
  const tableKeys = {
    'date': 'meetingDate',
    'course': 'courseName',
    'result': 'positionOfficial/numberOfRunners',
    'btn': 'distanceBeaten',
    'type': 'raceType',
    'or': 'performanceRating',
    'dis': 'distance',
    'going': 'going',
    'eq': 'equipmentChar',
    'jockey': 'jockeyName',
    'isp': 'ispFractional',
    'bsp': 'BSPAdvantage',
    'ip hl/lo': 'ipMax/ipMin',
    'ips': 'ipsymbol',
    'fs%': 'fs%',
    'tfig': 'timefigure',
    'tfr': 'trw1',
    'comment': 'performanceCommentPremium'
  }

  let titles = Object.keys(tableKeys)

  let data = []

  response.forEach(obj => {
    let eachData = []
    Object.values(tableKeys).forEach(function (key) {
      if (key.indexOf('/') === -1) {
        if (obj[key]) {
          if (key === 'meetingDate') {
            eachData.push(moment(obj[key]).format('DD/MM/YYYY'))
          } else {
            eachData.push(obj[key])
          }
        } else {
          eachData.push(null)
        }
      } else {
        let key1 = key.slice(0, key.indexOf('/'))
        let key2 = key.slice(key.indexOf('/') + 1)
        let value = ''
        if (obj[key1]) {
          value = obj[key1] + '/'
        } else {
          value = '- /'
        }
        if (obj[key2]) {
          value += obj[key2]
        } else {
          value += '-'
        }
        eachData.push(value)
      }
    })
    data.push(eachData)
  })

  return {
    titles,
    data
  }
}

/**
 *  calcPercent
 *  @param  {Number} num
 *  @param  {Number} total
 *  @return {Number}
 */
export const calcPercent = (num, total) => {
  if (total <= 0 ||
      !isNumber(num) ||
      !isNumber(total)) return 0

  return (Number(num) / Number(total)) * 100
}

/**
 *  calcSharesAvailable
 *  @description Will take a owned value and a total and work out how much shares are left in percentage
 *  @param  {Number} num
 *  @param  {Number} total
 *  @return {Number}
 */
export const calcSharesAvailable = (num, total) => {
  if (!isNumber(total) || !isNumber(num)) {
    return 0
  }

  return ((total - num) / total) * 100
}

/**
 *  constructStaticUrl
 *  @param  {String} path
 *  @return {String}
 */
export const constructStaticUrl = (path = '') => {
  return `${ROOT_PATH}${path}`
}
