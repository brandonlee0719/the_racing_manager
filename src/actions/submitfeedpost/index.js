/**
 *  UPDATE_FEED_TEXT
 *  @type {String}
 */
export const UPDATE_FEED_TEXT = 'UPDATE_FEED_TEXT'

/**
 *  ADD_FEED_MEDIA_FILES
 *  @type {String}
 */
export const ADD_FEED_MEDIA_FILES = 'ADD_FEED_MEDIA_FILES'

/**
 *  CLEAR_FEED_DATA
 *  @type {String}
 */
export const CLEAR_FEED_DATA = 'CLEAR_FEED_DATA'

/**
 *  DELETE_FEED_MEDIA
 *  @type {String}
 */
export const DELETE_FEED_MEDIA = 'DELETE_FEED_MEDIA'

/**
 *  updateFeedText
 *  @param  {String} text
 *  @return {Object}
 */
export const updateFeedText = (text, reducerName) => ({
  type: UPDATE_FEED_TEXT,
  text,
  reducerName
})

/**
 *  addFeedMediaFiles
 *  @param  {Object} files
 *  @return {Object}
 */
export const addFeedMediaFiles = (files, reducerName) => ({
  type: ADD_FEED_MEDIA_FILES,
  files,
  reducerName
})

/**
 *  clearFeedData
 *  @return {Object}
 */
export const clearFeedData = (reducerName) => ({
  type: CLEAR_FEED_DATA,
  reducerName
})

/**
 *  deleteFeedMedia
 *  @return {Object}
 */
export const deleteFeedMedia = (reducerName) => ({
  type: DELETE_FEED_MEDIA,
  reducerName
})
