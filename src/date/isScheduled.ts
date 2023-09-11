/**
 * @description 判断是否达到指定时间
 * @param date 指定日期 可传参数同 new Date() ，并且支持 `yyyy-mm-dd`格式
 * @returns 返回布尔值(true/false)
 */
const isScheduled = (date: string | number) => {
  return new Date(date) > new Date()
}

export default isScheduled