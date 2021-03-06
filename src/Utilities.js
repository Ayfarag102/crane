/**
 *
 * @param value
 * @returns {*}
 */
export function head (value) {
  if (Array.isArray(value) && value.length) {
    return value[0]
  }

  throw new Error('The value should be an array')
}

/**
 *
 * @param value
 * @returns {*}
 */
export function last (value) {
  if (Array.isArray(value) && value.length) {
    const lastKey = value.length - 1
    return value[lastKey]
  }

  throw new Error('The value should be an array')
}

/**
 *
 * @param obj
 * @param exceptions
 * @returns {*}
 */
export function except (obj, exceptions = []) {
  exceptions.forEach(exception => {
    if (Object.prototype.hasOwnProperty.call(obj, exception)) {
      delete obj[exception]
    }
  })

  return obj
}

/**
 *
 * @param obj
 * @param inclusions
 */
export function only (obj, inclusions = []) {
  const result = {}
  inclusions.forEach(inclusion => {
    if (Object.prototype.hasOwnProperty.call(obj, inclusion)) {
      result[inclusion] = obj[inclusion]
    }
  })

  return result
}

/**
 *
 * @param search
 * @param replace
 * @param subject
 * @returns {*|void|string}
 */
export function replaceFirst (search, replace, subject) {
  if (search === '') {
    return subject
  }
  const position = subject.indexOf(search)
  if (position !== false) {
    return subject.replace(search, replace)
  }
  return subject
}

/**
 *
 * @param obj
 * @returns {string}
 */
export function objectKey (obj) {
  return Object.keys(obj)[0]
}

/**
 *
 * @param obj
 * @returns {unknown}
 */
export function objectVal (obj) {
  return Object.values(obj)[0]
}

/**
 *
 * @param str
 * @returns {string}
 */
export function upperCaseFirstLetter (str) {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`
}

/**
 *
 * @param obj
 * @returns {*[]}
 */
export function objectToArray (obj) {
  return Object.keys(obj).map(key => {
    return [key, obj[key]]
  }).flat()
}

/**
 *
 * @param arr
 * @returns {*}
 */
export function flattenArrayOfObjects (arr) {
  return arr.reduce((acc, value) => {
    return [...acc, ...Object.values(value)]
  }, [])
}

/**
 *
 * @param unordered
 * @returns {*}
 */
export function ksort (unordered) {
  const ordered = {}
  Object.keys(unordered).sort().forEach(key => {
    ordered[key] = unordered[key]
  })

  return unordered
}
