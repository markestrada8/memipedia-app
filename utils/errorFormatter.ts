export const formatErrors = (errorList: any) => {
  const errorContent = Object.keys(errorList).map(key => {
    return {
      key: key,
      value: errorList[key]
    }
  })

  const formattedErrors: Array<any> = errorContent.map(name => {
    return `${name.key}: ${name.value.join(', ')}`
  })

  return formattedErrors.join(', ')
}