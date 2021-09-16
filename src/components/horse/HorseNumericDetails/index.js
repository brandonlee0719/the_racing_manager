import React from 'react'
import PropTypes from 'prop-types'

const HorseNumericDetails = props => {
  const { data } = props

  return (
    <div className='horse-num-details col-xs-12'>
      {
        data.map((item, index) => (
          <div className='horse-num-details__item col-xs-1' key={index}>
            <div className='horse-num-details__title'>
              {item.title}
            </div>
            <div className='horse-num-details__value'>
              {item.value || '-'}
            </div>
          </div>
        ))
      }
    </div>
  )
}

HorseNumericDetails.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ])
    })
  )
}

export default HorseNumericDetails
