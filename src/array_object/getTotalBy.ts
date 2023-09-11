/**
 * @description 计算对象数组指定属性值的总和
 * @param arr 需要计算指定属性值总和的对象数组
 * @param key 需要计算总和的 key
 * @returns 对象数组指定属性值计算后的的总和
 */
const getTotalBy = (arr: {[key: string]: any}[], key: string): number => {
  return arr.reduce((pre, cur) => pre + cur[key], 0)
}

export default getTotalBy