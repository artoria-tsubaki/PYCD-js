/**
 * @description 统计对象数组中指定属性值重复的位置
 * @param arr 需要统计重复元素位置的数组
 * @param key 需要统计重复元素位置的属性
 * @returns 指定的属性值及其重复的位置的对象
 */

const countObjDuplicatePositions = (arr: {[key: string]: any}[], key: string): {[key: string]: number[]} => {
  return arr.reduce((pre, cur, index, array) => {
    if(pre[cur[key]]) {
      pre[cur[key]].push(index)
    } else {
      pre[cur[key]] = [index]
    }
    return pre
  }, {}) 
}

// const fruits = [
//   { name: 'Grapes', quantity: 2 },
//   { name: 'Bananas', quantity: 5 },
//   { name: 'Apples', quantity: 10 },
//   { name: 'Grapes', quantity: 4 },
//   { name: 'Grapes', quantity: 6 },
//   { name: 'Bananas', quantity: 5 },
// ];

// const duplicatePositions = countObjDuplicatePositions(fruits, 'name');
// console.log(duplicatePositions);

export default countObjDuplicatePositions