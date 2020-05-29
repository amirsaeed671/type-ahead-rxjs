const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const PrettierPlugin = require('prettier-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'docs'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                enforce: 'pre',
                loader: 'eslint-loader',
                options: {
                    emitError: true,
                    emitWarning: true,
                    cache: true,
                    fix: true,
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
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/public/index.html'),
            filename: 'index.html',
            inject: 'body',
        }),
        new PrettierPlugin({
            tabWidth: 4,
            singleQuote: true,
            endOfLine: 'lf',
        }),
    ],
    devServer: {
        stats: 'errors-warnings',
    },
};
