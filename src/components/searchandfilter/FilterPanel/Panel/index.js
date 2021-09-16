/**
 *  @module React, PureComponent
 */
import React, { PureComponent } from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module classNames
 */
import classNames from 'utils/classnames'

/**
 *  @module Accordion
 */
import Accordion from 'components/accordion/BaseAccordion'

class FilterPanel extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      isOpen,
      className,
      modifier,
      children
    } = this.props

    const modifiedClassNames = classNames('filter-panel', className, modifier)

    return (
      <Accordion
        isOpen={isOpen}>
        <div className={modifiedClassNames}>
          {children}
        </div>
      </Accordion>
    )
  }
}

FilterPanel.propTypes = {
  isOpen: PropTypes.bool,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.object
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.object
  ]),
  children: PropTypes.node
}

/**
 *  @module FilterPanel
 */
export default FilterPanel
