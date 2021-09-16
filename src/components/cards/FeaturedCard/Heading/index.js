import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

import classNames from 'utils/classnames'

class FeaturedCardHeading extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      className,
      children
    } = this.props

    const modifiedClassNames = classNames('featured-card-heading', ['featured-card__section-bg', className])

    return (
      <div className={modifiedClassNames}>
        <div className='featured-card__section featured-card-heading__reduced-padding-top'>
          {children}
        </div>
      </div>
    )
  }
}

FeaturedCardHeading.propTypes = {
  className: PropTypes.string
}

FeaturedCardHeading.defaultProps = {
}

export default FeaturedCardHeading
