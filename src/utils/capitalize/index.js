import titleize from 'titleize'

const defaultRegex = /\((.*)\)/

const capitalize = (str, regex = defaultRegex) => {
  if (!str) return ''

  let capitalized = titleize(str)
  const brackets = str.match(regex)

  if (Array.isArray(brackets)) {
    let start, end, bracket

    brackets.forEach((br) => {
      if (br.indexOf('(') && br.indexOf(')')) return

      start = str.indexOf(br)
      end = start + br.length
      bracket = str.slice(start, end)

      capitalized = capitalized.replace(
        bracket.toLowerCase(),
        bracket.toUpperCase()
      )
    })
  }

  return capitalized
}

export default capitalize
