/**
 *  @module React
 */
import React, { Component } from 'react'

/**
 *  @module BasePopup
 */
import BasePopup from 'components/popup/BasePopup'

/**
 *  @module classNames
 */
import classNames from 'utils/classnames'

/**
 *  @module TextPopupTile
 */
import TextPopupTile from 'components/feed/FeedPopupTiles/TextPopupTile'

/**
 *  @module ImagePopupTile
 */
import ImagePopupTile from 'components/feed/FeedPopupTiles/ImagePopupTile'

/**
 *  @module VideoPopupTile
 */
import VideoPopupTile from 'components/feed/FeedPopupTiles/VideoPopupTile'

/**
 *  @module MediaCarouselPopupTile
 */
import MediaCarouselPopupTile from 'components/feed/FeedPopupTiles/MediaCarouselPopupTile'

/**
 *  @module BASE_URL
 */
import { ROOT_PATH } from 'api/ServiceTypes'

/**
 *  @module FeedComments
 */
import FeedComments from 'containers/Feed/FeedComments'

/**
 *  @module SubmitFeedComment
 */
import SubmitFeedComment from 'containers/Feed/SubmitFeedPost'

import {markdownToHTML} from 'utils/textutils'

/**
 *  @class
 *  @name FeedUpdatePopup
 *  @extends {Component}
 */
export class FeedUpdatePopup extends Component {
  /**
   *  @constructor
   */
  constructor (props) {
    super(props)

    this.postComment = this.postComment.bind(this)
    this.postFeedComment = this.postFeedComment.bind(this)
  }

  postComment () {
    const {
      tileId
    } = this.props

    if (tileId) {
      const {
        postComment
      } = this.props

      postComment(tileId)
    }
  }

  /**
   *  renderTile
   *  @description Will render the correct feed tile.
   *  @return {Component}
   */
  renderTile () {
    const {
      feedTile
    } = this.props

    if (feedTile) {
      const {
        postType = 'multiplemedia',
        createdAt,
        timeStamp,
        text: rawText,
        attachment,
        author
      } = feedTile

      const text = (
        <div dangerouslySetInnerHTML={{__html: markdownToHTML(rawText)}}></div>
      )

      switch (postType) {
        case 'text':
          return (
            <TextPopupTile
              rootPath={ROOT_PATH}
              className='feed-popup__tile'
              key={`fptext-${createdAt}`}
              id={createdAt}
              name={author}
              commentLength={this.props.commentLength}
              date={timeStamp}
              text={text} />
          )

        case 'multiplemedia':
          return (
            <MediaCarouselPopupTile
              rootPath={ROOT_PATH}
              className='feed-popup__tile'
              key={`fpiv-${createdAt}`}
              id={createdAt}
              name={author}
              date={timeStamp}
              text={text}
              attachments={attachment} />
          )

        case 'image':
          return (
            <ImagePopupTile
              rootPath={ROOT_PATH}
              className='feed-popup__tile'
              key={`fpimage-${createdAt}`}
              id={createdAt}
              src={attachment[0].path}
              name={author}
              commentLength={this.props.commentLength}
              date={timeStamp}
              text={text} />
          )

        case 'video':
          return (
            <VideoPopupTile
              rootPath={ROOT_PATH}
              className='feed-popup__tile'
              key={`fpvideo-${createdAt}`}
              id={createdAt}
              src={attachment[0].path}
              poster={attachment[0].thumbnail}
              name={author}
              date={timeStamp}
              text={text} />
          )
      }
    }

    return null
  }

  postFeedComment (data) {
    const {
      tileId
    } = this.props

    this.props.postComment(tileId, data)
  }

  render () {
    const {
      className,
      modifier,
      submitTitle,
      commentPosted,
      allowCommenting,
      tileId
    } = this.props

    // Modified class names for container
    const modifiedClassNames = classNames('feed-popup', className, modifier)

    return (
      <div className={modifiedClassNames}>
        { this.renderTile() }
        <div className='feed-popup__bottom section-shadow'>
          <div className='row'>
            <div className='col-xs-12 col-sm-10 col-sm-push-1 col-md-10'>
              {
                allowCommenting
                ? (
                    <div className='col-xs-12 feed-popup__bottomcontent'>
                      <SubmitFeedComment
                        posted={commentPosted}
                        allowAttachments={false}
                        title={submitTitle}
                        submitFeedUpdate={this.postFeedComment}
                        reducerName='submitFeedComments'
                        />
                  </div>
                )
                : null
              }
              <div className='col-xs-12 feed-popup__comment-list'>
                <FeedComments id={tileId} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

FeedUpdatePopup.defaultProps = {
  allowCommenting: true
}

/**
 *  @module FeedUpdatePopup
 */
export default BasePopup(FeedUpdatePopup)
