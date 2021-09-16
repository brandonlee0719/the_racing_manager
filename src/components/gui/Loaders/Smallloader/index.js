import React from 'react'

import { FadeIn } from 'components/animation'

import classNames from 'utils/classnames'

import PropTypes from 'prop-types'

const Smallloader = (props) => {
  const {
    isVisible,
    modifier,
    className
  } = props

  const modifierClassNames = classNames('small-loader', className, modifier)

  return (
    <FadeIn>
      {
        isVisible
        ? (
            <div className={modifierClassNames}>
              <div className='sk-fading-circle'>
                <div className='sk-circle1 sk-circle'></div>
                <div className='sk-circle2 sk-circle'></div>
                <div className='sk-circle3 sk-circle'></div>
                <div className='sk-circle4 sk-circle'></div>
                <div className='sk-circle5 sk-circle'></div>
                <div className='sk-circle6 sk-circle'></div>
                <div className='sk-circle7 sk-circle'></div>
                <div className='sk-circle8 sk-circle'></div>
                <div className='sk-circle9 sk-circle'></div>
                <div className='sk-circle10 sk-circle'></div>
                <div className='sk-circle11 sk-circle'></div>
                <div className='sk-circle12 sk-circle'></div>
              </div>
            </div>
        )
      : null
      }
    </FadeIn>
  )
}

Smallloader.propTypes = {
  className: PropTypes.string,
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  isVisible: PropTypes.bool
}

Smallloader.defaultProps = {
  isVisible: false
}

export default Smallloader
