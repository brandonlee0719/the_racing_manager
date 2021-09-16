import React from 'react'

import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import View from 'components/routing/View'

import { REGISTER_SYNDICATE_NAME as title } from 'data/titles'

import RegisterSyndicateNameContainer from 'containers/RegisterSyndicate/RegisterSyndicateNameContainer'

import ViewHeader from 'components/common/ViewHeader'

const RegisterSyndicateName = (props) => {
  const {
    name
  } = props

  return (
    <View title={title}>
      <div className='register-syndicate-name'>
        <div className='register-syndicate-header'>
          <ViewHeader title={`name`}/>
        </div>
        <div className='container register-syndicate-name_section'>
          <RegisterSyndicateNameContainer />
        </div>
      </div>
    </View>
  )
}

RegisterSyndicateName.propTypes = {
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
)(RegisterSyndicateName)
