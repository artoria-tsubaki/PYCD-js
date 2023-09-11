/**
 * @description 根据元素值移除数组的元素
 * @param arr 需要删除元素的数组
 * @param el 要删除的元素
 * @returns 删除元素后的数组
 */
const arrRemoveEle = (arr: any[], el: string | number): any[] => {
  return arr.filter(item => item !== el)
}

export default arrRemoveEle