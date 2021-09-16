import React from 'react'

import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import View from 'components/routing/View'

import { REGISTER_SYNDICATE_COLOURS as title } from 'data/titles'

import RegisterSyndicateColoursContainer from 'containers/RegisterSyndicate/RegisterSyndicateColoursContainer'

import ViewHeader from 'components/common/ViewHeader'

const RegisterSyndicateColours = (props) => {
  const {
    name
  } = props

  return (
    <View title={title}>
      <div className='register-syndicate-colours'>
        <div className='register-syndicate-header'>
          <ViewHeader title={`COLOURS`}/>
        </div>
        <div className='container register-syndicate-colours_section'>
          <RegisterSyndicateColoursContainer />
        </div>
      </div>
    </View>
  )
}

RegisterSyndicateColours.propTypes = {
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
)(RegisterSyndicateColours)
