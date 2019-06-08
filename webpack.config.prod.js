const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// process.env.NODE_ENV = 'production';

module.exports = {
  mode: 'production',
  devtool: false, //注意修改了这里，这能大大压缩我们的打包代码
  
  entry:  __dirname + "/app/main.tsx",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/build",//打包后的文件存放的地方
    filename: "bundle.[hash].js"//打包后输出文件的文件名
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
        test: /(\.tsx|\.ts)$/,
        loaders: ["babel-loader", "ts-loader"],
        include: path.resolve('app'),
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss)$/,
        use: [{
          loader: "style-loader",
        }, 
        // {
        //   loader: MiniCssExtractPlugin.loader,
        //   options: {
        //     publicPath: './build'
        //   }
        // },
        {
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
    new webpack.optimize.OccurrenceOrderPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new CleanWebpackPlugin({
      verbose: true,
      dry: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      },
    }),
  ],

  optimization: {
    minimizer: [new UglifyJsPlugin()]
  }
}