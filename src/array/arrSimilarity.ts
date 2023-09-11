/**
 * @description 获取两个数组之间相同的元素
 * @param arr1 第一个数组
 * @param arr2 第二个数组
 * @returns 两个数组之间相同的元素组成的数组
 */
const arrSimilarity = (arr1: any[], arr2: any[]): any[] => {
  return arr1.filter(item => arr2.includes(item))
}

export default arrSimilarity