var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'bootstrap-loader',
    'webpack-hot-middleware/client',
    './client/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  postcss: [autoprefixer], // <--- postcss
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'), // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
      __DEV__: true,
      WEBPACK: true
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      Tether: 'tether',
      'window.Tether': 'tether',
      Alert: 'exports?Alert!bootstrap/js/dist/alert',
      Button: 'exports?Button!bootstrap/js/dist/button',
      Carousel: 'exports?Carousel!bootstrap/js/dist/carousel',
      Collapse: 'exports?Collapse!bootstrap/js/dist/collapse',
      Dropdown: 'exports?Dropdown!bootstrap/js/dist/dropdown',
      Modal: 'exports?Modal!bootstrap/js/dist/modal',
      Popover: 'exports?Popover!bootstrap/js/dist/popover.js',
      Scrollspy: 'exports?Scrollspy!bootstrap/js/dist/scrollspy',
      Tab: 'exports?Tab!bootstrap/js/dist/tab',
      Tooltip: 'exports?Tooltip!bootstrap/js/dist/tooltip.js'
    }),
    new ExtractTextPlugin('public/css/style.css', {
      allChunks: true
    })
  ],
  module: {
    loaders: [
      {test: /\.js$|.jsx$/, loader: 'babel', exclude: /node_modules/, include: __dirname, query: { presets: [ 'react-hmre' ]}},
      {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file'},
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
      {test: /\.(jpe?g|png|gif|ico)$/i, loader: 'file?name=[name].[ext]'},
      // {test: /(\.css|\.scss)$/, loaders:['style', 'css', 'postcss', 'sass']},
      // {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.css$/, loaders: ['style', 'css']},
      {test: /\.scss$/, loaders: ['style', 'css', 'sass']},
      {test: /\.json$/, loader: 'json'},
      // Bootstrap 4
      {test: /bootstrap\/dist\/js\//, loader: 'imports?jQuery=jquery'}
    ]
  }
}
