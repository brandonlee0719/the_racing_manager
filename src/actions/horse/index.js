import {
  getHorseInfo,
  performHorseUpdate,
  getHorseStatistics,
  getHorseStatisticsResults,
  getHorseStatisticsEntries,
  getHorseStatisticsResultsDetail,
  updateHorseData
} from 'api/Services'

import { UPDATED_HORSE_DATA } from 'texts/successmessages'
import { addToastSuccess, addToastError } from 'actions/toast'


import { AUTHENTICATED_REQUEST } from 'middleware/AuthenticatedRequest'

import { formatHorseStatisticsData } from 'utils/horseutils'

/**
 *  FETCH_HORSE_INFO
 *  @type {String}
 */
export const FETCH_HORSE_INFO = 'FETCH_HORSE_INFO'

/**
 *  RECEIVED_HORSE_INFO
 *  @type {String}
 */
export const RECEIVED_HORSE_INFO = 'RECEIVED_HORSE_INFO'

/**
 *  FAILED_TO_FETCH_HORSE_INFO
 *  @type {String}
 */
export const FAILED_TO_FETCH_HORSE_INFO = 'FAILED_TO_FETCH_HORSE_INFO'

export const FETCH_HORSE_STATISTICS_RESULTS_DETAILS_INFO = 'FETCH_HORSE_STATISTICS_RESULTS_DETAILS_INFO'

export const RECEIVED_HORSE_STATISTICS_RESULTS_DETAILS_INFO = 'RECEIVED_HORSE_STATISTICS_RESULTS_DETAILS_INFO'

export const FAILED_TO_FETCH_HORSE_STATISTICS_RESULTS_DETAILS_INFO = 'FAILED_TO_FETCH_HORSE_STATISTICS_RESULTS_DETAILS_INFO'

export const CLEAR_HORSE_STATISTICS_RESULTS_DETAILS_INFO = 'CLEAR_HORSE_STATISTICS_RESULTS_DETAILS_INFO'

/**
 *  For statistics future entries detail
 *  @type {String}
 */

export const FETCH_HORSE_STATISTICS_FUTURE_DETAILS_INFO = 'FETCH_HORSE_STATISTICS_FUTURE_DETAILS_INFO'

export const RECEIVED_HORSE_STATISTICS_FUTURE_DETAILS_INFO = 'RECEIVED_HORSE_STATISTICS_FUTURE_DETAILS_INFO'

export const FAILED_TO_FETCH_HORSE_STATISTICS_FUTURE_DETAILS_INFO = 'FAILED_TO_FETCH_HORSE_STATISTICS_FUTURE_DETAILS_INFO'

export const CLEAR_HORSE_STATISTICS_FUTURE_DETAILS_INFO = 'CLEAR_HORSE_STATISTICS_FUTURE_DETAILS_INFO'

/**
 *  POSTING_HORSE_UPDATE
 *  @type {String}
 */
export const POSTING_HORSE_UPDATE = 'POSTING_HORSE_UPDATE'

/**
 *  POSTED_HORSE_UPDATE
 *  @type {String}
 */
export const POSTED_HORSE_UPDATE = 'POSTED_HORSE_UPDATE'

/**
 *  FAILED_TO_POST_HORSE_UPDATE
 *  @type {String}
 */
export const FAILED_TO_POST_HORSE_UPDATE = 'FAILED_TO_POST_HORSE_UPDATE'

/**
 *  CLEAR_HORSE_DATA
 *  @type {String}
 */
export const CLEAR_HORSE_DATA = 'CLEAR_HORSE_DATA'

/**
 *  gettingHorseInfo
 *  @return {Object}
 */

export const FETCH_HORSE_STATISTICS_RESULTS_INFO = 'FETCH_HORSE_STATISTICS_RESULTS_INFO'
export const RECEIVED_HORSE_STATISTICS_RESULTS_INFO = 'RECEIVED_HORSE_STATISTICS_RESULTS_INFO'
export const FAILED_TO_FETCH_HORSE_STATISTICS_RESULTS_INFO = 'FAILED_TO_FETCH_HORSE_STATISTICS_RESULTS_INFO'

export const gettingHorseInfo = () => ({
  type: FETCH_HORSE_INFO
})

/**
 *  receivedHorseInfo
 *  @return {Object}
 */
export const receivedHorseInfo = data => ({
  type: RECEIVED_HORSE_INFO,
  data
})

/**
 *  failedToGetHorseInfo
 *  @return {Object}
 */
export const failedToGetHorseInfo = () => ({
  type: FAILED_TO_FETCH_HORSE_INFO
})

