import React from 'react'

import { connect } from 'react-redux'

import View from 'components/routing/View'

import { REGISTER_SYNDICATE as title } from 'data/titles'

import RegisterSyndicateContainer from 'containers/RegisterSyndicate/RegisterSyndicateContainer'

import RegisterSyndicateViewHeader from 'containers/RegisterSyndicate/RegisterSyndicateViewHeader'

const RegisterSyndicate = (props) => {
  return (
    <View title={title}>
      <div className='register-syndicate'>
        <div className='register-syndicate_header'>
          <RegisterSyndicateViewHeader />
        </div>
        <div className='container register-syndicate_section'>
          <RegisterSyndicateContainer />
        </div>
      </div>
    </View>
  )
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
)(RegisterSyndicate)
