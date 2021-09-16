import React from 'react'

import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import View from 'components/routing/View'

import { REGISTER_SYNDICATE_MEMBERS as title } from 'data/titles'

import RegisterSyndicateMembersContainer from 'containers/RegisterSyndicate/RegisterSyndicateMembersContainer'

import ViewHeader from 'components/common/ViewHeader'

const RegisterSyndicateMembers = (props) => {
  const {
    name
  } = props

  return (
    <View title={title}>
      <div className='register-syndicate-members'>
        <div className='register-syndicate-header'>
          <ViewHeader title={`JOINT OWNERS`}/>
        </div>
        <div className='container register-syndicate-members_section'>
          <RegisterSyndicateMembersContainer />
        </div>
      </div>
    </View>
  )
}

RegisterSyndicateMembers.propTypes = {
  name: PropTypes.string
}

const mapStateToProps = (state, ownProps) => {
  const {
    auth
  } = state

  const {
    details
  } = auth

  return {
    name: details.firstname
  }
}

export default connect(
  mapStateToProps,
  null
)(RegisterSyndicateMembers)
