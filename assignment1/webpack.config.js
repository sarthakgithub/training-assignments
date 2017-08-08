const path = require('path');
const webpack = require('webpack');

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
		historyApiFallback: true

	},
	resolve : {
		extensions : ['.js','.jsx','.json']
	},
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