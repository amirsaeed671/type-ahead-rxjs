const webpack = require('webpack');
const PrettierPlugin = require('prettier-webpack-plugin');

module.exports = () => ({
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                enforce: 'pre',
                loader: 'eslint-loader',
                options: {
                    emitError: true,
                    emitWarning: true,
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                },
            },
        ],
    },
    plugins: [
        new PrettierPlugin({
            tabWidth: 4,
            singleQuote: true,
            endOfLine: 'lf',
        }),
    ],
});
