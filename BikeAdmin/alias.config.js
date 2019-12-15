"use strict"

const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  context: path.resolve(__dirname, './'),
  resolve: {
    extensions: ['.js', '.json', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
      'views': resolve('src/views'),
      'components': resolve('src/components'),
      'store': resolve('src/store'),
      'assets': resolve('src/assets'),
      'api': resolve('src/api'),
      'utils': resolve('src/utils')
    }
  }
}
