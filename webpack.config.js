const path = require('path')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const entry = './src/'
const output = 'dist'
const prod = process.env.NODE_ENV !== 'development'

const extractSass = new ExtractTextPlugin({
  filename: `css/[name].[contenthash].css`,
  disable: !prod
})

const config = {
  devtool: prod ? false : 'cheap-eval-source-map',
  entry: ['@babel/polyfill', `${entry}index.js`],
  output: {
    path: path.join(__dirname, output),
    publicPath: '/',
    filename: `js/bundle.js`
  },
  resolve: {
    modules: ['.', 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss|.css$/,
        use: extractSass.extract({
          use: [{
            loader: 'css-loader',
            options: { minimize: prod }
          }, {
            loader: 'sass-loader'
          }
          ],
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': prod ? JSON.stringify('production') : JSON.stringify('development')
      }
    }),
    extractSass,
    new CopyWebpackPlugin([{ from: 'src/dist/*.css', to: 'css' }]),
    new CopyWebpackPlugin([{ from: 'src/assets', to: 'assets' }]),
    new HtmlWebpackPlugin({
      template: `${entry}index.html`,
      filename: `index.html`,
      minify: prod ? { html5: true, minifyJS: true } : false
    })
  ],
  devServer: {
    historyApiFallback: true
  }
}

if (prod) {
  config.plugins.unshift(new CleanWebpackPlugin(['dist']))
  config.plugins.push(new UglifyJsPlugin())
}

module.exports = config
