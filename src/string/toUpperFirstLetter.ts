/**
 * @description 将字符串的首字母转换成大写字母
 * @param str 目标字符串
 * @returns 首字母转换成大写字母的字符串
 */
const toUpperFirstLetter = (str: string): string => {
  return str.replace(/^[a-z]/, (letter) => letter.toUpperCase())
}

export default toUpperFirstLetter