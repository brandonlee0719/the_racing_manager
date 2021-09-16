import React, { PureComponent } from 'react'

import classNames from 'utils/classnames'

import PropTypes from 'prop-types'

import FullWidthSplitSection from 'components/common/FullWidthSplitSection'

import HorseBigSection from 'components/horse/HorseBigSection'
import HorseSmallSection from 'components/horse/HorseSmallSection'

import Carousel from 'components/carousel'

class SyndicateSplitSection extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      className,
      leftComponent,
      rightComponent,
      modifier,
      ...rest
    } = this.props

    const modifiedClassNames = classNames('syndicate-split-section')

    return (
      <div className={modifiedClassNames}>
        <div className='visible-md-up'>
          <FullWidthSplitSection
            leftComponent={(
              <HorseBigSection>
                {leftComponent}
              </HorseBigSection>
            )}
            rightComponent={(
              <HorseSmallSection>
                {rightComponent}
              </HorseSmallSection>
            )}
            {...rest} />
        </div>

        <div className='hidden-md-up'>
          <HorseBigSection>
            <Carousel showPagination>
              <div className='container'>
                {leftComponent}
              </div>
              <div className='container'>
                {rightComponent}
              </div>
            </Carousel>
          </HorseBigSection>
        </div>
      </div>
    )

    /*
    return (
      <div className={modifiedClassNames}>
        <div className='syndicate-split-section__wrapper'>
          <div className='visible-md-up'>
            <div className='syndicate-split-section__content container no-padding'>
              <div className='syndicate-split-section__left col-md-8'>
                <HorseBigSection>
                  {leftComponent}
                </HorseBigSection>
              </div>

              <div className='syndicate-split-section__right col-md-4'>
                <HorseSmallSection>
                  {rightComponent}
                </HorseSmallSection>
              </div>
            </div>
          </div>

          <div className='hidden-md-up'>
            <HorseBigSection>
              <Carousel showPagination>
                <div className='container'>
                  {leftComponent}
                </div>
                <div className='container'>
                  {rightComponent}
                </div>
              </Carousel>
            </HorseBigSection>
          </div>
        </div>
      </div>
    )
    */
  }
}

SyndicateSplitSection.propTypes = {
  className: PropTypes.string,
  leftComponent: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element
  ]),
  rightComponent: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element
  ]),
  modifier: PropTypes.string
}

SyndicateSplitSection.defaultProps = {
  modifier: 'blue'
}

export default SyndicateSplitSection
