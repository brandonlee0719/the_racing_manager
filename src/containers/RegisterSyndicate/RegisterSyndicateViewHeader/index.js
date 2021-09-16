/**
 *  @module React
 */
import React from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module heroBg
 */
import { heroBg } from 'assets/images'

/**
 *  @module Hero
 */
import Hero from 'components/parallax/Hero'

import {
  registerLeftDescription,
  registerLeftBenefits,
  registerRightDescription,
  registerRightBenefits
} from 'data/syndicate'

/**
 *  @module ViewHeaderBar
 */

import SyndicateSplitSection from 'components/syndicate/SyndicateSplitSection'
import SyndicateInvolvement from 'components/syndicate/SyndicateInvolvement'

/**
 *  ViewHeader
 *  @return {React.Component}
 */
const RegisterSyndicateViewHeader = ({title}) => {
  return (
    <div className='view-header'>
      <Hero
        className='view-header__bg'
        featuredImage={heroBg} />
      <div className="register-syndicate-header-bar">
        <SyndicateSplitSection
          leftComponent={
            <SyndicateInvolvement
              title="REGISTER YOUR SYNDICATE"
              titleModifier="h1"
              benefits={registerLeftBenefits}
              description={registerLeftDescription} />
          }
          rightComponent={
            <SyndicateInvolvement
              title="YOU WILL NEED"
              benefits={registerRightBenefits}
              description={registerRightDescription} />
          } />
      </div>
    </div>
  )
}

/**
 *  PropTypes
 *  @type {Object}
 */
RegisterSyndicateViewHeader.PropTypes = {
  title: PropTypes.string
}

/**
 *  defaultProps
 *  @type {Object}
 */
RegisterSyndicateViewHeader.defaultProps = {
  title: 'Join the action'
}

/**
 *  @module ViewHeader
 */
export default RegisterSyndicateViewHeader
