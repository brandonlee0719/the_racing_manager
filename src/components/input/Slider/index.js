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
import { Range } from 'rc-slider'

// Styles for rc-slider
import 'rc-slider/assets/index.css'

/**
 *  @name  Tip
 *  @description The tip to be shown below the slider
 */
export const Tip = (props) => {
  const {
    value,
    modifier,
    tipFormatter
  } = props

  const modifiedClassNames = classNames('slider__tip', '', modifier)

  return (
    <div className={modifiedClassNames}>
      <h6>{tipFormatter(value)}</h6>
    </div>
  )
}

class Slider extends PureComponent {
  constructor (props) {
    super(props)

    // Initial state
    this.state = {
      leftTipValue: 0,
      rightTipValue: 0
    }

    // Bind custom fn
    this.onChange = this.onChange.bind(this)
    this.emitChange = this.emitChange.bind(this)
    this.updateTipValues = this.updateTipValues.bind(this)
  }

  componentWillMount () {
    const {
      defaultValue
    } = this.props

    // Set the initial tip values to the default
    this.updateTipValues(defaultValue[0], defaultValue[1])
  }

  /**
   *  onChange
   *  @param  {Array} values
   *  @description When the values of the slider changes
   *               callback is invoked with the new values in array format
   */
  onChange (values) {
    this.updateTipValues(values[0], values[1])
  }

  updateTipValues (leftValue, rightValue) {
    this.setState({
      leftTipValue: leftValue,
      rightTipValue: rightValue
    }, () => {
      this.emitChange()
    })
  }

  emitChange () {
    const {
      onChange
    } = this.props

    onChange && onChange([this.state.leftTipValue, this.state.rightTipValue])
  }

  render () {
    const {
      min,
      max,
      defaultValue,
      tipFormatter,
      className
    } = this.props

    const {
      leftTipValue,
      rightTipValue
    } = this.state

    const modifiedClassNames = classNames('slider', className)

    return (
      <div className={modifiedClassNames}>
        <div className='slider__tips'>
          <Tip
            tipFormatter={tipFormatter}
            modifier='left'
            value={leftTipValue} />
          <Tip
            tipFormatter={tipFormatter}
            modifier='right'
            value={rightTipValue} />
        </div>
        <Range
          className='slider__range'
          min={min}
          max={max}
          onChange={this.onChange}
          defaultValue={defaultValue}/>
      </div>
    )
  }
}

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  defaultValue: PropTypes.array,
  tipFormatter: PropTypes.func
}

Slider.defaultProps = {
  min: 0,
  max: 20000,
  defaultValue: [0, 20000],
  step: 50,
  tipFormatter: (value) => `£${value}`
}

export default Slider
