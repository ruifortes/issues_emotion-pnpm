const HtmlWebpackPlugin = require('html-webpack-plugin')

var config = {
  target: 'web',
  entry: {
    client: './index'
  },
  output: {
    path: __dirname +  '/build',
    filename: '[name].js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
    ]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  resolve: {
    extensions: ['.js', '.mjs', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Test',
      appMountId: 'root',
      template: './template.ejs'
    })
  ]
}

module.exports = config
