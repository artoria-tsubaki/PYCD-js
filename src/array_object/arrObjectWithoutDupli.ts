/**
 * @description 数组对象去重
 * @param arr 要去重的数组对象
 * @param key 根据对象的key去重
 * @returns 去重后的数组
 */
const arrObjectWithoutDupli = (arr: {[key: string]: any}[], key: string): {[key: string]: any}[] => {
  return arr.reduce((pre: {[key: string]: any}[], cur: {[key: string]: any}) => pre.find((item: {[key: string]: any}) => item[key] === cur[key]) ? pre : [...pre, cur], [])
}

// const fruits = [
//   { name: 'Grapes', quantity: 2 },
//   { name: 'Bananas', quantity: 5 },
//   { name: 'Apples', quantity: 10 },
//   { name: 'Grapes', quantity: 4 },
//   { name: 'Grapes', quantity: 6 },
// ];
// const result = arrObjectWithoutDupli(fruits, 'name');
// console.log(result);

export default arrObjectWithoutDupli