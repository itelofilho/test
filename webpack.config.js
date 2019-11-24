const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin({  generateStatsFile: true,          analyzerMode: 'static'
  }),
    // new DuplicatePackageCheckerPlugin()
  ],
  entry: path.resolve(__dirname, 'src/Input/index.tsx'),
  // ATTENTION: read files in following order
  resolve: {
    extensions: [
      '.web.tsx',
      '.web.ts',
      '.tsx',
      '.ts',
      '.web.jsx',
      '.web.js',
      '.jsx',
      '.js',
    ],
    alias: {
      'react-native$': 'react-native-web',
    },
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    library: '',
    libraryTarget: 'commonjs'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          "presets": [
            "@babel/preset-env",
            "@babel/preset-typescript",
            "@babel/preset-react"
          ],
          "plugins": [
              "@babel/proposal-class-properties",
              "@babel/proposal-object-rest-spread"
          ]
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};