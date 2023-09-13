/**
 * @description 检验一个字符串是否是回文
 * @param str 目标字符串
 * @returns 目标字符串是否是回文
 */
const isPalindrome = (str: string): boolean => {
  return str === str.split('').reverse().join('')
}

export default isPalindrome