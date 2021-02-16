const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'imagify',
            template: __dirname + '/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ],
    module: {
        rules: [{
            loader : 'babel-loader',
            test : /\.js$/,
            exclude : /node_modules/,
            options: {
                 presets: ['@babel/preset-env','@babel/preset-react'],
                 plugins: [
                    '@babel/plugin-proposal-object-rest-spread',
                    'babel-plugin-transform-class-properties',
                    '@babel/plugin-transform-async-to-generator',
                    '@babel/transform-runtime'
                ]
            }},
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                'file-loader',
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                'file-loader',
                ],
            }
        ]
    }
}

console.log(__dirname)