import React from 'react'

import PropTypes from 'prop-types'

import classNames from 'utils/classnames'

import Image from 'components/image'

import CtaLink from 'components/links/CtaLink'

const HorseTeamMember = props => {
  const {
    image,
    name,
    role,
    description,
    className,
    modifier,
    hasLink,
    href,
    linkText
  } = props

  const modifiedClassNames = classNames('team-member', className, modifier)

  return (
    <div className={modifiedClassNames}>
      <div className='team-member__image-wrapper'>
        <Image
          className='team-member__image'
          imageSrc={image}
          forceShow
          setRef={() => {}}
        />
      </div>
      <h5 className='team-member__name uppercase'>
        {name}
      </h5>
      <h5 className='team-member__role uppercase'>
        {role}
      </h5>
      <p className='team-member__description tiny'>
        {description}
      </p>
      {
        hasLink
        ? (
            <div className='team-member__link'>
              <CtaLink
                target='_blank'
                href={href}
                className='micro'
                modifier='italic'>
                {linkText}
              </CtaLink>
            </div>
          )
        : null
      }
    </div>
  )
}

HorseTeamMember.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  hasLink: PropTypes.bool,
  href: PropTypes.string,
  linkText: PropTypes.string
}

HorseTeamMember.defaultProps = {
  hasLink: false
}

export default HorseTeamMember
