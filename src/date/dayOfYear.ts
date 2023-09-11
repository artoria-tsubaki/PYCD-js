/**
 * @description: 获取指定日期是所在年份的第几天
 * @param date 指定日期 可传参数同 new Date() ，并且支持 `yyyy-mm-dd`格式 ,不传默认获取当天
 * @return 指定日期所在年份的天数
 */
const dayOfYear = (date?: string | number) => {
  // 指定日期
  const curDate = date ? new Date(date): new Date();
  // 获取指定日期所在年份
  const firstDate = new Date(curDate.getFullYear() + '');
  // 计算日期差值
  return Math.floor((+curDate - +firstDate) / 1000 / 60 / 60 / 24)
}

export default dayOfYear