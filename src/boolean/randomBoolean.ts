/**
 * @description  获得一个随机的布尔值（true/false）
 * @param probability 随机的概率
 * @returns 一个随机的布尔值
 */
const randomBoolean = (probability: number) => {
  return Math.random() >= probability
}

export default randomBoolean