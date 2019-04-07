const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/build`,
    publicPath: '/build/',
    filename: 'bundle.js',
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },

  module: {
    rules: [
      { test: /\.js$/,
        exclude: /node_modules/, 
        loader: 'babel-loader' },
      { test: /\.css$/, 
        loader: 'style-loader!css-loader' },
      { test: /\.png$/, 
        loader: "url-loader?mimetype=image/png" }

    ],

  },
};
