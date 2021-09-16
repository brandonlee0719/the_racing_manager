export const roundNumberWithoutZeros = (num, exp = 2) => {
  return num.toFixed(exp).replace(/[.,]00$/, '')
}
