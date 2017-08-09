const path = require('path');
const webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	context: __dirname,
	entry: './src/js/index.js',
	devtool: 'inline-source-map',
	output: {
		path : path.resolve(__dirname,'public'),
		filename : 'bundle.js'
	},
	watch : true,
	devServer : {
		inline: true,
		port: 8080,
		hot: true,
		historyApiFallback: true
	},
	resolve : {
		extensions : ['.js','.jsx','.json']
	},
	plugins : [
		new CopyWebpackPlugin([{ from: path.resolve('src/assets/'), to: 'assets' }]),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	],
	module : {
		rules : [
			{
				enforce : 'pre',
				test : /\.js$/,
				loader : 'eslint-loader',
				exclude : /(node_modules)/
			},
			{
				test : /\.js$/,
				loader : 'babel-loader',
				exclude : /(node_modules)/,
				query : {
                    presets : ['es2015','react']
                }
			},
			{
				test: /\.css$/,
        		use: [ 'style-loader', 'css-loader' ]
			},
			{
	        	test: /\.(png|svg|jpg|gif)$/,
	        	use: [
	        		'file-loader'
	        	]
	       	}
		]
	}
}