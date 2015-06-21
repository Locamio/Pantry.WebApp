'use strict';

module.exports = {
    devtool: 'eval-source-map',
    node: {
        fs: 'empty'
    },
    resolve: {
        extensions: ['', '.js', '.es6']
    },
    module: {
        loaders: [{
            test: /\.es6$/,
            loader: 'babel-loader'
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.tag$/,
            loader: 'tag',
            query: {
                compact: 'true'
            }
        }]
    }
};
