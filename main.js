'use strict'

/**
 * Easing functions:
 * @see http://gizma.com/easing/
 * @param {Float} t current time
 * @param {Float} b start value
 * @param {Float} c change in value
 * @param {Float} d duration
 */

import * as easingFunctions from './src/easingFunctions'

export default easingFunctions

if (window) {
  window.easingFunctions = easingFunctions
}