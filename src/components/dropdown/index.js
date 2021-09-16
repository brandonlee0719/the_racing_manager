import React, {Component} from 'react'

class DropDown extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showDropDown: true
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
  }

  render () {
    const {children, RenderDropDown} = this.props
    const {showDropDown} = this.state
    return (
      <div onMouseEnter={this.handleMouseEnter}>
        {children}
        {showDropDown && <RenderDropDown/>}
      </div>
    )
  }

  handleMouseEnter () {
    this.setState({
      showDropDown: true
    })
  }
}

export default DropDown
