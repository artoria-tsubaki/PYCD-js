/**
 * @description 判断一个字符串是否为空
 * @param str 目标字符串
 * @returns 字符串是否为空
 */
const isStringEmpty = (str: string): boolean => {
  return str.trim().length === 0
}

export default isStringEmpty