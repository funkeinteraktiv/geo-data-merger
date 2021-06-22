const Path = require('path');
const Webpack = require('webpack');
const merge = require('webpack-merge').merge;
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;

const publicPath = process.env.BASENAME || '/';

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-source-map',
  output: {
    path: Path.join(__dirname, '../build'),
    chunkFilename: 'js/[name].chunk.js'
  },
  devServer: {
    static: Path.resolve(__dirname, 'build'),
    compress: true,
    public: publicPath,
    historyApiFallback: true,
    host: '0.0.0.0'
  },
  plugins: [
    new CleanWebpackPlugin({ root: Path.resolve(__dirname, '..') }),
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: Path.resolve(__dirname, '../src'),
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        }
      },
      {
        test: /\.js$/,
        include: Path.resolve(__dirname, '../src'),
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
});
