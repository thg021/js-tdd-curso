const webpack = require('webpack')

module.exports = {
  entry: {
    filename: './src/app.js'
  },
  output: {
    filename: './build.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets:
          ["@babel/preset-env"]

        }
      }
    ]
  }
}
