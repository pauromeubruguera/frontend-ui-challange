const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', 
    }),
    new Dotenv(),
  ],
  devServer: {
    static: './dist',
    port: 3000,
    open: true,
    historyApiFallback: true, 
  },
  mode: 'development', 
};
