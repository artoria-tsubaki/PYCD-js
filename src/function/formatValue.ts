/**
 * @description 处理值无数据情况
 * @param callValue 需要处理的值
 * @returns 处理后的值
 * */
const formatValue = (callValue: any): string => {
  // 如果当前值为数组，使用 / 拼接（根据需求自定义）
  if (callValue && Array.isArray(callValue)) return callValue.length ? callValue.join(" / ") : "--";
  return callValue ?? "--";
}

export default formatValue