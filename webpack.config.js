const path = require('path')
const webpack = require('webpack')
 
module.exports = {
  entry: path.resolve(__dirname, 'src', 'main', 'lambda', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'out.js'
  },
  target: 'node',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /(src\/main\/lambda)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      }
    ]
  }
}