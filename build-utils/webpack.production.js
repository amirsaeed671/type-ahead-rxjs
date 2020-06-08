const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => ({
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'docs'),
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
