/**
 *  @module React
 */
import React from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module Image
 */
import Image from 'components/image'

/**
 *  @module classNames
 */
import classNames from 'utils/classnames'

/**
 *  @module TextButton
 */
import TextButton from 'components/buttons/TextButton'

/**
 *  @module UpdatesButton
 */
import UpdatesButton from 'components/buttons/UpdatesButton'

/**
 *  @module CtaLink
 */
import CtaLink from 'components/links/CtaLink'

// Dummy race horse image
import {
  horseOverview
} from 'assets/dummyassets'

/**
 *  @module FeaturedCard
 */
import {
  CardView,
  CardHeading,
  CardFrame,
  CardContent,
  CardFooter
} from 'components/cards/FeaturedCard'

/**
 *  Dummy function
 */
const noop = () => {}

export const HorseOverlay = () => {
  return (
    <div className='horse-card__overlay' />
  )
}

export const HorseBanner = ({ title = 'pending ' }) => {
  return (
    <div className='horse-card__banner'>
      <h6 className='secondary-font regular uppercase'>{title}</h6>
    </div>
  )
}

export const HorseHeader = (props) => {
  const {
    title,
    subtitle,
    stats
  } = props

  return (
    <div>
      <h3 className='horse-card__header-primary horse-card__section-margin'>
        {title}
      </h3>
      <h6 className='secondary-font capitalize horse-card__header-secondary horse-card__section-margin semi-bold'>
        {subtitle}
      </h6>
      <div className='horse-card__stats'>
        {
          stats.map(({name, value}, index) => {
            return (
              <div className='horse-card__statsitem col-xs-3 align-middle' key={index}>
                <h6 className='secondary-font horse-card__section-margin horse-card__text-primary'>
                  {name}
                </h6>
                <h6 className='horse-card__text-primary'>
                  {value}
                </h6>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

const HorseInfo = ({ info }) => {
  return (
    <ul className='horse-card__infolist'>
      {
        info.map(({name, value}, index) => {
          return (
            <li className='horse-card__infoitem horse-card__section-margin' key={index}>
              <h6 className='secondary-font col-xs-6 horse-card__text-secondary'>
                {name}
              </h6>
              <p className='micro col-xs-6 horse-card__text-secondary'>
                {value}
              </p>
            </li>
          )
        })
      }
    </ul>
  )
}

const HorseExtra = (props) => {
  const {
    isMember,
    extra,
    isPending
  } = props

  const {
    title,
    text,
    url,
    updateAmount
  } = extra

  return (
    <div className='horse-card__extra'>
      {
        !isMember
        ? (
            <span>
              <h6 className='secondary-font horse-card__header-secondary semi-bold'>
                {title}
              </h6>
              <p className='micro horse-card__text-secondary'>
                {text}
              </p>
            </span>
          )
        : (
            <CtaLink to={url}>
              <UpdatesButton
                amount={updateAmount}
                text='horse profile'
                buttonClassName='horse-card__button'
                buttonModifier='secondary'
                onClick={noop} />
            </CtaLink>
          )
      }
      {
        isPending
        ? (
            <HorseOverlay />
          )
        : null
      }
    </div>
  )
}

const HorseFooter = (props) => {
  const {
    bottomUrl,
    isMember
  } = props

  return (
    <div>
      {
        bottomUrl
        ? (
            <CtaLink to={bottomUrl || ''}>
              <TextButton
                text={isMember ? 'Syndicate' : 'more information'}
                className='horse-card__button'
                modifier={['secondary', 'fluid']}
              />
            </CtaLink>
          )
        : null
      }
    </div>
  )
}

/**
 *  @class
 *  @name HorseCard
 *  @extends {Component}
 */
const HorseCard = props => {
  const {
    className,
    modifier,
    color,
    src,
    isPending,
    isActive,
  } = props

  // Modified class names for horse card.
  const modifiedClassNames = classNames('horse-card', className, modifier)

  // Modified class names for the wrapper to scale it down if the component is inactive
  const modifiedWrapperClassNames = classNames('horse-card__wrapper', '', {
    inactive: !isActive
  })

  return (
    <div className={modifiedClassNames}>
      <CardView
        className={modifiedWrapperClassNames}
        modifier='sm'>
        {
          isPending
          ? (
              <HorseBanner title='pending' />
            )
          : null
        }

        <Image
          className='horse-card__bg'
          imageSrc={src}
          forceShow={true} />

        <CardFrame borderColor={color}>

          <CardHeading>
            <HorseHeader {...props} />
          </CardHeading>

          <CardContent>
            <HorseInfo {...props} />
          </CardContent>

          <CardContent>
            <HorseExtra {...props} />
          </CardContent>

        </CardFrame>

        <CardFooter>
          <HorseFooter {...props} />
        </CardFooter>

      </CardView>
    </div>
  )
}

/**
 *  propTypes
 *  @type {Object}
 */
HorseCard.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  src: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  })),
  info: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  })),
  extra: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    updateAmount: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  }),
  isMember: PropTypes.bool,
  isPending: PropTypes.bool,
  isActive: PropTypes.bool
}

/**
 *  defaultProps
 *  @type {Object}
 */
HorseCard.defaultProps = {
  className: '',
  title: '',
  subtitle: '',
  color: '#000',
  stats: [{
    name: '',
    value: 0
  }, {
    name: '',
    value: 0
  }, {
    name: '',
    value: 0
  }, {
    name: '',
    value: 0
  }],
  info: [{
    name: 'Trainer name',
    value: ''
  }, {
    name: 'Syndicate name',
    value: ''
  }, {
    name: 'Initial cost/share',
    value: ''
  }, {
    name: 'Monthly cost/share',
    value: ''
  }],
  extra: {
    title: '',
    text: '',
    updateAmount: 0,
    url: 'null'
  },
  bottomUrl: '',
  isMember: true,
  src: horseOverview,
  isPending: false,
  isActive: true
}

/**
 *  @module HorseCard
 */
export default HorseCard
