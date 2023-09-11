/**
 * @description 计算数组中元素出现次数
 * @param arr 需要统计元素出现次数的数组
 * @param value 需要统计出现次数的元素
 * @returns 目标元素的出现次数
 */
const countFrequency = (arr: any[], value: string | number): number => {
  return arr.reduce((pre, cur) => (cur === value ? pre + 1 : pre), 0)
}

export default countFrequency