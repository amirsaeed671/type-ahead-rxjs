const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const presetsConfig = require('./build-utils/presets/loadPresets');
const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env);
const webpackMerge = require('webpack-merge');

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
    return webpackMerge(
        {
            mode,
            entry: './src/index.js',
            module: {
                rules: [
                    {
                        test: /\.jpe?g$/,
                        use: {
                            loader: 'url-loader',
                            options: {
                                limit: 5000,
                            },
                        },
                    },
                ],
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: path.join(__dirname, '/public/index.html'),
                    filename: 'index.html',
                    inject: 'body',
                }),
            ],
            devServer: {
                stats: 'errors-warnings',
            },
        },
        modeConfig(mode),
        presetsConfig({ mode, presets })
    );
};
