import React from 'react'
import PropTypes from 'prop-types'

import classNames from 'utils/classnames'
import capitalize from 'utils/capitalize'

const HorseDetails = props => {
  const { data } = props

  const constructClassName = className => classNames('row', className)

  return (
    <div className='horse-details-list col-xs-12'>
      {
        data.map((item, index) => (
          !item.isHidden && (
            <div className={constructClassName(item.className)} key={index}>
              <div className='horse-details-list__title col-xs-6'>
                {item.title}
              </div>
              <div className='col-xs-6'>
                {item.value ? capitalize(item.value) : '-'}
              </div>
            </div>
          )
        ))
      }
    </div>
  )
}

HorseDetails.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      value: PropTypes.string,
      isLink: PropTypes.bool,
      href: PropTypes.string
    })
  )
}

export default HorseDetails
