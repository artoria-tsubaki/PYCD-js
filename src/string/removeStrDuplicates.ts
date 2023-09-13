/**
 * @description 字符串去重
 * @param str 目标字符串
 * @returns 去重后的字符串
 */
const removeStrDuplicates = (str: string): string => {
  return [... new Set(str)].join('')
}

export default removeStrDuplicates