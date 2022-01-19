const useConfig = () => ({
  CHOCOVEND_API_URL: process.env.REACT_APP_CHOCOVEND_API_URL ?? 'http://localhost:4000',
});

export default useConfig;
