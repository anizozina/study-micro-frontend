// host/webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { ModuleFederationPlugin } = require('webpack').container;
const { dependencies } = require('./package.json');
require('dotenv').config({ path: './.env' });

module.exports = () => {
    const isProduction = process.env.NODE_ENV || 'development';

    return {
        entry: './src/index.ts',
        mode: isProduction,
        devServer: {
            port: 3100,
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx|tsx|ts)$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': JSON.stringify(process.env),
            }),
            new ModuleFederationPlugin({
                name: 'Host',
                remotes: {
                  ProductAlpha:
                        isProduction === 'production'
                            ? process.env.REMOTE_1
                            : 'ProductAlpha@http://localhost:4000/moduleEntry.js',
                  ProductBeta:
                        isProduction === 'production'
                            ? process.env.REMOTE_2
                            : 'ProductBeta@http://localhost:4001/moduleEntry.js',
                },
                shared: {
                    ...dependencies,
                    react: {
                        singleton: true,
                        requiredVersion: dependencies['react'],
                    },
                    'react-dom': {
                        singleton: true,
                        requiredVersion: dependencies['react-dom'],
                    },
                },
            }),
            new HtmlWebpackPlugin({
                template: './public/index.html',
            }),
        ],
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
        target: 'web',
    };
};