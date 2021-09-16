/**
 * @module react
 */
import React from 'react'

/**
 * @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 * @module classNames
 */
import classNames from 'utils/classnames'

/**
 * @module CopyCard
 */
import CopyCard from 'components/cards/CopyCard'

/**
 *  @module TextButton
 */
import TextButton from 'components/buttons/TextButton'

/**
 *  @module Image
 */
import Image from 'components/image'

/**
 *  @module Link
 */
import { Link } from 'react-router-dom'

/**
 *  @module video
 */
import { video } from 'assets/home'

/**
 * @name BottomCta
 * @param { Object } props
 * @property { String } props.text
 * @return { React.Component }
 */
const BottomCta = props => {
  const { className, isLoggedIn } = props

  const modifiedClassNames = classNames('bottom-cta', className)

  return (
    <div className={modifiedClassNames}>
      <div className="bottom-cta__wave-line wave-bg"></div>
      <div className="container">
        <div className="row relative">
          <div className="bottom-cta__video-container col-md-5 col-sm-12">
            <Image
              isImage={true}
              imageSrc={video}
              alt='video' />
          </div>
          <div className="col-md-6 col-md-offset-6 col-sm-10 col-sm-offset-2">
            <CopyCard
              headline="BECOME A CONNECTION">
              <p>“The Racing Manager could be the breath of fresh air that racing needs to bring a new, engaged audience into the sport we all love ”</p>
              <p className="bottom-cta__quote-author micro"><b>- Eamon Wilmott</b>
                <br/>Non Exec Director, BHA | Managing Director, Horses First Racing</p>
              <br/><br/>
              <p>Signing up is free and welcome to everyone. Once you’ve signed up, you can view your horses and join racing clubs. You only pay when you join a club or a syndicate.</p>
            </CopyCard>
            <div className="bottom-cta__buttons">
              {isLoggedIn ? (
                  <Link to='/browse-horses'>
                    <TextButton
                      text="Browse horses"
                      className="bottom-cta__button"
                      onClick={() => {}}/>
                  </Link>
                ) : (
                  <Link to='/register'>
                    <TextButton
                      text="Register for FREE"
                      className="bottom-cta__button"
                      onClick={() => {}}/>
                  </Link>
                )
              }
              {/* DEMO DISABLED FOR NOW
              <TextButton
                text="Try a Demo"
                modifier="secondary"
                className="bottom-cta__button"
                onClick={() => {}}/>
                */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * Component props types
 * @type { Object }
 */
BottomCta.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
}

/**
 * Default component props
 * @type { Object }
 */
BottomCta.defaultProps = {
  className: ''
}

export default BottomCta
