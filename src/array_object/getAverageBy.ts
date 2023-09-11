/**
 * @description 计算对象数组指定属性值的平均值
 * @param arr 需要计算指定属性值平均值的对象数组
 * @param key 需要计算平均值的 key
 * @returns 对象数组指定属性值计算后的的平均值
 */
const getAverageBy = (arr: {[key: string]: any}[], key: string): number => {
  return arr.reduce((pre, cur) => pre + cur[key], 0) / arr.length
}

export default getAverageBy