import React from 'react'

import classNames from 'utils/classnames'

import PropTypes from 'prop-types'

import Separator from 'components/gui/Separator'

const TitleDescriptionSection = (props) => {
  const {
    className,
    title,
    description,
    titleModifier,
    colorModifier,
    modifier,
    children
  } = props

  const modifiedClassNames = classNames('title-description', className, modifier)

  return (
    <div className={modifiedClassNames}>
      {
        React.createElement(titleModifier, {className: 'title-description__title uppercase'}, [title])
      }
      <Separator modifier={colorModifier} className='title-description__seperator'/>
      {
        description
        ? (
            <p className='title-description__paragraph'>
              {description}
            </p>
          )
        : null
      }
      {
        React.Children.count(children)
        ? (
            <div className='title-description__content'>
              {children}
            </div>
          )
        : null
      }
    </div>
  )
}

TitleDescriptionSection.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  colorModifier: PropTypes.string,
  titleModifier: PropTypes.string
}

TitleDescriptionSection.defaultProps = {
  colorModifier: 'white',
  titleModifier: 'h1'
}

export default TitleDescriptionSection
