const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CURRENT_WORKING_DIR = process.cwd();

module.exports = {
  mode: 'production',
  output: {
    path: path.join(CURRENT_WORKING_DIR, '/dist'),
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('cssnano'), require('autoprefixer')]
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parallel: true,
          warnings: false,
          compress: true,
          mangle: true,
          module: false,
          output: null,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_fnames: false,
          safari10: false
        }
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css'
    })
  ]
};
