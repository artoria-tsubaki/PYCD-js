/**
 * @description 将字符串按字母顺序排列
 * @param str 目标字符串
 * @returns 按字母顺序排列后的字符串
 */
const alphabetical = (str: string): string => {
  return str.split('').sort((a, b) => a.localeCompare(b)).join('')
}

export default alphabetical