import { connect } from 'react-redux'

import FeedSubmitTile from 'components/feed/FeedSubmitTile'

import processMediaPayload from 'utils/mediapayload'

import {
  updateFeedText,
  addFeedMediaFiles,
  clearFeedData,
  deleteFeedMedia
} from 'actions/submitfeedpost'

const mapStateToProps = (state, ownProps) => {
  const {
    reducerName,
    posted,
    title
  } = ownProps

  const {
    text,
    maxCharCount,
    files,
    charCount
  } = state[reducerName]

  return {
    feedText: text,
    charCount,
    maxCharCount,
    feedFiles: files,
    feedPosted: posted,
    title
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {
    reducerName, // reducerName which will correspond to the correct reducer
    allowAttachments = true
  } = ownProps

  return {
    submitFeedUpdate: (text, files) => {
      const {
        submitFeedUpdate
      } = ownProps

      const attachment = files

      // Construct data
      let data

      // If allow attachments is true, then process the payload to use FormData
      if (allowAttachments) {
        data = processMediaPayload({
          attachment,
          text
        })
      } else {
        data = {
          text
        }
      }

      submitFeedUpdate && submitFeedUpdate(data)
    },
    updateFeedText: text => {
      dispatch(updateFeedText(text, reducerName))
    },
    addFeedMediaFiles: files => {
      dispatch(addFeedMediaFiles(files, reducerName))
    },
    deleteFeedThumbnail: () => {
      dispatch(deleteFeedMedia(reducerName))
    },
    clearFeedData: () => {
      dispatch(clearFeedData(reducerName))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedSubmitTile)
