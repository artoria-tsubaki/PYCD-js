/**
 * @description 在数组中根据对象的键查找目标对象
 * @param arr 待查找的目标数组
 * @param key 需要查找的对象的 key
 * @param value 需要查找的对象的 value
 * @returns 返回符合条件的对象组成的数组
 */
const findObjectInArray = (arr: {[key: string]: any}[], key: string, value: string | number): {[key: string]: any}[] => {
  return arr.filter(item => item[key] === value)
}

// const fruits = [
//   { name: 'Bananas', quantity: 5 },
//   { name: 'Apples', quantity: 10 },
//   { name: 'Grapes', quantity: 2 },
//   { name: 'Apples', quantity: 4 },
// ];
// const result = findObjectInArray(fruits, 'name', 'Apples');
// console.log(result);

export default findObjectInArray