import { createSelector } from 'reselect'

const newsSelector = ({ news }, { id }) => ({
  news: news.data,
  id
})

export const getNewsById = createSelector(
  newsSelector,
  ({ news, id }) => {
    const count = news.length
    const hasNews = !!count

    if (!hasNews || !id) {
      return null
    }

    const newsTile = news.filter(({ _id }) => _id === id)

    if (newsTile.length) {
      return newsTile[0]
    }

    return null
  }
)
