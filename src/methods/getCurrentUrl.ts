/**
 * @description 获取当前页面的URL
 * @returns 当前页面的URL
 */
const getCurrentUrl = (): string => {
  return window.location.href
}

export default getCurrentUrl