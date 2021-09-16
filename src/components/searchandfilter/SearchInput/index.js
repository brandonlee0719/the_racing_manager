/**
 *  @module React
 */
import React, { Component } from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module Input
 */
import Input from 'components/input/Input'

/**
 *  @module Icon
 */
import Icon from 'components/icon'

/**
 *  @module classNames
 */
import classNames from 'utils/classnames'

/**
 *  @module omit
 */
import omit from 'utils/objectutils/omit'

/**
 *  @class
 *  @name SearchInput
 *  @extends {Component}
 */
class SearchInput extends Component {
  constructor (props) {
    super(props)

    // Bind custom fn
    this.handleSearchResult = this.handleSearchResult.bind(this)
  }

  handleSearchResult (event) {
    const value = event.target.value

    const {
      onChange
    } = this.props

    onChange && onChange(value)
  }

  render () {
    const {
      containerClassName
    } = this.props

    const modifiedClassNames = classNames('search-input', containerClassName)

    // Props for the input excluding any props meant for parent component.
    const inputProps = omit(this.props, ['containerClassName', 'handleChange'])

    return (
      <div className={modifiedClassNames}>
        <Icon
          onClick={this.openSearch}
          className='search-input__glass absolute-center-v'
          modifier='magnifying-glass' />
        <Input
          handleChange={this.handleSearchResult}
          {...inputProps} />
      </div>
    )
  }
}

SearchInput.propTypes = {
  containerClassName: PropTypes.string,
  onChange: PropTypes.func
}

/**
 *  @module SearchInput
 */
export default SearchInput
