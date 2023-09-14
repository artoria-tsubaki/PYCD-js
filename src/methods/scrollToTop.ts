/**
 * @description 滚动到页面顶部
 */
const scrollToTop = (): void => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

export default scrollToTop