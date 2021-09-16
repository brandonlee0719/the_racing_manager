/**
 *  preparePayloadForHorseSearch
 *  @description Will format the data for sending to the server when searching for horses on
 *               browse horses
 *  @param  {Object} data
 *  @return {Object}
 */
export const preparePayloadForHorseSearch = (data) => {
  const {
    filterOpen,
    filters,
    sort,
    query
  } = data

  let payload = {
    query
  }

  if (Object.keys(sort).length) {
    payload['sort'] = sort
  }

  if (filterOpen) {
    payload['filter'] = Object.keys(filters).reduce((arr, key) => {
      arr.push({
        field: key,
        ...filters[key]
      })

      return arr
    }, [])
  }

  return payload
}