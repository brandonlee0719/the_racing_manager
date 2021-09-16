import React from 'react'

import PropTypes from 'prop-types'

import TileHeader from 'components/tiles/TileHeader'

import Separator from 'components/gui/Separator'

import {markdownToHTML} from 'utils/textutils'

const FeedComment = (props) => {
  const {
    name,
    date,
    text: rawText
  } = props

  const text = (
    <div dangerouslySetInnerHTML={{__html: markdownToHTML(rawText)}}></div>
  )

  return (
    <div className='feed-comment'>
      <div className='feed-comment__header'>
        <TileHeader
          isIcon
          iconModifier={'account'}
          name={name}
          date={date} />
      </div>
      <div className='feed-comment__body'>
        <p className='feed-comment__text small'>
          {text}
        </p>
      </div>
      <div className='feed-comment__footer'>
        <Separator modifier={['grey', 'thin']} />
      </div>
    </div>
  )
}

FeedComment.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string
}

export default FeedComment
