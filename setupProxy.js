/* eslint-disable prettier/prettier */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3001', // Replace with the URL of your backend server
      changeOrigin: true,
    })
  );
};
