const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');

const alias = {
  Assets: path.resolve(__dirname, 'src/assets/'),
  Components: path.resolve(__dirname, 'src/components/'),
  Constants: path.resolve(__dirname, 'src/constants'),
  Contexts: path.resolve(__dirname, 'src/contexts/'),
  Layouts: path.resolve(__dirname, 'src/layouts/'),
  Fixtures: path.resolve(__dirname, '__fixtures__'),
  Hocs: path.resolve(__dirname, 'src/hocs'),
  Pages: path.resolve(__dirname, 'src/pages/'),
  Services: path.resolve(__dirname, 'src/services'),
  Stylesheets: path.resolve(__dirname, 'src/stylesheets'),
  Utils: path.resolve(__dirname, 'src/utils/'),
};

const devServer = {
  historyApiFallback: true,
  port: 3000,
};

const output = {
  publicPath: '/',
  chunkFilename: '[name].[chunkhash].bundle.js',
};

const rules = [
  {
    test: /\.svg$/,
    use: [
      { loader: 'babel-loader' },
      {
        loader: 'react-svg-loader',
        options: { jsx: true },
      },
    ],
  },
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: { loader: 'babel-loader' },
  },
  {
    test: /\.css$/,
    use: [
      { loader: 'style-loader' },
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: '[name]_[local]_[hash:base64]',
          sourceMap: true,
          minimize: true,
        },
      },
    ],
  },
];

const optimization = {
  runtimeChunk: 'single',
  splitChunks: {
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        chunks: 'all',
      },
    },
  },
};

const plugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: './index.html',
  }),
  new Dotenv(),
];

module.exports = {
  devServer,
  module: { rules },
  output,
  optimization,
  plugins,
  resolve: { alias },
};
