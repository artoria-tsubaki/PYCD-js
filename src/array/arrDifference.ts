/**
 * @description 获取两个数组之间不同的元素
 * @param arr1 第一个数组
 * @param arr2 第二个数组
 * @returns 两个数组之间不同的元素组成的数组
 */
const arrDifference = (arr1: any[], arr2: any[]): any[] => {
  return arr1.concat(arr2).filter((v, i, arr) => arr.indexOf(v) === arr.lastIndexOf(v))
}

export default arrDifference