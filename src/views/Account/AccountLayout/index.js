import React from 'react'

import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import AuthRoute from 'components/routing/AuthRoute'

import { Switch, Redirect } from 'react-router-dom'

import AccountSidePanel from 'components/account/AccountSidePanel'

import AccountMobileSidePanel from 'components/account/AccountMobileSidePanel'

import AccountPersonalInformation from 'views/Account/AccountPersonalInformation'

import AccountContactDetails from 'views/Account/AccountContactDetails'

import AccountSecuritySettings from 'views/Account/AccountSecuritySettings'

import AccountPaymentMethods from 'views/Account/AccountPaymentMethods'

import AccountNotifications from 'views/Account/AccountNotifications'

import ViewHeader from 'components/common/ViewHeader'

import View from 'components/routing/View'

import { ACCOUNT as title } from 'data/titles'

import MediaQuery from 'react-responsive'

import {
  SM,
  SM_MAX
} from 'data/breakpoints'

const AccountLayout = (props) => {
  const {
    name
  } = props

  return (
    <View title={title}>
      <div className='account-layout'>
        <ViewHeader
          title={`hello, ${name}`} />
        <MediaQuery maxWidth={SM_MAX}>
          <AccountMobileSidePanel />
        </MediaQuery>
        <div className='container'>
          <div className='account-layout__container'>
            <MediaQuery minWidth={SM}>
              <div className='col-lg-3 col-md-4 col-sm-4 col-xs-12 account-layout__flex-item'>
                <AccountSidePanel />
              </div>
            </MediaQuery>
            <div className='col-lg-9 col-md-8 col-sm-8 col-xs-12'>
              <div className='account-layout__content'>
                <Switch>
                  <AuthRoute exact path='/account' component={AccountPersonalInformation} redirectPath='/' />
                  <AuthRoute exact path='/account/contact' component={AccountContactDetails} redirectPath='/' />
                  <AuthRoute exact path='/account/security' component={AccountSecuritySettings} redirectPath='/' />
                  <AuthRoute exact path='/account/payment' component={AccountPaymentMethods} redirectPath='/' />
                  <AuthRoute exact path='/account/notifications' component={AccountNotifications} redirectPath='/' />
                  <Redirect to='/404' />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    </View>
  )
}

AccountLayout.propTypes = {
  name: PropTypes.string
}

const mapStateToProps = (state, ownProps) => {
  const {
    auth
  } = state

  const {
    details
  } = auth

  return {
    name: details.firstname
  }
}

export default connect(
  mapStateToProps,
  null
)(AccountLayout)
