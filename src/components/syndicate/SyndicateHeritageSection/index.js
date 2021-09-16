import React, { PureComponent } from 'react'

import classNames from 'utils/classnames'

import PropTypes from 'prop-types'

import TitleDescriptionSection from 'components/common/TitleDescriptionSection'

class SyndicateHeritageSection extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      className,
      description
    } = this.props

    const modifiedClassNames = classNames('syndicate-heritage', className)

    return (
      <div className={modifiedClassNames}>
        <TitleDescriptionSection
          title='our heritage'
          description={description}
          colorModifier='blue' />
        {/*
          Add in timeline component when ready
        */}
      </div>
    )
  }
}

SyndicateHeritageSection.propTypes = {
  className: PropTypes.string
}

export default SyndicateHeritageSection
