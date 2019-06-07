const webpack = require('webpack')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  
  entry: [
    'webpack-hot-middleware/client',
    __dirname + "/app/main.js"
  ],
  output: {
    path: path.resolve(__dirname,'build') ,
    filename: "bundle.js",
    publicPath: '/',
    sourceMapFilename: 'bundle.map',
  },

  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader",
        },
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