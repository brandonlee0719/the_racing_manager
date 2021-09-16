import React from 'react'

import PropTypes from 'prop-types'

import CtaPanelCard from 'components/cards/CtaPanelCard'

import TextButton from 'components/buttons/TextButton'
import CtaLink from 'components/links/CtaLink'

import { Link } from 'react-router-dom'

const SyndicateCtaCard = (props) => {
  const {
    topButtonText,
    bottomButtonText,
    data = {}
  } = props

  const {
    public: isPublic = true
  } = data

  if (!isPublic) {
    return null
  }

  return (
    <CtaPanelCard className='syndicate-cta-card'>
      {isPublic &&
        <CtaLink>
          <Link to="/register">
            <TextButton
              text={'Register to Join'}
              className='syndicate-cta-card__button'
              modifier='md'
            />
          </Link>
        </CtaLink>
      }

      {/*<CtaLink href='/'>
        <TextButton
          text={bottomButtonText}
          className='syndicate-cta-card__button'
          modifier={['md', 'secondary']}
        />
      </CtaLink>*/}
    </CtaPanelCard>
  )
}

SyndicateCtaCard.propTypes = {
  topButtonText: PropTypes.string,
  bottomButtonText: PropTypes.string
}

SyndicateCtaCard.defaultProps = {
  topButtonText: 'request to join a horse',
  bottomButtonText: 'get in touch'
}

export default SyndicateCtaCard
