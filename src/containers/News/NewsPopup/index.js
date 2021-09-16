import { connect } from 'react-redux'

import NewsPopup from 'components/news/NewsPopup'

import {
  getNewsById
} from 'selectors/news'

const mapStateToProps = (state, { newsId }) => {
  return {
    newsTile: getNewsById(state, { id: newsId })
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsPopup)
