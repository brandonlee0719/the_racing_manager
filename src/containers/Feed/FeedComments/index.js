import React, { Component } from 'react'

import { connect } from 'react-redux'

import FeedCommentList from 'components/feed/FeedCommentList'

import {
  clearComments,
  fetchComments
} from 'actions/feedcomments'

import PropTypes from 'prop-types'

class FeedComments extends Component {
  constructor (props) {
    super(props)

    this.fetchFeedComments = this.fetchFeedComments.bind(this)
  }

  componentDidMount () {
    this.fetchFeedComments(this.props.id)
  }

  componentWillReceiveProps ({ id }) {
    if (id !== this.props.id) {
      this.fetchFeedComments(id)
    }
  }

  fetchFeedComments (id) {
    if (!id) {
      return false
    }

    this.props.fetchComments(id)
  }

  componentWillUnmount () {
    this.props.clearComments()
  }

  render () {
    return <FeedCommentList {...this.props} />
  }
}

FeedComments.propTypes = {
  comments: PropTypes.array.isRequired,
  id: PropTypes.any
}

const mapStateToProps = (state, ownProps) => {
  const {
    comments
  } = state.feedComments

  return {
    comments
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchComments: (id) => {
      dispatch(fetchComments(id))
    },
    clearComments: () => {
      dispatch(clearComments())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedComments)
