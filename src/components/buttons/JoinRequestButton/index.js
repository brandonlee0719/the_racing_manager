import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import TextButton from 'components/buttons/TextButton'
import {Link} from 'react-router-dom'

class JoinRequestButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      joinRequestSent: false
    }
    this.sendJoinRequest = this.sendJoinRequest.bind(this)
  }

  sendJoinRequest () {
    this.setState({joinRequestSent: true})
    this.props.requestToJoin()
  }

  render () {
    const {isLoggedIn, className} = this.props

    const {joinRequestSent} = this.state

    return (
      isLoggedIn ? (
        <span onClick={this.sendJoinRequest}>
            <TextButton
              className={className}
              isDisabled={joinRequestSent}
              text={joinRequestSent ? 'Join request sent' : 'Request to join'}
              modifier='md'
            />
          </span>
      ) : (
        // TODO: in future it will 'registerUrl' variable
        // either register/horse/:slug or register/syndicate/:slug
        <Link to='/register'>
          <TextButton
            text='Register to join'
            className={className}
            modifier='md'
          />
        </Link>
      )
    )
  }
}

JoinRequestButton.propTypes = {
}

JoinRequestButton.defaultProps = {
  buttonModifier: 'secondary'
}

export default JoinRequestButton
