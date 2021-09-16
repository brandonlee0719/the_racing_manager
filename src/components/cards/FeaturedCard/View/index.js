import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

import classNames from 'utils/classnames'

class FeaturedCardView extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      className,
      children,
      modifier
    } = this.props

    const modifiedClassNames = classNames('featured-card', className, modifier)

    return (
      <div className={modifiedClassNames}>
        {children}
      </div>
    )
  }
}

FeaturedCardView.propTypes = {
  className: PropTypes.string,
  modifier: PropTypes.string
}

export default FeaturedCardView
