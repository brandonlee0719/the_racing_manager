/**
 * @module react
 */
import React from 'react'

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
 *  @module SubmitFeedPost
 */
import SubmitFeedPost from 'containers/Feed/SubmitFeedPost'

/**
 *  @module FeedUpdatePopup
 */
import { FeedUpdatePopup } from 'components/feed/FeedUpdatePopup'

/**
 *  @module expect
 */
import chai, { expect } from 'chai'

/**
 *  @module shallow
 */
import { shallow } from 'enzyme'

/**
 *  @module ChaiEnzyme
 */
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

describe('Components - FeedUpdatePopup', () => {
  let wrapper

  let props = {
    className: '',
    modifier: '',
    submitTitle: '',
    comments: [],
    updateFeedText: '',
    clearFeedData: () => {},
    commentText: '',
    charCount: 10,
    commentPosted: false,
    maxCharCount: 400
  }

  beforeEach(() => {
    wrapper = shallow(<FeedUpdatePopup {...props} />)
  })

  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('First child should have a classname "feed-popup"', () => {
    expect(wrapper.find('.feed-popup')).to.have.length(1)
  })

  it('should have a <SubmitFeedPost /> Component', () => {
    expect(wrapper.find(SubmitFeedPost)).to.have.length(1)
  })

  it('should not render any tiles', () => {
    expect(wrapper.containsAnyMatchingElements([
      TextPopupTile,
      ImagePopupTile,
      VideoPopupTile,
      MediaCarouselPopupTile
    ])).to.equal(false)
  })

  it('should render a <TextPopupTile/> component if props with text entry and postType equal to text is defined', () => {
    const feedTile = {
      postType: 'text',
      text: 'hello'
    }
    wrapper.setProps({ feedTile })
    expect(wrapper.find(TextPopupTile)).to.have.length(1)
  })

  it('should render an <ImagePopupTile/> component if props with attachment entry and postType equal to image is defined', () => {
    const feedTile = {
      postType: 'image',
      attachment: [{
        path: 'test.png'
      }]
    }
    wrapper.setProps({ feedTile })
    expect(wrapper.find(ImagePopupTile)).to.have.length(1)
  })

  it('should render an <VideoPopupTile/> component if props with attachment entry and postType equal to video is defined', () => {
    const feedTile = {
      postType: 'video',
      attachment: [{
        path: 'test.mp4'
      }]
    }
    wrapper.setProps({ feedTile })
    expect(wrapper.find(VideoPopupTile)).to.have.length(1)
  })

  it('should render an <MediaCarouselPopupTile/> component if props with attachment entry and postType equal to multiplemedia is defined', () => {
    const feedTile = {
      postType: 'multiplemedia',
      attachment: [{
        path: 'test.mp4',
        type: 'video'
      },
      {
        path: 'image.png',
        type: 'image'
      }]
    }
    wrapper.setProps({ feedTile })
    expect(wrapper.find(MediaCarouselPopupTile)).to.have.length(1)
  })
})
