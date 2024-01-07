const path = require('path');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css',
        }),
    ],
});