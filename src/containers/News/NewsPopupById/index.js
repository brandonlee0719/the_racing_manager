import React, { Component } from 'react'

import { connect } from 'react-redux'

import NewPopupById from 'components/news/NewsPopupById'

import {
  getNewsDataById
} from 'actions/news'

class NewPopupByIdContainer extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
    this.props.getNewsDataById(this.props.newsId)
  }

  render () {
    return (
      <NewPopupById {...this.props} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    news
  } = state

  const {
    dataById,
    fetchingById
  } = news

  return {
    newsTile: dataById,
    isSubmitting: fetchingById
  }

}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getNewsDataById: (id) => {
      dispatch(getNewsDataById(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPopupByIdContainer)
