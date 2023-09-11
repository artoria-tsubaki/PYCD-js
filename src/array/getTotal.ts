/**
 * @description 计算数字类型数组元素的总和
 * @param arr 需要计算总和的数组
 * @returns 所有元素的总和
 */
const getTotal = (arr: number[]):number => arr.reduce((cur, pre) => cur + pre, 0)

export default getTotal