export const gettingHorseStatisticsResultsInfo = () => ({
  type: FETCH_HORSE_STATISTICS_RESULTS_INFO
})

export const receivedHorseStatisticsResultsInfo = data => ({
  type: RECEIVED_HORSE_STATISTICS_RESULTS_INFO,
  data
})

export const failedToGetHorseStatisticsResultsInfo = () => ({
  type: FAILED_TO_FETCH_HORSE_STATISTICS_RESULTS_INFO
})
export const gettingHorseStatisticsResultsDetailsInfo = () => ({
  type: FETCH_HORSE_STATISTICS_RESULTS_DETAILS_INFO
})

export const receivedHorseStatisticsResultsDetailsInfo = data => ({
  type: RECEIVED_HORSE_STATISTICS_RESULTS_DETAILS_INFO,
  data
})

export const failedToGetHorseStatisticsResultsDetailsInfo = () => ({
  type: FAILED_TO_FETCH_HORSE_STATISTICS_RESULTS_DETAILS_INFO
})

/**
 *  For statistics future entries detail
 *  @return {Object}
 */

export const gettingHorseStatisticsFutureDetailsInfo = () => ({
  type: FETCH_HORSE_STATISTICS_FUTURE_DETAILS_INFO
})

export const receivedHorseStatisticsFutureDetailsInfo = data => ({
  type: RECEIVED_HORSE_STATISTICS_FUTURE_DETAILS_INFO,
  data
})

export const failedToGetHorseStatisticsFutureDetailsInfo = () => ({
  type: FAILED_TO_FETCH_HORSE_STATISTICS_FUTURE_DETAILS_INFO
})

/**
 *  postingHorseUpdate
 *  @return {Object}
 */
export const postingHorseUpdate = () => ({
  type: POSTING_HORSE_UPDATE
})

/**
 *  postedHorseUpdate
 *  @return {Object}
 */
export const postedHorseUpdate = () => ({
  type: POSTED_HORSE_UPDATE
})

/**
 *  failedToPostHorseUpdate
 *  @return {Object}
 */
export const failedToPostHorseUpdate = () => ({
  type: FAILED_TO_POST_HORSE_UPDATE
})

/**
 *  clearHorseData
 *  @return {Object}
 */
export const clearHorseData = () => ({
  type: CLEAR_HORSE_DATA
})

/**
 *  fetchHorseInfo [async]
 *  @param {String} name
 *  @return {Function}
 */
export const fetchHorseInfo = slug => {
  return (dispatch, getState) => {
    return dispatch({
      type: AUTHENTICATED_REQUEST,
      types: [gettingHorseInfo, receivedHorseInfo, failedToGetHorseInfo],
      endpoint: getHorseInfo,
      urlParams: {slug}
    })
  }
}

/**
 *  fetchHorseStatisticsFutureDetailsInfo [async]
 *  @param {String} name
 *  @return {Function}
 */

export const clearHorseStatisticsResultsDetailsInfo = () => ({
  type: CLEAR_HORSE_STATISTICS_RESULTS_DETAILS_INFO
})

/**
 *  @name  submitHorseUpdate
 *  @description This will filter down to the AuthenticatedRequest middleware.
 *  @param  {Object} data
 *  @return {Promise}
 */
export const submitHorseUpdate = (horseId, data) => {
  return {
    type: AUTHENTICATED_REQUEST,
    types: [postingHorseUpdate, postedHorseUpdate, failedToPostHorseUpdate],
    endpoint: performHorseUpdate,
    query: {
      horseId
    },
    payload: data
  }
}

export const submitHorseData = (slug, payload) => {
  return (dispatch, getState) => {
    return dispatch({
      type: AUTHENTICATED_REQUEST,
      types: [postingHorseUpdate, postedHorseUpdate, failedToPostHorseUpdate],
      endpoint: updateHorseData,
      payload,
      urlParams: {slug}
    })
      .then(() => {
        dispatch(addToastSuccess(UPDATED_HORSE_DATA))
        dispatch(fetchHorseInfo(slug))
        return Promise.resolve()
      })
      .catch((error) => {
        if (error && error.message) {
          dispatch(addToastError(error.message))
        }
      })
  }
}

/* HORSE STATISTICS */

export const FETCH_HORSE_STATISTICS = 'FETCH_HORSE_STATISTICS'

export const RECEIVED_HORSE_STATISTICS = 'RECEIVED_HORSE_STATISTICS'

export const FAILED_TO_FETCH_HORSE_STATISTICS = 'FAILED_TO_FETCH_HORSE_STATISTICS'

export const gettingHorseStatistics = () => ({
  type: FETCH_HORSE_STATISTICS
})

export const receivedHorseStatistics = data => ({
  type: RECEIVED_HORSE_STATISTICS,
  data
})

