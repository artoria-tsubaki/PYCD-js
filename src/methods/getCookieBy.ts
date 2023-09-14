/**
 * @description 获取浏览器Cookie的值
 * @param name 要获取的Cookie的属性名
 * @returns 要获取的Cookie的属性值
 */
const getCookieBy = (name: string): string | undefined => {
  return `; ${document.cookie}`.split(`; ${name}=`).pop()?.split(';').shift();
}

export default getCookieBy