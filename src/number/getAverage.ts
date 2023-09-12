/**
 * @description 获取参数的平均值
 * @param args 目标数字,不限制参数数量
 * @returns 所有参数的平均数
 */
const getAverage = (...args: number[]): number => {
  return args.reduce((pre, cur) => pre+cur, 0) / args.length
}

export default getAverage