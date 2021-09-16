import {
  getNews,
  getNewsById
} from 'api/Services'

import {
  formatNews,
  formatNewsById
} from 'utils/news'

export const FETCHING_NEWS = 'news/FETCHING_NEWS'
export const FETCHED_NEWS = 'news/FETCHED_NEWS'
export const FAILED_TO_FETCH_NEWS = 'news/FAILED_TO_FETCH_NEWS'
export const FETCHING_NEWS_BY_ID = 'news/FETCHING_NEWS_BY_ID'
export const FETCHED_NEWS_BY_ID = 'news/FETCHED_NEWS_BY_ID'

export const fetchingNews = () => ({
  type: FETCHING_NEWS
})

export const fetchingNewsById = () => ({
  type: FETCHING_NEWS_BY_ID
})

export const fetchedNews = (news) => ({
  type: FETCHED_NEWS,
  news
})

export const fetchedNewsById = (news) => ({
  type: FETCHED_NEWS_BY_ID,
  news
})

export const failedToFetchNews = (error) => ({
  type: FAILED_TO_FETCH_NEWS,
  error
})

export const fetchNewsIfNeeded = () => {
  return (dispatch, getState) => {
    if (shouldFetchNews(getState())) {
      return dispatch(fetchNews())
    }
  }
}

const shouldFetchNews = (state) => {
  if (state.news.data.length || state.news.fetching) {
    return false
  }

  return true
}

export const fetchNews = () => {
  return (dispatch, getState) => {
    dispatch(fetchingNews())

    return getNews()
    .then(formatNews)
    .then((data) => {
      dispatch(fetchedNews(data))
      return Promise.resolve(data)
    })
    .catch((error) => {
      dispatch(failedToFetchNews(error))
      return Promise.reject(error)
    })
  }
}

export const getNewsDataById = (id) => {
  return (dispatch, getState) => {
    dispatch(fetchingNewsById())

    return getNewsById(id)
    .then(formatNewsById)
    .then((data) => {
      dispatch(fetchedNewsById(data))
    })
    .catch((error) => {
      dispatch(failedToFetchNews(error))
    })
  }
}
