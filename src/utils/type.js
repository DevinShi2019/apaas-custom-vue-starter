const isType = function(type) {
  return function(obj) {
    return Object.prototype.toString.call(obj) === `[object ${type}]`
  }
}

const isString = isType('String')

const isArray = isType('Array')

const isObject = isType('Object')

const isBoolean = isType('Boolean')

const isFunction = isType('Function')

const isNumber = isType('Number')

const isPromise = isType('Promise')

export {
  isType,
  isString,
  isArray,
  isObject,
  isFunction,
  isNumber,
  isBoolean,
  isPromise
}

export function isUndef (v) {
  return v === undefined || v === null
}

export function isDef (v) {
  return v !== undefined && v !== null
}
