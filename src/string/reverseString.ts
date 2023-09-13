/**
 * @description 反转字符串
 * @param str 目标字符串
 * @returns 反转后的字符串
 */
const reverseString = (str: string): string => {
  return str.split('').reverse().join('')
}

export default reverseString