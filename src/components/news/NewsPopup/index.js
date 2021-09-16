import React, { Component } from 'react'

import BasePopup from 'components/popup/BasePopup'

import classNames from 'utils/classnames'

import NewsPopupTile from 'components/news/NewsPopupTile'

import { textToNewLineReactComponent } from 'utils/stringutils'

class NewsPopup extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      className,
      newsTile
    } = this.props

    const modifiedClassNames = classNames('news-popup', className)

    return (
      <div className={modifiedClassNames}>
        {
          newsTile
          ? (
              <NewsPopupTile
                name=''
                title={newsTile.slugline}
                date={newsTile.timeStamp}
                shareText={newsTile.content.substr(0, 150).concat('...read more ')}
                text={textToNewLineReactComponent(newsTile.content)}
                src={newsTile.thumbnailImage}
                id={newsTile._id}
                rootPath='' />
            )
          : null
        }
      </div>
    )
  }
}

export default BasePopup(NewsPopup)
