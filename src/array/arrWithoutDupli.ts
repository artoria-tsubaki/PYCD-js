/**
 * @description 删除数组中的重复项
 * @param arr 目标去重的数组
 * @returns 数组去重后的结果
 */
const arrWithoutDupli = (arr: any[]): any[] => [...new Set(arr)]

export default arrWithoutDupli