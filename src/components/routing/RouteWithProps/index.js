import React from 'react'

import {
  Route
} from 'react-router-dom'

/**
 *  RouteWithProps
 *  @description Will utilise the Route from react router with the option to pass props from the parent
 *  @param  {}    options.component
 *  @param  {...[Object]} options.rest
 *  @return {React.Component}
 */
const RouteWithProps = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return React.createElement(component, {...routeProps, ...rest})
    }} />
  )
}

export default RouteWithProps
