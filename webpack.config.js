var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/public/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/entry.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.css$/, exclude: /node_modules/,loader: "style-loader!css-loader"}
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};
