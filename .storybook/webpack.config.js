const path = require('path');
/*
module.exports = {
  module: {
    loaders: [
      {
        test: /.scss$/,
        loader: 'style!css?modules!sass?modules',
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.css?$/,
        loader: 'style!css?modules',
        include: path.resolve(__dirname, '../')
      },
      {
        test: /.(svg|png|eot|woff2|woff|tff)$/,
        loaders: ['url'],
        include: path.resolve(__dirname, '../')
      }
    ]
  }
}
*/

// load the default config generator.
var genDefaultConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js');

module.exports = function(config, env) {
  var config = genDefaultConfig(config, env);

  // Extend it as you need.
  config.module.loaders.push({
    test: /.scss$/,
    loader: 'style!css?modules!sass?modules',
    include: path.resolve(__dirname, '../')
  });

  config.module.loaders.push({
    test: /\.css$/,
    include: path.resolve(__dirname, '../src'),
    loader: 'style!css!postcss'
  });

  config.postcss = () => {
    console.info('hello world');

    return [
      require('postcss-import')({
        root: path.join(__dirname, '../'),
        path: [path.join(__dirname, '../src')]
      }),
      require('postcss-mixins')(),
      require('postcss-each')(),
      require('postcss-cssnext')(),
      require('postcss-reporter')({
        clearMessages: true
      })
    ];
  };

  return config;
};
