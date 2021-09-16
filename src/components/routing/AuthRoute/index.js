import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { Route, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

class AuthRoute extends Component {
  constructor (props) {
    super(props)

    this.renderRedirect = this.renderRedirect.bind(this)
    this.renderRoute = this.renderRoute.bind(this)
  }

  renderRoute (props) {
    const {
      authenticatedPath,
      Component,
      ...rest
    } = props

    return (
      authenticatedPath
      ? (
        <Redirect to={{
          pathname: authenticatedPath,
          state: {
            from: props.location
          }
        }} />
      )
      : (
        <Component {...rest} />
      )
    )
  }

  renderRedirect (props) {
    const {
      RedirectComponent,
      redirectPath,
      ...rest
    } = props

    return (
      RedirectComponent ? (
        <RedirectComponent {...rest} />
      ) : (
        <Redirect to={{
          pathname: redirectPath,
          state: {
            from: props.location
          }
        }} />
      )
    )
  }

  render () {
    const {
      component: Component,
      redirect: RedirectComponent,
      redirectPath,
      isLoggedIn,
      authenticatedPath,
      ...rest
    } = this.props

    return (
      <Route {...rest} render={props => {
        if (isLoggedIn) {
          return this.renderRoute({
            Component,
            authenticatedPath,
            ...props
          })
        } else {
          return this.renderRedirect({
            RedirectComponent,
            redirectPath,
            ...props
          })
        }
      }} />
    )
  }
}

const instancePropTypes = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.instanceOf(Component)
])

AuthRoute.propTypes = {
  component: instancePropTypes,
  redirect: instancePropTypes,
  redirectPath: PropTypes.string
}

AuthRoute.defaultProps = {
  redirectPath: '/'
}

const mapStateToProps = ({ auth }) => {
  return {
    isLoggedIn: auth.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRoute)
