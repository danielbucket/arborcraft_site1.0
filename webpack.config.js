const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const dotenv = require('dotenv').config({
  path: path.join(__dirname, '.env')
});

module.exports = {
	mode: 'development',
  entry: './src/index.js',

  devtool: 'inline-source-map',

  devServer: {
  	static: './dist',
  },

  plugins: [
  	new HtmlWebpackPlugin({
  		title: 'ArboCraft Tree',
  	}),
    new FaviconsWebpackPlugin({
      logo: './src/assets/logos/tree_logo.png',
  }),
    new webpack.DefinePlugin({
      "process.env": dotenv.parsed
    }),
	],

  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  module: {
  	rules: [
	  	{
	  		test: /\.css$/i,
	  		use: ['style-loader', 'css-loader'],
	  	},
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
  	]
  },

  optimization: {
    moduleIds: 'deterministic',
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
  },

};