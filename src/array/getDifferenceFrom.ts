/**
 * @description 获取数组二相对于数组一不同的元素
 * @param arr1 第一个数组
 * @param arr2 第二个数组
 * @returns 数组二相对于数组一不同的元素组成的数组
 */
const getDifferenceFrom = (arr1: any[], arr2: any[]): any[] => {
  return arr2.filter(item => !arr1.includes(item))
}

export default getDifferenceFrom