/**
 * @description 获取数组中指定个数的最大元素
 * @param arr 需要获取最大元素的数组
 * @param num 需要获取最大元素的数量
 * @return 指定数量的最大元素组成的数组
 */
const maxArray = (arr: number[], num: number): number[] => {
  return arr.sort((a, b) => b - a).slice(0, num)
}

export default maxArray