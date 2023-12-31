const { defineConfig } = require('@vue/cli-service')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/DECODE_Cloud_UserFrontend/'
    : '/',
  transpileDependencies: true
}
