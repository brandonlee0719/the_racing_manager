import React from 'react'

import * as SOCIAL from 'utils/socialmedia'

import classNames from 'utils/classnames'

import Icon from 'components/icon'

const getShareService = (modifier, shareData) => {
  if (!modifier || !shareData || !SOCIAL[modifier]) {
    return ''
  }

  return SOCIAL[modifier]({...shareData})
}

const SocialShare = (props) => {
  const {
    modifier,
    className,
    shareData,
    ...rest
  } = props

  const modifiedClassNames = classNames('social-share-cta', className)

  return (
    <a href={getShareService(modifier, shareData)} {...rest}>
      <Icon
        className={modifiedClassNames}
        modifier={modifier} />
    </a>
  )
}

export default SocialShare
