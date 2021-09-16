import React from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module heroBg
 */
import { managerDashboardBilling } from 'assets/images'

/**
 *  @module Hero
 */
import Hero from 'components/parallax/Hero'

/**
 *  @module ViewHeaderBar
 */
import ViewHeaderBar from 'components/common/ViewHeaderBar'

/**
 *  ViewHeader
 *  @return {React.Component}
 */
const ViewHeader = ({title}) => {
  return (
    <div className='view-header'>
      <Hero
        className='view-header__bg'
        featuredImage={managerDashboardBilling} />
      <ViewHeaderBar
        title={title} />
    </div>
  )
}

/**
 *  PropTypes
 *  @type {Object}
 */
ViewHeader.PropTypes = {
  title: PropTypes.string
}

/**
 *  defaultProps
 *  @type {Object}
 */
ViewHeader.defaultProps = {
  title: 'Join the action'
}

/**
 *  @module ViewHeader
 */
export default ViewHeader
