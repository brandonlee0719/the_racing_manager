import React from 'react'
import {
  Route,
  Switch,
  Router as Routes,
} from 'react-router-dom'

import history from 'utils/locationutils'

import AuthRoute from 'components/routing/AuthRoute'

import Startup from 'containers/Startup'

import Layout from 'layouts/Layout'
import ScrollTop from 'components/routing/ScrollTop'
import PageNotFound from 'views/PageNotFound'

import Home from 'views/Home'
import Register from 'views/Registration/Register'
import RegistrationSuccessful from 'views/Registration/RegisterSuccessful'
import RegistrationConfirmation from 'views/Registration/RegisterConfirmation'
import MemberDashboard from 'views/Dashboard/MemberDashboard'
import ManagerDashboardBilling from 'views/ManagerDashboard/ManagerDashboardBilling'
import BrowseHorses from 'views/BrowseHorses'
import RegistrationExistingSyndicate from 'views/Registration/RegisterExistingSyndicate'
import RegisterSyndicate from 'views/Registration/RegisterSyndicate'
import RegisterSyndicateName from 'views/Registration/RegisterSyndicateName'
import OnboardingSyndicateJourney from 'views/Registration/OnboardingSyndicateJourney'
import RegisterSyndicateColours from 'views/Registration/RegisterSyndicateColours'
import RegisterSyndicateMembers from 'views/Registration/RegisterSyndicateMembers'

import Account from 'views/Account/AccountLayout'

import PrivateHorse from 'views/Horse/Private/HorseOverview'
import PrivateHorseStatistics from 'views/Horse/Private/HorseStatistics'
import PrivateHorseInformation from 'views/Horse/Private/HorseInformation'

import PublicHorse from 'views/Horse/Public/HorseOverview'

import Syndicate from 'views/Syndicate/SyndicateMain'
import SyndicateCreation from 'views/Syndicate/SyndicateCreation'
import PrivateSyndicate from 'views/Syndicate/Private/SyndicateOverview'
import PublicSyndicate from 'views/Syndicate/Public/SyndicateOverview'

import Cookies from 'views/StaticPages/Cookies'
import Legal from 'views/StaticPages/Legal'
import Privacy from 'views/StaticPages/Privacy'
import Terms from 'views/StaticPages/Terms'


const router = (
  <Routes history={history}>
    <Startup>
      <Layout>
        <ScrollTop>
          <Switch>
            <Route exact path='/' component={Home} />
            <AuthRoute path='/register' authenticatedPath='/' redirect={Register} />
            <Route path='/registration-successful' component={RegistrationSuccessful} />
            <Route path='/browse-horses' component={BrowseHorses} />

            <Route path='/legal/cookies' component={Cookies} />
            <Route path='/legal/legal' component={Legal} />
            <Route path='/legal/privacy' component={Privacy} />
            <Route path='/legal/terms' component={Terms} />

            <AuthRoute path='/register-existing-syndicate' component={RegistrationExistingSyndicate} redirectPath='/' />
            <AuthRoute path='/register-syndicate' component={RegisterSyndicate} redirectPath='/' />
            <AuthRoute path='/register-syndicate-name' component={RegisterSyndicateName} redirectPath='/' />
            <AuthRoute exact path='/register-syndicate-onboarding' component={OnboardingSyndicateJourney} redirectPath='/' />
            <AuthRoute path='/register-syndicate-colours' component={RegisterSyndicateColours} redirectPath='/' />
            <AuthRoute path='/register-syndicate-members' component={RegisterSyndicateMembers} redirectPath='/' />
            <AuthRoute path='/create-new-syndicate' component={SyndicateCreation} redirectPath='/' />
            <AuthRoute path='/dashboard' component={MemberDashboard} redirectPath='/' />
            <AuthRoute path='/manager-dashboard/billing' component={ManagerDashboardBilling} redirectPath='/' />

            <AuthRoute exact path='/horse/:slug' component={PrivateHorse} redirect={PublicHorse} />
            <AuthRoute exact path='/horse/:slug/statistics' component={PrivateHorseStatistics} redirectPath='/404' />
            <AuthRoute exact path='/horse/:slug/information' component={PrivateHorseInformation} redirectPath='/404' />
            <AuthRoute exact path='/horse/:slug/information/edit' component={PrivateHorseInformation} redirectPath='/404' />

            <AuthRoute path='/account' component={Account} redirectPath='/' />

            <AuthRoute exact path='/syndicate' component={PrivateSyndicate} redirectPath='/' />
            <AuthRoute exact path='/syndicate/:slug' component={PrivateSyndicate} redirectpath='/' />
            <AuthRoute exact path='/syndicate/:slug/edit' component={PrivateSyndicate} redirectPath='/404' />

            <AuthRoute exact path='/onboarding' component={OnboardingSyndicateJourney} redirectPath='/' />

            <Route path='/user/verify/:token' component={RegistrationConfirmation} />
            <Route component={PageNotFound} />
          </Switch>
        </ScrollTop>
      </Layout>
    </Startup>
  </Routes>
)

export default router
