/**
 * @description 判断指定日期是不是n天后
 * @param date 指定日期 可传参数同 new Date() ，并且支持 `yyyy-mm-dd`格式
 * @returns 返回布尔值(true/false)
 */
const isDayAfter = (date: string | number, n: number) => {
  // 当前日期
  const curDate: {[key:string]: any} = new Date()
  // n天前
  curDate.setDate(curDate.getDate() + n)
  // 传入的时间
  const tarDate: {[key:string]: any} = new Date(date)
  return ['getFullYear', 'getMonth', 'getDate'].every((fn: string) => curDate[fn]() === tarDate[fn]())
}

export default isDayAfter