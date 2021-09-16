/**
 *  @module react
 */
import React, { Component } from 'react'

/**
 * @module react-redux
 */
import { connect } from 'react-redux'

/**
 * @module ParallaxHero
 */
import ParallaxHero from 'components/parallax/Hero'

/**
 * @module Partners
 */
import Partners from 'components/home/Partners'

/**
 * @module CopySection
 */
import CopySection from 'components/home/CopySection'

/**
 * @module BottomCta
 */
import BottomCta from 'components/home/BottomCta'

import List from 'components/gui/List'

import {
  homeHero
} from 'assets/home'

import {
  m1,
  m2,
  m3,
  m4
} from 'assets/home/manager'

import View from 'components/routing/View'
import { HOMEPAGE as title } from 'data/titles'

/**
 * @name Home
 * @class
 * @extends Component
 */
export class Home extends Component {
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
    const {isLoggedIn} = this.props
    return (
      <View title={title}>
        <div className='home'>
          <ParallaxHero
            featuredImage={homeHero}>
            <div className='home__hero-content absolute-center'>
              <h1 className='home__hero-text'>We make setting up syndicates simple.</h1>
            </div>
            {/*<p className='home__hero-tip micro semi-bold'>
              <span className='visible-md-up'>
                Use the arrow keys to change jockey. Click and drag to look around.
              </span>
              <span className='hidden-md-up'>
                Tap to change jockey.<br />Drag to look around.
              </span>
            </p>*/}
          </ParallaxHero>
          <Partners />
          <div className='container'>
            <div className='home__section home__cta-section'>
              <div className="row">
                <div className="col-md-12">
                  <h2 className="secondary-font home__cta-headline uppercase">Buying. Owning. Managing. Accounting. Training. Sharing... Racing.</h2>
                  <p>The Racing Manager believes that owning a racehorse should be about the thrill and fun of being an owner. Not chasing payments, managing VAT returns, organising racedays.<br/>Our platform brings together owners, managers, and trainers onto a single, clean platform, designed around you. </p>
                </div>
              </div>
            </div>
          </div>
          <CopySection
            headline="REGISTER. CREATE. RACE."
            featuredImage={m4}>
            <p>
              Creating and managing a racing club or syndicate has just changed forever.
            </p>
            <List items={[
              'Open an account in under 3 minutes.',
              'Import your group members in moments.',
              'Customise your club.',
              'Manage memberships.',
              'Organise racedays.',
              'Love racing.'
            ]} />
          </CopySection>
          <CopySection
            headline="take the reins"
            featuredImage={m1}>
            <p>
              Managing a syndicate encompasses a lot and has never been easy, until now. The Racing Manager has a fully responsive site and app so you can:
            </p>
            <List items={[
              'Advertise for new and loyal members in one marketplace.',
              'Set a customised web page for your syndicate’s brand and horses.',
              'Find all your accounting, messaging and management in one place.'
            ]} />
          </CopySection>
          <CopySection
            headline="stay organised"
            featuredImage={m2}>
            <List items={[
              'Schedule events, tickets and hospitality with ease for your members.',
              'Consolidate all of your management accounts to our new platform.',
              'Instantly message any members or trainers by desktop, tablet or app.',
              'Fast, secure and regular payment collection with our bank integration.',
              'Get an extra level of control with our tailored management settings.'
            ]} />
          </CopySection>
          <CopySection
            headline="engage members"
            featuredImage={m3}>
            <List items={[
              'Regularly prompted updates from your trainer, straight to your group.',
              'A wide range of custom media including photos, videos and polls.',
              'Build a community with a curated update feed and thread replies.',
              'On race day, experience live updates and a sleek user experience.',
              'Industry updates from partners such as the Racing Post and TRM.'
            ]} />
          </CopySection>
          <CopySection
            headline="safe and secure"
            featuredImage={m4}>
            <p>
              Managing a syndicate ultimately comes down to money:
            </p>
            <List items={[
              'Simple HMRC and VAT solutions for yourself and members.',
              'Syndicate, member and horse insurance against unforeseen events.',
              'Regular payment collection and distribution backed by our T&Cs.',
              'AML and KYC checks on new syndicate members.'
            ]} />
          </CopySection>
          <BottomCta isLoggedIn={isLoggedIn}/>
        </div>
      </View>
    )
  }
}

/**
 *  mapStateToProps
 *  @param  {Object} state
 *  @param  {Object} ownProps
 *  @return {Object}
 */
const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.auth ? state.auth.isLoggedIn : false
  }
}

/**
 *  @name mapDispatchToProps
 *  @param  {Function} dispatch
 *  @param  {Object} ownProps
 *  @return {Object}
 */
const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

/**
 *  @module connect
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
