
var webpack = require('webpack');
var path = require('path');             

var config = {
  entry: './src/main.js',
  devServer: {
      inline: true,
      contentBase: './src',
      port: 3000
  },
 solve: {
    root: [
      path.resolve(__dirname, './src')
    ],
    extensions: ['', '.js', '.json', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.min.js'                
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ }
    ]
  }
}

module.exports = config;