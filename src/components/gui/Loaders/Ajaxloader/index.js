import React from 'react'

import { FadeIn } from 'components/animation'

/**
 *  AjaxLoader
 *  @param  {Object} props
 *  @return {React.Component}
 */
const AjaxLoader = props => {
  const {
    isVisible
  } = props

  return (
    <FadeIn>
      {
        isVisible
        ? (
            <div className='spinner'>
              <div className='spinner__container'>
                <div className='double-bounce1' />
                <div className='double-bounce2' />
              </div>
          </div>
        )
      : null
      }
    </FadeIn>
  )
}

/**
 *  @module AjaxLoader
 */
export default AjaxLoader