export const failedToGetHorseStatistics = () => ({
  type: FAILED_TO_FETCH_HORSE_STATISTICS
})

export const fetchHorseStatistics = (slug) => {
  return (dispatch, getState) => {
    return dispatch({
      type: AUTHENTICATED_REQUEST,
      types: [gettingHorseStatistics, receivedHorseStatistics, failedToGetHorseStatistics],
      endpoint: getHorseStatistics,
      urlParams: {slug}
    })
  }
}

/* HORSE STATISTICS RESULTS */

export const FETCH_HORSE_STATISTICS_RESULTS = 'FETCH_HORSE_STATISTICS_RESULTS'

export const RECEIVED_HORSE_STATISTICS_RESULTS = 'RECEIVED_HORSE_STATISTICS_RESULTS'

export const FAILED_TO_FETCH_HORSE_STATISTICS_RESULTS = 'FAILED_TO_FETCH_HORSE_STATISTICS_RESULTS'

export const gettingHorseStatisticsResults = () => ({
  type: FETCH_HORSE_STATISTICS_RESULTS
})

export const receivedHorseStatisticsResults = data => ({
  type: RECEIVED_HORSE_STATISTICS_RESULTS,
  data
})

export const failedToGetHorseStatisticsResults = () => ({
  type: FAILED_TO_FETCH_HORSE_STATISTICS_RESULTS
})

export const fetchHorseStatisticsResults = (slug) => {
  return (dispatch, getState) => {
    return dispatch({
      type: AUTHENTICATED_REQUEST,
      types: [gettingHorseStatisticsResults, receivedHorseStatisticsResults, failedToGetHorseStatisticsResults],
      endpoint: getHorseStatisticsResults,
      urlParams: {slug}
    })
  }
}

/* HORSE STATISTICS RESULTS DETAIL */

export const FETCH_HORSE_STATISTICS_RESULTS_DETAIL = 'FETCH_HORSE_STATISTICS_RESULTS_DETAIL'

export const RECEIVED_HORSE_STATISTICS_RESULTS_DETAIL = 'RECEIVED_HORSE_STATISTICS_RESULTS_DETAIL'

export const FAILED_TO_FETCH_HORSE_STATISTICS_RESULTS_DETAIL = 'FAILED_TO_FETCH_HORSE_STATISTICS_RESULTS_DETAIL'

export const gettingHorseStatisticsResultsDetail = () => ({
  type: FETCH_HORSE_STATISTICS_RESULTS_DETAIL
})

export const receivedHorseStatisticsResultsDetail = data => ({
  type: RECEIVED_HORSE_STATISTICS_RESULTS_DETAIL,
  data
})

export const failedToGetHorseStatisticsResultsDetail = () => ({
  type: FAILED_TO_FETCH_HORSE_STATISTICS_RESULTS_DETAIL
})

export const fetchHorseStatisticsResultsDetail = (slug, meetingDate) => {
  return (dispatch, getState) => {
    return dispatch({
      type: AUTHENTICATED_REQUEST,
      types: [gettingHorseStatisticsResultsDetail, receivedHorseStatisticsResultsDetail, failedToGetHorseStatisticsResultsDetail],
      endpoint: getHorseStatisticsResultsDetail,
      urlParams: {slug, meetingDate}
    })
  }
}

/* HORSE STATISTICS ENTRIES */

export const FETCH_HORSE_STATISTICS_ENTRIES = 'FETCH_HORSE_STATISTICS_ENTRIES'

export const RECEIVED_HORSE_STATISTICS_ENTRIES = 'RECEIVED_HORSE_STATISTICS_ENTRIES'

export const FAILED_TO_FETCH_HORSE_STATISTICS_ENTRIES = 'FAILED_TO_FETCH_HORSE_STATISTICS_ENTRIES'

export const gettingHorseStatisticsEntries = () => ({
  type: FETCH_HORSE_STATISTICS_ENTRIES
})

export const receivedHorseStatisticsEntries = data => ({
  type: RECEIVED_HORSE_STATISTICS_ENTRIES,
  data
})

export const failedToGetHorseStatisticsEntries = () => ({
  type: FAILED_TO_FETCH_HORSE_STATISTICS_ENTRIES
})

export const fetchHorseStatisticsEntries = (slug) => {
  return (dispatch, getState) => {
    return dispatch({
      type: AUTHENTICATED_REQUEST,
      types: [gettingHorseStatisticsEntries, receivedHorseStatisticsEntries, failedToGetHorseStatisticsEntries],
      endpoint: getHorseStatisticsEntries,
      urlParams: {slug}
    })
  }
}
