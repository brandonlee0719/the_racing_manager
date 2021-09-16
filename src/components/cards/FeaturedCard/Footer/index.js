import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

import classNames from 'utils/classnames'

class FeaturedCardFooter extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      className,
      children
    } = this.props

    const modifiedClassNames = classNames('featured-card-footer', className)

    return (
      <div className={modifiedClassNames}>
        <div className='featured-card__section featured-card-footer__content-container'>
          <div className='featured-card-footer__content'>
            {children}
          </div>
        </div>
      </div>
    )
  }
}

FeaturedCardFooter.propTypes = {
  className: PropTypes.string
}

FeaturedCardFooter.defaultProps = {
}

export default FeaturedCardFooter
