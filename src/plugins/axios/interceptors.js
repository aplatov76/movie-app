function setParams(config) {
  const params = config.params || {};
  config.params = Object.assign(params, { plot: "full" });

  return config;
}

export default function (axios) {
  axios.interceptors.request.use(setParams);
}
