/**
 * @description 将字符串的首字母转换成小写字母
 * @param str 目标字符串
 * @returns 首字母转换成小写字母的字符串
 */
const toLowerFirstLetter = (str: string): string => {
  return str.replace(/^[A-Z]/, (letter) => letter.toLowerCase())
}

export default toLowerFirstLetter