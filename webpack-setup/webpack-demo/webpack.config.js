var path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports  = {
    //entry : './src/index.js',
    entry: {
        index: './src/index.js',
        another: './src/another-module.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common' // Specify the common bundle's name.
        })
    ],
    output : {
        //path : '/',
        path: path.resolve(__dirname, 'dist'),
        filename : '[name].bundle.js'
    },
    watch : true,
    devServer: {
        inline: true,
        port: 8080
    },
    module: {
        loaders : [
            {
                test : /\.js$/,
                exclude : /(node_modules)/,
                loader : 'babel-loader',
                query : {
                    presets :['es2015']
                }
            },
            {
                test:/\.less$/,
                exclude:'/(node_modules)/',
                loader:"style!css!less"
            }
        ],

        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015']
                    }
                }
            },
            {
            test: /\.less$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "less-loader"
            }]
        }]
    }
};