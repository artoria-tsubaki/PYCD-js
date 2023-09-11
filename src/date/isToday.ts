/**
 * @description 判断指定日期是不是今天
 * @param date 指定日期 可传参数同 new Date() ，并且支持 `yyyy-mm-dd`格式
 * @returns 返回布尔值(true/false)
 */
const isToday = (date: string | number) => {
  // 当前日期
  const curDate: {[key:string]: any} = new Date()
  // 传入的时间
  const tarDate: {[key:string]: any} = new Date(date)
  return ['getFullYear', 'getMonth', 'getDate'].every((fn: string) => curDate[fn]() === tarDate[fn]())
}

export default isToday