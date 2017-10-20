const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { getIfUtils, removeEmpty } = require('webpack-config-utils');

module.exports = env => {
    const { ifProd } = getIfUtils(env);
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
            reasons: true,
            chunks: true
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    enforce: 'pre',
                    loader: 'tslint-loader'
                },
                {
                    test: /\.css$/,
                    include: [/src/, /flexboxgrid/, /bootstrap/],
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
                },
                { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff' },
                { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff' },
                { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=application/octet-stream' },
                { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: 'file-loader' },
                { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=image/svg+xml' },
                { test: /\.(png|jpg|jpeg|gif)$/, use: 'file-loader' }
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
