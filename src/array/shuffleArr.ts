/**
 * @description 随机化数组元素的顺序
 * @param arr 需要打乱顺序的数组
 * @returns 打乱顺序后的数组
 */
const shuffleArr = (arr: any[]): any[] => {
  return arr.sort(() => Math.random() - 0.5)
}

export default shuffleArr