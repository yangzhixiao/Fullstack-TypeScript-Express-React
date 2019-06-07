const webpack = require('webpack')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  
  entry: [
    'webpack-hot-middleware/client',
    __dirname + "/app/main.tsx"
  ],
  output: {
    path: __dirname + '/build',
    filename: "bundle.js",
    publicPath: '/',
    sourceMapFilename: 'bundle.map',
  },

  // 告诉 Webpack 加载 TypeScript 文件
  resolve: {
    // 首先寻找模块中的 .ts(x) 文件, 然后是 .js 文件
    extensions: ['.ts', '.tsx', '.js'],
    // 在模块中添加 src, 当你导入文件时，可以将 src 作为相关路径
    modules: ['app', 'node_modules'],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: ["babel-loader", "ts-loader"],
        include: path.resolve('app'),
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss)$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader",
          options: {
            modules: true, // 指定启用css modules
            localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
          }
        }, {
          loader: "sass-loader"
        }, {
          loader: "postcss-loader"
        }]
      }
    ]
  },

  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.html"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      },
    }),
  ],

}