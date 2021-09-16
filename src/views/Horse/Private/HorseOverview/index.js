import React, { Component } from 'react'

import horseView from 'views/Horse/View'

import { connect } from 'react-redux'

import AjaxLoader from 'components/gui/Loaders/Ajaxloader'

import HorseHero from 'components/horse/HorseHero'
import HorseNavBar from 'components/horse/HorseNavBar'

import FeedGallery from 'components/feed/FeedGallery'

import SubmitFeedPost from 'containers/Feed/SubmitFeedPost'

import {
  submitHorseUpdate
} from 'actions/horse'

export class HorseOverview extends Component {
  constructor (props) {
    super(props)

    this.postHorseFeed = this.postHorseFeed.bind(this)
  }

  componentWillReceiveProps ({ data }) {
    if (this.props.data.posted !== data.posted && data.posted) {
      this.props.getHorseInfo()
    }
  }

  postHorseFeed (data) {
    const {
      submitHorseUpdate
    } = this.props

    const {
      _id
    } = this.props.data

    submitHorseUpdate(_id, data)
  }

  render () {
    const {
      data,
      match
    } = this.props

    const {
      messages,
      posted,
      posting
    } = data

    return (
      <div className='horse-overview'>
        <HorseHero
          data={data} />

        <HorseNavBar
          data={data} />

        <div className='container horse-overview__message-post'>
          <div className='row'>
            <h1 className='horse-overview__main-title horse-overview__update-title uppercase'>
              Updates
            </h1>
            <div className='col-xs-12 col-sm-10 col-sm-push-1'>
              <SubmitFeedPost
                title='post an update to the horse'
                posted={posted}
                submitFeedUpdate={this.postHorseFeed}
                reducerName='horseFeedPost'
              />
            </div>
          </div>
        </div>
        <div className='horse-overview__grid container'>
          <FeedGallery
            tiles={messages}
          />
        </div>
        <AjaxLoader isVisible={posting} />
      </div>
    )
  }
}

const mapStateToProps = ({ horse }) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    submitHorseUpdate: (id, data) => {
      dispatch(submitHorseUpdate(id, data))
    }
  }
}

export default horseView(connect(
  mapStateToProps,
  mapDispatchToProps
)(HorseOverview))
