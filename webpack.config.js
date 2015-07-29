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
    entry: {
        app: ['webpack/hot/dev-server', './app'],
        shop: './shop',
        product: './product',
        vendor: ['cyclejs']
    },
    output: {
        // path to where webpack will build your stuff
        path: path.join(__dirname, "dist"),
        // Template based on keys in entry above
        filename: '[name].bundle.js',
        chunkFilename: "[id].bundle.js",
        // path that will be considered when requiring your files
        publicPath: "/assets/",
        // define plugins for webpack mode and chunking
        plugins: [definePlugin, commonsPlugin]
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.scss$/,
            loader: "style!css!sass?sourceMap&outputStyle=expanded&" +
                "includePaths[]=" +
                (path.resolve(__dirname, "./bower_components")) + "&" +
                "includePaths[]=" +
                (path.resolve(__dirname, "./node_modules"))
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&minetype=application/font-woff"
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        }, {
            // inline base64 URLs for <=8k images, direct URLs for the rest
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }, {
            test: /\.js[x]?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel'
        }]
    },
    resolve: {
        node: {
            fs: "empty"
        },
        // root: [
        //     path.resolve('public/js'),
        //     path.resolve('public/components')
        // ],
        alias: {
            // you can create aliases to certain paths and than just require tho alias
            underscore: 'lodash/dist/lodash.compat.js',
            material: 'material-design-lite/src/material-design-lite.scss'
        },
        // you can now require('file') instead of require('file.js')
        extensions: ['', '.js', '.json', '.jsx', '.scss']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin( /* chunkName= */ "vendor", /* filename= */ "vendor.bundle.js"),
        new webpack.ProvidePlugin({
            _: 'underscore'
        })
    ],
    debug: true,
    devtool: "#inline-source-map"
};

module.exports = config;
