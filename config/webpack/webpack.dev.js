const path = require('path');

const CURRENT_WORKING_DIR = process.cwd();

module.exports = {
  mode: 'development',
  entry: ['webpack-hot-middleware/client?reload=true'],
  output: {
    path: path.join(CURRENT_WORKING_DIR, '/dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')]
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    port: 5000,
    open: true,
    inline: true,
    compress: true,
    hot: true,
    disableHostCheck: true,
    historyApiFallback: true,
    stats: 'minimal',
    proxy: {
      '/api': 'http://localhost:5000'
    }
  },
  devtool: 'eval-source-map'
};
