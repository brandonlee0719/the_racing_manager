import { Component, Children } from 'react'
import PropTypes from 'prop-types'
import withSideEffect from 'react-side-effect'

class BodyStyle extends Component {
  render () {
    return this.props.children ? Children.only(this.props.children) : null
  }
}

BodyStyle.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string
}

const reducePropsToState = (propsList) => {
  const style = {}
  let className = ''

  propsList.forEach((prop) => {
    Object.assign(style, prop.style)

    if (prop.className) {
      className += `${prop.className} `
    }
  })

  return {style, className}
}

const handleStateChangeOnClient = ({style, className}) => {
  for (const key in style) {
    if (document.body.style.hasOwnProperty(key)) {
      document.body.style[key] = style[key]
    }
  }

  document.body.className = className
}

export default withSideEffect(
  reducePropsToState,
  handleStateChangeOnClient
)(BodyStyle)
