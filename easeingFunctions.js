/**
 * Easing functions:
 * @see http://gizma.com/easing/
 */

export const linearTween = function(t, b, c, d) {
  return c * t / d + b
}

export const easeInQuad = function(t, b, c, d) {
  t /= d
  return c * t * t + b
}

export const easeOutQuad = function(t, b, c, d) {
  t /= d;
  return -c * t * (t - 2) + b;
}

export const easeInOutQuad = function(t, b, c, d) {
  t /= d / 2
  if (t < 1) return c / 2 * t * t + b
  t--
  return -c / 2 * (t * (t - 2) - 1) + b
}

export const easeInCubic = function(t, b, c, d) {
  t /= d
	return c * t * t * t + b
}

export const easeOutCubic = function(t, b, c, d) {
  t /= d
	t--
	return c * ( t * t * t + 1) + b
}

export const easeInOutCubic = function(t, b, c, d) {
  t /= d / 2
	if (t < 1) return c / 2 * t * t * t + b
	t -= 2
	return c / 2 * (t * t * t + 2) + b
}

export const easeInQuart = function(t, b, c, d) {
	t /= d
	return c * t * t * t * t + b
}

export const easeOutQuart = function(t, b, c, d) {
  t /= d
	t--
	return -c * ( t * t * t * t - 1) + b
}

export const easeInOutQuart = function(t, b, c, d) {
  t /= d / 2
	if (t < 1) return c / 2 * t * t * t * t + b
	t -= 2
	return -c / 2 * (t * t * t * t - 2) + b
}

export const easeInQuint = function(t, b, c, d) {
  t /= d
	return c * t * t * t * t * t + b
}

export const easeOutQuint = function(t, b, c, d) {
  t /= d
	t--
	return c * (t * t * t * t * t + 1) + b
}

export const easeInOutQuint = function(t, b, c, d) {
  t /= d / 2
	if (t < 1) return c / 2 * t * t * t * t * t + b
	t -= 2
	return c / 2 * (t * t * t * t * t + 2) + b
}

export const easeInSine = function(t, b, c, d) {
  return -c * Math.cos(t / d * (Math.PI / 2)) + c + b
}

export const easeOutSine = function(t, b, c, d) {
  return c * Math.sin(t / d * (Math.PI / 2)) + b
}

export const easeInOutSine = function(t, b, c, d) {
  return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b
}

export const easeInExpo = function(t, b, c, d) {
  return c * Math.pow(2, 10 * (t / d - 1)) + b
}

export const easeOutExpo = function(t, b, c, d) {
  return c * (-Math.pow(2, -10 * t / d) + 1) + b
}

export const easeInOutExpo = function(t, b, c, d) {
  t /= d / 2
	if (t < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b
	t--
	return c / 2 * (-Math.pow( 2, -10 * t) + 2) + b
}

export const easeInCirc = function(t, b, c, d) {
  t /= d
	return -c * (Math.sqrt(1 - t * t) - 1) + b
}

export const easeOutCirc = function(t, b, c, d) {
	t /= d
	t--
	return c * Math.sqrt(1 - t * t) + b
}

export const easeInOutCirc = function(t, b, c, d) {
  t /= d / 2
	if (t < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b
	t -= 2
	return c / 2 * (Math.sqrt(1 - t * t) + 1) + b
}
