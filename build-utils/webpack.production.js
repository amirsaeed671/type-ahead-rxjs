const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = () => ({
    output: {
        filename: 'main.js',
        path: path.resolve('docs'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
    plugins: [new MiniCssExtractPlugin()],
});
