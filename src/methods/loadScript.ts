/**
 * @description 异步加载script脚本
 * @param timeout script脚本地址
 * @returns Promise
 */
const loadScript = (url: string): Promise<null> => {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.onload = () => {
      resolve(null);
    };
    script.src = url
    document.body.appendChild(script)
  })
}

export default loadScript