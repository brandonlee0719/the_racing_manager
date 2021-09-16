// Api services
import {
    getSearchAttributesForHorses,
    searchForHorses
} from 'api/Services'

import {
  preparePayloadForHorseSearch
} from 'utils/filtering'

/*
  Action Types
 */
export const FETCH_SEARCH_FILTER_ATTRIBUTES = 'FETCH_SEARCH_FILTER_ATTRIBUTES'

export const FETCHED_SEARCH_FILTER_ATTRIBUTES = 'FETCHED_SEARCH_FILTER_ATTRIBUTES'

export const FAILED_TO_FETCH_SEARCH_FILTER_ATTRIBUTES = 'FAILED_TO_FETCH_SEARCH_FILTER_ATTRIBUTES'

export const FETCH_FILTERED_HORSES = 'FETCH_FILTERED_HORSES'

export const FETCHED_FILTERED_HORSES = 'FETCHED_FILTERED_HORSES'

export const FAILED_TO_FETCH_FILTERED_HORSES = 'FAILED_TO_FETCH_FILTERED_HORSES'

export const TOGGLE_HORSE_FILTER_PANEL = 'TOGGLE_HORSE_FILTER_PANEL'

export const UPDATE_HORSE_SEARCH_QUERY = 'UPDATE_HORSE_SEARCH_QUERY'

export const UPDATE_HORSE_SORT = 'UPDATE_HORSE_SORT'

export const UPDATE_HORSE_FILTERS = 'UPDATE_HORSE_FILTERS'

/*
  Action creators
 */
export const fetchSearchFilterAttrs = () => ({
  type: FETCH_SEARCH_FILTER_ATTRIBUTES
})

export const fetchedSearchFilterAttrs = (data) => ({
  type: FETCHED_SEARCH_FILTER_ATTRIBUTES,
  data
})

export const failedToFetchSearchFilterAttrs = (error) => ({
  type: FAILED_TO_FETCH_SEARCH_FILTER_ATTRIBUTES,
  error
})

export const fetchFilteredHorses = () => ({
  type: FETCH_FILTERED_HORSES
})

export const fetchedFilteredHorses = (data) => ({
  type: FETCHED_FILTERED_HORSES,
  data
})

export const failedToFetchFilteredHorses = (error) => ({
  type: FAILED_TO_FETCH_FILTERED_HORSES,
  error
})

export const toggleHorseFilterPanel = () => ({
  type: TOGGLE_HORSE_FILTER_PANEL
})

export const updateHorseSeachQuery = (query) => ({
  type: UPDATE_HORSE_SEARCH_QUERY,
  query
})

export const updateHorseSort = (name) => ({
  type: UPDATE_HORSE_SORT,
  name
})

export const updateHorseFilters = (payload) => ({
  type: UPDATE_HORSE_FILTERS,
  payload
})

const requestSearchFilters = () => {
  return (dispatch) => {
    dispatch(fetchSearchFilterAttrs())

    return getSearchAttributesForHorses()
    .then((response) => {
      dispatch(fetchedSearchFilterAttrs(response))
      return Promise.resolve(response)
    })
    .catch((error) => {
      dispatch(failedToFetchSearchFilterAttrs(error))
      return Promise.reject(error)
    })
  }
}

const shouldRequestSearchFilters = (state) => {
  if (state.browseHorses.hasAttributes || state.browseHorses.fetchingAttributes) {
    return false
  }

  return true
}

/*
  async actions
 */
export const requestSearchFiltersIfNeeded = () => {
  return (dispatch, getState) => {
    if (shouldRequestSearchFilters(getState())) {
      return dispatch(requestSearchFilters())
    }
  }
}

export const requestFilteredHorses = () => {
  return (dispatch, getState) => {
    const payload = preparePayloadForHorseSearch(getState().browseHorses)

    dispatch(fetchFilteredHorses())

    return searchForHorses(payload)
    .then((response) => {
      dispatch(fetchedFilteredHorses(response))
      return Promise.resolve(response)
    })
    .catch((error) => {
      dispatch(failedToFetchFilteredHorses(error))
      return Promise.reject(error)
    })
  }
}
