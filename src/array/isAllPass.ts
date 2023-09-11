const isAllPass = (arr: any[], fn: (value: any, index: number, array: any[]) => boolean): boolean => {
  return arr.every(fn)
}

export default isAllPass