/**
 * @description: 根据函数名称移除函数数组的元素
 * @param arr 需要删除元素的数组
 * @param name 将要删除的函数名称
 * @return 删除元素后的数组
 */
const arrRemoveFunEle = (arr: any[], name: string): any[] => {
  return arr.filter((i) => i.name !== name)
}

export default arrRemoveFunEle