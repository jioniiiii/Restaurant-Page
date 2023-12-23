const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
    devtool: 'inline-source-map',
    watch: true,
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 8080,
        open: true,
    },
    optimization: {
        runtimeChunk: 'single',
    },
});