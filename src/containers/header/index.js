import React, { PureComponent } from 'react'

/**
 *  @module Header
 */
import Header from 'components/navigation/header'

/**
 *  @module HeaderHome
 */
import HeaderPublic from 'components/navigation/header/HeaderPublic'

/**
 *  @module HeaderPrivate
 */
import HeaderPrivate from 'components/navigation/header/HeaderPrivate'

/**
 *  @module connect
 */
import { connect } from 'react-redux'

/**
 *  @module logOut
 */
import { logOut } from 'actions/auth'

/**
 *  @module withRouter
 */
import {
  withRouter
} from 'react-router-dom'

import {
  addToastSuccess
} from 'actions/toast'

import { LOGGED_OUT } from 'texts/successmessages'

class HeaderContainer extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      showLogin: false,
      showAccount: false
    }

    this.toggleLogin = this.toggleLogin.bind(this)
    this.toggleAccount = this.toggleAccount.bind(this)
  }

  toggleLogin () {
    this.setState((state) => ({
      showLogin: !state.showLogin
    }))
  }

  toggleAccount () {
    this.setState((state) => ({
      showAccount: !state.showAccount
    }))
  }

  componentWillReceiveProps ({ isLoggedIn }) {
    if (isLoggedIn !== this.props.isLoggedIn) {
      this.setState({
        showLogin: false,
        showAccount: false
      })
    }
  }

  render () {
    const {
      isLoggedIn,
      performLogOut
    } = this.props

    return (
      <Header
        logohref='/'>
        {
          isLoggedIn
          ? <HeaderPrivate
              onLogout={performLogOut}
              onAccountClick={this.toggleAccount}
              showAccount={this.state.showAccount} />
          : <HeaderPublic
              onLoginButtonClick={this.toggleLogin}
              showLogin={this.state.showLogin} />
        }
      </Header>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    performLogOut: () => {
      dispatch(logOut())
      dispatch(addToastSuccess(LOGGED_OUT))
    }
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer))
