/**
 * @description 生成范围内的随机整数
 * @param min 生成随机数的最小范围
 * @param max 生成随机数的最大范围
 * @returns 范围内随机整数
 */
const randomIntegerInRange = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default randomIntegerInRange