import { connect } from 'react-redux'

import FeedUpdatePopup from 'components/feed/FeedUpdatePopup'

import {
  postComment
} from 'actions/feedcomments'

import {
  getFeedTileById
} from 'selectors/feed'

const mapStateToProps = (state, ownProps) => {
  const {
    commentPosted
  } = state.feedComments

  const {
    tiles,
    tileId
  } = ownProps

  return {
    commentPosted,
    feedTile: getFeedTileById(state, { tiles, id: tileId }),
    commentLength: state && state.feedComments && state.feedComments.comments && state.feedComments.comments.length
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    postComment: (id, data) => {
      dispatch(postComment(id, data))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedUpdatePopup)
