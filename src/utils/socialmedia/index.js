import { constructQuery } from 'utils/request'

/**
 *  socialMediaLinks
 *  @type {Object}
 */
export const socialMediaLinks = {
  facebook: 'https://www.facebook.com',
  twitter: 'https://www.twitter.com',
  pinterest: 'https://www.pinterest.com'
}

/**
 *  getSocialMediaLinks
 *  @param  {String} socialName
 *  @return {String}
 */
export const getSocialMediaLinks = socialName => {
  if (socialMediaLinks[socialName]) {
    return socialMediaLinks[socialName]
  }
}

export const email = ({ subject = '', body = '' }) => {
  return 'mailto:' + constructQuery({ subject, body })
}

export const twitter = ({ url = '', title = '', via = '', hashtags = [] }) => {
  return 'https://twitter.com/share' + constructQuery({
    url,
    text: title,
    via,
    hashtags: hashtags.join(',')
  })
}

export const whatsapp = ({ url = '', text = '', separator = '. ' }) => {
  return 'https://api.whatsapp.com/send' + constructQuery({
    text: text + separator + url
  })
}

export const facebook = ({ url = '', quote = undefined, hashtag = undefined }) => {
  return 'https://www.facebook.com/sharer/sharer.php' + constructQuery({
    u: url,
    quote,
    hashtag
  })
}

export const linkedin = ({ url = '', title = '', description = '' }) => {
  return 'https://linkedin.com/shareArticle' + constructQuery({
    url,
    title,
    summary: description
  })
}
