export const useScroll = (onScroll) => {
  const addScrollListener = () => window.addEventListener('scroll', onScroll);
  const removeScrollListener = () =>
    window.removeEventListener('scroll', onScroll);

  return [addScrollListener, removeScrollListener];
};
