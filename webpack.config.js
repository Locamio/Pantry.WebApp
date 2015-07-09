'use strict';

var webpack = require('webpack');
var path = require("path");

// definePlugin takes raw strings and inserts them, so you can put strings of JS if you want.
var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});

var commonsPlugin =
  new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
  entry: {
    app: './src/entry.js',
    shop: './src/shop.js',
    product: './src/product.js',
    vendor: []
  },
  output: {
    path: path.join(__dirname, "js"), //path to where webpack will build your stuff
    filename: '[name].js', // Template based on keys in entry above
    publicPath: "/assets/", //path that will be considered when requiring your files
    plugins: [definePlugin]
  },
  module: {
    loaders: [{
        test: /\.css$/,
        loader: "style!css"
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      } // inline base64 URLs for <=8k images, direct URLs for the rest
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.js')
    extensions: ['', '.js', '.json']
  }
};


