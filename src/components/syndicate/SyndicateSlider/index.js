/**
 *  @module React, PureComponent
 */
import React, { PureComponent } from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module classNames
 */
import classNames from 'utils/classnames'

/**
 *  @module Range
 */
import Slider from 'rc-slider'

import Tooltip from 'rc-tooltip'

// Styles for rc-slider
import 'rc-slider/assets/index.css'

const Handle = Slider.Handle

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props
  return (
    <Tooltip
      overlayClassName="distribution-slider"
      prefixCls="rc-slider-tooltip"
      overlay={value + '%'}
      visible={true}
      placement="bottom"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  )
}

class SyndicateSlider extends PureComponent {
  constructor (props) {
    super(props)

    // Initial state
    this.state = {
      value: 0,
      min: 0,
      max: 100
    }

    // Bind custom fn
    this.onChange = this.onChange.bind(this)
    this.emitChange = this.emitChange.bind(this)
    this.updateValue = this.updateValue.bind(this)
  }

  componentWillMount () {
    const defaultValue = this.props.MemberInfo.values.distribution

    // Set the initial tip values to the default
    this.updateValue(defaultValue)
  }

  /**
   *  onChange
   *  @param  {Array} values
   *  @description When the values of the slider changes
   *               callback is invoked with the new values in array format
   */
  onChange (value) {
    this.updateValue(value)
  }

  updateValue (value) {
    this.setState({
      value: value
    }, () => {
      this.emitChange()
    })
  }

  emitChange () {
    const {
      dataKey,
      onChange
    } = this.props

    onChange && onChange(dataKey, this.state.value)
  }

  render () {
    const {
      className
    } = this.props

    const modifiedClassNames = classNames('slider', className)

    return (
      <div className={modifiedClassNames}>
        <Slider
          className='slider__range'
          min={this.state.min}
          max={this.state.max}
          onChange={this.onChange}
          handle={handle}
          defaultValue={this.state.value}/>
      </div>
    )
  }
}

SyndicateSlider.propTypes = {
  className: PropTypes.string
}

SyndicateSlider.defaultProps = {
  className: ''
}

export default SyndicateSlider
