import jsdom from 'jsdom'
import localStorage from 'mock-local-storage'

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.window = document.defaultView
global.navigator = global.window.navigator

if (!global.window.localStorage) {
  global.window.localStorage = localStorage
}

global.window.matchMedia = function () {
  return {
    matches: false,
    addListener: function () {
    },
    removeListener: function () {
    }
  }
}
