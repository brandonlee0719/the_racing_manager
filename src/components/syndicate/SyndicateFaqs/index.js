import React from 'react'

import Faqs, { FaqItem } from 'components/common/Faqs'

import PropTypes from 'prop-types'

const SyndicateFaqs = (props) => {
  const {
    faqs
  } = props

  return (
    <Faqs
      title='syndicate faqs'>
      {
        faqs.map(({question, answer}, index) => {
          return (
            <FaqItem
              key={index}
              question={question}
              answer={answer}
            />
          )
        })
      }
    </Faqs>
  )
}

SyndicateFaqs.propTypes = {
  faqs: PropTypes.arrayOf(PropTypes.object)
}

SyndicateFaqs.defaultProps = {
  faqs: []
}

export default SyndicateFaqs
