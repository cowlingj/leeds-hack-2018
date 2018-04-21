const path = require('path')
const webpack = require('webpack')

env = process.env.NODE_ENV == undefined ? 'production' : process.env.NODE_ENV
 
module.exports = {
  entry: path.resolve(__dirname, 'src', 'main', 'lambda', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'out.js'
  },
  target: 'node',
  mode: env,
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