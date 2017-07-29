var path = require('path');
module.exports = {
    entry: './main.js',
    output : {
        path : __dirname,
        filename :'./dist/bundle.js'
    },
    module : {
        loaders : [
            {test : /\.css$/,
                use : {
                    loader : "style-loader",
                    loader : "css-loader"
                }
            }
        ]
    }
}