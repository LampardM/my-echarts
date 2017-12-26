const webpack = require('webpack')
const echarts = require('echarts')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  context: path.resolve(__dirname, './'),

  entry: {
    app: './src/app.js'
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },

  devServer: {
    contentBase: "./public",
    historyApiFallback: true,
    inline: true,
    hot: true,
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /^node_modules$/,
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        exclude: /^node_modules$/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      _: 'lodash'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: true,
      favicon: path.resolve(__dirname, './favicon.ico')
    })
  ]
  
}