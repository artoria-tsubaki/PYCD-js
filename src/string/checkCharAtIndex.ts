/**
 * @description 检验指定索引处是不是某个字符
 * @param str 目标字符串
 * @param index 需要检验的指定索引
 * @param value 需要检验的指定字符
 * @returns 指定索引处是否是某个字符
 */
const checkCharAtIndex = (str: string, index: number, value: string): boolean => {
  return str.charAt(index) === value
}

export default checkCharAtIndex