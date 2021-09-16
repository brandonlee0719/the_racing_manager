import React, { Component } from 'react' // eslint-disable-line no-unused-vars

import { withRouter } from 'react-router'

import { connect } from 'react-redux'

import { getItem } from 'utils/storageutils'

import { USER_TOKEN } from 'data/consts'

import { authenticateUserFromToken, noAuthentication } from 'actions/auth'

import { isJwtValid } from 'utils/validation/JwtValidation'

export class Startup extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
    const token = getItem(USER_TOKEN)

    if (token && isJwtValid(token)) {
      this.props.authenticateUser(token)
      return true
    }

    this.props.noAuthentication()
  }

  render () {
    const {
      isReady
    } = this.props

    return isReady ? this.props.children : null
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isReady: state.auth.isReady
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    authenticateUser: (token) => {
      dispatch(authenticateUserFromToken(token))
    },
    noAuthentication: () => {
      dispatch(noAuthentication())
    }
  }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(Startup))
