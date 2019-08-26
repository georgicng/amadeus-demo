const PROXY_CONFIG = {
  "/api/shopping/flight-offers": {
    target: "https://test.api.amadeus.com/v1/shopping/flight-offers",
    secure: true,
    changeOrigin: true,
  }
};

module.exports = PROXY_CONFIG;
