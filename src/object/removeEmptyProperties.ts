/** */
interface removeEmptyPropertiesOptions {
  deep: boolean;
  removeEmpty: boolean;
  removeNull: boolean;
  removeUndefined: boolean;
}
const removeEmptyProperties = (obj: any, options?: removeEmptyPropertiesOptions): any => {
  const defaultOption = {
    deep: true,
    removeEmpty: true,
    removeNull: true,
    removeUndefined: true
  }
  const option = options ? Object.assign(defaultOption, options): defaultOption
  const { deep, removeEmpty, removeNull, removeUndefined } = option
  const newObj: { [key: string]: any } = {}
  Object.keys(obj).forEach((key) => {
    if(deep && typeof obj[key] === 'object' && obj[key] !== null) {
      newObj[key] = removeEmptyProperties(obj[key], options)
    } else if ((!removeNull || obj[key] !== null) && (!removeUndefined || obj[key] !== undefined) && (!removeEmpty || obj[key] !== '')) {
      newObj[key] = obj[key]
    }
  })
  return newObj
}

export default removeEmptyProperties