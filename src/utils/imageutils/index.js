/*
* @name getImage
* @param {string} url - url of the image path
* @return {Promise}
* @summary Takes a url string and waits for the image to load / fail and returns a promise
*/
export const getImage = (url = '') => {
  return new Promise((resolve, reject) => {
    const img = new Image()

    img.onload = () => { resolve(img) }

    img.onerror = reject

    img.src = url
  })
}

/**
 *  @name  isInViewport
 *  @param  {Element} node
 *  @param  {Number} offset
 *  @return {Boolean}
 */
export const isInViewport = (node, offset = 0) => {
  // get element position in viewport
  const rect = node.getBoundingClientRect()

  // get viewport height and width
  const viewportHeight = (window.innerHeight || document.documentElement.clientHeight)

  const viewportWidth = (window.innerWidth || document.documentElement.clientWidth)

  // check if the element is in the viewport (or near to them)
  return (
    rect.bottom >= (0 - offset) &&
    rect.right >= (0 - offset) &&
    rect.top < (viewportHeight + offset) &&
    rect.left < (viewportWidth + offset)
  )
}

export const fileVideoToThumbnail = (fileReader, file) => {
  return new Promise((resolve, reject) => {
    const errMsg = 'Could not load video img'

    const blob = new Blob([fileReader.result], {type: file.type})

    const url = URL.createObjectURL(blob)

    const video = document.createElement('video')

    const timeupdate = () => {
      if (snapImage()) {
        video.removeEventListener('timeupdate', timeupdate)
        video.pause()
      }
    }

    video.addEventListener('loadeddata', () => {
      if (snapImage()) {
        video.removeEventListener('timeupdate', timeupdate)
      }
    })

    const snapImage = () => {
      const canvas = document.createElement('canvas')
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)

      const image = canvas.toDataURL('image/png')

      const success = (image.length > 100000)

      if (success) {
        return resolve(image)
      }

      return reject(errMsg)
    }

    video.addEventListener('timeupdate', timeupdate)
    video.preload = 'metadata'
    video.src = url
    // Load video in Safari / IE11
    video.muted = true
    video.playsInline = true
    video.play()
  })
}

/**
 *  generatethumbnailFromFiles
 *  @param  {Array}  files
 *  @return {Promise}
 */
export const generatethumbnailFromFiles = (files = []) => {
  return new Promise((resolve, reject) => {
    if (!files.length) {
      const errorMsg = 'No files'
      return reject(errorMsg)
    }

    // Create a new file reader for thumbnail previews.
    const fileReader = new FileReader()

    // Get the first file.
    const file = files[0]

    // If the file is an image
    if (file.type.match('image')) {
      // When the file reader has loaded.
      fileReader.onload = ({target}) => {
        return resolve([target.result])
      }

      fileReader.readAsDataURL(file)
    } else { // If the file is an video
      fileReader.onload = () => {
        return fileVideoToThumbnail(fileReader, file)
        .then(result => {
          return resolve([result])
        })
        .catch(error => {
          return reject(error)
        })
      }
      fileReader.readAsArrayBuffer(file)
    }
  })
}
