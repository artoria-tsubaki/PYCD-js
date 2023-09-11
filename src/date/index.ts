// 判断指定日期是不是今天
import isToday from './isToday';

// 判断指定日期是不是n天前
import isDayBefore from './isDayBefore';

// 判断指定日期是不是n天后
import isDayAfter from './isDayAfter';

// 判断是否达到指定时间
import isScheduled from './isScheduled';

// 获取指定日期是所在年份的第几天
import dayOfYear from './dayOfYear';

// 获取两个日期之间以天为单位的差值
import getDayDiff from './getDayDiff';

// 获取前第n个月的第一天
import getBeforeMonthFirstDay from './getBeforeMonthFirstDay';

// 获取前后n个月的第一天
import getAfterMonthFirstDay from './getAfterMonthFirstDay';

// 获取前第n个月的最后一天
import getBeforeMonthLastDay from './getBeforeMonthLastDay';

// 获取后第n个月的最后一天
import getAfterMonthLastDay from './getAfterMonthLastDay';

export { 
  isToday, 
  isDayBefore, 
  isDayAfter, 
  isScheduled, 
  dayOfYear, 
  getDayDiff,
  getBeforeMonthFirstDay,
  getAfterMonthFirstDay,
  getBeforeMonthLastDay,
  getAfterMonthLastDay 
};
