var path = require('path')
var webpack = require('webpack')
var postcssCssnext = require('postcss-cssnext')

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:5000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        loader: 'style!css?minimize&module&importLoaders=1&localIdentName=[path][name]---[local]---[hash:base64:5]!postcss'
      }
    ]
  },

  postcss: function (webpack) {
    return [
      postcssCssnext()
    ]
  }
}
