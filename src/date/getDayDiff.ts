/**
 * @description: 获取两个日期之间的差值
 * @param date1 指定日期1 可传参数同 new Date() , 支持 `yyyy-mm-dd`格式
 * @param date2 指定日期2 可传参数同 new Date() , 支持 `yyyy-mm-dd`格式
 * @param unit   day | hour | minute | second | ms  设置差值的单位
 * @return 两个日期之间的差值
 */
const getDayDiff = (date1: string | number, date2: string | number, unit: 'day' | 'hour' | 'minute' | 'second' | 'ms') => {
  const map = {
    day: 1000 * 60 * 60 * 24,
    hour: 1000 * 60 * 60,
    minute: 1000 * 60,
    second: 1000,
    ms: 1,
  };
  // 计算日期差值
  return Math.abs((+new Date(date1) - +new Date(date2)) / map[unit])
}

export default getDayDiff