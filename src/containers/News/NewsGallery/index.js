import React, { Component } from 'react'

import { connect } from 'react-redux'

import NewsGallery from 'components/news/NewsGallery'

import {
  fetchNewsIfNeeded
} from 'actions/news'

class NewsGalleryContainer extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.fetchNewsIfNeeded()
  }

  render () {
    return (
      <NewsGallery
      {...this.props} />
    )
  }
}

const mapStateToProps = ({ news }, ownProps) => {
  const {
    data
  } = news

  return {
    tiles: data
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchNewsIfNeeded: () => {
      return dispatch(fetchNewsIfNeeded())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsGalleryContainer)
