const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

// Documentation - https://balm.js.org/docs/config/
// 中文文档 - https://balm.js.org/docs/zh/config/
module.exports = {
  server: {
    // proxyConfig: {
    //   context: '/api',
    //   options: {
    //     target: 'http://your.project.dev', // Target host
    //     changeOrigin: true // Needed for virtual hosted sites
    //   }
    // }
  },
  roots: {
    source: 'app'
  },
  styles: {
    extname: 'scss'
  },
  scripts: {
    entry: {
      lib: ['vue', 'vue-router', 'axios'],
      main: './app/scripts/main.js' // Entry js file
    },
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ],
    plugins: [new VueLoaderPlugin()],
    alias: {
      '@': path.resolve(__dirname, '..', 'app', 'scripts'),
      'balm-ui': path.resolve(
        __dirname,
        '..',
        '..',
        '..',
        'balm-ui/src/scripts/index.js'
      )
    },
    includeJsResource: [
      path.resolve(__dirname, '..', '..', '..', 'balm-ui/src/scripts')
    ]
  },
  assets: {
    root: 'assets', // Replace 'assets' to your remote project root
    mainDir: 'public',
    cache: true
  }
  // More Config
};
