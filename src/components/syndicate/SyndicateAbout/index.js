import React from 'react'

import classNames from 'utils/classnames'

import PropTypes from 'prop-types'

import TitleDescriptionSection from 'components/common/TitleDescriptionSection'

const SyndicateAbout = (props) => {
  const {
    className,
    title,
    description,
    onFaqClick
  } = props

  const modifiedClassNames = classNames('syndicate-about', className)

  return (
    <div className={modifiedClassNames}>
      <TitleDescriptionSection
        title={title}
        description={description}>
        {/*}<p>
          Want to know more? See our <span className='italic inherit cursor--pointer' onClick={onFaqClick}>FAQs</span>
        </p>*/}
      </TitleDescriptionSection>
    </div>
  )
}

SyndicateAbout.propTypes = {
  title: PropTypes.string,
  onFaqClick: PropTypes.func
}

SyndicateAbout.defaultProps = {
  title: 'About our syndicate',
  description: ''
}

export default SyndicateAbout
