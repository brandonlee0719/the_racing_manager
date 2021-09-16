import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

import classNames from 'utils/classnames'

class FeaturedCardFrame extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      className,
      modifier,
      children
    } = this.props

    const modifiedClassNames = classNames('featured-card-frame', className)

    const modifiedWrapperClassNames = classNames('featured-card-frame__wrapper', 'section-shadow--tile', modifier)

    return (
      <div className={modifiedClassNames}>
        <div className={modifiedWrapperClassNames}>
          {children}
        </div>
      </div>
    )
  }
}

FeaturedCardFrame.propTypes = {
  className: PropTypes.string,
  borderColor: PropTypes.string
}

FeaturedCardFrame.defaultProps = {
  borderColor: '#000'
}

export default FeaturedCardFrame
