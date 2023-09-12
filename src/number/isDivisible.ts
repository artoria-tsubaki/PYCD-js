/**
 * @description 判断数字是否可以整除
 * @param dividend 被除数
 * @param divisor 除数
 * @returns 是否可以整除
 */
const isDivisible = (dividend: number, divisor: number): boolean => {
  return dividend % divisor === 0
}

export default isDivisible