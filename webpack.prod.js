const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = (env) => {

	return merge(common, {
			mode: 'production',
			devtool: 'source-map',
			plugins: [
				new MiniCssExtractPlugin({ filename: '[name].css' })
			],
			module: {
				rules: [
					{
						test: /\.css$/i,
						exclude: /node_modules/,
						use: [MiniCssExtractPlugin.loader, 'css-loader']
					}
				]
			}
		}
	)
}