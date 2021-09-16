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
import { CREATE_NEW_SYNDICATE as title } from 'data/titles'

/**
 *  @module ViewHeader
 */
import ViewHeader from 'components/common/ViewHeader'

/**
 *  @module CopySection
 */
import CopySection from 'components/syndicate/SyndicateNew/CopySection'

/**
 *  @module TextButton
 */
import TextButton from 'components/buttons/TextButton'

/**
 * @name Register
 * @class
 * @extends PureComponent
 */
export default class SyndicateCreation extends PureComponent {
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
        <div className="create-new-syndicate">
          <div className="create-new-syndicate__header">
            <ViewHeader
              title={`create a syndicate`} />
          </div>
          <CopySection
            headline="SOLE OWNER">
            <p className="header-section">
              1 Person
            </p>
            <br />
            <p className="content-section">
              This is when you are the only person involved in the ownership of the
              horse and you have a 100% share in the animal. The horse will run in
              your name and colours. Any costs of profits will be your shares alone.
            </p>
            <br />
            <TextButton
              modifier='secondary'
              text='SELECT'
              className='syndicate-creation__more-btn fluid-btn'
            />
            <TextButton
              text='MORE INFO'
              modifier='secondary'
              className='syndicate-creation__more-btn'
            />
          </CopySection>
          <CopySection
            headline="JOINT OWNERSHIP">
            <p className="header-section">
              2-12 People
            </p>
            <br />
            <p className="content-section">
              Each joint owner is required tobe a registered owner, and percentages
              are specified to each horse registered. The horse can run in either a
              joint ownership name or in the name of one of the joint owners.
            </p>
            <br />
            <TextButton
              text='SELECT'
              modifier='secondary'
              className='syndicate-creation__more-btn fluid-btn'
            />
            <TextButton
              text='MORE INFO'
              modifier='secondary'
              className='syndicate-creation__more-btn'
            />
          </CopySection>
          <CopySection
            headline="RACING PARTNERSHIP">
            <p className="header-section">
              2-20 People
            </p>
            <br />
            <p className="content-section">
              At least two partners must be a registered owner. The two registered
              owners (`nominated partners`) are ultimately responsible for the setup
              and administration of the Racing Partnership.
            </p>
            <br />
            <TextButton
              modifier='secondary'
              text='SELECT'
              className='syndicate-creation__more-btn fluid-btn'
            />
            <TextButton
              text='MORE INFO'
              modifier='secondary'
              className='syndicate-creation__more-btn'
            />
          </CopySection>
        </div>
      </View>
    )
  }
}
