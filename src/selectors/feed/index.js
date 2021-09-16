import { createSelector } from 'reselect'

const feedSelector = (state, { tiles, id }) => ({
  feed: tiles,
  id
})

export const getFeedTileById = createSelector(
  feedSelector,
  ({ feed, id }) => {
    const count = feed.length
    const hasFeed = !!count

    if (!hasFeed || !id) {
      return null
    }

    const feedTile = feed.filter(({ _id }) => _id === id)

    if (feedTile.length) {
      return feedTile[0]
    }

    return null
  }
)
