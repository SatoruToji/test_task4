const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const SOURCE = path.resolve(__dirname, 'source');

module.exports = (env) => ({
  mode: env.mode ?? 'development',
  entry: path.join(SOURCE, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: () =>
        ejs.render(
          fs.readFileSync(path.join(SOURCE, 'index.ejs'), 'utf-8'),
          { year: new Date().getFullYear() },
          { views: [SOURCE] }
        ),
      inject: 'body',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[name].[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          env.mode === 'development'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devtool: env.mode === 'development' ? 'inline-source-map' : false,
  devServer: {
    watchFiles: [`${SOURCE}/**/*.ejs`],
    port: 2025,
    host: '0.0.0.0',
    allowedHosts: 'all',
    open: true,
    hot: true,
  },
});
