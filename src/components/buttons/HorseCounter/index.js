/**
 *  @module React
 */
import React, { PureComponent } from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module Icon
 */
import Icon from 'components/icon'

/**
 *  @module Input
 */
import Input from 'components/input/Input'

/**
 *  @module IS_NUMBER
 */
import { IS_NUMBER } from 'utils/validation/ValidationTypes'

/**
 *  @class
 *  @name  Counter
 *  @extends { PureComponent }
 */
class Counter extends PureComponent {
  constructor (props) {
    super(props)

    // Initial state
    this.state = {
      count: 0
    }

    // Bind custom fn
    this.adjustCountToState = this.adjustCountToState.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.incrementCounter = this.incrementCounter.bind(this)
    this.emitChange = this.emitChange.bind(this)
    this.decrementCounter = this.decrementCounter.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  componentWillMount () {
    this.adjustCountToState()
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.min !== this.props.min || nextProps.max !== this.props.max) {
      this.adjustCountToState(this.state.count, nextProps.min, nextProps.max)
    }
  }

  emitChange () {
    const {
      onChange
    } = this.props

    // Cast to a float
    onChange && onChange(parseFloat(this.state.count, 10))
  }

  /**
   *  adjustCountToState
   *  @description Will set the count and check it's within the min + max boundaries
   */
  adjustCountToState (value = this.props.defaultCount, min = this.props.min, max = this.props.max) {
    let count = value

    if (count < min) {
      count = min
    }

    if (count > max) {
      count = max
    }

    this.setState({
      count
    }, () => {
      this.emitChange()
    })
  }

  handleInputChange (event) {
    const { target } = event

    let count = target.value

    // If the count is an empty string, assume the user has deleted all characters
    // Set the state of the empty string and return out
    if (count === '') {
      return this.setState({
        count
      }, () => {
        this.emitChange()
      })
    }

    if (!IS_NUMBER(count)) {
      return false
    }

    // Set the new count
    this.adjustCountToState(count)
  }

  incrementCounter () {
    let incCount = parseFloat(this.state.count, 10) + 1

    if (incCount <= this.props.max) {
      this.setState({
        count: incCount
      }, () => {
        this.emitChange()
      })
    }
  }

  decrementCounter () {
    let decCount = parseFloat(this.state.count, 10) - 1

    if (decCount >= this.props.min) {
      this.setState({
        count: decCount
      }, () => {
        this.emitChange()
      })
    }
  }

  handleBlur () {
    if (this.state.count === '') {
      this.setState({
        count: this.props.min
      }, () => {
        this.emitChange()
      })
    }
  }

  render () {
    const {
      count
    } = this.state

    return (
      <div className='counter'>
        <Icon
          onClick={this.decrementCounter}
          modifier='minus' />
        <div className='counter__input'>
          <Input
            inputClassName='text-center'
            name='counter'
            handleChange={this.handleInputChange}
            handleBlur={this.handleBlur}
            value={count} />
        </div>
        <Icon
          onClick={this.incrementCounter}
          modifier='plus' />
      </div>
    )
  }
}

Counter.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  defaultCount: PropTypes.number,
  onChange: PropTypes.func
}

Counter.defaultProps = {
  defaultCount: 0,
  min: 0,
  max: 50
}

export default Counter
