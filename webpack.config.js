const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/client/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build/',
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        // include: [
        //   path.resolve(__dirname, 'client'),
        // ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        // css, sass or scss
        test: /\.(css|s[ac]ss)$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          // MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'],
      },
    ],
  },
  devServer: {
    compress: true,
    port: 8080,
    hot: true,
    proxy: {
      '/workbook/**': {
        target: 'http://localhost:3000/',
        // secure: false,
      },
    },
  },
};

// const path = require('path');

// module.exports = {
//   entry: path.resolve(__dirname, './src/index.js'),
//   output: {
//     path: path.resolve(__dirname, 'build'),
//     publicPath: '/build/',
//     filename: 'bundle.js',
//   },
//   mode: process.env.NODE_ENV,
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         // include: [
//         //   path.resolve(__dirname, 'client'),
//         // ],
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env', '@babel/preset-react'],
//           },
//         },
//       },
//       {
//         // css, sass or scss
//         test: /\.(css|s[ac]ss)$/i,
//         exclude: /node_modules/,
//         use: [
//           'style-loader',
//           // MiniCssExtractPlugin.loader,
//           'css-loader',
//           'sass-loader'],
//       },
//     ],
//   },
//   devServer: {
//     compress: true,
//     port: 8081,
//     hot: true,
//     proxy: {
//       '/workbook/**': {
//         target: 'http://localhost:3030/',
//         // secure: false,
//       },
//     },
//   },
// };
