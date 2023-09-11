/**
 * @description 获取数组中指定个数的最小元素
 * @param arr 需要获取最小元素的数组
 * @param num 需要获取最小元素的数量
 * @return 指定数量的最小元素组成的数组
 */
const minArray = (arr: number[], num: number): number[] => {
  return arr.sort((a, b) => a - b).slice(0, num)
}

export default minArray