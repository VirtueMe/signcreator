var proxy = require('express-http-proxy');
var url = require('url');

console.info(process.env.npm_package_proxy);

function servicePathResolver(req) {
  var path = url.parse(req.url).path;

  console.info('old, path path: ', path);

  return '/service' + path;
}

const expressProxyMiddleWare = (router) => {
  router.use('/service', proxy(process.env.npm_package_proxy, {
    forwardPath: servicePathResolver,

    proxyReqPathResolver: servicePathResolver
  }));
};

module.exports = expressProxyMiddleWare;
