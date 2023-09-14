/**
 * @description 模拟延迟
 * @param timeout 延迟时间
 * @returns Promise
 */
const imitateDelay = (timeout: number): Promise<null> => {
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      clearTimeout(timer)
      resolve(null)
    }, timeout);
  })
}

export default imitateDelay