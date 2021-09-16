import React from 'react'

import SecondaryNavBar, { NavLink } from 'components/navigation/SecondaryNavBar'

const HorseNavBar = (props) => {
  const {
    modifier,
    className,
    data = {}
  } = props

  const {
    canEdit = false,
    slug
  } = data

  return (
    <SecondaryNavBar modifier={modifier} className={className}>
      <NavLink href={`/horse/${slug}`} exact>
        racing news
      </NavLink>
      <NavLink href={`/horse/${slug}/statistics`} exact>
        vital statistics
      </NavLink>
      <NavLink href={`/horse/${slug}/information`} exact>
        key information
      </NavLink>
      {canEdit &&
        <NavLink href={`/horse/${slug}/information/edit`} exact>
          Edit Horse
        </NavLink>
      }
    </SecondaryNavBar>
  )
}

export default HorseNavBar
