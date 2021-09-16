import React from 'react'

import PropTypes from 'prop-types'

const SyndicateMemberCard = (props) => {
  const {
    stepState
  } = props

  return (
    <div className="syndicate-member-step-state">
      <div className={ stepState === '1' ? 'step active' : 'step' }>
        <div className="text">
          <h6>STEP 1: DEFINE THE OWNERS</h6>
        </div>
        <div className="step-icon"></div>
      </div>
      <div className={ stepState === '2' ? 'step active' : 'step' }>
        <div className="text">
          <h6>STEP 2: DIVIDING SHARES</h6>
        </div>
        <div className="step-icon"></div>
      </div>
      <div className={ stepState === '3' ? 'step active' : 'step' }>
        <div className="text">
          <h6>STEP 3: CONFIRM DETAILS</h6>
        </div>
        <div className="step-icon"></div>
      </div>
    </div>
  )
}

SyndicateMemberCard.propTypes = {
  stepState: PropTypes.string
}

SyndicateMemberCard.defaultProps = {
  stepState: '1'
}

export default SyndicateMemberCard
