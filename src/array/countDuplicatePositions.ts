/**
 * @description 统计数组中重复元素的位置
 * @param arr 被统计重复元素位置的数组
 * @returns 数组中重复元素的位置组成的数组
 */
const countDuplicatePositions = (arr: any[]): { [key: string]: number[] } => {
  return arr.reduce((pre, cur, index) => {
    pre[cur] ? pre[cur].push(index) : pre[cur] = [index]
    return pre
  }, {})
}

export default countDuplicatePositions