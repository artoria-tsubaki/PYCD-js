/**
 * @description 获取前第n个月的最后一天
 * @param num 要获取的前第n个月
 * @returns 返回前第n个月的最后一天，格式为 'YYYY-MM-DD'
 */
const getBeforeMonthLastDay = (num: number = 0): string => {
  // 当前日期
  const curDate = new Date()
  // 当前月份
  const curMonth = curDate.getMonth() + 1
  // 当前年份
  const curYear = curDate.getFullYear()
  // 抛开年数要向前的月数
  const diffMonth = num % 12
  // 当 diffMonth 大于 curMonth时，减去的年份加一
  let resYear, resMonth
  if(diffMonth >= curMonth) {
    resYear = curYear - (Math.floor(num / 12)) - 1
    resMonth = 12 - (diffMonth - curMonth)
  } else {
    resYear = curYear - (Math.floor(num / 12))
    resMonth = curMonth - diffMonth
  }

  // 日期为0时，会取 resMonth 所在月第一天的前一天 new Date(2023, 8, 0) => 2023-8-31
  const resDate = new Date(resYear, resMonth, 0) as {[key: string]: any}
  return ['getFullYear', 'getMonth', 'getDate'].map((fn, index) => {
    return index === 0 ? resDate[fn]() : index === 1 ? (resDate[fn]() + 1).toString().padStart(2, '0') : resDate[fn]().toString().padStart(2, '0')
  }).join('-')
}

export default getBeforeMonthLastDay