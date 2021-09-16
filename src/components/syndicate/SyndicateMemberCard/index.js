import React from 'react'

import PropTypes from 'prop-types'

const SyndicateMemberCard = (props) => {
  const {
    firstname,
    surname,
    email,
    addressline1,
    addressline2,
    postcode,
    distribution
  } = props.AddMemberFormInfo.values

  return (
    <div className="syndicate-member-card">
      <div className="card-content">
        <div className="card-text first-surname">
          <h3>{firstname.toUpperCase()} {surname.toUpperCase()}</h3>
        </div>
        <div className="card-text address-line-1">
          <h6>{addressline1.toUpperCase()}</h6>
        </div>
        <div className="card-text address-line-1">
          <h6>{email}</h6>
        </div>
        <div className="card-text address-line-2">
          <h6>{addressline2.toUpperCase()}</h6>
        </div>
        <div className="card-text postcode">
          <h6>{postcode.toUpperCase()}</h6>
        </div>
      </div>
      <div className="card-footer">
        {
          props.RegisterSyndicateInfo.step === 1
            ? <div className="card-buttons">
                <div className="card-btn"><a onClick={() => { props.deleteCard() }} className="del-btn"><h6>DELETE</h6></a></div>
                <div className="card-btn"><a onClick={() => { props.editCard() }} className="edit-btn"><h6>EDIT</h6></a></div>
              </div>
            :
            <div className="card-distribution">
              {distribution}% SHARE
            </div>
        }
      </div>
    </div>
  )
}

SyndicateMemberCard.propTypes = {
  firstname: PropTypes.string,
  surname: PropTypes.string,
  email: PropTypes.string,
  addressline1: PropTypes.string,
  addressline2: PropTypes.string,
  postcode: PropTypes.string
}

SyndicateMemberCard.defaultProps = {
  firstname: '',
  surname: '',
  email: '',
  addressline1: '',
  addressline2: '',
  postcode: ''
}

export default SyndicateMemberCard
