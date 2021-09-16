import React, { Component } from 'react'

import BasePopup from 'components/popup/BasePopup'

import classNames from 'utils/classnames'

import NewsPopupByIdTile from 'components/news/NewsPopupTile'

import AjaxLoader from 'components/gui/Loaders/Ajaxloader'

import { textToNewLineReactComponent } from 'utils/stringutils'

class NewsPopupById extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      className,
      newsTile,
      isSubmitting
    } = this.props

    const modifiedClassNames = classNames('each-news-popup', className)

    return (
      <div className={modifiedClassNames}>
        {
          newsTile
            ? (
                <NewsPopupByIdTile
                  name=''
                  title={newsTile.slugline}
                  date={newsTile.timeStamp}
                  text={textToNewLineReactComponent(newsTile.content)}
                  src={newsTile.thumbnailImage}
                  id={newsTile._id}
                  rootPath='' />
              )
            : null
        }
        <AjaxLoader isVisible={isSubmitting} />
      </div>
    )
  }
}

export default BasePopup(NewsPopupById)
