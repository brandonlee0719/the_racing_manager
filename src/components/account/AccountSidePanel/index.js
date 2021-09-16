import React from 'react'

import { Panel, NavLink } from 'components/navigation/SidePanel'

import classNames from 'utils/classnames'

import { withRouter } from 'react-router-dom'

import { navigation } from 'data/account'

const AccountSidePanel = (props) => {
  const {
    className,
    location,
    onClick
  } = props

  const modifiedClassNames = classNames('account-side-panel', className)

  return (
    <Panel className={modifiedClassNames}>
      {
        navigation.map(({name, link}, index) => {
          return (
            <NavLink href={link} exact location={location} onClick={onClick} key={index}>
              {name}
            </NavLink>
          )
        })
      }
    </Panel>
  )
}

export default withRouter(AccountSidePanel)
