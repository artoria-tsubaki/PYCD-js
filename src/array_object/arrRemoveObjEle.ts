/**
 * @description 根据对象数组的属性值移除数组的元素
 * @param arr 待查找的目标数组
 * @param key 需要移除的对象的 key
 * @param value 需要移除的对象的 value
 * @returns  移除元素后的数组
 */
const arrRemoveObjEle = (arr: {[key: string]: any}[], key: string, value: string | number): {[key: string]: any}[] => {
  return arr.filter(item => item[key] !== value)
}

// const fruits = [
//   { name: 'Grapes', quantity: 2 },
//   { name: 'Bananas', quantity: 5 },
//   { name: 'Apples', quantity: 10 },
//   { name: 'Grapes', quantity: 4 },
//   { name: 'Grapes', quantity: 6 },
// ];
// const result = arrRemoveObjEle(fruits, 'name', 'Apples');
// console.log(result); 


export default arrRemoveObjEle