/**
 * @description 将字符串中每个单词的首字母转为大写
 * @param str 目标字符串
 * @returns 每个单词首字母为大写的字符串
 */
const capitalizeWord = (str: string): string => {
  return str.replace(/\b[a-z]/g, (letter) => letter.toUpperCase())
}

export default capitalizeWord