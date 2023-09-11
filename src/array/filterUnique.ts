/**
 * @description 过滤数组中的唯一值
 * @param arr 需要过滤的数组
 * @return 过滤后的数组
 */
const filterUnique = (arr: any[]): any[] => {
  return arr.filter((item) => arr.indexOf(item) !== arr.lastIndexOf(item))
}

export default filterUnique