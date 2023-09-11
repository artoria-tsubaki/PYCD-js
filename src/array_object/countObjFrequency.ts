/**
 * @description 计算对象数组中指定属性值的出现次数
 * @param arr 需要计算指定属性值出现次数的对象数组
 * @param key 需要统计出现次数的属性
 * @param value 需要统计出现次数的属性的值
 * @returns 指定属性值在对象数组的出现次数
 */
const countObjFrequency = (arr: {[key: string]: any}[], key: string, value: string | number): number => {
  return arr.reduce((pre, cur) => (cur[key] === value ? pre + 1 : pre), 0)
}

export default countObjFrequency