import React from 'react'

import { withRouter } from 'react-router'

import Default from './Default'

import BodyStyle from 'components/common/BodyStyle'

import { isTouchDevice } from 'utils/domutils'

import ToastContainer from 'containers/Toast'

const getLayoutPerRoute = (props) => {
  switch (props.location.pathname) {
    default:
      return <Default children={props.children} />
  }
}

const Layout = (props) => {
  const { children, history } = props
  const { location } = history

  return (
    <BodyStyle className={!isTouchDevice() ? 'no-touch' : ''}>
      <div>
        {
          getLayoutPerRoute({children, location})
        }
        <ToastContainer />
      </div>
    </BodyStyle>
  )
}

export default withRouter(Layout)
