
import React from 'react'

import PropTypes from 'prop-types'

import TextButton from 'components/buttons/TextButton'

import Icon from 'components/icon'

import classNames from 'utils/classnames'

const TextIconButton = props => {
  const {
    title,
    iconModifier,
    modifier,
    textClassName,
    ...rest
  } = props

  const iconClassNames = classNames('text-icon-button__icon', 'align-middle nano', modifier)

  return (
    <TextButton
      {...rest}
      modifier={modifier}
      textClassName={textClassName}
      text={(
        <span
          className='inherit extra-light'
        >
          {
            title
            ? (
                <span className='text-icon-button__text inherit'>
                  {title}
                </span>
              )
            : null
          }

          <Icon
          className={iconClassNames}
          modifier={iconModifier} />
        </span>
      )} />
  )
}
/**
 * Default component props
 * @type { Object }
 */
TextIconButton.defaultProps = {
  modifier: 'xs',
  textClassName: 'lowercase',
}

/**
 * Component props types
 * @type { Object }
 */
TextIconButton.propTypes = {
  title: PropTypes.string,
  iconModifier: PropTypes.string,
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  textClassName: PropTypes.string,
}

export default TextIconButton
