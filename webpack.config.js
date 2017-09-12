const {resolve} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');
const {getIfUtils, removeEmpty} = require('webpack-config-utils');

module.exports = env => {
    const {ifProd} = getIfUtils(env);

    return {
        context: resolve('src'),
        entry: {
            app: './index.tsx',
            vendor: ['react-dom', 'react', 'emotion', 'recompose', 'lodash', 'react-router-dom']
        },
        output: {
            path: resolve('app'),
            filename: ifProd('bundle.[name].[chunkhash].js', 'bundle.[name].js'),
            publicPath: '/'
        },
        devServer: {
            historyApiFallback: true
        },
        devtool: ifProd('source-map', 'eval'),
        resolve: {
            extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
        },
        stats: {
            color: true,
            reasons: true,
            chunks: true
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    include: [/src/, /flexboxgrid/],
                    loader: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: 'css-loader'
                    })
                },
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader!ts-loader'
                },
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192
                            }
                        }
                    ]
                }
            ]
        },
        plugins: removeEmpty([
            new ProgressBarPlugin(),
            ifProd(new InlineManifestWebpackPlugin()),
            ifProd(
                new webpack.optimize.CommonsChunkPlugin({
                    names: ['vendor', 'manifest']
                })
            ),
            new HtmlWebpackPlugin({
                template: __dirname + '/src/index.html'
            }),
            new ExtractTextPlugin(ifProd('styles.[name].[chunkhash].css', 'styles.[name].css')),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: ifProd('"production"', '"development"')
                }
            })
        ])
    };
};
