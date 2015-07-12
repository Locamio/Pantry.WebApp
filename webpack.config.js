'use strict';

// define webpack for plugins
// define path for dynamic paths
var webpack = require('webpack');
var path = require("path");

// definePlugin takes raw strings and inserts them, so you can put strings of JS if you want.
var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});

var commonsPlugin =
  new webpack.optimize.CommonsChunkPlugin('common.js', ['app', 'shop']);

var config = {
  context: path.join(__dirname + "/src"),
  // Makes sure errors in console map to the correct file
  // and line number
  devtool: 'eval',
  entry: {
    app: './app',
    shop: './shop',
    product: './product',
    vendors: []
  },
  output: {
    // path to where webpack will build your stuff
    path: path.join(__dirname, "js"),
    // Template based on keys in entry above
    filename: '[name].js',
    // path that will be considered when requiring your files
    publicPath: "/assets/",
    // define plugins for webpack mode and chunking
    plugins: [definePlugin, commonsPlugin]
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      loader: "style!css!sass?sourceMap&outputStyle=expanded&"  +
          "includePaths[]=" +
            (path.resolve(__dirname, "./bower_components")) + "&" +
          "includePaths[]=" +
            (path.resolve(__dirname, "./node_modules"))
    },{
      // inline base64 URLs for <=8k images, direct URLs for the rest
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    }, {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel'
    }]
  },
  resolve: {
    // you can now require('file') instead of require('file.js')
    extensions: ['', '.js', '.json', '.jsx']
  },
  plugins: [
  ]
};

module.exports = config;