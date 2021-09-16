import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import capitalize from 'utils/capitalize'

const HorseBrief = props => {
  const {
    name,
    age,
    color,
    gender,
    owner = {},
    slug
  } = props

  return (
    <div className='horse-brief'>
      <h1 className='horse-brief__title'>
        {name}
      </h1>
      <div className='horse-brief__description'>
        {age}yo <span className='horse-brief__gender'>{color} {gender}</span> Owned by: <Link to={`/syndicate/${slug}`} className='link--italic horse-brief__owner'>{capitalize(owner.name)}</Link>
      </div>
    </div>
  )
}

HorseBrief.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  color: PropTypes.string,
  gender: PropTypes.string,
  owner: PropTypes.shape({
    name: PropTypes.string
  }),
  slug: PropTypes.string
}

export default HorseBrief
