var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    './client/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'), // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
      __DEV__: false,
      WEBPACK: true
    }),
  ],
  module: {
    loaders: [
      {test: /\.js$|.jsx$/, loader: 'babel', exclude: /node_modules/, include: __dirname, query: { presets: [ 'react-hmre' ]}},
      {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file'},
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
      {test: /\.(jpe?g|png|gif|ico)$/i, loader: 'file?name=[name].[ext]'},
      {test: /(\.css|\.scss)$/, loaders:['style', 'css', 'postcss', 'sass']},
      {test: /\.json$/, loader: "json"},
      // Bootstrap 4
      {test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery'}
    ]
  }
}
