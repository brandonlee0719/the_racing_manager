/**
 *  @module React, PureComponent
 */
import React, { PureComponent } from 'react'

import { connect } from 'react-redux'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module ViewHeader
 */
import ViewHeader from 'components/common/ViewHeader'

/**
 *  @module View
 */
import View from 'components/routing/View'

/**
 *  @module Separator
 */
import Separator from 'components/gui/Separator'

/**
 *  @module TextButton
 */
import TextButton from 'components/buttons/TextButton'

/**
 *  @module Link
 */
import { Link } from 'react-router-dom'

/**
 *  @module performRequestToConfirmRegistration
 */
import {
  performRequestToConfirmRegistration
} from 'actions/registrationconfirmation'

class RegistrationConfirmation extends PureComponent {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    const {
      match
    } = this.props

    const token = match.params.token
    // just for testing
    if (token !== 'bob') {
      this.props.requestConfirmation(token)
      .then(() => {})
      .catch(() => {
        this.props.history.replace('/404')
      })
    }
  }

  render () {
    const {
      firstname,
      requesting
    } = this.props

    if (requesting) {
      return null
    }

    return (
      <View>
        <div className='registration-confirmation fade-in'>
          <ViewHeader
            title={`and they're off`} />
          <div className='container'>
            <div className='registration-confirmation__content-wrapper'>
              <div className='row'>
                <div className='col-xs-12 col-sm-8 col-md-6'>
                  <h2 className='regular uppercase registration-confirmation__title'>
                    {firstname || 'Bob'}, welcome to the racing manager
                  </h2>
                  <Separator
                    modifier='blue' />
                  <p className='extra-light'>
                    Your account has been verified.
                  </p>
                </div>
              </div>
              <div className='row'>
                <div className='col-xs-12 col-sm-8 col-md-6 registration-confirmation__bottom'>
                  <Link to='/browse-horses'>
                    <TextButton
                      className='registration-confirmation__cta-button'
                      text='browse horses' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </View>
    )
  }
}

RegistrationConfirmation.propTypes = {
  firstname: PropTypes.string,
  requesting: PropTypes.bool
}

/**
 *  mapStateToProps
 *  @param  {Object} state
 *  @param  {Object} ownProps
 *  @return {Object}
 */
const mapStateToProps = (state, ownProps) => {
  const firstname = state.auth.details.firstname
  const requesting = state.registrationConfirmation.requesting

  return {
    firstname,
    requesting
  }
}

/**
 *  @name mapDispatchToProps
 *  @param  {Function} dispatch
 *  @param  {Object} ownProps
 *  @return {Object}
 */
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestConfirmation: (token) => {
      return dispatch(performRequestToConfirmRegistration(token))
    }
  }
}

/**
 *  @module connect
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationConfirmation)
