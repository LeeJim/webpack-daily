const path = require('path');

module.exports = {
    mode: 'development',
    entry: './index.js',
    devtool: 'inline-source-map',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env', {
                            useBuiltIns: 'usage'
                        }]]
                    }
                }
            }
        ]
    }

};