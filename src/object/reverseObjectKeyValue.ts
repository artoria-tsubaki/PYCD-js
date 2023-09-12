/**
 * @description 翻转对象的 key ，value 值
 * @param obj 要翻转的对象
 * @returns 翻转后的对象
 */
const reverseObjectKeyValue = (obj: any): any => {
  const newObj: { [key: string]: any } = {}
  Object.entries(obj).map(([ key, value ]) => {
    newObj[value as string] = key
  })
  return newObj
}

export default reverseObjectKeyValue