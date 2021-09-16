import history from 'utils/locationutils'

const editHorseInformationRegex = /^\/((horse\/[a-zA-Z0-9-()._]+\/information)|(syndicate\/[a-zA-Z0-9-()._]+))\/edit\/?$/

const showEditOptions = () => { // Determines if edit options should be displayed
  if (history.location.pathname.match(editHorseInformationRegex)) {
    return true
  }
  return false
}

export {showEditOptions}
