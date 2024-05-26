const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/scripts/index.ts',
	mode: 'development',
	target: 'node',
	devtool: false,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'Injection.js'
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ]
  }
};

module.exports = config;
