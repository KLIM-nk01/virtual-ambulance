const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: 'development',
    entry: ["@babel/polyfill", './index.jsx'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[hash].js"
    },
    plugins: [
        new HTMLWebpackPlugin({template: "./index.html"}),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(css|less|scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {}
                    },
                    'css-loader',
                    'sass-loader']
            },
            {
                test: /\.(jpg|jpeg|png|svg|gif)/,
                use: ['file-loader']
            },
            {
                test: /.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.m?ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-typescript"]
                    }
                }
            },
            {
                test: /\.m?jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env',"@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader' },
                    { loader: 'ts-loader' },
                ],
            },
        ]
    }
}