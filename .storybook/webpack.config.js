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

  config.module.loaders = config.module.loaders.filter(function(loader) {
    if (loader.test.toString() !== /\.css?$/.toString()) {
      return loader;
    }

    return loader.test.toString() !== /\.css?$/.toString();
  });

  // Extend it as you need.
  config.module.loaders.push({
    test: /.scss$/,
    loader: 'style!css?modules!sass?modules',
    include: path.resolve(__dirname, '../')
  });

  config.module.loaders.push({
    test: /\.css$/,
    include: path.resolve(path.resolve(__dirname, '../node_modules'), 'material-design-icons'),
    loader: 'style!css'
  });

  config.module.loaders.push({
    test: /\.css$/,
    exclude: path.resolve(path.resolve(__dirname, '../node_modules'), 'material-design-icons'),
    loader: 'style!css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
  });

  config.postcss = () => {
    return [
      require('postcss-import')({
        root: path.join(__dirname, '../'),
        path: [path.join(__dirname, '../src'), path.join(__dirname, '../node_modules')]
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
