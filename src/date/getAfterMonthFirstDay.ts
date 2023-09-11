/**
 * @description 获取后第n个月的第一天
 * @param num 要获取的后第n个月
 * @returns 返回后第n个月的第一天，格式为 'YYYY-MM-DD'
 */
const getBeforeMonthFirstDay = (num: number): string => {
  // 当前日期
  const curDate = new Date()
  // 当前月份
  const curMonth = curDate.getMonth() + 1
  // 当前年份
  const curYear = curDate.getFullYear()
  // 抛开年数要向后的月数
  const diffMonth = num % 12
  // 当 diffMonth 加上 curMonth 大于12时，加上的年份加一
  let resYear, resMonth
  if(diffMonth + curMonth > 12) {
    resYear = curYear + (Math.floor(num / 12)) + 1
    resMonth = diffMonth + curMonth - 12
  } else {
    resYear = curYear + (Math.floor(num / 12))
    resMonth = curMonth + diffMonth
  }
  return `${resYear}-${resMonth.toString().padStart(2, '0')}-01`
}

export default getBeforeMonthFirstDay