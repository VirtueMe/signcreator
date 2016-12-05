const path = require('path');

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
        test: /.(svg|png)$/,
        loaders: ['url'],
        include: path.resolve(__dirname, '../')
      }
    ]
  }
}
