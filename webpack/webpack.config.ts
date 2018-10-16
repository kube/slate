import { join } from 'path'
import { Configuration } from 'webpack'
import HtmlPlugin = require('html-webpack-plugin')
import TypeCheckPlugin = require('fork-ts-checker-webpack-plugin')

const PROJECT_ROOT = join(__dirname, '..')
const SOURCE_ROOT = join(PROJECT_ROOT, 'src')
const DIST_FOLDER = join(PROJECT_ROOT, 'dist')

const config: Configuration = {
  context: SOURCE_ROOT,
  entry: join(SOURCE_ROOT, 'index.tsx'),
  output: {
    path: DIST_FOLDER,
    filename: 'hello.js'
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.ttf$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.ttf']
  },
  plugins: [
    new TypeCheckPlugin(),
    new HtmlPlugin({
      template: join(SOURCE_ROOT, 'index.html')
    })
  ]
}

export default config
