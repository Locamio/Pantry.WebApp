'use strict';

var _ = require('underscore');
var baseConfig = require('./webpack.base.config');

module.exports = _.extend({}, baseConfig, {
    cache: true,
    entry: {
        'app': './src/js/app.es6'
    },
    output: {
        path: 'dist/',
        filename: 'bundle.js',
        library: 'MyLib',
        libraryTarget: 'umd'
    }
});
