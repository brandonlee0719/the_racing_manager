import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'utils/classnames'

import Accordion from 'components/accordion/BaseAccordion'
import toggleStateProp from 'utils/toggleStateProp'

class HorseAccordion extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpen: false
    }

    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle () {
    const statePropName = 'isOpen'
    this.setState(toggleStateProp.bind(null, this.state, statePropName))
  }

  render () {
    const { isOpen } = this.state
    const { title, className, modifier, children } = this.props

    const modifiedClassNames = classNames('horse-accordion', className, modifier, {
      'open': isOpen
    })

    return (
      <div className={modifiedClassNames}>
        <div className='horse-accordion__header' onClick={this.handleToggle}>
          <div className='horse-accordion__head-content container'>
            <div className='horse-accordion__icon absolute-center-v' />
            <div className='horse-accordion__title'>
              {title}
            </div>
          </div>
        </div>
        <Accordion isOpen={isOpen} className='horse-accordion__content'>
          {children}
        </Accordion>
      </div>
    )
  }
}

HorseAccordion.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  children: PropTypes.any,
}

HorseAccordion.defaultProps = {
  className: '',
  modifier: '',
}

export default HorseAccordion
