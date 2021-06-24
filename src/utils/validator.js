import { isArray, isDef, isObject, isString, isUndef, isFunction } from './type'

export function CodeValidator(errorMsg) {
  return (rule, value, callback) => {
    if (value.length !== 6) {
      callback(new Error(errorMsg))
    } else {
      callback()
    }
  }
}

export function MaxValidator(max = 200, errorMsg) {
  return (rule, value, callback) => {
    if (isDef(value) && value > max) {
      callback(new Error(errorMsg))
    } else {
      callback()
    }
  }
}

export function MaxLengthValidator(length = 32, errorMsg) {
  return (rule, value, callback) => {
    if (isDef(value) && value.length > length) {
      callback(new Error(errorMsg))
    } else {
      callback()
    }
  }
}

export function PasswordValidator(errorMsg) {
  return RegexValidator(/^(?![0-9]+$)(?![a-zA-Z]+$)(?![^a-zA-Z]+$).{8,}$/, errorMsg)
}

export function PhoneValidator(errorMsg) {
  return RegexValidator(/^1[3456789]\d{9}$/, errorMsg)
}

/**
 * 正则表达式校验
 * @param {*} regex 正则或正则字符串
 * @param {*} errorMsg 错误提示
 */
export function RegexValidator(regex, errorMsg) {
  let reg
  if (isString(regex)) {
    reg = new RegExp(regex)
  } else {
    reg = regex
  }
  return (rule, value, callback) => {
    if (!reg.test(value)) {
      callback(new Error(errorMsg))
    } else {
      callback()
    }
  }
}

export function RequiredValidator(errorMsg) {
  return (rule, value, callback) => {
    if (isUndef(value)) {
      return callback(new Error(errorMsg))
    }
    if (isArray(value) && !value.length) {
      return callback(new Error(errorMsg))
    }
    if (isString(value) && !value) {
      return callback(new Error(errorMsg))
    }
    if (isObject(value) && JSON.stringify(value) === '{}') {
      return callback(new Error(errorMsg))
    }
    return callback()
  }
}

/**
 * 生成统一的验证器
 *
 * @param {string or validaor} type 生成字符串 和 验证器
 * @param {any} message
 * @param {string} [trigger=['blur', 'change']]
 * @returns
 */
export function generateValidator(type, message, trigger = ['blur', 'change']) {
  // 生成验证器
  const validator = {
    trigger: trigger
  }
  if (isString(type)) {
    validator.type = type
    if (type === 'required') {
      validator.validator = RequiredValidator(message)
    }
    validator.message = message
  } else if (isFunction(type)) {
    validator.validator = type
  }

  return validator
}
