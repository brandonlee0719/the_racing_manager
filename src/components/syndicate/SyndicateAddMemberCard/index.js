import React from 'react'

import PropTypes from 'prop-types'

const SyndicateAddMemberCard = (props) => {
  const {
    onClick
  } = props

  return (
    <div className="AddMemberCard">
      <a onClick={onClick}>+ ADD JOINT OWNER</a>
    </div>
  )
}

SyndicateAddMemberCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string
}

SyndicateAddMemberCard.defaultProps = {
  title: 'ADD JOINT OWNER'
}

export default SyndicateAddMemberCard
