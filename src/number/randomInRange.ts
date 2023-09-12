/**
 * @description 生成范围内的随机数
 * @param min 生成随机数的最小范围
 * @param max 生成随机数的最大范围
 * @returns 范围内随机数
 */
const randomInRange = (min: number, max: number): number => {
  return Math.random() * (max - min) + min
}

export default randomInRange