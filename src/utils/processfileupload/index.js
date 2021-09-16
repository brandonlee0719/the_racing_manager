/**
 * @name processFileUpload
 * @param {object} event (file upload event)
 * @param {Array} AllowedFileTypes
 * @returns Promise
 * @description This function takes in a file change event from an input and returns the files in an array
 *              Only handles single files for the minute.
 */
const processFileUpload = (e, allowedFileTypes = []) => {
  return new Promise((resolve, reject) => {
    // check the allowedFiletypes is an instance of an array
    if (!Array.isArray(allowedFileTypes)) {
      const errorMsg = 'allowedFileTypes is not an instance of an array'
      try {
        throw new TypeError(errorMsg)
      } catch (e) {
        console && console.log(`${e}: ${errorMsg}`)
      }
      return reject(errorMsg)
    }

    e.preventDefault()

    // Cache a files variable to be used later.
    let files

    // Get the files from the file upload.
    if (e.dataTransfer) {
      files = e.dataTransfer
    } else if (e.target) {
      files = e.target.files
    }

    // If no files are provided, exit.
    if (!files || files.length <= 0) {
      const errorMsg = 'No file was provided'
      return reject(errorMsg)
    }

    // If any of the files type is not allowed, then exit.
    if (allowedFileTypes.length) {
      for (let i = 0, len = files.length; i < len; i++) {
        if (!~allowedFileTypes.indexOf(files[i].type)) {
          const errorMsg = 'File type is not within the correct boundaries... Please check allowedFileTypes'
          return reject(errorMsg)
        }
      }
    }

    // Return the files.
    return resolve(files)
  })
}

/**
 *  @module processFileUpload
 */
export default processFileUpload
