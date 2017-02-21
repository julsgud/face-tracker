const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/index',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test: /\.js$/, 
			enforce: 'pre',
			use: [{loader: "eslint-loader", options: {rules: {semi: 0}}}], 
			exclude: /node_modules/
		}],
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loaders: ['babel-loader'],
			query: {
				presets: ['es2015']
			}
		}]
	},
	plugins: [
        new CopyWebpackPlugin([
            {from: './src/assets', to: './assets'},
            // {from: './src/styles.css'}
        ]),
        new HtmlWebpackPlugin({
            title: 'puzzle-test',
            template: './src/index.html',
            inject: 'body'
        })
    ]
}