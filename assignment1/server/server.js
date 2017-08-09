var express = require('express')
var path = require('path')

var webpack = require('webpack')
var config = require('../webpack.dev.config')
var fs = require("fs");
// import express from 'express';
// import path from 'path';
// import open from 'open';
// import webpack from 'webpack';
// import config from '../webpack.dev.config';

//const compiler = webpack(config);
const port = 3000;
const app = express();
//
//app.use(require('webpack-dev-middleware')(compiler, {
//    noInfo: true,
//    publicPath: config.output.publicPath
//}));

app.use(express.static('./src/images'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/items', function(req, res){
    fs.readFile("./src/json/data.json",'utf-8',  (error ,data)=>{
        var r = error?error:data;
        res.send(JSON.parse(r));
    });
});


app.listen(port, function (error) {
    if(error) {
        console.log(error);
    }
});