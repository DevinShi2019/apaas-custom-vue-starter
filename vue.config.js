/*
 * @Author: your name
 * @Date: 2020-05-27 09:29:16
 * @LastEditTime: 2020-05-27 11:00:29
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /x-product-workspace/packages/x-project-app/vue.config.js
 */
'use strict'
'use strict'
const path = require('path')

const resolve = (dir) => {
  return path.join(__dirname, './', dir)
}

const isProd = () => {
  return process.env.NODE_ENV === 'production'
}
module.exports = {
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  assetsDir: 'public',
  lintOnSave: isProd(),
  productionSourceMap: false,
  transpileDependencies: [
    '@x-ui/x-dcloud-ui',
    '@x-apaas/x-lib-rule-engine',
    '@x-apaas/x-dcloud-page-web',
    'x-extension'
  ],
  runtimeCompiler: true,
  // webpack-dev-server 相关配置
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: '8081',
    disableHostCheck: false,
    https: false,
    hotOnly: false,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/variable.scss";
        `
      }
    }
  },
  pwa: {
    iconPaths: {
      favicon32: './favicon.ico',
      favicon16: './favicon.ico',
      appleTouchIcon: './favicon.ico',
      maskIcon: './favicon.ico',
      msTileImage: './favicon.ico'
    }
  },
  configureWebpack: () => ({
    name: 'vue-cli3-template',
    resolve: {
      alias: {
        // vue动态值
        vue$: 'vue/dist/vue.esm.js',

        // vue快速路径
        '@': resolve('src')
      }
    },
    plugins: []
  }),
  chainWebpack: (config) => {
    // webpack-html-plugin
    // config.plugin('html').tap((options) => {
    //   options[0].title = '得帆云 MDM平台'
    //   options[0].minify = {
    //     removeComments: true,
    //     collapseWhitespace: true,
    //     removeAttributeQuotes: true,
    //     useShortDoctype: true,
    //     removeEmptyAttributes: true,
    //     removeStyleLinkTypeAttributes: true,
    //     keepClosingSlash: true,
    //     minifyJS: true,
    //     minifyCSS: true,
    //     minifyURLs: true
    //   }
    //   return options
    // })

    //
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()

    // svgRule.use("vue-svg-loader").loader("vue-svg-loader");
    // svgRule.exclude.add(/node_modules/);
    svgRule
      .test(/\.svg$/)
      .include.add(resolve('./src/assets/icon'))
      .add(resolve('./node_modules/@x-ui/x-dcloud-ui/lib/assets/icon'))
      .add(resolve('./node_modules/@x-apaas/x-dcloud-page-web/lib/assets/icon'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'svg-[name]'
      })
    config.resolve.symlinks(true)
  }
}
