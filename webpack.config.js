const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name]-bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  },
  // plugins: [
  //   new htmlWebpackPlugin({
  //     filename: 'index.html',
  //     template: 'index.html',
  //     inject: 'body', 
  //     title: 'This is my plugin title.',
  //   })
  // ]
}