var proxy = require('express-http-proxy');
var url = require('url');

function servicePathResolver(req) {
  var path = url.parse(req.url).path;

  return '/service' + path;
}

const expressProxyMiddleWare = (router) => {
  router.use('/service', proxy(process.env.npm_package_proxy, {
    forwardPath: servicePathResolver,

    proxyReqPathResolver: servicePathResolver
  }));
};

module.exports = expressProxyMiddleWare;
