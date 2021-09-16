import React, { PureComponent } from 'react'

/**
 *  @module View
 */
import View from 'components/routing/View'

/**
 *  @module ViewHeader
 */
import ViewHeader from 'components/managerdashboard/ManagerViewHeader'

/**
 *  @module title
 */
import { MANAGER_DASHBOARD_BILLING as title } from 'data/titles'

/**
 *  @module LinkHeader
 */
import LinkHeader from 'components/managerdashboard/ManagerLinkHeader'

/**
 *  @module FeeStructure
 */
import FeeStructure from 'containers/ManagerDashboard/ManagerDashboardBilling/FeeStructureForm'

/**
 *  @module BankDetails
 */
import BankDetails from 'containers/ManagerDashboard/ManagerDashboardBilling/BankDetailsForm'

/**
 *  @module InvoiceArchive
 */
import InvoiceArchive from 'containers/ManagerDashboard/ManagerDashboardBilling/InvoiceArchive'

/**
 *  @name Register
 *  @class
 *  @extends PureComponent
 */

export default class ManagerDashboardBilling extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View title={title}>
        <div className="manager-dashboard">
          <div className="manager-dashboard-link__header">
            <LinkHeader />
          </div>
          <div className="manager-dashboard__header">
            <ViewHeader
              title={`*Syndicatename billing`} />
          </div>
          <div className="container manager-dashboard__section">
            <div className="row forms-top">
              <div className="fee-structure col-md-9 col-sm-8 col-xs-12">
                <FeeStructure />
              </div>
              <div className="bank-details col-md-3 col-sm-4 col-lg-12">
                <BankDetails />
              </div>
            </div>
            <div className="row forms-bottom">
              <div className="invoice-archive">
                <InvoiceArchive />
              </div>
            </div>
          </div>
        </div>
      </View>
    )
  }
}
