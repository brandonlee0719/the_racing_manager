/**
 *  @module react
 */
import React, { PureComponent } from 'react'

/**
 *  @module View
 */
import View from 'components/routing/View'

/**
 *  @module title
 */
import { REGISTER_EXISTING_SYNDICATE as title } from 'data/titles'

/**
 *  @module ViewHeader
 */
import ViewHeader from 'components/common/ViewHeader'

/**
 * @module RegisterExistingSyndicateFormContainer
 */
import RegisterExistingSyndicateFormContainer from 'containers/RegisterExistingSyndicateForm'

/**
 * @name Register
 * @class
 * @extends PureComponent
 */

export default class RegisterExistingSyndicate extends PureComponent {
  /**
   * @constructor
   * @param { Object } props
   */
  constructor (props) {
    super(props)
  }

  /**
   * Render method
   * @returns { React.Component }
   */
  render () {
    return (
      <View title={title}>
        <div className="register-existing-syndicate">
          <div className="register-existing-syndicate__header">
            <ViewHeader
              title={`register a syndicate`} />
          </div>
          <div className="container register-existing-syndicate__section">
            <RegisterExistingSyndicateFormContainer />
          </div>
        </div>
      </View>
    )
  }
}