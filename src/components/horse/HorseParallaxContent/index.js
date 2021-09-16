import React, { Component } from 'react'

import PropTypes from 'prop-types'

import classNames from 'utils/classnames'

import Image from 'components/image'

import Parallax from 'components/parallax/BaseParallax'

class HorseParallaxContent extends Component {
  render () {
    const { title, image, className, modifier } = this.props

    const modifiedClassNames = classNames('horse-parallax-content', className, modifier)

    return (
      <div className={modifiedClassNames}>
        <Parallax
          speed={-0.4}
          scope={400}>
            <div className='horse-parallax-content__parallax-container'>
              <Image
                imageSrc={image}
                setRef={() => {}}
                className='horse-parallax-content__image' />
            </div>
        </Parallax>
        <div className='horse-parallax-content__overlay'>
          <h1 className='horse-parallax-content__title absolute-center uppercase'>
            {title}
          </h1>
        </div>
      </div>
    )
  }
}

HorseParallaxContent.propTypes = {
  image: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
}

HorseParallaxContent.defaultProps = {
  className: '',
  modifier: ''
}

export default HorseParallaxContent
