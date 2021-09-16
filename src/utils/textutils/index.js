import React from 'react'
import showdown from 'showdown'

export const multilineTextToJSX = (text) => {
  if (!text) return text
  return text.split('\n').map((part, index) => (<span key={'multilinetext_' + index}>{part}<br/></span>))
}

export const markdownToString = (markdown) => {
  if (!markdown) return markdown
  let parsedText = markdown.split('').filter((char) => {
    return char.match(/^[a-zA-Z0-9 ]$/)
  })
  return parsedText.join('')
}

export const markdownToHTML = (markdown) => {
  const converter = new showdown.Converter()
  showdown.setOption('openLinksInNewWindow', true)
  const html = converter.makeHtml(markdown)
  console.log(markdown, html)
  return html
}
