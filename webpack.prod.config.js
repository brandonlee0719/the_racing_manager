const webpack = require('webpack')
const fs = require('fs')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const getDirectories = srcPath => {
  return fs.readdirSync(srcPath)
    .filter(file => fs.statSync(path.join(srcPath, file)).isDirectory())
}

const generateAliases = basePath => {
  const aliases = {}
  const dirNames = getDirectories(basePath)

  dirNames.forEach(dirName => {
    aliases[dirName] = path.resolve(__dirname, basePath + '/' + dirName)
  })

  return aliases
}

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, '/src/index.html'),
  filename: 'index.html',
  inject: 'body'
})

const cleanWebpackBuild = new CleanWebpackPlugin(['dist'], {
  root: __dirname,
  verbose: true,
  dry: false,
  exclude: ['.gitkeep']
})

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'js/app.js',
    publicPath: '/'
  },
  resolve: {
    alias: generateAliases('src')
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  module: {
    rules: [
      // Pre-loaders
      {
        test: /\.scss/,
        enforce: 'pre',
        loader: 'import-glob'
      },
      // Loaders
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?-autoprefixer&sourceMap',
            'postcss-loader',
            'sass-loader?sourceMap'
          ]
        })
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.(jpe?g|png|gif|svg|ttf|woff|eot|mp4)$/i,
        loader: 'file-loader',
        query: {
          name: 'assets/[path][name].[ext]',
          context: './src/assets'
        }
      }
    ]
  },
  plugins: [
    cleanWebpackBuild,
    new ExtractTextPlugin('css/[name].css'),
    HTMLWebpackPluginConfig,
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/vendor.js'
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.ProvidePlugin({
      'Promise': 'es6-promise',
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ],
  devtool: 'cheap-module-source-map'
}
