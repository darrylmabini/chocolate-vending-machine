/** Hook to concatinate css module classes */
const useCss = () => {
  return (...classes) => {
    return classes.join(' ');
  };
};

export default useCss;
