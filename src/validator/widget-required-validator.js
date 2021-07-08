const WidgetRequiredValidator = (errorMsg) => {
  return (rule, value, callback) => {
    if (value === undefined || value === null) {
      return callback(new Error(errorMsg))
    }
    if (Array.isArray(value) && !value.length) {
      return callback(new Error(errorMsg))
    }
    if (typeof value === 'string' && !value) {
      return callback(new Error(errorMsg))
    }
    if (typeof value === 'object' && JSON.stringify(value) === '{}') {
      return callback(new Error(errorMsg))
    }
    return callback()
  }
}

export default WidgetRequiredValidator
