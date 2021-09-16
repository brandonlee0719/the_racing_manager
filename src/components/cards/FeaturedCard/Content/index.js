import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

import classNames from 'utils/classnames'

class FeaturedCardContent extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      className,
      children
    } = this.props

    const modifiedClassNames = classNames('featured-card-content', ['featured-card__section-bg', 'section-shadow', className])

    return (
      <div className={modifiedClassNames}>
        <div className='featured-card__section'>
          {children}
        </div>
      </div>
    )
  }
}

FeaturedCardContent.propTypes = {
  className: PropTypes.string
}

FeaturedCardContent.defaultProps = {
}

export default FeaturedCardContent
