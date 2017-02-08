'use strict';

const path = require('path');
const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');

module.exports = {
    entry: [
        './index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: [
                        "syntax-flow"
                    ],
                    // ignore .babelrc for webpack build
                    babelrc: false
                },
            }
        ]
    },

    plugins: [
        new FlowBabelWebpackPlugin()
    ]
};
